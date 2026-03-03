/**
 * 🚀 SCRIPT MIGRATE SẢN PHẨM CHUẨN VÀNG VÀO SANITY
 * 
 * Script này nâng cấp từ import-product.mjs:
 * 1. Hỗ trợ tải ảnh từ URL và upload trực tiếp vào Sanity Assets.
 * 2. Đầy đủ các trường dữ liệu (Performance, Accords, Vibes, Gallery).
 * 3. Chuẩn hóa Score và SEO.
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
    console.error('❌ Chưa có SANITY_WRITE_TOKEN trong .env.local!')
    process.exit(1)
}

const client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    token: WRITE_TOKEN,
    apiVersion: API_VERSION,
    useCdn: false,
})

/**
 * Tải ảnh từ URL và upload vào Sanity
 */
async function uploadImage(url) {
    if (!url || !url.startsWith('http')) return null;
    try {
        console.log(`   🖼️ Đang tải ảnh: ${url.substring(0, 50)}...`)
        const response = await fetch(url)
        if (!response.ok) throw new Error(`Không thể tải ảnh: ${response.statusText}`)
        const arrayBuffer = await response.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        const asset = await client.assets.upload('image', buffer, {
            filename: path.basename(url.split('?')[0]) || 'product-image.jpg'
        })
        return {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: asset._id,
            }
        }
    } catch (err) {
        console.error(`   ⚠️ Lỗi upload ảnh: ${err.message}`)
        return null;
    }
}

/**
 * Tìm hoặc tạo Brand document
 */
async function findOrCreateBrand(brandName) {
    const existing = await client.fetch(
        `*[_type == "brand" && name == $name][0]._id`,
        { name: brandName }
    )
    if (existing) return existing;

    const brandSlug = brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    const result = await client.create({
        _type: 'brand',
        name: brandName,
        slug: { _type: 'slug', current: brandSlug },
    })
    return result._id
}

/**
 * Main Process
 */
async function run() {
    console.log('═══════════════════════════════════════')
    console.log('🚀 DIOR SAUVAGE ELIXIR — Gold Standard Migration')
    console.log('═══════════════════════════════════════')

    const dataPath = path.join(__dirname, 'gold-standard-sauvage.json')
    if (!fs.existsSync(dataPath)) {
        console.error('❌ Không tìm thấy file data mẫu!')
        return;
    }

    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    const brandId = await findOrCreateBrand(data.brand)

    // Upload ảnh chính
    const mainImage = await uploadImage(data.image)

    // Upload gallery ảnh
    const galleryImages = []
    if (data.images && Array.isArray(data.images)) {
        for (const img of data.images) {
            const uploaded = await uploadImage(img.url)
            if (uploaded) {
                galleryImages.push({
                    ...uploaded,
                    _key: Math.random().toString(36).substring(2, 9),
                    source: img.source || 'fragram',
                    caption: img.caption || ''
                })
            }
        }
    }

    const productDoc = {
        _type: 'product',
        brand: { _type: 'reference', _ref: brandId },
        name: data.name,
        subName: data.subName,
        slug: { _type: 'slug', current: data.slug },
        gender: data.gender,
        description: data.description,
        verdict: data.verdict,
        verdictShort: data.verdictShort,

        // Image & Gallery
        image: mainImage,
        images: galleryImages,

        // Performance & Metadata
        longevity: data.longevity,
        sillage: data.sillage,
        seasons: {
            spring: data.seasons.spring,
            summer: data.seasons.summer,
            fall: data.seasons.fall,
            winter: data.seasons.winter,
        },
        dayNight: {
            day: data.dayNight.day,
            night: data.dayNight.night,
        },

        // Score (Mapping về schema: scoreScents, scoreUniqueness,...)
        // Lưu ý: Cần kiểm tra xem schema là object 'score' hay các trường lẻ
        // Theo import-product.mjs cũ thì là trường lẻ
        scoreScents: data.scores.scent,
        scoreUniqueness: data.scores.uniqueness,
        scoreCompliments: data.scores.compliments,
        scoreValue: data.scores.value,

        topNotes: data.topNotes,
        middleNotes: data.middleNotes,
        baseNotes: data.baseNotes,

        accords: data.accords.map(a => ({
            _type: 'object',
            _key: Math.random().toString(36).substring(2, 9),
            name: a.name,
            value: a.value,
            color: a.color
        })),

        vibes: data.vibes.map(v => ({
            _type: 'object',
            _key: Math.random().toString(36).substring(2, 9),
            label: v.label,
            icon: v.icon
        })),

        tags: data.tags,
        sizes: data.sizes,
        basePrice: data.basePrice,
    }

    // Kiểm tra xem đã tồn tại chưa
    const existingId = await client.fetch(
        `*[_type == "product" && slug.current == $slug][0]._id`,
        { slug: data.slug }
    )

    if (existingId) {
        console.log(`   ♻️ Đang cập nhật: ${data.name}...`)
        await client.patch(existingId).set(productDoc).commit()
        console.log(`   ✅ Cập nhật hoàn tất! ID: ${existingId}`)
    } else {
        console.log(`   🆕 Đang tạo mới: ${data.name}...`)
        const result = await client.create(productDoc)
        console.log(`   ✅ Tạo mới hoàn tất! ID: ${result._id}`)
    }
}

run().catch(console.error)
