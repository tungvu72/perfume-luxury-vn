import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const MOCK_PATH = path.resolve("src/constants/mockData.ts");
const CARDS_DIR = path.resolve("fragrantica_cards");
const PUBLIC_DIR = path.resolve("public");
const REPORT_PATH = path.resolve("docs/reports/fix-open-audit-items-2026-04-15.json");

function loadSource() {
  return fs.readFileSync(MOCK_PATH, "utf8");
}

function evalProducts(tsSource) {
  const source = tsSource
    .replace(/^\uFEFF?/, "")
    .replace(/^import[^\n]*\n/m, "")
    .replace(/export const MASTER_PERFUMES:\s*Perfume\[\]\s*=/, "const MASTER_PERFUMES =");
  const sandbox = {};
  vm.runInNewContext(`${source}\nthis.data = MASTER_PERFUMES;`, sandbox, { timeout: 10000 });
  return sandbox.data;
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u0111\u0110]/g, "d")
    .toLowerCase();
}

function getStt(product) {
  const candidates = [
    product.image,
    ...(Array.isArray(product.images) ? product.images.map((x) => x?.url) : []),
  ].filter(Boolean);
  for (const value of candidates) {
    const match = String(value).match(/\/(\d{3})-[^/]+/);
    if (match) return match[1];
  }
  return "";
}

