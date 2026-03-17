// AUTO-PING CODER BOT — chạy nền, push Coder mỗi 30 phút
// Usage: node scripts/auto-ping-coder.js
// Dừng: Ctrl+C

const https = require('https');

const BOT_TOKEN = '8222958468:AAHzhLfGqBspjNFTe-nCm-7gB_VJbJ5JJD0';
const OWNER_CHAT_ID = '93372553'; // Anti's Telegram ID
const INTERVAL_MS = 30 * 60 * 1000; // 30 phút

const MESSAGES = [
  'Coder, báo tiến độ ngay. Đã xong bao nhiêu slug trong batch 1A? Ghi file part tiếp theo đi.',
  'Coder, check file docs/CODER_TASK_TRACKER.json. Report progress cho BATCH-1A-REVIEW. Nếu chưa xong thì làm tiếp ngay.',
  'Coder, Anti đang chờ. Hoàn thành thêm 10 slug nữa và ghi file batch1a-coder-final-partX.json. Báo lại khi xong.',
  'Coder, deadline BATCH-1A-REVIEW là 20:00 hôm nay. Còn bao nhiêu slug chưa làm? Ghi file output ngay.',
  'Coder, chạy tiếp SEO rewrite. Chia nhỏ 10 slug/part, ghi file docs/reports/batch1a-coder-final-partX.json. Báo khi done.',
];

function sendMessage(text) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const data = JSON.stringify({
    chat_id: OWNER_CHAT_ID,
    text: text,
    parse_mode: 'Markdown'
  });

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(body);
          resolve(result.ok);
        } catch { resolve(false); }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

let pingCount = 0;

async function ping() {
  pingCount++;
  const msg = MESSAGES[pingCount % MESSAGES.length];
  const time = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  
  console.log(`[${time}] Ping #${pingCount}: Sending...`);
  
  try {
    const ok = await sendMessage(`⏰ Auto-ping #${pingCount}\n\n${msg}`);
    console.log(`[${time}] ${ok ? '✅ Sent' : '❌ Failed'}`);
  } catch (err) {
    console.log(`[${time}] ❌ Error: ${err.message}`);
  }
}

console.log('═══════════════════════════════════════');
console.log('  🤖 CODER AUTO-PING — Running');
console.log(`  Interval: ${INTERVAL_MS / 60000} minutes`);
console.log('  Press Ctrl+C to stop');
console.log('═══════════════════════════════════════\n');

// First ping immediately
ping();

// Then every 30 minutes
setInterval(ping, INTERVAL_MS);
