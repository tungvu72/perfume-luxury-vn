import re

with open('src/app/thuong-hieu/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_meta = '''export const metadata: Metadata = {
    title: "Danh SÃ¡ch ThÆ°Æ¡ng Hiá»‡u NÆ°á»›c Hoa A-Z | Maison de SON",
    description: "Tra cá»©u nhanh táº¥t cáº£ thÆ°Æ¡ng hiá»‡u nÆ°á»›c hoa tá»« A Ä'áº¿n Z: Chanel, Dior, Creed, HermÃ¨s, Louis Vuitton vÃ  hÆ¡n tháº¿ ná»¯a.",
};'''

new_meta = '''export const metadata: Metadata = {
    title: "Thuong hieu nuoc hoa - Maison de SON",
    description: "Kham pha cac thuong hieu nuoc hoa cao cap chinh hang. Danh gia chuyen sau tu chuyen gia.",
};'''

content = content.replace(old_meta, new_meta)

with open('src/app/thuong-hieu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('BUG-01 fixed!')
