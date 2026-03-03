import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/so-sanh',
        },
        sitemap: 'https://maisondeson.vn/sitemap.xml',
    }
}
