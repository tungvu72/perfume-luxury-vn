/**
 * 🚀 SCRIPT IMPORT SẢN PHẨM VÀO SANITY
 * 
 * Cách dùng:
 *   1. Tạo SANITY_WRITE_TOKEN tại https://www.sanity.io/manage
 *   2. Thêm vào .env.local: SANITY_WRITE_TOKEN="sk..."
 *   3. Chạy: node scripts/import-product.mjs
 * 
 * Script này đọc file product-data.json và tạo/cập nhật document trong Sanity.
 */

import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ═══════════════════════════════════════
// ⚙️ CẤU HÌNH
// ═══════════════════════════════════════

const PROJECT_ID = 'ww1zzidl'
const DATASET = 'production'
const API_VERSION = '2024-02-27'

// Đọc token từ .env.local
const envPath = path.join(__dirname, '..', '.env.local')
const envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf-8') : ''
const tokenMatch = envContent.match(/SANITY_WRITE_TOKEN="?([^"\n]+)"?/)
const WRITE_TOKEN = tokenMatch?.[1] || process.env.SANITY_WRITE_TOKEN

if (!WRITE_TOKEN) {
    console.error('❌ Chưa có SANITY_WRITE_TOKEN!')
    console.error('   1. Vào https://www.sanity.io/manage → Project → API → Tokens')
    console.error('   2. Tạo token mới (quyền Editor)')
    console.error('   3. Thêm vào .env.local: SANITY_WRITE_TOKEN="sk..."')
    process.exit(1)
}

const client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    token: WRITE_TOKEN,
    apiVersion: API_VERSION,
    useCdn: false,
})

// ═══════════════════════════════════════
// 📦 DỮ LIỆU SẢN PHẨM MẪU (Sauvage Elixir)
// ═══════════════════════════════════════

// Đọc từ file JSON nếu có, hoặc dùng data mẫu
const dataFilePath = path.join(__dirname, 'product-data.json')

/**
 * Tạo slug chuẩn SEO từ tên sản phẩm
 */
function createSlug(brand, name) {
    return `${brand}-${name}`
        .toLowerCase()
        .replace(/[àáảãạâầấẩẫậăằắẳẵặ]/g, 'a')
        .replace(/[èéẻẽẹêềếểễệ]/g, 'e')
        .replace(/[ìíỉĩị]/g, 'i')
        .replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, 'o')
        .replace(/[ùúủũụưừứửữự]/g, 'u')
        .replace(/[ỳýỷỹỵ]/g, 'y')
        .replace(/đ/g, 'd')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
}

/**
 * Tìm hoặc tạo Brand document
 */
async function findOrCreateBrand(brandName) {
    // Tìm brand đã tồn tại
    const existing = await client.fetch(
        `*[_type == "brand" && name == $name][0]._id`,
        { name: brandName }
    )
    if (existing) {
        console.log(`   ✅ Brand "${brandName}" đã tồn tại: ${existing}`)
        return existing
    }

    // Tạo brand mới
    const brandSlug = brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    const result = await client.create({
        _type: 'brand',
        name: brandName,
        slug: { _type: 'slug', current: brandSlug },
    })
    console.log(`   🆕 Đã tạo brand "${brandName}": ${result._id}`)
    return result._id
}

/**
 * Import 1 sản phẩm vào Sanity
 */
async function importProduct(productData) {
    const slug = productData.slug || createSlug(productData.brand, productData.name)
    console.log(`\n📦 Đang import: ${productData.brand} ${productData.name} (${slug})`)

    // Tìm/tạo brand
    const brandId = await findOrCreateBrand(productData.brand)

    // Kiểm tra sản phẩm đã tồn tại chưa
    const existingId = await client.fetch(
        `*[_type == "product" && slug.current == $slug][0]._id`,
        { slug }
    )

    const doc = {
        _type: 'product',
        name: productData.name,
        subName: productData.subName || '',
        slug: { _type: 'slug', current: slug },
        brand: { _type: 'reference', _ref: brandId },
        gender: productData.gender || 'nam',
        description: productData.description || '',

        // Điểm số PLV
        scoreScents: productData.scores?.scent || 8,
        scoreUniqueness: productData.scores?.uniqueness || 7,
        scoreCompliments: productData.scores?.compliments || 8,
        scoreValue: productData.scores?.value || 7,

        // Hiệu năng Fragrantica
        longevity: productData.longevity || 7,
        sillage: productData.sillage || 7,
        seasonSpring: productData.seasons?.spring || 70,
        seasonSummer: productData.seasons?.summer || 50,
        seasonFall: productData.seasons?.fall || 80,
        seasonWinter: productData.seasons?.winter || 80,
        dayUse: productData.dayNight?.day || 60,
        nightUse: productData.dayNight?.night || 80,

        // Nốt hương (lưu dạng string array trong Sanity)
        topNotes: productData.topNotes || [],
        middleNotes: productData.middleNotes || [],
        baseNotes: productData.baseNotes || [],

        // Accords
        accords: (productData.accords || []).map(a => ({
            _type: 'object',
            _key: a.name.toLowerCase().replace(/\s+/g, '-'),
            name: a.name,
            value: a.value,
            color: a.color || '#888',
        })),

        // Vibes
        vibes: (productData.vibes || []).map(v => ({
            _type: 'object',
            _key: v.label.toLowerCase().replace(/\s+/g, '-'),
            label: v.label,
            icon: v.icon,
        })),

        // Tags
        tags: productData.tags || [],

        // Commerce
        sizes: productData.sizes || [],
        basePrice: productData.basePrice || 0,

        // Content
        verdict: productData.verdict || '',
        verdictShort: productData.verdictShort || '',
    }

    if (existingId) {
        // Cập nhật sản phẩm đã tồn tại
        await client.patch(existingId).set(doc).commit()
        console.log(`   ♻️ Đã cập nhật: ${existingId}`)
    } else {
        // Tạo mới
        const result = await client.create(doc)
        console.log(`   ✅ Đã tạo mới: ${result._id}`)
    }

    console.log(`   🔗 Xem tại: http://localhost:3000/admin/structure/product`)
}

