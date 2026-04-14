const fs = require('fs');
const path = 'src/constants/mockData.ts';
let code = fs.readFileSync(path, 'utf8');

const patches = [
  {
    idMatch: /id:\s*"chanel-no-19-eau-de-toilette".*?images:\s*\[([\s\S]*?)\]/g,
    idStr: 'id: "chanel-no-19-eau-de-toilette"',
    newCardObj: `{ url: "/images/products/039-no-19-eau-de-toilette-card.jpg", source: "fragram", caption: "Chanel N°19 EDT Fragram", verified: true }`
  },
  {
    idStr: 'id: "dolce-gabbana-light-blue-intense-homme"',
    newCardObj: `{ url: "/images/products/082-light-blue-intense-homme-card.jpg", source: "fragram", caption: "Light Blue Eau Intense Pour Homme Fragram", verified: true }`
  },
  {
    idStr: 'id: "jean-paul-gaultier-jpg-le-male-elixir"',
    newCardObj: `{ url: "/images/products/152-jpg-le-male-elixir-card.jpg", source: "fragram", caption: "Le Male Elixir Fragram", verified: true }`
  },
  {
    idStr: 'id: "tom-ford-noir-extreme"',
    newCardObj: `{ url: "/images/products/231-noir-extreme-card.jpg", source: "fragram", caption: "Tom Ford Noir Extreme Fragram", verified: true }`
  },
  {
    idStr: 'id: "tom-ford-vanilla"',
    newCardObj: `{ url: "/images/products/236-vanilla-card.jpg", source: "fragram", caption: "Tom Ford Vanilla Sex Fragram", verified: true }`
  }
];

patches.forEach(patch => {
    // We try to match: `id: "some_id" ... images: [ { ... } ]`
    // We split by idStr to find the block
    const parts = code.split(patch.idStr);
    if (parts.length > 1) {
        // Assume parts[1] contains the `images: [` for this product
        const imagesIdx = parts[1].indexOf('images: [');
        if (imagesIdx !== -1) {
            const arrStart = imagesIdx + 'images: ['.length;
            
            // Just insert the new object after the bracket, unless it's already there
            if (!parts[1].includes(patch.newCardObj.substring(0, 30))) {
                parts[1] = parts[1].substring(0, arrStart) + '\n      ' + patch.newCardObj + ',' + parts[1].substring(arrStart);
            }
        }
        code = parts.join(patch.idStr);
        console.log(`Patched ${patch.idStr}`);
    } else {
        console.error(`Could not find ${patch.idStr}`);
    }
});

fs.writeFileSync(path, code, 'utf8');
console.log('Update complete.');
