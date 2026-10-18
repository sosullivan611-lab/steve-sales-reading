# Upload this project to GitHub

## Option A — Upload the zip (quickest)

1. Download **`steve-sales-reading-upload.zip`** from this agent’s artifacts.
2. Unzip it on your computer into a folder (e.g. `steve-sales-reading`).
3. On GitHub, open **https://github.com/sosullivan611-lab/steve-sales-reading**
4. If the repo is **empty**: click **Add file → Upload files**, drag in **all** unzipped files and folders (including `.github`), commit to `main`.
5. If the repo **already has files**: use Option B instead (uploading a zip on top of existing files is messy).

Then turn on Pages:

- **Settings → Pages → Source → GitHub Actions**
- **Actions → Deploy to GitHub Pages → Run workflow**

Site URL: **https://sosullivan611-lab.github.io/steve-sales-reading/**

## Option B — Git push (recommended if the repo isn’t empty)

```bash
unzip steve-sales-reading-upload.zip -d steve-sales-reading
cd steve-sales-reading
git init
git add .
git commit -m "Add Reading Pipeline app"
git branch -M main
git remote add origin https://github.com/sosullivan611-lab/steve-sales-reading.git
git pull origin main --rebase   # if GitHub already has a README
git push -u origin main
```

## After upload

```bash
npm install
npm run dev
```

Open http://127.0.0.1:43127 locally.
