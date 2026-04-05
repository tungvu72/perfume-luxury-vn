const sharp = require('sharp');
const fs = require('fs');

async function addWatermark() {
    try {
        const inputPath = 'd:/anti/perfume-luxury-vn/public/images/products/black-orchid/nuoc-hoa-unisex-tom-ford-black-orchid-thuc-te-1.jpg';
        if (!fs.existsSync(inputPath)) {
            console.log('Source image not found');
            return;
        }
        const outputPath = 'd:/anti/perfume-luxury-vn/public/images/products/black-orchid/watermark-sample.webp';

        // Create SVG text watermark
        const svgText = `
      <svg width="400" height="100">
        <style>
          .title { fill: rgba(255, 255, 255, 0.4); font-size: 28px; font-family: sans-serif; font-weight: bold; }
        </style>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="title">MAISON DE SON</text>
      </svg>
    `;

        await sharp(inputPath)
            .resize(800, null, { withoutEnlargement: true }) // Resize to max 800px width for web optimization
            .composite([{
                input: Buffer.from(svgText),
                gravity: 'southeast' // Position watermark at bottom-right
            }])
            .webp({ quality: 80 }) // Convert to webp with 80% quality
            .toFile(outputPath);

        console.log('Watermark applied successfully! Saved to:', outputPath);
    } catch (err) {
        console.error('Error applying watermark:', err);
    }
}

addWatermark();
