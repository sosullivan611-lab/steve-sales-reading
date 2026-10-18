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

## Deploy on Streamlit Community Cloud

1. Push this repo to GitHub (must include **`app.py`** and **`requirements.txt`** at the repo root).
2. Go to [share.streamlit.io](https://share.streamlit.io) → **New app**.
3. Pick your repo **`sosullivan611-lab/steve-sales-reading`** and branch **`main`**.
4. Set **Main file path** to: **`app.py`**
5. Deploy.

Alternative main file: **`streamlit_app.py`** (same app).

## After upload (local)

**Streamlit:**

```bash
pip install -r requirements.txt
streamlit run app.py
```

**Next.js (original UI):**

```bash
npm install
npm run dev
```

Open http://127.0.0.1:43127 for Next.js.
