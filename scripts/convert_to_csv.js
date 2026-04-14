const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('C:/Users/Admin/.gemini/antigravity/brain/edfe5606-0a1d-4a05-98e0-f9bff137fd23/product_list_catalog.md');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let csvContent = 'STT,ThuongHieu_TenSP,Anh_Main,Anh_Card,URL\n';

  for await (let line of rl) {
    line = line.trim();
    if (line.startsWith('|') && !line.includes('|---|') && !line.includes('Brand + Tên SP')) {
      const parts = line.split('|').map(p => p.trim()).filter(p => p.length > 0);
      if (parts.length >= 5) {
        const col1 = parts[0];
        let col2 = parts[1].replace(/\*\*/g, '').replace(/"/g, '""');
        const col3 = parts[2].replace(/`/g, '');
        const col4 = parts[3].replace(/`/g, '');
        
        let col5 = parts[4];
        const match = col5.match(/\]\((.*?)\)/);
        if (match) {
          col5 = match[1];
        }

        csvContent += `"${col1}","${col2}","${col3}","${col4}","${col5}"\n`;
      }
    }
  }

  // Write with BOM for Excel
  fs.writeFileSync('d:/anti/perfume-luxury-vn/danh_sach_sp.csv', '\uFEFF' + csvContent, 'utf8');
}

processLineByLine();
