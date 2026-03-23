import fs from 'fs';
import path from 'path';

// Known perfumers for products with BLOCKED_SOURCE
const PERFUMER_MAP = {
  // Chanel
  'no-5-parfum': 'Ernest Beaux',
  'no-19-eau-de-parfum': 'Henri Robert',
  'no-19-poudre': 'Jacques Polge',
  'egoiste': 'Jacques Polge',
  // Dior
  'midnight-poison': 'François Demachy',
  'miss-dior-cherie': 'Christine Nagel',
  'poison': 'Edouard Fléchier',
  'homme-parfum': 'François Demachy',
  'homme-sport-2021': 'François Demachy',
  'fahrenheit-le-parfum': 'François Demachy',
  'eau-sauvage-parfum': 'François Demachy',
  'addict-edp-2014': 'François Demachy',
  // Guerlain
  'samsara-edp': 'Jean-Paul Guerlain',
  'shalimar-parfum': 'Jacques Guerlain',
  'shalimar-lessence': 'Thierry Wasser',
  'lheure-bleue-edp': 'Jacques Guerlain',
  'lheure-bleue-edt': 'Jacques Guerlain',
  'mitsouko-edp': 'Jacques Guerlain',
  'habit-rouge-edt': 'Jean-Paul Guerlain',
  'mon-guerlain-intense': 'Thierry Wasser',
  'linstant-homme-edp': 'Thierry Wasser & Maurice Roucel',
  'linstant-de-guerlain-femme': 'Maurice Roucel',
  'insolence-edp': 'Maurice Roucel',
  'elixir-des-merveilles': 'Ralf Schwieger',
  // YSL
  'tuxedo': 'Dominique Ropion',
  'rive-gauche': 'Jacques Polge & Michel Hy',
  'libre-intense': 'Anne Flipo & Carlos Benaïm',
  'libre-le-parfum': 'Anne Flipo',
  'la-nuit-de-lhomme-bleu-electrique': 'Dominique Ropion & Anne Flipo',
  'pour-homme': 'Jean-Louis Sieuzac',
  // Givenchy
  'l-interdit-eau-de-parfum-rouge': 'Dominique Ropion, Anne Flipo & Fanny Bal',
  'gentleman-eau-de-parfum-reserve-privee': 'Olivier Cresp',
  // Hermès
  'un-jardin-sur-le-nil': 'Jean-Claude Ellena',
  'grey-vetiver': 'Jean-Claude Ellena',
  // Tom Ford
  'ombre-nomade': 'Givaudan perfumers',
  // Louis Vuitton
  'n019': 'Jacques Cavallier Belletrud',
  // JPG
  'jpg-classique-edt': 'Jacques Cavallier',
  'jpg-la-belle-le-parfum': 'Quentin Bisch',
  // Narciso Rodriguez
  'pure-musc-for-her': 'Sonia Constant',
  'musc-noir-rose-for-her': 'Sonia Constant',
  // Prada
  'infusion-diris': 'Daniela Andrier',
  // Diptyque
  'philosykos-edp': 'Olivia Giacobetti',
  // Frederic Malle
  'musc-ravageur': 'Maurice Roucel',
  'carnal-flower': 'Dominique Ropion',
  // Zadig & Voltaire
  'this-is-her': 'Aurélien Guichard',
  // Amouage
  'reflection-45-man': 'Lucas Sieuzac',
  // Initio
  'musk-therapy': 'Alberto Morillas',
  // Lolita Lempicka
  'le-parfum-lolita': 'Annick Ménardo',
  // Guerlain L'Homme Ideal
  'lhomme-ideal-parfum': 'Thierry Wasser',
  // Givenchy Organza
  'organza': 'Sophie Labbé',
  // Tom Ford
  'vanilla': 'Olivier Gillotin',
  'vetiver': 'IFF perfumers',
  // Giorgio Armani
  'acqua-di-gio-parfum': 'Alberto Morillas',
  'acqua-di-gio': 'Alberto Morillas',
  // Lattafa
  'vanilla': 'Unknown',
};

const DIR = 'data/products';
let fixed = 0;

for (const file of fs.readdirSync(DIR).filter(f => f.endsWith('.json'))) {
  const fp = path.join(DIR, file);
  const raw = fs.readFileSync(fp, 'utf8');
  if (!raw.includes('BLOCKED_SOURCE')) continue;

  const slug = file.replace('.json', '');
  const perfumer = PERFUMER_MAP[slug];

  if (perfumer) {
    const updated = raw.replace('"BLOCKED_SOURCE"', JSON.stringify(perfumer));
    fs.writeFileSync(fp, updated);
    console.log(`✅ ${slug} → ${perfumer}`);
    fixed++;
  } else {
    console.log(`❌ ${slug} — no mapping found`);
  }
}

console.log(`\nFixed: ${fixed} products`);
