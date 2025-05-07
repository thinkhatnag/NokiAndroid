import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// === CONFIG ===
const EMAIL_FROM = 'nag.subbarayudu@thinkhat.ai';
const EMAIL_TO = ['thinkhatnag@gmail.com','nag.subbarayudu@thinkhat.ai','cherukuri.chidambaram@thinkhat.ai', 'hepsiba.kambhampati@thinkhat.ai','sarat.tumu@thinkhat.ai','bheema.badri@thinkhat.ai', 'rathan.dhondi@thinkhat.ai'];
const EMAIL_PASS = 'hdnc heiy lwpk wxap';
const BASE_DIR = '/Users/nagasubarayudu/Desktop/NOKIAndroid';

// === STEP 1: Generate Allure Report ===
console.log("🔧 Generating Allure Report...");
if (!fs.existsSync(path.join(BASE_DIR, 'allure-results'))) {
  console.error("❌ No allure-results folder found. Please run your tests first.");
  process.exit(1);
}
execSync(`allure generate ${path.join(BASE_DIR, 'allure-results')} --clean -o ${path.join(BASE_DIR, 'allure-report')}`, { stdio: 'inherit' });

// === STEP 2: Extract Test Summary and Test Cases ===
const summaryPath = path.join(BASE_DIR, 'allure-report', 'widgets', 'summary.json');
if (!fs.existsSync(summaryPath)) {
  console.error('❌ summary.json not found.');
  process.exit(1);
}
const stats = JSON.parse(fs.readFileSync(summaryPath, 'utf-8')).statistic;
const { total, passed, failed, broken, skipped, unknown } = stats;

// Get test cases details from history.json
const historyPath = path.join(BASE_DIR, 'allure-report', 'data', 'test-cases');
let testCasesHtml = '';
if (fs.existsSync(historyPath)) {
  const testCaseFiles = fs.readdirSync(historyPath);
  testCasesHtml = '<h3>Test Cases Details:</h3><ul>';
  
  testCaseFiles.forEach(file => {
    const testData = JSON.parse(fs.readFileSync(path.join(historyPath, file), 'utf-8'));
    const status = testData.status.toUpperCase();
    const name = testData.name;
    const description = testData.description || 'No description available';
    
    testCasesHtml += `
      <li>
        <strong>${name}</strong> (${status})
        <br>Description: ${description}
      </li>`;
  });
  testCasesHtml += '</ul>';
}

// // === STEP 3: Copy to Git Repo ===
// const sourceDir = path.join(BASE_DIR, 'allure-report');
// const targetDir = path.join(BASE_DIR, 'qa-reportsNokiIOS');

// // Remove existing contents of targetDir (but not the .git folder)
// if (fs.existsSync(targetDir)) {
//   fs.readdirSync(targetDir).forEach(file => {
//     if (file !== '.git') {
//       fs.rmSync(path.join(targetDir, file), { recursive: true, force: true });
//     }
//   });
// } else {
//   fs.mkdirSync(targetDir);
//   execSync(`cd ${targetDir} && git init && git remote add origin ${GIT_REPO_URL}`, { stdio: 'inherit' });
// }

// // Copy the full allure-report
// fs.readdirSync(sourceDir).forEach(file => {
//   fs.cpSync(path.join(sourceDir, file), path.join(targetDir, file), { recursive: true });
// });

// console.log("📁 Full Allure report copied to repo");

// // === STEP 4: Push to GitHub ===
// console.log("🚀 Committing and pushing...");
// let pushSuccess = true;
// try {
//   execSync(`
//     cd ${targetDir} &&
//     git add . &&
//     git commit -m "🧪 Allure Report: ${new Date().toLocaleString()}"
//   `, { stdio: 'inherit' });

//   try {
//     execSync(`cd ${targetDir} && git push`, { stdio: 'inherit' });
//   } catch (pushErr) {
//     console.log("Setting upstream and pushing...");
//     execSync(`cd ${targetDir} && git push --set-upstream origin main`, { stdio: 'inherit' });
//   }
// } catch (err) {
//   console.error("❌ Git operation failed:", err.message);
//   pushSuccess = false;
// }

// === STEP 5: Send Email with Summary + Test Cases ===
console.log("📬 Sending email...");
const curntdate = new Date().toLocaleDateString(); // Example date format
async function sendMail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_FROM,
      pass: EMAIL_PASS,
    },
  });

  const htmlBody = `
    <h2>🧪 Sanity Test Report Summary for Noki Android ${curntdate}</h2>
    <p><strong>Results:</strong></p>
    <ul>
      <li>✅ Passed: ${passed}</li>
      <li>❌ Failed: ${failed}</li>
      <li>⚠️ Broken: ${broken}</li>
      <li>⏭️ Skipped: ${skipped}</li>
      <li>❓ Unknown: ${unknown}</li>
      <li>🔢 Total: ${total}</li>
    </ul>
    ${testCasesHtml}
        <p><strong>hip hip hooray hip hip hoory the toal flow of the app is verified you go ahead </strong></p>

  `;

  const mailOptions = {
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: '🧪 Sanity Test Summary Report  for NOKI Android ',
    html: htmlBody
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);
  } catch (err) {
    console.error('❌ Failed to send email:', err.message);
  }
}