// ═══════════════════════════════════════
// 🚀 CHẠY IMPORT
// ═══════════════════════════════════════

async function main() {
    console.log('═══════════════════════════════════════')
    console.log('🚀 MAISON DE SON — Import Sản Phẩm')
    console.log(`   Project: ${PROJECT_ID} | Dataset: ${DATASET}`)
    console.log('═══════════════════════════════════════')

    let products = []

    if (fs.existsSync(dataFilePath)) {
        // Đọc từ file JSON
        const rawData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'))
        products = Array.isArray(rawData) ? rawData : [rawData]
        console.log(`\n📁 Đọc ${products.length} sản phẩm từ product-data.json`)
    } else {
        console.log('\n⚠️ Không tìm thấy file product-data.json')
        console.log('   Tạo file scripts/product-data.json theo mẫu sau:')
        console.log('')

        // In ra mẫu JSON
        const sample = {
            brand: "DIOR",
            name: "Sauvage Elixir",
            subName: "Parfum",
            slug: "sauvage-elixir",
            gender: "nam",
            description: "Hương thơm nam tính, mãnh liệt đỉnh cao từ nhà Dior.",
            scores: { scent: 9.2, uniqueness: 8.5, compliments: 9.5, value: 8 },
            longevity: 9,
            sillage: 9,
            seasons: { spring: 55, summer: 25, fall: 90, winter: 95 },
            dayNight: { day: 35, night: 90 },
            topNotes: ["Quế", "Nhục đậu khấu", "Bưởi chùm"],
            middleNotes: ["Hoa oải hương"],
            baseNotes: ["Cam thảo", "Gỗ đàn hương", "Hổ phách", "Tiêu", "Hoắc hương"],
            accords: [
                { name: "Gia vị ấm", value: 100, color: "#e67e22" },
                { name: "Gia vị tươi", value: 85, color: "#2ecc71" },
                { name: "Gỗ", value: 80, color: "#8B4513" },
                { name: "Cam chanh", value: 70, color: "#f1c40f" },
                { name: "Oải hương", value: 65, color: "#9b59b6" },
            ],
            vibes: [
                { label: "Quyền lực", icon: "👑" },
                { label: "Tiệc tối", icon: "🍸" },
                { label: "Hẹn hò", icon: "❤️" },
            ],
            tags: ["Sát Thủ Hẹn Hò", "Tiệc Tối", "Mùa Đông"],
            sizes: ["10ml Chiết", "60ml"],
            basePrice: 4200000,
            verdict: "Kì quan của François Demachy. Quyền lực được nén trong từng giọt hương, tỏa ra sức hút không thể cưỡng lại.",
            verdictShort: "UY LỰC & NAM TÍNH",
        }

        console.log(JSON.stringify(sample, null, 2))
        console.log('\n   Lưu data trên vào scripts/product-data.json rồi chạy lại script.')
        return
    }

    // Import từng sản phẩm
    for (const product of products) {
        try {
            await importProduct(product)
        } catch (err) {
            console.error(`   ❌ Lỗi import ${product.name}:`, err.message)
        }
    }

    console.log('\n═══════════════════════════════════════')
    console.log(`✅ Hoàn tất! Đã xử lý ${products.length} sản phẩm.`)
    console.log('═══════════════════════════════════════')
}

main().catch(err => {
    console.error('❌ Lỗi nghiêm trọng:', err)
    process.exit(1)
})
