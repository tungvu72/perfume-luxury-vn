const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'ww1zzidl',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-27',
});

async function run() {
  const result = await client.fetch(`*[slug.current match "*montblanc*"]{_type, "slug": slug.current, title, name}`);
  console.log(JSON.stringify(result, null, 2));
}

run();
