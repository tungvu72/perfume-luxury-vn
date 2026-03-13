const fs=require('fs');
const s=fs.readFileSync('src/constants/mockData.ts','utf8');
const blocks=[...s.matchAll(/\{\s*id:\s*"([^"]+)"([\s\S]*?)\n\s*\},/g)].map(m=>({id:m[1],body:m[2]}));
function pick(re, body){ const m=body.match(re); return m?m[1]:''; }
function norm(x){ return x.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’'`]/g,' ').replace(/[^a-z0-9]+/g,' ').replace(/\b(eau de parfum|eau de toilette|parfum|extrait|elixir|intense)\b/g,' ').replace(/\s+/g,' ').trim(); }
const items=blocks.map(b=>({id:b.id,name:pick(/name:\s*"([^"]+)"/,b.body),subName:pick(/subName:\s*"([^"]+)"/,b.body)}));
const byId={}; const byNorm={};
for(const it of items){ byId[it.id]=(byId[it.id]||0)+1; const n=norm((it.name+' '+it.subName).trim()); if(!byNorm[n]) byNorm[n]=[]; byNorm[n].push(it); }
console.log('TOTAL',items.length);
console.log('DUP_IDS'); Object.entries(byId).filter(([,c])=>c>1).forEach(([k,c])=>console.log(c+'\t'+k));
console.log('NORM_GROUPS');
for(const [k,v] of Object.entries(byNorm).filter(([,v])=>v.length>1)){
 console.log('---',k);
 v.forEach(x=>console.log(x.id+' | '+x.name+' | '+x.subName));
}
