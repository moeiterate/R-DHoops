# Netlify Deployment Guide

## Quick Setup (One-Time)

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" → Choose "GitHub" (easiest)
3. Authorize Netlify to access your GitHub

### Step 2: Install Netlify CLI (One-Time)
```bash
npm install -g netlify-cli
```

### Step 3: Login to Netlify
```bash
netlify login
```
This will open your browser. Click "Authorize" when prompted.

### Step 4: Link Your Site (One-Time)
```bash
netlify init
```
- Choose "Create & configure a new site"
- Give it a name (or press Enter for default)
- Choose your team (usually just your account)
- Build command: `npm run build` (press Enter)
- Publish directory: `.next` (press Enter)

---

## Deploy (Every Time After Setup)

### Option A: Automated Script (Easiest)
```bash
chmod +x deploy.sh
./deploy.sh
```

### Option B: Manual Commands
```bash
npm run build
netlify deploy --prod
```

### Option C: GitHub Integration (Automatic)
Once linked, every push to your main branch will auto-deploy.

---

## Your Live URL
After first deployment, you'll get a URL like:
`https://your-project-name.netlify.app`

You can also run `netlify status` to see your site URL.

---

## Notes
- The Google Apps Script integration will work immediately (URL is already in code)
- All future deployments are just: `./deploy.sh` or push to GitHub
- Netlify provides free SSL automatically

