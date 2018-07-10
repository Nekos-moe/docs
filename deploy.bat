@echo off

:: build
npm run docs:build

:: navigate into the build output directory
cd docs/.vuepress/dist

:: if you are deploying to a custom domain
@echo "docs.nekos.moe" > CNAME

git init
git add -A
git commit -m 'deploy'

:: if you are deploying to https://<USERNAME>.github.io
:: git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

:: if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Nekos-moe/docs.git master:gh-pages

cd ../../../
