// Clear all Sanity products via REST API
// Run: node scripts/clear-sanity-products.mjs
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'ww1zzidl',
    dataset: 'production',
    apiVersion: '2024-02-27',
    // Dùng token từ Sanity dashboard: https://sanity.io/manage/project/ww1zzidl/api
    // Settings → Tokens → Add API token (Editor role)
    token: process.env.SANITY_TOKEN,
    useCdn: false,
});

const products = await client.fetch('*[_type == "product"] { _id, "slug": slug.current, name }');
console.log(`Found ${products.length} products in Sanity:`);
products.forEach(p => console.log(`  ${p.slug || p._id}: ${p.name}`));

if (products.length === 0) {
    console.log('✅ Sanity already empty — mockData is in control!');
    process.exit(0);
}

const transaction = client.transaction();
products.forEach(p => transaction.delete(p._id));
await transaction.commit();
console.log(`\n✅ Deleted ${products.length} products. mockData.ts is now the source of truth!`);
