const fs=require('fs');
const s=fs.readFileSync('src/constants/mockData.ts','utf8');
const blocks=[...s.matchAll(/\{\s*id:\s*"([^"]+)"([\s\S]*?)\n\s*\},/g)].map(m=>({id:m[1],body:m[2]}));
const total=blocks.length;
const blocked=blocks.filter(b=>/BLOCKED_REVIEW/.test(b.body)).map(b=>b.id);
const ids=['chanel-bleu-de-chanel-eau-de-parfum','ysl-y-eau-de-parfum','dior-addict-eau-de-parfum','kilian-love-don-t-be-shy','guerlain-insolence-eau-de-parfum','guerlain-samsara-eau-de-parfum','guerlain-mitsouko-eau-de-parfum','guerlain-l-heure-bleue-eau-de-parfum','chanel-allure-eau-de-parfum','diptyque-philosykos-eau-de-parfum','guerlain-l-heure-bleue-eau-de-toilette','dior-j-adore','prada-l-homme-intense','prada-l-homme','issey-miyake-l-eau-d-issey','hermes-terre-d-hermes','bleu-chanel-edp','guerlain-lheure-bleue-edt','guerlain-lheure-bleue-edp'];
const present=ids.filter(id=>s.includes(`id: "${id}"`));
function pick(re, body){const m=body.match(re); return m?m[1]:''}
function norm(x){ return x.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’'`]/g,' ').replace(/[^a-z0-9]+/g,' ').replace(/\b(eau de parfum|eau de toilette|parfum|extrait|elixir|intense)\b/g,' ').replace(/\s+/g,' ').trim(); }
const items=blocks.map(b=>({id:b.id,name:pick(/name:\s*"([^"]+)"/,b.body),subName:pick(/subName:\s*"([^"]+)"/,b.body)}));
const byNorm={}; for(const it of items){const n=norm((it.name+' '+it.subName).trim()); (byNorm[n]??=[]).push(it)}
const suspect=Object.entries(byNorm).filter(([,v])=>v.length>1).map(([k,v])=>({k,v:v.map(x=>x.id)}));
console.log(JSON.stringify({total,blocked,present,suspect},null,2));
