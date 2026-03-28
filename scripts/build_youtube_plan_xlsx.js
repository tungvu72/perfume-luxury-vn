const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = 'D:/anti/perfume-luxury-vn';
const TEMPLATE = path.join(ROOT, '.agents/skills/minimax-xlsx/templates/minimal_xlsx');
const WORK = path.join(ROOT, 'tmp/youtube-plan-xlsx-work');
const OUTDIR = path.join(ROOT, 'deliverables');
const OUT = path.join(OUTDIR, 'youtube-content-plan-2026-03-28-vn.xlsx');

fs.rmSync(WORK, { recursive: true, force: true });
fs.cpSync(TEMPLATE, WORK, { recursive: true });
fs.mkdirSync(OUTDIR, { recursive: true });

let styles = fs.readFileSync(path.join(WORK, 'xl/styles.xml'), 'utf8');
styles = styles.replace('<numFmts count="4">', '<numFmts count="5">');
styles = styles.replace('<numFmt numFmtId="167" formatCode="#,##0"/>', '<numFmt numFmtId="167" formatCode="#,##0"/>\n    <numFmt numFmtId="168" formatCode="m/d/yyyy"/>');
styles = styles.replace('<cellXfs count="13">', '<cellXfs count="16">');
styles = styles.replace('</cellXfs>', '    <!-- 13: Cross-sheet reference + integer -->\n    <xf numFmtId="167" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n    <!-- 14: Cross-sheet reference + percentage -->\n    <xf numFmtId="165" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n    <!-- 15: Date -->\n    <xf numFmtId="168" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n</cellXfs>');
fs.writeFileSync(path.join(WORK, 'xl/styles.xml'), styles, 'utf8');

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const workbook = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
    <sheet name="Tong_quan" sheetId="1" r:id="rId1"/>
    <sheet name="Gia_dinh" sheetId="2" r:id="rId4"/>
    <sheet name="Ke_hoach_video" sheetId="3" r:id="rId5"/>
    <sheet name="Lich_dang" sheetId="4" r:id="rId6"/>
    <sheet name="Bai_hoc_Nova" sheetId="5" r:id="rId7"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>
`;
fs.writeFileSync(path.join(WORK, 'xl/workbook.xml'), workbook, 'utf8');

const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
</Relationships>
`;
fs.writeFileSync(path.join(WORK, 'xl/_rels/workbook.xml.rels'), rels, 'utf8');

