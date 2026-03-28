from pathlib import Path
from xml.sax.saxutils import escape
import shutil
import subprocess

ROOT = Path(r'D:/anti/perfume-luxury-vn')
SKILL_DIR = ROOT / '.agents' / 'skills' / 'minimax-xlsx'
TEMPLATE = SKILL_DIR / 'templates' / 'minimal_xlsx'
WORK = ROOT / 'tmp' / 'youtube-plan-xlsx-work'
OUT = ROOT / 'deliverables' / 'youtube-content-plan-2026-03-28.xlsx'

if WORK.exists():
    shutil.rmtree(WORK)
shutil.copytree(TEMPLATE, WORK)

# Add one custom format for dates and three style slots for green numeric refs/date
styles = (WORK / 'xl' / 'styles.xml').read_text(encoding='utf-8')
styles = styles.replace('<numFmts count="4">', '<numFmts count="5">')
styles = styles.replace(
    '<numFmt numFmtId="167" formatCode="#,##0"/>',
    '<numFmt numFmtId="167" formatCode="#,##0"/>\n    <numFmt numFmtId="168" formatCode="m/d/yyyy"/>'
)
styles = styles.replace('<cellXfs count="13">', '<cellXfs count="16">')
styles = styles.replace(
    '</cellXfs>',
    '    <!-- 13: Cross-sheet reference + integer -->\n'
    '    <xf numFmtId="167" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n'
    '    <!-- 14: Cross-sheet reference + percentage -->\n'
    '    <xf numFmtId="165" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n'
    '    <!-- 15: Date -->\n'
    '    <xf numFmtId="168" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n'
    '</cellXfs>'
)
(WORK / 'xl' / 'styles.xml').write_text(styles, encoding='utf-8')

workbook = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
    <sheet name="Summary" sheetId="1" r:id="rId1"/>
    <sheet name="Assumptions" sheetId="2" r:id="rId4"/>
    <sheet name="Video_Pipeline" sheetId="3" r:id="rId5"/>
    <sheet name="Calendar" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>
'''
(WORK / 'xl' / 'workbook.xml').write_text(workbook, encoding='utf-8')

rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>
'''
(WORK / 'xl' / '_rels' / 'workbook.xml.rels').write_text(rels, encoding='utf-8')

