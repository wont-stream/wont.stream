@echo off

pnpm run build

clear

cd dist

git init
git add .
git commit -m "update"
git branch -M main
git remote add origin https://github.com/wont-stream/wont-stream.github.io.git
git push -u origin main --force

clear

cd ..

"C:\Users\unstream\Documents\nmuidi.exe" dist

clear

C:\Users\unstream\AppData\Local\Microsoft\WindowsApps\Microsoft.PowerShellPreview_8wekyb3d8bbwe\pwsh-preview.exe