const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>
`;
fs.writeFileSync(path.join(WORK, '[Content_Types].xml'), contentTypes, 'utf8');

const strings = [];
const idx = new Map();
function s(text) {
  if (!idx.has(text)) {
    idx.set(text, strings.length);
    strings.push(text);
  }
  return idx.get(text);
}
[
  'Kế hoạch nội dung YouTube nước hoa — Bản chi tiết', 'Chỉ số', 'Giá trị', 'Ghi chú',
  'Số video dự kiến 30 ngày tới', 'Mục tiêu: 8 video với format mix để tránh nhàm chán',
  'Số video ranking', 'Dùng làm máy kéo view nhưng giữ dưới 60% tổng output',
  'Số video không phải ranking', 'Gồm battle, giải quyết vấn đề và opinion/authority',
  'CTR trung bình mục tiêu', 'Ưu tiên topic nam mass, dễ hiểu, dễ click',
  'Điểm effort trung bình', 'Giữ dưới 7.0 để sản xuất đều và nhanh',
  'Tổng lượt xem dự kiến', 'Tính từ baseline format và uplift CTR',
  'Số video tuần 1', 'Mở bằng kèo thắng + 1 video practical follow-up',
  'Số video tuần 2', 'Chèn battle để giảm cảm giác lặp format',
  'Tỷ trọng ranking', 'Guardrail để không spam 1 kiểu nội dung',
  'Giả định', 'Base / Quy tắc', 'Bình luận',
  'Baseline view cho ranking', 'Dựa trên format thắng hiện tại và browse traffic mạnh',
  'Baseline view cho battle', 'Mạnh ở comment/debate nhưng thường thấp hơn ranking',
  'Baseline view cho problem-solving', 'Practical, buyer intent tốt, dễ giữ người xem',
  'Baseline view cho authority/opinion', 'Tốt cho xây audience trung thành hơn là reach lớn',
  'Mục tiêu số video 30 ngày', 'Sprint 4 tuần',
  'Trần tỷ trọng ranking', 'Guardrail chống mệt audience',
  'Sàn tỷ trọng non-ranking', 'Bắt buộc để giữ độ đa dạng',
  'Ưu tiên', 'Chủ đề video', 'Trụ cột', 'Format', 'Nguồn uy tín', 'Hook chính', 'Điểm effort', 'CTR mục tiêu', 'Lượt xem dự kiến', 'Tuần đăng', 'Trạng thái',
  'Top 50 Freshest Fragrances for Men 2025', 'Máy kéo view', 'Ranking', 'Fragrantica Awards 2025', 'Authority ranking + seasonal relevance + chai dễ nhận diện',
  '5 Office Fragrances That Never Offend', 'Practical trust', 'Giải quyết vấn đề', 'Nhận định biên tập', 'Giải đúng bài toán mua thật cho dân văn phòng',
  'Bleu de Chanel vs Dior Sauvage', 'Debate', 'Battle', 'Nhận định biên tập', 'Đối đầu 2 big name để kéo comment và phe phái',
  'Most Complimented Men\'s Fragrances', 'Editorial + audience demand', 'Social proof + desire rất mạnh',
  '5 Fragrance Mistakes Men Keep Making', 'Education', 'Pain-point hook cho nam phổ thông',
  'Fragrances That Smell Expensive', 'Aspirational', 'Luxury angle + buyer intent cao',
  'Best Signature Scents for Men Over 40', 'Authority', 'Đúng tệp core 35–54 tuổi',
  'Aventus vs Hacivat', 'Debate niche vừa đủ, chưa quá hẹp',
  'Best Office Fragrances for Men', 'Keyword broad + practical intent rõ',
  'Date Night Fragrances Women Actually Like', 'Female framing nhưng vẫn bám lane nam',
  'Fragrances for Men Who Want Respect, Not Attention', 'Opinion', 'Identity-based positioning cho audience trưởng thành',
  'Best Masculine Fragrances of All Time', 'Mass masculine framing + bottle recognition tốt',
  'Sẵn sàng', 'Backlog', 'Lên kế hoạch',
  'Tuần', 'Ngày đăng', 'Video chính', 'Video phụ', 'Video thứ ba', 'Mục tiêu tuần',
  'Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4',
  'Mở bằng format thắng + practical follow-up', 'Chèn battle và pain-point để phá nhịp', 'Quay lại ranking sau khi đã đổi nhịp', 'Đóng bằng identity/authority để tăng loyalty',
  'Bài học đáng học từ repo Nova', 'Hạng mục', 'Điều đáng lấy', 'Cách áp vào kênh này',
  'Feedback loop', 'Log video win/flop + lý do + pattern. Không lặp lại angle fail.', 'Tạo file theo dõi riêng cho winner patterns và flop graveyard.',
  'Memory loop', 'Mỗi lần làm idea mới đều đọc lại insight cũ trước khi ra quyết định.', 'Buộc hệ thống đọc performance log, audience model và blacklist topic trước khi brainstorm.',
  'Competitor scan', 'Tìm outlier video của đối thủ để bóc pattern topic/title/thumbnail.', 'Chỉ lấy pattern, không copy nội dung; ưu tiên các kênh nam trưởng thành / fragrance mass.',
  'Pipeline khép kín', 'Idea → title → thumbnail hook → script → publish → log kết quả.', 'Biến mỗi video thành 1 vòng lặp học tập, không chỉ là đăng xong rồi quên.',
  'Anti-repeat system', 'Ý tưởng bị reject hoặc flop phải có lý do ghi lại.', 'Lần sau brainstorm phải check blacklist trước.',
  'Không nên bê nguyên', 'Repo này quá generic cho mọi niche.', 'Chỉ lấy framework; phải custom thành fragrance male system riêng.'
].forEach(s);

const sharedStrings = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>', `<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="${strings.length}" uniqueCount="${strings.length}">`];
for (const t of strings) sharedStrings.push(`  <si><t>${esc(t)}</t></si>`);
sharedStrings.push('</sst>');
fs.writeFileSync(path.join(WORK, 'xl/sharedStrings.xml'), sharedStrings.join('\n'), 'utf8');

function cStr(ref, text, style = 0) { return `<c r="${ref}" t="s" s="${style}"><v>${idx.get(text)}</v></c>`; }
function cNum(ref, value, style = 0) { return `<c r="${ref}" s="${style}"><v>${value}</v></c>`; }
function cFormula(ref, formula, style = 2) { return `<c r="${ref}" s="${style}"><f>${esc(formula)}</f><v></v></c>`; }
function rowXml(r, cells) { return `    <row r="${r}">${cells.join('')}</row>`; }

const sheet1Rows = [
  rowXml(1,[cStr('A1','Kế hoạch nội dung YouTube nước hoa — Bản chi tiết',4)]),
  rowXml(3,[cStr('A3','Chỉ số',4),cStr('B3','Giá trị',4),cStr('C3','Ghi chú',4)]),
  rowXml(4,[cStr('A4','Số video dự kiến 30 ngày tới'),cFormula('B4','COUNTA(Ke_hoach_video!B2:B13)',13),cStr('C4','Mục tiêu: 8 video với format mix để tránh nhàm chán')]),
  rowXml(5,[cStr('A5','Số video ranking'),cFormula('B5','COUNTIF(Ke_hoach_video!D2:D13,"Ranking")',13),cStr('C5','Dùng làm máy kéo view nhưng giữ dưới 60% tổng output')]),
  rowXml(6,[cStr('A6','Số video không phải ranking'),cFormula('B6','B4-B5',10),cStr('C6','Gồm battle, giải quyết vấn đề và opinion/authority')]),
  rowXml(7,[cStr('A7','CTR trung bình mục tiêu'),cFormula('B7','AVERAGE(Ke_hoach_video!H2:H13)',8),cStr('C7','Ưu tiên topic nam mass, dễ hiểu, dễ click')]),
  rowXml(8,[cStr('A8','Điểm effort trung bình'),cFormula('B8','AVERAGE(Ke_hoach_video!G2:G13)',10),cStr('C8','Giữ dưới 7.0 để sản xuất đều và nhanh')]),
  rowXml(9,[cStr('A9','Tổng lượt xem dự kiến'),cFormula('B9','SUM(Ke_hoach_video!I2:I13)',13),cStr('C9','Tính từ baseline format và uplift CTR')]),
  rowXml(10,[cStr('A10','Số video tuần 1'),cFormula('B10','COUNTA(Lich_dang!C2:E2)',13),cStr('C10','Mở bằng kèo thắng + 1 video practical follow-up')]),
  rowXml(11,[cStr('A11','Số video tuần 2'),cFormula('B11','COUNTA(Lich_dang!C3:E3)',13),cStr('C11','Chèn battle để giảm cảm giác lặp format')]),
  rowXml(12,[cStr('A12','Tỷ trọng ranking'),cFormula('B12','B5/B4',14),cStr('C12','Guardrail để không spam 1 kiểu nội dung')])
];

const sheet1 = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="34" customWidth="1"/><col min="2" max="2" width="16" customWidth="1"/><col min="3" max="3" width="58" customWidth="1"/></cols>
  <sheetData>
${sheet1Rows.join('\n')}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>`;
fs.writeFileSync(path.join(WORK, 'xl/worksheets/sheet1.xml'), sheet1, 'utf8');

