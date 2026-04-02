const fs = require('fs');
const html = fs.readFileSync('tmp/live_page.html', 'utf8');
const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([^<]+)<\/script>/);
if (match) {
  const data = JSON.parse(match[1]);
  fs.writeFileSync('tmp/live_data.json', JSON.stringify(data, null, 2));
  console.log('Saved to live_data.json');
} else {
  console.log('App Router: finding embedded script data');
  const scripts = html.match(/<script([^>]*)>([\s\S]*?)<\/script>/g) || [];
  let found = false;
  for (const s of scripts) {
    if (s.includes('Signature')) {
      console.log('Found script with Signature:', s.substring(0, 200));
      found = true;
    }
  }
  if (!found) {
    if (html.includes('Signature')) {
        console.log('Found text in HTML');
        console.log(html.substring(html.indexOf('Signature') - 50, html.indexOf('Signature') + 150));
    }
  }
}
