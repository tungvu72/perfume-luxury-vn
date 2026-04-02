const fs = require('fs');
const mockData = fs.readFileSync('src/constants/mockData.ts', 'utf8');

const missingProducts = ['the-most-wanted-parfum', 'absolu-aventus', 'alien-edp', 'althair', 'angel-edp'];
// Wait, is 'angel-edp' the correct ID? 'alien' is 'alien-edp'. Let's search by name instead if ID is unknown.

const searchNames = ['The Most Wanted', 'Absolu Aventus', 'Alien', 'Althaïr', 'Angel'];

searchNames.forEach(name => {
    const regex = new RegExp(`name:\\s*"${name}"[\\s\\S]*?image:\\s*"([^"]+)"`, 'i');
    const match = mockData.match(regex);
    if (match) {
        const imgPath = match[1];
        const diskPath = 'public' + imgPath;
        const exists = fs.existsSync(diskPath);
        const size = exists ? fs.statSync(diskPath).size : 0;
        console.log(`Product: ${name}`);
        console.log(`  image ref: ${imgPath}`);
        console.log(`  exists: ${exists}, size: ${size} bytes`);
    } else {
        console.log(`Product: ${name} - NOT FOUND IN MOCKDATA`);
    }
});
