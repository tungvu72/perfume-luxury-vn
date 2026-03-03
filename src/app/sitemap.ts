import { MetadataRoute } from 'next';
import { MASTER_PERFUMES } from '@/constants/mockData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://maisondeson.com';

    // Thêm các trang tĩnh
    const staticPages = [
        '',
        '/nam-gioi',
        '/nu-gioi',
        '/unisex',
        '/bang-xep-hang',
        '/gioi-thieu',
        '/thuong-hieu',
        '/kien-thuc',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Thêm các trang sản phẩm động
    const productPages = MASTER_PERFUMES.map((product) => ({
        url: `${baseUrl}/product/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...staticPages, ...productPages];
}
