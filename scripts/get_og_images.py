import requests
from bs4 import BeautifulSoup

urls = [
    'https://www.fragrantica.com/perfume/Chanel/Chanel-No-19-Eau-de-Toilette-11.html',
    'https://www.fragrantica.com/perfume/Dolce-Gabbana/Light-Blue-Eau-Intense-Pour-Homme-44778.html',
    'https://www.fragrantica.com/perfume/Jean-Paul-Gaultier/Le-Male-Elixir-81642.html',
    'https://www.fragrantica.com/perfume/Tom-Ford/Noir-Extreme-29675.html',
    'https://www.fragrantica.com/perfume/Tom-Ford/Vanilla-Sex-88126.html'
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
}

for u in urls:
    try:
        resp = requests.get(u, headers=headers, timeout=15)
        soup = BeautifulSoup(resp.text, 'html.parser')
        og_img = soup.find('meta', property='og:image')
        if og_img:
            print(f"{u} -> {og_img['content']}")
        else:
            print(f"{u} -> NOT FOUND")
    except Exception as e:
        print(f"{u} -> ERROR: {e}")
