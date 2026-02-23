// chech the the branch name and update the report accordingly
git branch 

echo "🔗 Switching to Allure branch..."
git remote set-url origin https://github.com/thinkhatnag/reports.git
git add allure-results report
echo "💾 Committing changes..."
git commit -m "Update Allure Report for Android $(date +'%Y-%m-%d')" // commit the changes


git push origin main 