const sheet2Rows = [
  rowXml(1,[cStr('A1','Giả định',4),cStr('B1','Base / Quy tắc',4),cStr('C1','Bình luận',4)]),
  rowXml(2,[cStr('A2','Baseline view cho ranking'),cNum('B2',35000,9),cStr('C2','Dựa trên format thắng hiện tại và browse traffic mạnh')]),
  rowXml(3,[cStr('A3','Baseline view cho battle'),cNum('B3',18000,9),cStr('C3','Mạnh ở comment/debate nhưng thường thấp hơn ranking')]),
  rowXml(4,[cStr('A4','Baseline view cho problem-solving'),cNum('B4',22000,9),cStr('C4','Practical, buyer intent tốt, dễ giữ người xem')]),
  rowXml(5,[cStr('A5','Baseline view cho authority/opinion'),cNum('B5',12000,9),cStr('C5','Tốt cho xây audience trung thành hơn là reach lớn')]),
  rowXml(6,[cStr('A6','Mục tiêu số video 30 ngày'),cNum('B6',8,9),cStr('C6','Sprint 4 tuần')]),
  rowXml(7,[cStr('A7','Trần tỷ trọng ranking'),cNum('B7',0.6,7),cStr('C7','Guardrail chống mệt audience')]),
  rowXml(8,[cStr('A8','Sàn tỷ trọng non-ranking'),cNum('B8',0.4,7),cStr('C8','Bắt buộc để giữ độ đa dạng')])
];
const sheet2 = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="30" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="62" customWidth="1"/></cols>
  <sheetData>
