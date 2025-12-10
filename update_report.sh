// chech the the branch name and update the report accordingly
git branch 

echo "🔗 Switching to Allure branch..."
git switch allure_Resaults_Android  // switch to the branch

git add allure-results allure report // add the report files

echo "💾 Committing changes..."
git commit -m "Update Allure Report for Android $(date +'%Y-%m-%d')" // commit the changes


git push origin allure_Resaults_Android

echo "✅ Done! Report available at GitHub Pages."

rm -rf allure-report allure-results// remove the local report folder