sendMail();


// import { execSync } from 'child_process';
// import fs from 'fs';
// import path from 'path';
// import nodemailer from 'nodemailer';

// // === CONFIG ===
// const EMAIL_FROM = 'nag.subbarayudu@thinkhat.ai';
// const EMAIL_TO = ['thinkhatnag@gmail.com', 'nag.subbarayudu@thinkhat.ai'];
// const EMAIL_PASS = 'hdnc heiy lwpk wxap';
// const BASE_DIR = '/Users/nagasubarayudu/Desktop/IOS';

// // === STEP 1: Generate Allure Report ===
// console.log("🔧 Generating Allure Report...");
// if (!fs.existsSync(path.join(BASE_DIR, 'allure-results'))) {
//   console.error("❌ No allure-results folder found. Please run your tests first.");
//   process.exit(1);
// }
// execSync(`allure generate ${path.join(BASE_DIR, 'allure-results')} --clean -o ${path.join(BASE_DIR, 'allure-report')}`, { stdio: 'inherit' });

// // === STEP 2: Extract Test Summary and Test Cases with Screenshots ===
// const summaryPath = path.join(BASE_DIR, 'allure-report', 'widgets', 'summary.json');
// if (!fs.existsSync(summaryPath)) {
//   console.error('❌ summary.json not found.');
//   process.exit(1);
// }
// const stats = JSON.parse(fs.readFileSync(summaryPath, 'utf-8')).statistic;
// const { total, passed, failed, broken, skipped, unknown } = stats;

// // Get test cases details and associate screenshots
// const historyPath = path.join(BASE_DIR, 'allure-report', 'data', 'test-cases');
// const screenshotDir = path.join(BASE_DIR, 'allure-results', 'screenshots');
// let testCasesHtml = '<h3>Test Cases Details:</h3><ul>';

// if (fs.existsSync(historyPath)) {
//   const testCaseFiles = fs.readdirSync(historyPath);
//   testCasesHtml = '<h3>Test Cases Details:</h3><ul>';

//   testCaseFiles.forEach(file => {
//     const testData = JSON.parse(fs.readFileSync(path.join(historyPath, file), 'utf-8'));
//     const status = testData.status.toUpperCase();
//     const name = testData.name;
//     const description = testData.description || 'No description available';

//     // Look for screenshots for this test (filter by name and status)
//     let screenshotHtml = '';
//     if (fs.existsSync(screenshotDir)) {
//       const screenshots = fs.readdirSync(screenshotDir).filter(file => 
//         file.includes(name.replace(/[^a-zA-Z0-9]/g, '_')) && 
//         file.includes(status.toLowerCase())
//       );
//       if (screenshots.length > 0) {
//         screenshotHtml = '<h4>Screenshots:</h4><ul>';
//         screenshots.forEach(screenshot => {
//           const screenshotPath = path.join('screenshots', screenshot);
//           screenshotHtml += `<li><a href="http://localhost:8080/${screenshotPath}" target="_blank">View ${screenshot}</a></li>`;
//         });
//         screenshotHtml += '</ul>';
//       }
//     }

//     testCasesHtml += `
//       <li>
//         <strong>${name}</strong> (${status})
//         <br>Description: ${description}
//         ${screenshotHtml}
//       </li>`;
//   });
//   testCasesHtml += '</ul>';
// }

// // === STEP 5: Send Email with Summary + Test Cases + Screenshots ===
// console.log("📬 Sending email...");

// async function sendMail() {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: EMAIL_FROM,
//       pass: EMAIL_PASS,
//     },
//   });

//   const htmlBody = `
//     <h2>🧪 Test Report Summary</h2>
//     <p><strong>Results:</strong></p>
//     <ul>
//       <li>✅ Passed: ${passed}</li>
//       <li>❌ Failed: ${failed}</li>
//       <li>⚠️ Broken: ${broken}</li>
//       <li>⏭️ Skipped: ${skipped}</li>
//       <li>❓ Unknown: ${unknown}</li>
//       <li>🔢 Total: ${total}</li>
//     </ul>
//     ${testCasesHtml}
//     <p><strong>hip hip hooray hip hip hooray the total flow of the app is verified you go ahead </strong></p>
//   `;

//   const mailOptions = {
//     from: EMAIL_FROM,
//     to: EMAIL_TO,
//     subject: '🧪 Test Summary Report',
//     html: htmlBody,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('✅ Email sent:', info.response);
//   } catch (err) {
//     console.error('❌ Failed to send email:', err.message);
//   }
// }

// sendMail();