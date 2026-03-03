/**
 * Script import products từ mockData.ts vào Sanity CMS
 * Chạy: npx tsx scripts/import-products-to-sanity.ts
 */

import { createClient } from '@sanity/client';
import { MASTER_PERFUMES } from '../src/constants/mockData';

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ww1zzidl',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-02-27',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

async function createBrandIfNotExists(brandName: string) {
    const slug = brandName.toLowerCase().replace(/\s+/g, '-');
    const existing = await client.fetch(`*[_type == "brand" && slug.current == $slug][0]`, { slug });
    if (existing) {
        console.log(`✅ Brand "${brandName}" already exists`);
        return existing._id;
    }
    const brandDoc = {
        _type: 'brand',
        name: brandName,
        slug: { _type: 'slug', current: slug },
        description: `Thương hiệu ${brandName}`,
    };
    const result = await client.create(brandDoc);
    console.log(`✅ Created brand: ${brandName} (${result._id})`);
    return result._id;
}

async function importProduct(perfume: any) {
    try {
        const brandId = await createBrandIfNotExists(perfume.brand);
        const productDoc = {
            _type: 'product',
            name: perfume.name,
            subName: perfume.subName,
            slug: { _type: 'slug', current: perfume.id },
            brand: { _type: 'reference', _ref: brandId },
            gender: perfume.gender,
            description: perfume.description,
            mainImage: {
                _type: 'image',
                asset: { _type: 'reference', _ref: await uploadImage(perfume.image) },
            },
            scoreScents: perfume.score.scent,
            scoreUniqueness: perfume.score.uniqueness,
            scoreCompliments: perfume.score.compliments,
            scoreValue: perfume.score.value,
            vibes: perfume.vibes?.map((v: any) => ({ label: v.label, icon: v.icon })) || [],
            tags: perfume.tags || [],
            topNotes: perfume.topNotes?.map((n: any) => n.name) || [],
            middleNotes: perfume.middleNotes?.map((n: any) => n.name) || [],
            baseNotes: perfume.baseNotes?.map((n: any) => n.name) || [],
            accords: perfume.accords?.map((a: any) => ({ name: a.name, value: a.value, color: a.color })) || [],
            longevity: perfume.longevity,
            sillage: perfume.sillage,
            seasonSpring: perfume.seasons?.spring || 50,
            seasonSummer: perfume.seasons?.summer || 50,
            seasonFall: perfume.seasons?.fall || 50,
            seasonWinter: perfume.seasons?.winter || 50,
            dayUse: perfume.dayNight?.day || 50,
            nightUse: perfume.dayNight?.night || 50,
            sizes: perfume.sizes || [],
            basePrice: perfume.basePrice,
            marketPlaceLinks: [],
            verdict: perfume.verdict,
            verdictShort: perfume.verdictShort,
        };
        const result = await client.create(productDoc);
        console.log(`✅ Created product: ${perfume.name} (${result._id})`);
        return result._id;
    } catch (error) {
        console.error(`❌ Error importing ${perfume.name}:`, error);
        throw error;
    }
}

async function uploadImage(imageUrl: string): Promise<string> {
    try {
        const response = await fetch(imageUrl);
        const buffer = await response.arrayBuffer();
        const asset = await client.assets.upload('image', Buffer.from(buffer), {
            filename: imageUrl.split('/').pop() || 'image.jpg',
        });
        return asset._id;
    } catch (error) {
        console.error(`Error uploading image ${imageUrl}:`, error);
        throw error;
    }
}

async function main() {
    console.log('🚀 Starting product import to Sanity...\n');
    if (!process.env.SANITY_API_TOKEN) {
        console.error('❌ Missing SANITY_API_TOKEN');
        console.log('Get token from: https://www.sanity.io/manage/personal/project/ww1zzidl/api#tokens');
        process.exit(1);
    }
    console.log(`📦 Importing ${MASTER_PERFUMES.length} products...\n`);
    let successCount = 0;
    for (const perfume of MASTER_PERFUMES) {
        try {
            await importProduct(perfume);
            successCount++;
        } catch (error) {
            console.error(error);
        }
    }
    console.log(`\n✅ Import complete! Success: ${successCount}/${MASTER_PERFUMES.length}`);
    console.log(`🔗 Sanity Studio: https://ww1zzidl.sanity.studio`);
}

main().catch(console.error);