${sheet2Rows.join('\n')}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>`;
fs.writeFileSync(path.join(WORK, 'xl/worksheets/sheet2.xml'), sheet2, 'utf8');

const pipeline = [
  [1,'Top 50 Freshest Fragrances for Men 2025','Máy kéo view','Ranking','Fragrantica Awards 2025','Authority ranking + seasonal relevance + chai dễ nhận diện',5,0.09,1,'Sẵn sàng'],
  [2,'5 Office Fragrances That Never Offend','Practical trust','Giải quyết vấn đề','Nhận định biên tập','Giải đúng bài toán mua thật cho dân văn phòng',4,0.07,1,'Sẵn sàng'],
  [3,'Bleu de Chanel vs Dior Sauvage','Debate','Battle','Nhận định biên tập','Đối đầu 2 big name để kéo comment và phe phái',3,0.08,1,'Lên kế hoạch'],
  [4,'Most Complimented Men\'s Fragrances','Máy kéo view','Ranking','Editorial + audience demand','Social proof + desire rất mạnh',5,0.085,2,'Backlog'],
  [5,'5 Fragrance Mistakes Men Keep Making','Education','Giải quyết vấn đề','Nhận định biên tập','Pain-point hook cho nam phổ thông',4,0.065,2,'Backlog'],
  [6,'Fragrances That Smell Expensive','Aspirational','Giải quyết vấn đề','Nhận định biên tập','Luxury angle + buyer intent cao',5,0.075,2,'Backlog'],
  [7,'Best Signature Scents for Men Over 40','Authority','Giải quyết vấn đề','Nhận định biên tập','Đúng tệp core 35–54 tuổi',6,0.07,3,'Backlog'],
  [8,'Aventus vs Hacivat','Debate','Battle','Nhận định biên tập','Debate niche vừa đủ, chưa quá hẹp',4,0.06,3,'Backlog'],
  [9,'Best Office Fragrances for Men','Máy kéo view','Ranking','Nhận định biên tập','Keyword broad + practical intent rõ',5,0.08,3,'Backlog'],
  [10,'Date Night Fragrances Women Actually Like','Aspirational','Giải quyết vấn đề','Nhận định biên tập','Female framing nhưng vẫn bám lane nam',5,0.07,4,'Backlog'],
  [11,'Fragrances for Men Who Want Respect, Not Attention','Authority','Opinion','Nhận định biên tập','Identity-based positioning cho audience trưởng thành',6,0.055,4,'Backlog'],
  [12,'Best Masculine Fragrances of All Time','Máy kéo view','Ranking','Nhận định biên tập','Mass masculine framing + bottle recognition tốt',6,0.085,4,'Backlog']
];
const sheet3Rows = [rowXml(1,[cStr('A1','Ưu tiên',4),cStr('B1','Chủ đề video',4),cStr('C1','Trụ cột',4),cStr('D1','Format',4),cStr('E1','Nguồn uy tín',4),cStr('F1','Hook chính',4),cStr('G1','Điểm effort',4),cStr('H1','CTR mục tiêu',4),cStr('I1','Lượt xem dự kiến',4),cStr('J1','Tuần đăng',4),cStr('K1','Trạng thái',4)])];
for (let i=0;i<pipeline.length;i++) {
  const r = i + 2;
  const [priority, topic, pillar, format, source, hook, effort, ctr, week, status] = pipeline[i];
  const formula = `IF(D${r}="Ranking",Gia_dinh!$B$2*(1+H${r}),IF(D${r}="Battle",Gia_dinh!$B$3*(1+H${r}),IF(D${r}="Giải quyết vấn đề",Gia_dinh!$B$4*(1+H${r}),Gia_dinh!$B$5*(1+H${r}))))`;
  sheet3Rows.push(rowXml(r,[
    cNum(`A${r}`, priority, 9), cStr(`B${r}`, topic), cStr(`C${r}`, pillar), cStr(`D${r}`, format), cStr(`E${r}`, source), cStr(`F${r}`, hook), cNum(`G${r}`, effort, 9), cNum(`H${r}`, ctr, 7), cFormula(`I${r}`, formula, 13), cNum(`J${r}`, week, 9), cStr(`K${r}`, status)
  ]));
}
const sheet3 = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="10" customWidth="1"/><col min="2" max="2" width="36" customWidth="1"/><col min="3" max="4" width="20" customWidth="1"/><col min="5" max="5" width="24" customWidth="1"/><col min="6" max="6" width="46" customWidth="1"/><col min="7" max="7" width="12" customWidth="1"/><col min="8" max="9" width="15" customWidth="1"/><col min="10" max="11" width="12" customWidth="1"/></cols>
  <sheetData>
${sheet3Rows.join('\n')}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>`;
fs.writeFileSync(path.join(WORK, 'xl/worksheets/sheet3.xml'), sheet3, 'utf8');

