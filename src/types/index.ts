export interface FragranceNote {
    name: string;
    icon?: string;
}

export interface Accord {
    name: string;
    value: number; // 0-100 (percentage)
    color: string;
}

export interface ExpertScore {
    scent: number;
    uniqueness: number;
    compliments: number;
    value: number;
    total: number; // 0-10
}

export interface VibeTag {
    label: string;
    icon: string;
    description?: string;
}

export interface GalleryImage {
    url: string;
    caption?: string;
    source?: 'studio' | 'fragram' | 'community' | 'owner' | 'amazon';
    verified?: boolean;
}

export interface ShopeeOffer {
    label: string;
    seller: string;
    price: string;
    link: string;
    image: string;
}

export interface Perfume {
    id: string;
    brand: string;
    brandSlug?: string;
    name: string;
    subName?: string;
    perfumer?: string; // Tên tác giả / Nhà tạo hương (Perfumer)
    gender: 'nam' | 'nu' | 'unisex';
    image: string;
    images?: (string | GalleryImage)[]; // Ảnh thực tế (Gallery) — string (legacy) hoặc GalleryImage (Sanity)
    description: string;
    verdict: string;
    verdictShort: string;

    // Bài viết chi tiết
    article?: string;
    productCopy?: string; // Mô tả sản phẩm chi tiết (300-400 từ)

    // Đánh giá chuyên gia
    score: ExpertScore;
    vibes: VibeTag[];

    // Thông số Fragrantica-style
    longevity?: number; // 1-10, Độ lưu hương
    sillage?: number; // 1-10, Độ tỏa hương
    seasons?: { spring: number; summer: number; fall: number; winter: number }; // 0-100
    dayNight?: { day: number; night: number }; // 0-100

    // Nốt hương
    topNotes: FragranceNote[];
    middleNotes: FragranceNote[];
    baseNotes: FragranceNote[];
    accords: Accord[];

    // Smart Tags
    tags: string[];

    // Thực tế
    sizes: string[];
    basePrice: number;
    shopeeOffers: ShopeeOffer[];
}
