import { defineField, defineType } from 'sanity'

export const productType = defineType({
    name: 'product',
    title: 'Sản phẩm (Nước hoa)',
    type: 'document',
    groups: [
        { name: 'basic', title: '📋 Thông tin cơ bản', default: true },
        { name: 'scores', title: '⭐ Điểm số & Đánh giá' },
        { name: 'notes', title: '🌸 Nốt hương & Accords' },
        { name: 'performance', title: '📊 Hiệu năng (Fragrantica)' },
        { name: 'media', title: '📸 Ảnh & Media' },
        { name: 'commerce', title: '💰 Giá & Affiliate' },
        { name: 'content', title: '📝 Nội dung & SEO' },
    ],
    fields: [
        // ═══════════════════════════════════════
        // 📋 THÔNG TIN CƠ BẢN
        // ═══════════════════════════════════════
        defineField({
            name: 'name',
            title: 'Tên nước hoa',
            type: 'string',
            group: 'basic',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subName',
            title: 'Phụ đề (VD: Eau de Parfum, Parfum...)',
            type: 'string',
            group: 'basic',
        }),
        defineField({
            name: 'slug',
            title: 'Slug (Đường dẫn)',
            type: 'slug',
            group: 'basic',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'brand',
            title: 'Thương hiệu',
            type: 'reference',
            to: [{ type: 'brand' }],
            group: 'basic',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'gender',
            title: 'Giới tính',
            type: 'string',
            group: 'basic',
            options: {
                list: [
                    { title: 'Nam', value: 'nam' },
                    { title: 'Nữ', value: 'nu' },
                    { title: 'Unisex', value: 'unisex' },
                ],
                layout: 'radio',
                direction: 'horizontal',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Mô tả ngắn (1-2 câu)',
            type: 'text',
            group: 'basic',
            rows: 2,
        }),

        // ═══════════════════════════════════════
        // 📸 ẢNH & MEDIA
        // ═══════════════════════════════════════
        defineField({
            name: 'mainImage',
            title: 'Ảnh bìa (Hãng/Render)',
            type: 'image',
            group: 'media',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'images',
            title: 'Gallery ảnh thực tế (Fragram Photos)',
            type: 'array',
            group: 'media',
            of: [{
                type: 'image',
                options: { hotspot: true },
                fields: [
                    {
                        name: 'caption',
                        type: 'string',
                        title: 'Chú thích ảnh',
                    },
                    {
                        name: 'source',
                        type: 'string',
                        title: 'Nguồn ảnh',
                        options: {
                            list: [
                                { title: '📸 Fragram Photos', value: 'fragram' },
                                { title: '👥 Community', value: 'community' },
                                { title: '🏢 Studio / Hãng', value: 'studio' },
                                { title: '🙋 Chủ shop chụp', value: 'owner' },
                            ],
                        },
                        initialValue: 'fragram',
                    }
                ]
            }],
            description: 'Upload 3-5 ảnh thực tế từ Fragram Photos. Chọn ảnh đẹp, đa dạng (chai, hộp, trên tay).',
        }),

        // ═══════════════════════════════════════
        // ⭐ ĐIỂM SỐ & ĐÁNH GIÁ (PLV SCORE)
        // ═══════════════════════════════════════
        defineField({
            name: 'scoreScents',
            title: '🌺 Mùi hương (Scent)',
            type: 'number',
            group: 'scores',
            initialValue: 8,
            validation: (Rule) => Rule.min(0).max(10).precision(1),
        }),
        defineField({
            name: 'scoreUniqueness',
            title: '💎 Sự độc đáo (Uniqueness)',
            type: 'number',
            group: 'scores',
            initialValue: 7,
            validation: (Rule) => Rule.min(0).max(10).precision(1),
        }),
        defineField({
            name: 'scoreCompliments',
            title: '💕 Nịnh mũi (Compliments)',
            type: 'number',
            group: 'scores',
            initialValue: 8,
            validation: (Rule) => Rule.min(0).max(10).precision(1),
        }),
        defineField({
            name: 'scoreValue',
            title: '💰 Đáng tiền (Value)',
            type: 'number',
            group: 'scores',
            initialValue: 8,
            validation: (Rule) => Rule.min(0).max(10).precision(1),
        }),

        // Vibes (Smart Tags)
        defineField({
            name: 'vibes',
            title: '⚡ Vibes (Cảm giác khi dùng)',
            type: 'array',
            group: 'scores',
            of: [{
                type: 'object',
                fields: [
                    { name: 'label', title: 'Tên vibe', type: 'string', validation: (Rule) => Rule.required() },
                    { name: 'icon', title: 'Emoji icon', type: 'string', validation: (Rule) => Rule.required() },
                ],
                preview: {
                    select: { title: 'label', subtitle: 'icon' },
                    prepare: ({ title, subtitle }) => ({ title: `${subtitle} ${title}` }),
                }
            }],
            description: 'VD: 👑 Quyền lực, 💼 Công sở, 🍸 Tiệc tối',
        }),
        defineField({
            name: 'tags',
            title: '🏷️ Tags phân loại',
            type: 'array',
            group: 'scores',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
            description: 'VD: Sát Thủ Hẹn Hò, Mùa Đông, Niche, Giá Tốt',
        }),

        // ═══════════════════════════════════════
        // 🌸 NỐT HƯƠNG & ACCORDS
        // ═══════════════════════════════════════
        defineField({
            name: 'topNotes',
            title: '🔺 Hương đầu (Top Notes)',
            type: 'array',
            group: 'notes',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
        }),
        defineField({
            name: 'middleNotes',
            title: '💛 Hương giữa (Middle/Heart Notes)',
            type: 'array',
            group: 'notes',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
        }),
        defineField({
            name: 'baseNotes',
            title: '🟫 Hương cuối (Base Notes)',
            type: 'array',
            group: 'notes',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
        }),
        defineField({
            name: 'accords',
            title: '🎨 Main Accords (Nhóm mùi chính)',
            type: 'array',
            group: 'notes',
            of: [{
                type: 'object',
                fields: [
                    { name: 'name', title: 'Tên accord', type: 'string', validation: (Rule) => Rule.required() },
                    { name: 'value', title: 'Độ mạnh (%)', type: 'number', validation: (Rule) => Rule.min(0).max(100) },
                    { name: 'color', title: 'Màu hiển thị (hex)', type: 'string' },
                ],
                preview: {
                    select: { title: 'name', subtitle: 'value' },
                    prepare: ({ title, subtitle }) => ({ title, subtitle: `${subtitle}%` }),
                }
            }],
            description: 'Top 3-5 nhóm mùi nổi bật nhất.',
        }),

        // ═══════════════════════════════════════
        // 📊 HIỆU NĂNG (FRAGRANTICA STYLE)
        // ═══════════════════════════════════════
        defineField({
            name: 'longevity',
            title: '⏱️ Độ lưu hương (Longevity) - Thang 1-10',
            type: 'number',
            group: 'performance',
            initialValue: 7,
            validation: (Rule) => Rule.min(1).max(10),
        }),
        defineField({
            name: 'sillage',
            title: '💨 Độ tỏa hương (Sillage) - Thang 1-10',
            type: 'number',
            group: 'performance',
            initialValue: 7,
            validation: (Rule) => Rule.min(1).max(10),
        }),
        defineField({
            name: 'seasonSpring',
            title: '🌸 Xuân (%)',
            type: 'number',
            group: 'performance',
            initialValue: 70,
            validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
            name: 'seasonSummer',
            title: '☀️ Hạ (%)',
            type: 'number',
            group: 'performance',
            initialValue: 50,
            validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
            name: 'seasonFall',
            title: '🍂 Thu (%)',
            type: 'number',
            group: 'performance',
            initialValue: 80,
            validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
            name: 'seasonWinter',
            title: '❄️ Đông (%)',
            type: 'number',
            group: 'performance',
            initialValue: 80,
            validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
            name: 'dayUse',
            title: '☀️ Ban ngày (%)',
            type: 'number',
            group: 'performance',
            initialValue: 60,
            validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
            name: 'nightUse',
            title: '🌙 Ban đêm (%)',
            type: 'number',
            group: 'performance',
            initialValue: 80,
            validation: (Rule) => Rule.min(0).max(100),
        }),

        // ═══════════════════════════════════════
        // 💰 GIÁ & AFFILIATE
        // ═══════════════════════════════════════
        defineField({
            name: 'sizes',
            title: '📐 Dung tích (Sizes)',
            type: 'array',
            group: 'commerce',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            description: 'VD: 10ml Chiết, 60ml, 100ml',
        }),
        defineField({
            name: 'basePrice',
            title: '💲 Giá tham khảo (VNĐ)',
            type: 'number',
            group: 'commerce',
            description: 'Giá chai phổ biến nhất, VD: 4200000',
        }),
        defineField({
            name: 'marketPlaceLinks',
            title: '🛒 Liên kết Sàn TMĐT',
            type: 'array',
            group: 'commerce',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', title: 'Nền tảng', type: 'string', options: { list: ['Shopee', 'Lazada', 'TikTok'] } },
                        { name: 'url', title: 'Đường dẫn', type: 'url' },
                        { name: 'price', title: 'Giá tham khảo (Text)', type: 'string' },
                        { name: 'image', title: 'Ảnh thu nhỏ (Không bắt buộc)', type: 'image' },
                    ],
                    preview: {
                        select: { title: 'platform', subtitle: 'price' },
                    }
                },
            ],
        }),

        // ═══════════════════════════════════════
        // 📝 NỘI DUNG & SEO
        // ═══════════════════════════════════════
        defineField({
            name: 'verdict',
            title: '📋 Nhận định chi tiết',
            type: 'text',
            group: 'content',
            rows: 3,
            description: 'VD: Kì quan của Francois Demachy. Quyền lực, nam tính và khả năng tỏa hương Enormous.',
        }),
        defineField({
            name: 'verdictShort',
            title: '⚡ Định danh ngắn (viết IN HOA)',
            type: 'string',
            group: 'content',
            description: 'VD: UY LỰC & NAM TÍNH, ÔNG HOÀNG CÔNG SỞ',
        }),
        defineField({
            name: 'article',
            title: '📰 Bài review chi tiết',
            type: 'blockContent',
            group: 'content',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'brand.name',
            media: 'mainImage',
        },
        prepare: ({ title, subtitle, media }) => ({
            title,
            subtitle: subtitle || 'Chưa có thương hiệu',
            media,
        }),
    },
    orderings: [
        {
            title: 'Tên A→Z',
            name: 'nameAsc',
            by: [{ field: 'name', direction: 'asc' }],
        },
        {
            title: 'Mới nhất',
            name: 'createdDesc',
            by: [{ field: '_createdAt', direction: 'desc' }],
        },
    ],
})
