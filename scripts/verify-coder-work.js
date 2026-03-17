// VERIFY CODER WORK — chạy bất kỳ lúc nào để check Coder có thật sự làm chưa
// Usage: node scripts/verify-coder-work.js

const fs = require('fs');
const path = require('path');

const MOCK_DATA_PATH = path.join(__dirname, '..', 'src', 'constants', 'mockData.ts');
const TRACKER_PATH = path.join(__dirname, '..', 'docs', 'CODER_TASK_TRACKER.json');

console.log('═══════════════════════════════════════════');
console.log('  🔍 CODER WORK VERIFICATION REPORT');
console.log('  Time:', new Date().toISOString());
console.log('═══════════════════════════════════════════\n');

// 1. Check mockData.ts modification time
const mockStat = fs.statSync(MOCK_DATA_PATH);
const mockModified = new Date(mockStat.mtime);
const minutesAgo = Math.round((Date.now() - mockModified.getTime()) / 60000);
console.log(`📁 mockData.ts last modified: ${mockModified.toLocaleString()}`);
console.log(`   (${minutesAgo} phút trước)`);
if (minutesAgo < 60) {
  console.log('   ✅ File đã thay đổi gần đây — có dấu hiệu ai đó đang sửa');
} else {
  console.log('   ⚠️  File chưa thay đổi trong 1h+ — có thể Coder chưa bắt đầu');
}

// 2. Count SEO fields
const data = fs.readFileSync(MOCK_DATA_PATH, 'utf8');
const seoTitleCount = (data.match(/seoTitle:\s*"/g) || []).length;
const metaDescCount = (data.match(/metaDescription:\s*"/g) || []).length;
const totalProducts = (data.match(/id:\s*"/g) || []).length;

console.log(`\n📊 SEO Coverage in mockData.ts:`);
console.log(`   Tổng sản phẩm: ${totalProducts}`);
console.log(`   Có seoTitle: ${seoTitleCount} (${Math.round(seoTitleCount/totalProducts*100)}%)`);
console.log(`   Có metaDescription: ${metaDescCount} (${Math.round(metaDescCount/totalProducts*100)}%)`);
console.log(`   Còn thiếu SEO: ${totalProducts - seoTitleCount}`);

// 3. Check tracker status
if (fs.existsSync(TRACKER_PATH)) {
  const tracker = JSON.parse(fs.readFileSync(TRACKER_PATH, 'utf8'));
  console.log(`\n📋 Task Tracker:`);
  tracker.tasks.forEach(task => {
    const deadline = new Date(task.deadline);
    const isOverdue = Date.now() > deadline.getTime();
    const statusIcon = task.status === 'done' ? '✅' : (isOverdue ? '🔴 QUÁ HẠN' : '⏳');
    console.log(`   ${statusIcon} [${task.id}] ${task.title}`);
    console.log(`      Status: ${task.status} | Deadline: ${deadline.toLocaleString()}`);
    if (task.proof) {
      console.log(`      Proof: ${task.proof}`);
    } else {
      console.log(`      Proof: ❌ CHƯA CÓ`);
    }
    if (task.verifiedByAnti) {
      console.log(`      Anti verified: ✅`);
    } else {
      console.log(`      Anti verified: ❌`);
    }
    console.log('');
  });
} else {
  console.log('\n⚠️ Task tracker không tồn tại!');
}

// 4. Check git log for recent commits
console.log('📝 Để check git history, chạy thêm:');
console.log('   git log --oneline -5 --since="today" -- src/constants/mockData.ts');

console.log('\n═══════════════════════════════════════════');
console.log('  Kết luận: Nếu seoTitle count vẫn = 58');
console.log('  và mockData.ts chưa thay đổi → Coder CHƯA LÀM');
console.log('═══════════════════════════════════════════');
