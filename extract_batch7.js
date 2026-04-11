const fs = require('fs');

const ids = [
  'diptyque-doson-edp', 'diptyque-fleur-de-peau', 'philosykos-edp', 
  'light-blue-intense-homme', 'light-blue-pour-femme', 'the-one-edp', 
  'the-one-for-men-eau-de-parfum', 'le-parfum-elie-saab', 
  'elizabeth-arden-white-tea-edt', 'ella-k-pluie-sur-ha-long'
];

const content = fs.readFileSync('src/constants/mockData.ts', 'utf8');

ids.forEach(id => {
  const match = content.match(new RegExp(`id:\\s*["']${id}["'][\\s\\S]*?(?=id:\\s*["']|$)`, 'i'));
  if (match) {
    const block = match[0];
    const extract = (field) => {
      const fieldMatch = block.match(new RegExp(`${field}:\\s*\\[(.*?)\\]`, 's'));
      if (!fieldMatch) return '';
      return fieldMatch[1].replace(/\n/g, '').replace(/\s+/g, ' ').trim();
    };
    console.log(`\n\n--- ${id} ---`);
    console.log('Top:', extract('topNotes'));
    console.log('Mid:', extract('middleNotes'));
    console.log('Base:', extract('baseNotes'));
    console.log('Accords:', extract('accords'));
  }
});
