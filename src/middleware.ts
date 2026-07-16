import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import dispositions from '@/data/legacyUrlDispositions.json'

/** Exact paths that must return HTTP 410 Gone (GSC noindex audit). */
const GONE_PATHS = new Set(
    (dispositions.gone || []).map((g: { source: string }) => g.source)
)

/** Exact path → destination for GSC legacy redirects (also covers unicode edge cases). */
const REDIRECT_MAP = new Map<string, string>(
    (dispositions.redirects || []).map((r: { source: string; destination: string }) => [
        r.source,
        r.destination,
    ])
)

/** Normalize mathematical/styled unicode letters to ASCII for mangled GSC paths. */
function normalizeLookalikePath(pathname: string): string {
    // Mathematical Alphanumeric Symbols: bold A-Z (U+1D400–U+1D419, U+1D468–U+1D481, etc.)
    return pathname.replace(/[\u{1D400}-\u{1D7FF}]/gu, (ch) => {
        const cp = ch.codePointAt(0)!
        // Bold capital A-Z: 1D400-1D419
        if (cp >= 0x1d400 && cp <= 0x1d419) return String.fromCharCode(65 + (cp - 0x1d400))
        // Bold small a-z: 1D41A-1D433
        if (cp >= 0x1d41a && cp <= 0x1d433) return String.fromCharCode(97 + (cp - 0x1d41a))
        // Bold italic capital A-Z: 1D468-1D481
        if (cp >= 0x1d468 && cp <= 0x1d481) return String.fromCharCode(65 + (cp - 0x1d468))
        // Bold italic small a-z: 1D482-1D49B
        if (cp >= 0x1d482 && cp <= 0x1d49b) return String.fromCharCode(97 + (cp - 0x1d482))
        return ch
    })
}

// ── Bot User-Agent patterns to block ──────────────────────────────────────
const BLOCKED_BOTS = [
    'AhrefsBot', 'SemrushBot', 'DotBot', 'MJ12bot', 'PetalBot',
    'Baiduspider', 'Bytespider', 'YandexBot', 'Amazonbot',
    'ClaudeBot', 'GPTBot', 'anthropic-ai', 'CCBot',
    'DataForSeoBot', 'MajesticSEO', 'BLEXBot', 'serpstatbot',
    'serpro.ai', 'SeznamBot', 'seoscanners', 'linkdexbot',
    'Screaming Frog', 'meta-externalagent', 'Timpibot',
]

// ── Rate limiting store (per-edge-worker, resets on new instance) ─────────
// For production: use Upstash Redis for distributed rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 60       // requests
const RATE_WINDOW = 60_000  // per 1 minute (ms)

function isRateLimited(ip: string): boolean {
    const now = Date.now()
    const entry = rateLimitMap.get(ip)

    if (!entry || now > entry.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
        return false
    }

    entry.count++
    if (entry.count > RATE_LIMIT) return true
    return false
}

export function middleware(request: NextRequest) {
    const ua = request.headers.get('user-agent') || ''
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
        || request.headers.get('x-real-ip')
        || 'unknown'

    // ── 0. GSC dispositions: 410 gone + exact-path 308 (incl. unicode mangled) ──
    const pathname = request.nextUrl.pathname
    let decoded = pathname
    try {
        decoded = decodeURIComponent(pathname)
    } catch {
        /* keep raw */
    }
    const normalized = normalizeLookalikePath(decoded)

    if (GONE_PATHS.has(pathname) || GONE_PATHS.has(decoded) || GONE_PATHS.has(normalized)) {
        return new NextResponse('Gone', {
            status: 410,
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, max-age=86400',
                'X-Robots-Tag': 'noindex, nofollow',
            },
        })
    }

    // Middleware-level 308 for unicode/special paths that Next redirect tables may miss
    const dest =
        REDIRECT_MAP.get(pathname) ||
        REDIRECT_MAP.get(decoded) ||
        REDIRECT_MAP.get(normalized)
    if (dest) {
        const url = request.nextUrl.clone()
        url.pathname = dest
        url.search = ''
        return NextResponse.redirect(url, 308)
    }

    // Normalized mangled brand fragments that map after lookalike fix
    // e.g. /thuong-hieu/𝑨ventus → /thuong-hieu/Aventus → product aventus
    if (normalized !== decoded && REDIRECT_MAP.has(normalized.toLowerCase())) {
        const url = request.nextUrl.clone()
        url.pathname = REDIRECT_MAP.get(normalized.toLowerCase())!
        return NextResponse.redirect(url, 308)
    }

    // ── 1. Block known bad bots immediately ──
    const isBadBot = BLOCKED_BOTS.some(bot =>
        ua.toLowerCase().includes(bot.toLowerCase())
    )

    if (isBadBot) {
        return new NextResponse('Forbidden', {
            status: 403,
            headers: {
                'Content-Type': 'text/plain',
                'Cache-Control': 'no-store',
            },
        })
    }

    // ── 2. Rate limiting per IP (skip loopback so local prod/QA matrices do not self-throttle) ──
    const isLoopback =
        ip === '127.0.0.1' ||
        ip === '::1' ||
        ip === '::ffff:127.0.0.1' ||
        ip.startsWith('127.')
    if (ip !== 'unknown' && !isLoopback && isRateLimited(ip)) {
        return new NextResponse('Too Many Requests', {
            status: 429,
            headers: {
                'Content-Type': 'text/plain',
                'Retry-After': '60',
                'Cache-Control': 'no-store',
            },
        })
    }

    // ── 3. Block empty user-agent (headless scrapers) ──
    if (!ua || ua.trim() === '') {
        return new NextResponse('Forbidden', { status: 403 })
    }

    return NextResponse.next()
}

// Chỉ apply cho page routes, không apply cho static files
export const config = {
    matcher: [
        /*
         * Match tất cả paths NGOẠI TRỪ:
         * - _next/static (static files)
         * - _next/image (image optimization)
         * - favicon.ico, sitemap.xml, robots.txt
         * - public folder files (ảnh, fonts...)
         */
        '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|otf|css|js|map)).*)',
    ],
}
