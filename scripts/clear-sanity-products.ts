// Script xóa tất cả products khỏi Sanity để mockData takeover
// Run: npx tsx scripts/clear-sanity-products.ts
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'ww1zzidl',
    dataset: 'production',
    apiVersion: '2024-02-27',
    token: process.env.SANITY_WRITE_TOKEN || '',
    useCdn: false,
});

async function clearProducts() {
    console.log('🔍 Fetching all products from Sanity...');
    const products = await client.fetch('*[_type == "product"] { _id, "slug": slug.current, name }');

    if (products.length === 0) {
        console.log('✅ No products in Sanity — mockData is already in control.');
        return;
    }

    console.log(`Found ${products.length} products to delete:`);
    products.forEach((p: any) => console.log(`  - ${p.slug}: ${p.name}`));

    const confirmed = true; // auto-confirm
    if (!confirmed) { console.log('Cancelled.'); return; }

    for (const product of products) {
        await client.delete(product._id);
        console.log(`🗑️  Deleted: ${product.slug}`);
    }

    console.log('\n✅ All done! mockData.ts is now the source of truth for all products.');
    console.log('📋 Remember to deploy to Vercel after verifying locally.');
}

clearProducts().catch(console.error);
