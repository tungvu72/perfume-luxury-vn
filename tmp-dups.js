const fs=require('fs');
const p='src/constants/mockData.ts';
const s=fs.readFileSync(p,'utf8');
const ids=[...s.matchAll(/id:\s*\"([^\"]+)\"/g)].map(m=>m[1]);
const names=[...s.matchAll(/name:\s*\"([^\"]+)\"/g)].map(m=>m[1]);
function dups(arr){return Object.entries(arr.reduce((m,x)=>(m[x]=(m[x]||0)+1,m),{})).filter(([,c])=>c>1).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));}
console.log('DUP_IDS');
for (const [k,c] of dups(ids)) console.log(c+'\t'+k);
console.log('DUP_NAMES');
for (const [k,c] of dups(names)) console.log(c+'\t'+k);
