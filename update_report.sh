#!/bin/bash

set -e  # Exit immediately if a command fails

# Go to project folder
cd /Users/nagasubarayudu/Desktop/NokiAndroid || exit

echo "🔗 Setting correct origin remote..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/thinkhatnag/NikiAndroid.git

# Ensure allure-report exists
if [ ! -d "allure-report" ]; then
  echo "❌ Error: allure-report folder not found. Aborting."
  exit 1



echo "📂 Cleaning old top-level docs folder..."
rm -rf docs

echo "📂 Moving allure-report to docs..."
mv allure-report docs

echo "➕ Staging only docs/..."
git add docs allure-results 

echo "💾 Committing changes..."
git commit -m "Update Allure report $(date +'%Y-%m-%d')" || echo "⚠️ Nothing to commit."

echo "⬆️ Pushing to GitHub..."
git push -u origin main

echo "✅ Done! Report available at: https://thinkhatnag.github.io/allure-reports/"
