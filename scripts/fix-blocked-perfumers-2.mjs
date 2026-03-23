import fs from 'fs';
import path from 'path';

const PERFUMER_MAP = {
  '24-faubourg': 'Maurice Roucel',
  'allure-homme-sport': 'Jacques Polge',
  'angel-muse': 'Quentin Bisch',
  'antaeus': 'Jacques Polge',
  'bianco-latte': 'Unknown',
  'bottled-absolu': 'Annick Ménardo & Suzy Le Helley',
  'champs-elysees-edp': 'Jacques Guerlain & Jean-Paul Guerlain',
  'cinema': 'Jacques Cavallier Belletrud',
  'ck-obsession': 'Jean Guichard',
  'coco-eau-de-parfum': 'Jacques Polge',
  'coco-eau-de-toilette': 'Jacques Polge',
  'coromandel-eau-de-parfum': 'Jacques Polge & Christopher Sheldrake',
  'diorissimo': 'Edmond Roudnitska',
  'dolce-vita': 'Pierre Bourdon & Maurice Roger',
  'drakkar-noir': 'Pierre Wargnye',
  'dune-edt': 'Jean-Louis Sieuzac, Nejla Barbir & Dominique Ropion',
};

const DIR = 'data/products';
let fixed = 0;

for (const [slug, perfumer] of Object.entries(PERFUMER_MAP)) {
  const fp = path.join(DIR, slug + '.json');
  if (!fs.existsSync(fp)) { console.log(`⚠️ ${slug}.json not found`); continue; }
  const raw = fs.readFileSync(fp, 'utf8');
  if (!raw.includes('BLOCKED_SOURCE')) { console.log(`⏭️ ${slug} — no BLOCKED_SOURCE`); continue; }
  const updated = raw.replace('"BLOCKED_SOURCE"', JSON.stringify(perfumer));
  fs.writeFileSync(fp, updated);
  console.log(`✅ ${slug} → ${perfumer}`);
  fixed++;
}

console.log(`\nFixed: ${fixed} products`);
