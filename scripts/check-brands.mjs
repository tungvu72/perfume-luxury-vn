import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'ww1zzidl',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-02-27',
});

async function findBrand(name) {
    const brands = await client.fetch('*[_type == "brand"]{_id, name}');
    console.log('Brands found:', brands);
}

findBrand();
