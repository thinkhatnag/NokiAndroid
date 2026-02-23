set -e  # exit immediately if a command fails

git remote set-url origin https://github.com/thinkhatnag/reports.git

git add Android-allure-results report generate-Android-Report.js
git commit -m "Report Update"
git push origin main