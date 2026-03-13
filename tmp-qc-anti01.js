const fs=require('fs');
const s=fs.readFileSync('src/constants/mockData.ts','utf8');
const ids=[
'terre-dhermes-edt','ysl-la-nuit-de-lhomme','jpg-le-male-le-parfum','prada-lhomme','guerlain-l-homme-ideal-eau-de-parfum','chanel-allure-homme-sport-eau-extreme','nishane-hacivat','prada-lhomme-intense','lalique-encre-noire','jpg-le-male-elixir','jpg-le-male-edt','creed-absolu-aventus','nishane-ani','chanel-allure-homme-edition-blanche','hermes-terre-dhermes-eau-givree','guerlain-habit-rouge-parfum','guerlain-angelique-noire','dior-pure-poison','ysl-opium-edt','guerlain-mon-guerlain'];
for (const id of ids){
 const re=new RegExp(`id: \\\"${id}\\\"([\\s\\S]*?)\\n\\s*},`);
 const m=s.match(re);
 if(!m){console.log('\nMISSING '+id);continue;}
 const body=m[1];
 const perf=(body.match(/perfumer:\s*"([^"]*)"/)||[])[1]||'';
 const top=(body.match(/topNotes:\s*\[([\s\S]*?)\]/)||[])[1]||'';
 const mid=(body.match(/middleNotes:\s*\[([\s\S]*?)\]/)||[])[1]||'';
 const base=(body.match(/baseNotes:\s*\[([\s\S]*?)\]/)||[])[1]||'';
 const accords=(body.match(/accords:\s*\[([\s\S]*?)\]/)||[])[1]||'';
 console.log('\n### '+id);
 console.log('perfumer='+perf);
 console.log('top='+top.replace(/\s+/g,' ').slice(0,180));
 console.log('mid='+mid.replace(/\s+/g,' ').slice(0,180));
 console.log('base='+base.replace(/\s+/g,' ').slice(0,180));
 console.log('accords='+accords.replace(/\s+/g,' ').slice(0,220));
}