content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>
'''
(WORK / '[Content_Types].xml').write_text(content_types, encoding='utf-8')

strings = []
index = {}

def s(text: str) -> int:
    if text not in index:
        index[text] = len(strings)
        strings.append(text)
    return index[text]

# Common labels
for t in [
    'YouTube Fragrance Content Plan — Detailed Execution Report',
    'Metric','Value','Notes',
    'Next 30 days planned videos','Target: 8 uploads with format mix to avoid audience fatigue',
    'Ranking videos','Use as growth engine, but cap below 60% of output',
    'Non-ranking videos','Includes battle, problem-solving, and authority pieces',
    'Average CTR goal','Target weighted toward mass-appeal male topics',
    'Average effort score','Keep average under 7.0 to maintain speed',
    'Expected views (sum)','Modelled from format baselines and CTR uplift',
    'Week 1 uploads','Warm start with proven winner + practical follow-up',
    'Week 2 uploads','Add battle format to break repetition',
    'Format mix check','Ranking share should stay under 60%',
    'Assumption','Base / Rule','Comment',
    'Ranking baseline views','Built from winner format and browse-heavy discovery',
    'Battle baseline views','Good for comments and debate, usually lower than ranking',
    'Problem-solving baseline views','Useful and practical, strong buyer intent',
    'Authority baseline views','Opinion-based, best for loyalty not pure reach',
    'Upload target next 30 days','4-week sprint target',
    'Max ranking share','Anti-fatigue guardrail',
    'Min non-ranking share','Protect channel variety',
    'Priority','Video Topic','Pillar','Format','Authority Source','Core Hook','Effort Score','CTR Goal','Expected Views','Publish Week','Status',
    'Freshest Fragrances for Men 2025','Growth engine','Ranking','Fragrantica Awards 2025','Fast authority ranking + seasonal relevance',
    '5 Office Fragrances That Never Offend','Practical trust','Problem-solving','Editorial judgement','Solve a common buying problem fast',
    'Bleu de Chanel vs Dior Sauvage','Debate','Battle','Editorial judgement','Big brand battle to trigger comments',
    'Most Complimented Men\'s Fragrances','Growth engine','Ranking','Editorial + audience demand','Mass desire and social proof',
    '5 Fragrance Mistakes Men Keep Making','Education','Problem-solving','Editorial judgement','Pain-point hook for broader male audience',
    'Fragrances That Smell Expensive','Aspirational','Problem-solving','Editorial judgement','Luxury angle with high buyer intent',
    'Best Signature Scents for Men Over 40','Authority','Problem-solving','Editorial judgement','Fits mature core audience directly',
    'Aventus vs Hacivat','Debate','Battle','Editorial judgement','Niche debate without going too obscure',
    'Best Office Fragrances for Men','Growth engine','Ranking','Editorial judgement','Broad office keyword with practical intent',
    'Date Night Fragrances Women Actually Like','Aspirational','Problem-solving','Editorial judgement','Female-preference framing without switching to women lane',
    'Fragrances for Men Who Want Respect, Not Attention','Authority','Opinion','Editorial judgement','Identity-based positioning for mature audience',
    'Best Masculine Fragrances of All Time','Growth engine','Ranking','Editorial judgement','Mass masculine framing with broad bottle recognition',
    'Ready','Backlog','Planned','Draft',
    'Week','Publish Date','Primary Video','Secondary Video','Third Video','Theme',
    'Week 1','Week 2','Week 3','Week 4',
    'Launch proven winner + practical follow-up','Debate week to reduce sameness','Return to ranking after format break','Identity/authority close to deepen loyalty'
]:
    s(t)

# Shared strings XML
shared = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
          f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">']
for t in strings:
    shared.append(f'  <si><t>{escape(t)}</t></si>')
shared.append('</sst>')
(WORK / 'xl' / 'sharedStrings.xml').write_text('\n'.join(shared), encoding='utf-8')


def c_str(ref, text, style=0):
    return f'<c r="{ref}" t="s" s="{style}"><v>{index[text]}</v></c>'

def c_num(ref, value, style=0):
    return f'<c r="{ref}" s="{style}"><v>{value}</v></c>'

def c_formula(ref, formula, style=2):
    return f'<c r="{ref}" s="{style}"><f>{escape(formula)}</f><v></v></c>'


def row_xml(r, cells):
    return f'    <row r="{r}">' + ''.join(cells) + '</row>'

sheet1_rows = [
    row_xml(1,[c_str('A1','YouTube Fragrance Content Plan — Detailed Execution Report',4)]),
    row_xml(3,[c_str('A3','Metric',4),c_str('B3','Value',4),c_str('C3','Notes',4)]),
    row_xml(4,[c_str('A4','Next 30 days planned videos'),c_formula('B4','COUNTA(Video_Pipeline!B2:B13)',13),c_str('C4','Target: 8 uploads with format mix to avoid audience fatigue')]),
    row_xml(5,[c_str('A5','Ranking videos'),c_formula('B5','COUNTIF(Video_Pipeline!D2:D13,"Ranking")',13),c_str('C5','Use as growth engine, but cap below 60% of output')]),
    row_xml(6,[c_str('A6','Non-ranking videos'),c_formula('B6','B4-B5',10),c_str('C6','Includes battle, problem-solving, and authority pieces')]),
    row_xml(7,[c_str('A7','Average CTR goal'),c_formula('B7','AVERAGE(Video_Pipeline!H2:H13)',8),c_str('C7','Target weighted toward mass-appeal male topics')]),
    row_xml(8,[c_str('A8','Average effort score'),c_formula('B8','AVERAGE(Video_Pipeline!G2:G13)',10),c_str('C8','Keep average under 7.0 to maintain speed')]),
    row_xml(9,[c_str('A9','Expected views (sum)'),c_formula('B9','SUM(Video_Pipeline!I2:I13)',13),c_str('C9','Modelled from format baselines and CTR uplift')]),
    row_xml(10,[c_str('A10','Week 1 uploads'),c_formula('B10','COUNTA(Calendar!C2:E2)',13),c_str('C10','Warm start with proven winner + practical follow-up')]),
    row_xml(11,[c_str('A11','Week 2 uploads'),c_formula('B11','COUNTA(Calendar!C3:E3)',13),c_str('C11','Add battle format to break repetition')]),
    row_xml(12,[c_str('A12','Format mix check'),c_formula('B12','B5/B4',14),c_str('C12','Ranking share should stay under 60%')]),
]

sheet1 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="32" customWidth="1"/>
    <col min="2" max="2" width="16" customWidth="1"/>
    <col min="3" max="3" width="55" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(sheet1_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
(WORK / 'xl' / 'worksheets' / 'sheet1.xml').write_text(sheet1, encoding='utf-8')

sheet2_rows = [
    row_xml(1,[c_str('A1','Assumption',4),c_str('B1','Base / Rule',4),c_str('C1','Comment',4)]),
    row_xml(2,[c_str('A2','Ranking baseline views'),c_num('B2',35000,9),c_str('C2','Built from winner format and browse-heavy discovery')]),
    row_xml(3,[c_str('A3','Battle baseline views'),c_num('B3',18000,9),c_str('C3','Good for comments and debate, usually lower than ranking')]),
    row_xml(4,[c_str('A4','Problem-solving baseline views'),c_num('B4',22000,9),c_str('C4','Useful and practical, strong buyer intent')]),
    row_xml(5,[c_str('A5','Authority baseline views'),c_num('B5',12000,9),c_str('C5','Opinion-based, best for loyalty not pure reach')]),
    row_xml(6,[c_str('A6','Upload target next 30 days'),c_num('B6',8,9),c_str('C6','4-week sprint target')]),
    row_xml(7,[c_str('A7','Max ranking share'),c_num('B7',0.6,7),c_str('C7','Anti-fatigue guardrail')]),
    row_xml(8,[c_str('A8','Min non-ranking share'),c_num('B8',0.4,7),c_str('C8','Protect channel variety')]),
]

sheet2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="28" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="60" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(sheet2_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
(WORK / 'xl' / 'worksheets' / 'sheet2.xml').write_text(sheet2, encoding='utf-8')

pipeline_data = [
    [1,'Freshest Fragrances for Men 2025','Growth engine','Ranking','Fragrantica Awards 2025','Fast authority ranking + seasonal relevance',5,0.09,1,'Ready'],
    [2,'5 Office Fragrances That Never Offend','Practical trust','Problem-solving','Editorial judgement','Solve a common buying problem fast',4,0.07,1,'Ready'],
    [3,'Bleu de Chanel vs Dior Sauvage','Debate','Battle','Editorial judgement','Big brand battle to trigger comments',3,0.08,2,'Planned'],
    [4,'Most Complimented Men\'s Fragrances','Growth engine','Ranking','Editorial + audience demand','Mass desire and social proof',5,0.085,2,'Backlog'],
    [5,'5 Fragrance Mistakes Men Keep Making','Education','Problem-solving','Editorial judgement','Pain-point hook for broader male audience',4,0.065,2,'Backlog'],
    [6,'Fragrances That Smell Expensive','Aspirational','Problem-solving','Editorial judgement','Luxury angle with high buyer intent',5,0.075,3,'Backlog'],
    [7,'Best Signature Scents for Men Over 40','Authority','Problem-solving','Editorial judgement','Fits mature core audience directly',6,0.07,3,'Backlog'],
    [8,'Aventus vs Hacivat','Debate','Battle','Editorial judgement','Niche debate without going too obscure',4,0.06,3,'Backlog'],
    [9,'Best Office Fragrances for Men','Growth engine','Ranking','Editorial judgement','Broad office keyword with practical intent',5,0.08,4,'Backlog'],
    [10,'Date Night Fragrances Women Actually Like','Aspirational','Problem-solving','Editorial judgement','Female-preference framing without switching to women lane',5,0.07,4,'Backlog'],
    [11,'Fragrances for Men Who Want Respect, Not Attention','Authority','Opinion','Editorial judgement','Identity-based positioning for mature audience',6,0.055,4,'Backlog'],
    [12,'Best Masculine Fragrances of All Time','Growth engine','Ranking','Editorial judgement','Mass masculine framing with broad bottle recognition',6,0.085,4,'Backlog'],
]

sheet3_rows = [row_xml(1,[c_str('A1','Priority',4),c_str('B1','Video Topic',4),c_str('C1','Pillar',4),c_str('D1','Format',4),c_str('E1','Authority Source',4),c_str('F1','Core Hook',4),c_str('G1','Effort Score',4),c_str('H1','CTR Goal',4),c_str('I1','Expected Views',4),c_str('J1','Publish Week',4),c_str('K1','Status',4)])]

for r, item in enumerate(pipeline_data, start=2):
    priority, topic, pillar, fmt, source, hook, effort, ctr, week, status = item
    formula = f'IF(D{r}="Ranking",Assumptions!$B$2*(1+H{r}),IF(D{r}="Battle",Assumptions!$B$3*(1+H{r}),IF(D{r}="Problem-solving",Assumptions!$B$4*(1+H{r}),Assumptions!$B$5*(1+H{r}))))'
    sheet3_rows.append(row_xml(r,[
        c_num(f'A{r}',priority,9),
        c_str(f'B{r}',topic),
        c_str(f'C{r}',pillar),
        c_str(f'D{r}',fmt),
        c_str(f'E{r}',source),
        c_str(f'F{r}',hook),
        c_num(f'G{r}',effort,9),
        c_num(f'H{r}',ctr,7),
        c_formula(f'I{r}',formula,13),
        c_num(f'J{r}',week,9),
        c_str(f'K{r}',status),
    ]))

sheet3 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="34" customWidth="1"/>
    <col min="3" max="4" width="18" customWidth="1"/>
    <col min="5" max="5" width="24" customWidth="1"/>
    <col min="6" max="6" width="44" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="9" width="14" customWidth="1"/>
    <col min="10" max="11" width="12" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(sheet3_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
(WORK / 'xl' / 'worksheets' / 'sheet3.xml').write_text(sheet3, encoding='utf-8')

# Excel serial dates: 2026-03-30, 2026-04-06, 2026-04-13, 2026-04-20
calendar_rows = [
    row_xml(1,[c_str('A1','Week',4),c_str('B1','Publish Date',4),c_str('C1','Primary Video',4),c_str('D1','Secondary Video',4),c_str('E1','Third Video',4),c_str('F1','Theme',4)]),
    row_xml(2,[c_str('A2','Week 1'),c_num('B2',46012,15),c_str('C2','Freshest Fragrances for Men 2025'),c_str('D2','5 Office Fragrances That Never Offend'),c_str('E2','Bleu de Chanel vs Dior Sauvage'),c_str('F2','Launch proven winner + practical follow-up')]),
    row_xml(3,[c_str('A3','Week 2'),c_num('B3',46019,15),c_str('C3','Most Complimented Men\'s Fragrances'),c_str('D3','5 Fragrance Mistakes Men Keep Making'),c_str('E3','Fragrances That Smell Expensive'),c_str('F3','Debate week to reduce sameness')]),
    row_xml(4,[c_str('A4','Week 3'),c_num('B4',46026,15),c_str('C4','Best Signature Scents for Men Over 40'),c_str('D4','Aventus vs Hacivat'),c_str('E4','Best Office Fragrances for Men'),c_str('F4','Return to ranking after format break')]),
    row_xml(5,[c_str('A5','Week 4'),c_num('B5',46033,15),c_str('C5','Date Night Fragrances Women Actually Like'),c_str('D5','Fragrances for Men Who Want Respect, Not Attention'),c_str('E5','Best Masculine Fragrances of All Time'),c_str('F5','Identity/authority close to deepen loyalty')]),
]

sheet4 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="5" width="34" customWidth="1"/>
    <col min="6" max="6" width="42" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(calendar_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
(WORK / 'xl' / 'worksheets' / 'sheet4.xml').write_text(sheet4, encoding='utf-8')

OUT.parent.mkdir(parents=True, exist_ok=True)
subprocess.run(['python', str(SKILL_DIR / 'scripts' / 'xlsx_pack.py'), str(WORK), str(OUT)], check=True)
subprocess.run(['python', str(SKILL_DIR / 'scripts' / 'formula_check.py'), str(OUT)], check=True)
print(OUT)
