const fs = require('fs');
fetch('https://www.maisondeson.com/nuoc-hoa-nu-montblanc-signature-edp')
  .then(res => res.text())
  .then(html => fs.writeFileSync('tmp/live_page.html', html));
