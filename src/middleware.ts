import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import dispositions from '@/data/legacyUrlDispositions.json'

/** Exact paths that must return HTTP 410 Gone (GSC noindex audit). */
const GONE_PATHS = new Set(
    (dispositions.gone || []).map((g: { source: string }) => g.source)
)

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

    // ── 0. GSC disposition: permanent 410 for deleted/ambiguous legacy URLs ──
    // Prefer real 410 over soft 200+noindex so Google drops invalid URLs.
    const pathname = request.nextUrl.pathname
    // Decode for unicode brand garbage paths; also match raw path
    let decoded = pathname
    try {
        decoded = decodeURIComponent(pathname)
    } catch {
        /* keep raw */
    }
    if (GONE_PATHS.has(pathname) || GONE_PATHS.has(decoded)) {
        return new NextResponse('Gone', {
            status: 410,
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, max-age=86400',
                'X-Robots-Tag': 'noindex, nofollow',
            },
        })
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

    // ── 2. Rate limiting per IP ──
    if (ip !== 'unknown' && isRateLimited(ip)) {
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
