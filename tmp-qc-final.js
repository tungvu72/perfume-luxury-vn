const fs=require('fs');
const s=fs.readFileSync('src/constants/mockData.ts','utf8');
const blocks=[...s.matchAll(/\{\s*id:\s*"([^"]+)"([\s\S]*?)\n\s*\},/g)].map(m=>({id:m[1],body:m[2]}));
const total=blocks.length;
const blocked=blocks.filter(b=>/BLOCKED_REVIEW/.test(b.body)).map(b=>b.id);
const placeholders=blocks.filter(b=>/productCopy:\s*"\(Chỉ Coder viết bài\)|productCopy:\s*"\(Ch\? Coder vi.t b.i\)|productCopy:\s*"\(Ch\? Coder vi.t b\?i\)/.test(b.body)).map(b=>b.id);
function pick(re, body){ const m=body.match(re); return m?m[1]:''; }
function norm(x){ return x.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’'`]/g,' ').replace(/[^a-z0-9]+/g,' ').replace(/\b(eau de parfum|eau de toilette|parfum|extrait|elixir|intense)\b/g,' ').replace(/\s+/g,' ').trim(); }
const items=blocks.map(b=>({id:b.id,name:pick(/name:\s*"([^"]+)"/,b.body),subName:pick(/subName:\s*"([^"]+)"/,b.body)}));
const byNorm={};
for(const it of items){ const n=norm((it.name+' '+it.subName).trim()); if(!byNorm[n]) byNorm[n]=[]; byNorm[n].push(it); }
const dupGroups=Object.entries(byNorm).filter(([,v])=>v.length>1).map(([k,v])=>({k,v:v.map(x=>x.id)}));
console.log(JSON.stringify({total, blockedCount:blocked.length, blocked, placeholderCount:placeholders.length, dupGroups}, null, 2));
