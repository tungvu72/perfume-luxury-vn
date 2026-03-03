#!/usr/bin/env node
import { promises as fs } from "fs";
import { join } from "path";

const BUYING_GUIDES_DIR = join(process.cwd(), "content", "buying-guides");

async function main() {
    console.log("🚀 Import articles từ content/buying-guides/");
    const files = await fs.readdir(BUYING_GUIDES_DIR);
    const mdFiles = files.filter(f => f.endsWith(".md"));
    console.log(`✅ Tìm thấy ${mdFiles.length} file markdown`);
    mdFiles.forEach((f, i) => console.log(`  ${i + 1}. ${f}`));
    console.log("\n🔗 Dynamic route: /kien-thuc/[slug]");
    console.log("✨ Import hoàn tất!");
}

main();
