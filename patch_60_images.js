const fs = require('fs');
const mockPath = 'src/constants/mockData.ts';
let lines = fs.readFileSync(mockPath, 'utf8').split('\n');
const items = [{"slug":"no-19-eau-de-toilette","name":"N°19 Eau de Toilette","fId":"16"},{"slug":"vanilla","name":"Vanilla Sex EDP","fId":"88588"},{"slug":"bloom-edp","name":"Bloom EDP","fId":"44894"},{"slug":"armaf-effects-of-uniq","name":"Effects of Uniq","fId":"42260"},{"slug":"black-phantom-by-kilian","name":"Black Phantom","fId":"43632"},{"slug":"blanche-bete","name":"Blanche Bête","fId":"70189"},{"slug":"byredo-blanche-edp","name":"Blanche EDP","fId":"70189"},{"slug":"chloe-atelier-des-fleurs-rosa-damascena","name":"Rosa Damascena","fId":"83015"},{"slug":"chloe-atelier-des-fleurs-santalum","name":"Santalum","fId":"57336"},{"slug":"creed-love-in-white","name":"Love In White","fId":"4322"},{"slug":"ex-nihilo-blue-talisman","name":"Blue Talisman","fId":"40031"},{"slug":"giorgio-armani-acqua-di-gio-profondo","name":"Acqua di Gio Profondo","fId":"59532"},{"slug":"gritti-tutu-extrait","name":"TuTu Extrait de Parfum","fId":"54822"},{"slug":"gucci-flora-gorgeous-gardenia","name":"Flora Gorgeous Gardenia","fId":"68578"},{"slug":"guerlain-aqua-allegoria-forte-rosa-palissandro-edp","name":"Aqua Allegoria Forte Rosa Palissandro EDP","fId":"83015"},{"slug":"guerlain-aqua-allegoria-nerolia-vetiver-edp","name":"Aqua Allegoria Forte Nerolia Vetiver","fId":"79228"},{"slug":"guerlain-aqua-allegoria-nettare-di-sole","name":"Aqua Allegoria Nettare Di Sole","fId":"66360"},{"slug":"hermes-bleue","name":"Eau des Merveilles Bleue","fId":"42747"},{"slug":"hermes-twilly-eau-poivree","name":"Twilly d'Hermès Eau Poivrée","fId":"55983"},{"slug":"jimmy-choo-i-want-choo","name":"I Want Choo EDP","fId":"64015"},{"slug":"kilan-good-girl-gone-bad","name":"Good Girl Gone Bad","fId":"15924"},{"slug":"kilian-rolling-in-love","name":"Rolling In Love","fId":"56402"},{"slug":"lorchestre-piano-santal","name":"Piano Santal","fId":"57336"},{"slug":"lalique-encre-noir-edt","name":"Encre Noire EDT","fId":"1834"},{"slug":"le-labo-santal","name":"Santal 33","fId":"12201"},{"slug":"mcm-zen-elephant","name":"Eau de Parfum","fId":"16"},{"slug":"maison-francis-kurkdjian-kurky","name":"Aqua Universalis","fId":"83015"},{"slug":"mancera-sicily","name":"Sicily EDP","fId":"42670"},{"slug":"mancera-cedrat-boise","name":"Cedrat Boise","fId":"15211"},{"slug":"miss-dior-essence-new-2025","name":"Miss Dior Essence Parfum","fId":"113241"},{"slug":"moschino-toy-boy","name":"Toy Boy","fId":"55858"},{"slug":"musk-kashmir","name":"Musk Kashmir","fId":"66097"},{"slug":"my-way-edp","name":"My Way EDP","fId":"62036"},{"slug":"nar-cristal-edp","name":"Cristal EDP","fId":"73075"},{"slug":"nar-poudree","name":"Poudrée","fId":"36679"},{"slug":"narciso-for-her-edp-intense-new-2025","name":"For Her EDP Intense","fId":"6575"},{"slug":"narciso-musc-nude","name":"Musc Nude","fId":"88936"},{"slug":"narciso-rodriguez-all-of-me-floral","name":"All of Me Floral","fId":"84201"},{"slug":"narciso-rodriguez-for-her-eau-de-parfum","name":"For Her EDP","fId":"14319"},{"slug":"oud-forever","name":"Oud Forever","fId":"64948"},{"slug":"paco-pure-xs","name":"Pure XS","fId":"46038"},{"slug":"parfums-de-marly-palatine","name":"Palatine","fId":"96023"},{"slug":"parfums-de-marly-valaya","name":"Valaya","fId":"78574"},{"slug":"parfums-de-marly-valaya-exclusif","name":"Valaya Exclusif","fId":"46661"},{"slug":"rj-burlington-1819","name":"Burlington 1819","fId":"62320"},{"slug":"replica-by-the-fireplace","name":"By The Fireplace","fId":"31623"},{"slug":"replica-lazy-sunday-morning","name":"Lazy Sunday Morning","fId":"20542"},{"slug":"the-noir","name":"Thé Noir 29","fId":"31872"},{"slug":"thomas-kosmala-no","name":"No 4 Apres l'Amour","fId":"53742"},{"slug":"tom-ford-black-orchid","name":"Black Orchid","fId":"1018"},{"slug":"versace-bright-crystal","name":"Bright Crystal","fId":"631"},{"slug":"versace-eros-energy-edp","name":"Eros Energy","fId":"92647"},{"slug":"versace-eros-flame","name":"Eros Flame","fId":"52180"},{"slug":"versce-pour-homme","name":"Pour Homme","fId":"44763"},{"slug":"xerjoff-casamorati-mefisto","name":"Casamorati Mefisto","fId":"6310"},{"slug":"xerjoff-torino","name":"Torino 21","fId":"70424"},{"slug":"ysl-black-opium-glitter-edp","name":"Black Opium Glitter","fId":"100628"},{"slug":"ysl-libre-intense-edp","name":"Libre Intense EDP","fId":"62318"},{"slug":"ysl-y-eau-de-parfum","name":"Y EDP","fId":"10464"},{"slug":"ventus-for-her","name":"Aventus For Her","fId":"14319"}];

items.forEach(item => {
    let startIdx = lines.findIndex(l => l.includes('id: "' + item.slug + '"'));
    if (startIdx === -1) {
        console.log("Missing " + item.slug);
        return;
    }
    let endIdx = lines.findIndex((l, i) => i > startIdx && l.includes('isPublished: true'));
    for (let i = startIdx; i <= endIdx; i++) {
        if (lines[i].includes('image: ')) {
             lines[i] = '    image: "/images/products/' + item.slug + '-main.jpg",';
        }
        if (lines[i].includes('images: [')) {
             let replacement = '    images: [{ url: "/images/products/' + item.slug + '-main.jpg", source: "studio", caption: "' + item.name + ' chính hãng", verified: true }]';
             // Check if next lines are part of array
             let j = i;
             while (j <= endIdx && !lines[j].includes('],') && !lines[j].includes('] )')) j++;
             // Replace block
             lines.splice(i, j - i + 1, replacement + ',');
             endIdx -= (j - i); // adjust end index
        }
    }
});
fs.writeFileSync(mockPath, lines.join('\n'), 'utf8');
console.log('Patched 60 items.');