const sheet4Rows = [
  rowXml(1,[cStr('A1','Tuần',4),cStr('B1','Ngày đăng',4),cStr('C1','Video chính',4),cStr('D1','Video phụ',4),cStr('E1','Video thứ ba',4),cStr('F1','Mục tiêu tuần',4)]),
  rowXml(2,[cStr('A2','Tuần 1'),cNum('B2',46012,15),cStr('C2','Top 50 Freshest Fragrances for Men 2025'),cStr('D2','5 Office Fragrances That Never Offend'),cStr('E2','Bleu de Chanel vs Dior Sauvage'),cStr('F2','Mở bằng format thắng + practical follow-up')]),
  rowXml(3,[cStr('A3','Tuần 2'),cNum('B3',46019,15),cStr('C3','Most Complimented Men\'s Fragrances'),cStr('D3','5 Fragrance Mistakes Men Keep Making'),cStr('E3','Fragrances That Smell Expensive'),cStr('F3','Chèn battle và pain-point để phá nhịp')]),
  rowXml(4,[cStr('A4','Tuần 3'),cNum('B4',46026,15),cStr('C4','Best Signature Scents for Men Over 40'),cStr('D4','Aventus vs Hacivat'),cStr('E4','Best Office Fragrances for Men'),cStr('F4','Quay lại ranking sau khi đã đổi nhịp')]),
  rowXml(5,[cStr('A5','Tuần 4'),cNum('B5',46033,15),cStr('C5','Date Night Fragrances Women Actually Like'),cStr('D5','Fragrances for Men Who Want Respect, Not Attention'),cStr('E5','Best Masculine Fragrances of All Time'),cStr('F5','Đóng bằng identity/authority để tăng loyalty')])
];
const sheet4 = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="12" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="5" width="36" customWidth="1"/><col min="6" max="6" width="44" customWidth="1"/></cols>
  <sheetData>
${sheet4Rows.join('\n')}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>`;
fs.writeFileSync(path.join(WORK, 'xl/worksheets/sheet4.xml'), sheet4, 'utf8');

const sheet5Rows = [
  rowXml(1,[cStr('A1','Bài học đáng học từ repo Nova',4)]),
  rowXml(3,[cStr('A3','Hạng mục',4),cStr('B3','Điều đáng lấy',4),cStr('C3','Cách áp vào kênh này',4)]),
  rowXml(4,[cStr('A4','Feedback loop'),cStr('B4','Log video win/flop + lý do + pattern. Không lặp lại angle fail.'),cStr('C4','Tạo file theo dõi riêng cho winner patterns và flop graveyard.')]),
  rowXml(5,[cStr('A5','Memory loop'),cStr('B5','Mỗi lần làm idea mới đều đọc lại insight cũ trước khi ra quyết định.'),cStr('C5','Buộc hệ thống đọc performance log, audience model và blacklist topic trước khi brainstorm.')]),
  rowXml(6,[cStr('A6','Competitor scan'),cStr('B6','Tìm outlier video của đối thủ để bóc pattern topic/title/thumbnail.'),cStr('C6','Chỉ lấy pattern, không copy nội dung; ưu tiên các kênh nam trưởng thành / fragrance mass.')]),
  rowXml(7,[cStr('A7','Pipeline khép kín'),cStr('B7','Idea → title → thumbnail hook → script → publish → log kết quả.'),cStr('C7','Biến mỗi video thành 1 vòng lặp học tập, không chỉ là đăng xong rồi quên.')]),
  rowXml(8,[cStr('A8','Anti-repeat system'),cStr('B8','Ý tưởng bị reject hoặc flop phải có lý do ghi lại.'),cStr('C8','Lần sau brainstorm phải check blacklist trước.')]),
  rowXml(9,[cStr('A9','Không nên bê nguyên'),cStr('B9','Repo này quá generic cho mọi niche.'),cStr('C9','Chỉ lấy framework; phải custom thành fragrance male system riêng.')])
];
const sheet5 = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="52" customWidth="1"/><col min="3" max="3" width="58" customWidth="1"/></cols>
  <sheetData>
${sheet5Rows.join('\n')}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>`;
fs.writeFileSync(path.join(WORK, 'xl/worksheets/sheet5.xml'), sheet5, 'utf8');

if (fs.existsSync(OUT)) fs.rmSync(OUT, { force: true });
const zipPath = OUT.replace(/\.xlsx$/, '.zip');
if (fs.existsSync(zipPath)) fs.rmSync(zipPath, { force: true });
execFileSync('powershell', ['-NoProfile','-Command', `Compress-Archive -Path '${WORK.replace(/'/g,"''")}/*' -DestinationPath '${zipPath.replace(/'/g,"''")}' -Force`], { stdio: 'inherit' });
fs.renameSync(zipPath, OUT);
console.log(OUT);