function hasLocalImage(url) {
  if (!url || !String(url).startsWith("/images/")) return true;
  const filePath = path.join(PUBLIC_DIR, String(url).replace(/^\//, ""));
  return fs.existsSync(filePath);
}

function seasonLabel(seasons) {
  const map = {
    spring: "mùa xuân",
    summer: "mùa hè",
    fall: "mùa thu",
    winter: "mùa đông",
  };
  const pairs = Object.entries(seasons || {})
    .filter(([, value]) => Number(value) > 0)
    .sort((a, b) => Number(b[1]) - Number(a[1]));
  if (pairs.length === 0) return "quanh năm";
  if (pairs.length === 1) return map[pairs[0][0]] || "quanh năm";
  return `${map[pairs[0][0]] || "quanh năm"} và ${map[pairs[1][0]] || "quanh năm"}`;
}

function dayNightLabel(dayNight) {
  const day = Number(dayNight?.day || 0);
  const night = Number(dayNight?.night || 0);
  if (day >= 60) return "ban ngày";
  if (night >= 60) return "buổi tối";
  return "cả ngày lẫn tối";
}

function genderLabel(gender) {
  if (gender === "nam") return "nam giới";
  if (gender === "nu") return "nữ giới";
  return "cả nam và nữ";
}

function safeString(value, fallback) {
  const text = String(value || "").trim();
  return text || fallback;
}

function buildArticle(product) {
  const brandName = safeString(product.brand, "Sản phẩm");
  const perfumeName = safeString(product.name, "này");
  const accord = safeString(product?.accords?.[0]?.name, "mùi hương cân bằng");
  const total = Number(product?.score?.total || 0).toFixed(1);
  const longevity = Number(product?.longevity || 0);
  const sillage = Number(product?.sillage || 0);
  const seasons = seasonLabel(product?.seasons);
  const dayNight = dayNightLabel(product?.dayNight);
  const gender = genderLabel(product?.gender);
  const priceLine =
    Number(product?.basePrice || 0) > 0
      ? `${brandName} ${perfumeName} có mức giá tham chiếu khoảng ${Number(product.basePrice).toLocaleString("vi-VN")} VND.`
      : `${brandName} ${perfumeName} nằm ở nhóm giá cần cân nhắc theo nguồn hàng và dung tích thực tế.`;

  return `### Ai không nên mua?

Nếu bạn đang tìm một mùi hương quá phá cách hoặc hiệu năng bùng nổ ngay từ đầu, ${brandName} ${perfumeName} có thể chưa phải lựa chọn phù hợp. DNA của chai này thiên về ${accord} và hướng dùng an toàn cho ${gender}. Ai thích phong cách quá gai góc hoặc nặng đô nên test kỹ trước khi mua blind buy.

### Có đáng tiền không?

${priceLine} Với điểm tổng ${total}/10, độ lưu hương ${longevity}/10 và độ tỏa ${sillage}/10, đây là lựa chọn đáng cân nhắc nếu bạn ưu tiên sự ổn định và tính ứng dụng hằng ngày. So với mặt bằng cùng phân khúc, chai này đáng tiền khi cần mùi hương dễ dùng, ít rủi ro.

### Nên dùng khi nào?

Chai này dùng đẹp nhất vào ${seasons}, phù hợp ${dayNight}. Gợi ý xịt 2-4 nhát ở cổ và cổ tay; tăng nhẹ khi ở không gian thoáng hoặc cần độ hiện diện cao hơn. Hợp đi làm, đi chơi nhẹ và những tình huống cần mùi hương lịch sự, dễ chịu.`;
}

function renderImages(images, indent = "    ") {
  const itemIndent = `${indent}  `;
  const lines = images.map((image) => {
    const parts = [];
    if (Object.prototype.hasOwnProperty.call(image, "url")) {
      parts.push(`url: ${JSON.stringify(image.url)}`);
    }
    if (Object.prototype.hasOwnProperty.call(image, "source")) {
      parts.push(`source: ${JSON.stringify(image.source)}`);
    }
    if (Object.prototype.hasOwnProperty.call(image, "caption")) {
      parts.push(`caption: ${JSON.stringify(image.caption)}`);
    }
    if (Object.prototype.hasOwnProperty.call(image, "verified")) {
      parts.push(`verified: ${image.verified ? "true" : "false"}`);
    }
    for (const [key, value] of Object.entries(image)) {
      if (["url", "source", "caption", "verified"].includes(key)) continue;
      parts.push(`${key}: ${JSON.stringify(value)}`);
    }
    return `${itemIndent}{ ${parts.join(", ")} }`;
  });
  return `${indent}images: [\n${lines.join(",\n")}\n${indent}],`;
}

function extractObjectRanges(source) {
  const exportMatch = source.match(/export const MASTER_PERFUMES:\s*Perfume\[\]\s*=\s*\[/);
  if (!exportMatch) throw new Error("Cannot find MASTER_PERFUMES export.");
  const arrayStart = exportMatch.index + exportMatch[0].length;

  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escaped = false;
  let depth = 0;
  let start = -1;
  const ranges = [];

  for (let i = arrayStart; i < source.length; i += 1) {
    const ch = source[i];
    const prev = source[i - 1];

    if (inSingle || inDouble || inTemplate) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (inSingle && ch === "'" && prev !== "\\") {
        inSingle = false;
      } else if (inDouble && ch === '"' && prev !== "\\") {
        inDouble = false;
      } else if (inTemplate && ch === "`" && prev !== "\\") {
        inTemplate = false;
      }
      continue;
    }

    if (ch === "'") {
      inSingle = true;
      continue;
    }
    if (ch === '"') {
      inDouble = true;
      continue;
    }
    if (ch === "`") {
      inTemplate = true;
      continue;
    }

    if (ch === "{") {
      if (depth === 0) start = i;
      depth += 1;
      continue;
    }
    if (ch === "}") {
      depth -= 1;
      if (depth === 0 && start >= 0) {
        ranges.push({ start, end: i + 1 });
        start = -1;
      }
      continue;
    }

    if (ch === "]" && depth === 0) {
      break;
    }
  }
  return ranges;
}

function dedupeImages(images) {
  const output = [];
  const seen = new Set();
  for (const image of images || []) {
    const url = String(image?.url || "").trim();
    if (!url) continue;
    const key = url.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    output.push(image);
  }
  return output;
}

function ensureCardFiles(products) {
  if (!fs.existsSync(CARDS_DIR)) return [];

  const missing = [];
  const files = fs.readdirSync(CARDS_DIR);
  const byStt = new Map();
  for (const file of files) {
    const match = file.match(/^(\d{1,3})\s*[._-]/);
    if (!match) continue;
    const stt = match[1].padStart(3, "0");
    if (!byStt.has(stt)) byStt.set(stt, []);
    byStt.get(stt).push(file);
  }

  for (const product of products) {
    const stt = getStt(product);
    if (!stt) continue;
    if (byStt.has(stt)) continue;
    missing.push({ id: product.id, stt, name: product.name, brand: product.brand });
  }

  const copied = [];
  const manualMap = [
    { stt: "017", from: "19. BYREDO Bal d'Afrique EDP.jpeg", to: "017. BYREDO Bal d'Afrique EDP.jpeg" },
    { stt: "018", from: "11. Byredo Blanche EDP.jpeg", to: "018. BYREDO Blanche EDP.jpeg" },
    { stt: "022", from: "23. CHANEL Allure EDP.jpeg", to: "022. CHANEL Allure EDP.jpeg" },
  ];

  for (const item of manualMap) {
    const source = path.join(CARDS_DIR, item.from);
    const target = path.join(CARDS_DIR, item.to);
    if (!fs.existsSync(source)) continue;
    if (!fs.existsSync(target)) {
      fs.copyFileSync(source, target);
      copied.push({ stt: item.stt, from: item.from, to: item.to });
    }
  }

  return { missingBefore: missing, copied };
}

function audit(products) {
  const needSections = ["ai khong nen mua", "co dang tien khong", "nen dung khi nao"];

  const cards = fs.existsSync(CARDS_DIR) ? fs.readdirSync(CARDS_DIR) : [];
  const cardSttSet = new Set(
    cards
      .map((file) => {
        const match = file.match(/^(\d{1,3})\s*[._-]/);
        return match ? match[1].padStart(3, "0") : "";
      })
      .filter(Boolean),
  );

  const summary = {
    missing_article: 0,
    missing_article_sections: 0,
    missing_gallery_files: 0,
    duplicate_gallery_urls: 0,
    missing_card_file_by_stt: 0,
  };
  const detail = {
    missing_article: [],
    missing_article_sections: [],
    missing_gallery_files: [],
    duplicate_gallery_urls: [],
    missing_card_file_by_stt: [],
  };

  for (const product of products) {
    const stt = getStt(product);
    const article = String(product.article || "").trim();
    if (!article) {
      summary.missing_article += 1;
      detail.missing_article.push({ id: product.id, stt });
    } else {
      const articleNorm = normalizeText(article);
      const missingSections = needSections.filter((section) => !articleNorm.includes(section));
      if (missingSections.length) {
        summary.missing_article_sections += 1;
        detail.missing_article_sections.push({ id: product.id, stt, missingSections });
      }
    }

    const images = Array.isArray(product.images) ? product.images : [];
    const seen = new Set();
    let dupCount = 0;
    for (const image of images) {
      const url = String(image?.url || "").trim();
      if (!url) continue;
      const key = url.toLowerCase();
      if (seen.has(key)) dupCount += 1;
      else seen.add(key);
      if (!hasLocalImage(url)) {
        summary.missing_gallery_files += 1;
        detail.missing_gallery_files.push({ id: product.id, stt, url });
      }
    }
    if (dupCount > 0) {
      summary.duplicate_gallery_urls += 1;
      detail.duplicate_gallery_urls.push({ id: product.id, stt, dupCount });
    }

    if (stt && !cardSttSet.has(stt)) {
      summary.missing_card_file_by_stt += 1;
      detail.missing_card_file_by_stt.push({ id: product.id, stt });
    }
  }

  return { summary, detail };
}

function main() {
  const source = loadSource();
  const products = evalProducts(source);
  const before = audit(products);

  const missingArticleIds = new Set(before.detail.missing_article.map((item) => item.id));
  const duplicateIds = new Set(before.detail.duplicate_gallery_urls.map((item) => item.id));
  const productById = new Map(products.map((product) => [product.id, product]));

  const ranges = extractObjectRanges(source);
  let output = source;
  const edits = [];

  for (let i = ranges.length - 1; i >= 0; i -= 1) {
    const range = ranges[i];
    const objectText = output.slice(range.start, range.end);
    const idMatch = objectText.match(/id:\s*"([^"]+)"/);
    if (!idMatch) continue;
    const id = idMatch[1];
    let updated = objectText;
    let changed = false;

    if (duplicateIds.has(id)) {
      const imagesMatch = updated.match(/(^\s*images:\s*\[)([\s\S]*?)(^\s*\],)/m);
      if (imagesMatch) {
        const arraySource = `[${imagesMatch[2]}]`;
        let parsedImages = [];
        try {
          parsedImages = vm.runInNewContext(arraySource, {}, { timeout: 1000 });
        } catch {
          parsedImages = [];
        }
        const deduped = dedupeImages(parsedImages);
        const replacement = renderImages(deduped);
        updated =
          updated.slice(0, imagesMatch.index) +
          replacement +
          updated.slice(imagesMatch.index + imagesMatch[0].length);
        changed = true;
      }
    }

    if (missingArticleIds.has(id)) {
      const product = productById.get(id);
      if (product) {
        const article = buildArticle(product);
        const articleField = `    article: \`${article}\`,\n`;

        if (/^\s*article:\s*/m.test(updated)) {
          updated = updated.replace(/^\s*article:\s*[\s\S]*?,\n/m, articleField);
        } else {
          const insertBefore = updated.match(/^\s*verdict:\s*/m) || updated.match(/^\s*verdictShort:\s*/m);
          if (insertBefore && typeof insertBefore.index === "number") {
            updated = updated.slice(0, insertBefore.index) + articleField + updated.slice(insertBefore.index);
          } else {
            updated = updated.replace(/\n\s*isPublished:\s*true\s*$/m, `\n${articleField}    isPublished: true`);
          }
        }
        changed = true;
      }
    }

    if (!changed) continue;
    output = output.slice(0, range.start) + updated + output.slice(range.end);
    edits.push(id);
  }

  fs.writeFileSync(MOCK_PATH, output, "utf8");

  const cardFix = ensureCardFiles(evalProducts(output));
  const after = audit(evalProducts(loadSource()));

  const report = {
    generatedAt: new Date().toISOString(),
    before: before.summary,
    after: after.summary,
    updatedProducts: edits.length,
    updatedProductIds: edits.sort(),
    cards: cardFix,
  };

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2), "utf8");
  console.log(JSON.stringify(report, null, 2));
}

main();
