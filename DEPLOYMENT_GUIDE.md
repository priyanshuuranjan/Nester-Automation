# 🚀 Deploy Nester Automation Website to GitHub Pages

## ✅ **Prerequisites Completed:**
- ✅ `gh-pages` package installed
- ✅ Deploy scripts added to package.json
- ✅ Vite configuration updated for GitHub Pages
- ✅ Homepage URL configured

## 📋 **Step-by-Step Deployment:**

### 1️⃣ **Create GitHub Repository**
1. Go to [GitHub.com](https://github.com) and login
2. Click "+" → "New repository"
3. Repository name: `nester-automation` (or any name you prefer)
4. Set as **Public** (required for free GitHub Pages)
5. **DON'T** initialize with README (we have files already)
6. Click "Create repository"

### 2️⃣ **Update Configuration Files**
Replace `YOUR_GITHUB_USERNAME` in these files with your actual GitHub username:

**In `package.json`:**
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/nester-automation"
```

**In `vite.config.js`:**
```javascript
base: '/nester-automation/' // Your repository name
```

### 3️⃣ **Initialize Git and Connect to GitHub**
Run these commands in your terminal:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Nester Automation website"

# Add GitHub repository as origin (replace YOUR_GITHUB_USERNAME and nester-automation)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/nester-automation.git

# Push to GitHub
git push -u origin main
```

### 4️⃣ **Deploy to GitHub Pages**
```bash
# Build and deploy the website
npm run deploy
```

### 5️⃣ **Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select **"Deploy from a branch"**
5. Under "Branch", select **"gh-pages"**
6. Click "Save"

### 6️⃣ **Access Your Live Website**
Your website will be available at:
```
https://YOUR_GITHUB_USERNAME.github.io/nester-automation
```

## 🔄 **Future Updates:**
When you make changes to your website:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Update website content"

# Push to GitHub
git push

# Deploy updated version
npm run deploy
```

## 🌐 **Live Website Features:**
✅ Fully responsive design
✅ Professional animations
✅ Contact form with EmailJS
✅ Portfolio gallery system
✅ Project showcase pages
✅ Client testimonials
✅ Interactive navigation

## 📞 **EmailJS Setup for Live Site:**
Remember to:
1. Create EmailJS account
2. Get your Service ID, Template ID, and Public Key
3. Update the values in `src/components/ContactUs.jsx`
4. Test the contact form on the live site

## 🔧 **Troubleshooting:**

**If images don't load:**
- Make sure all image paths start with `./` or `/`
- Check that images are in the `public/` folder

**If routing doesn't work:**
- GitHub Pages might need a 404.html file for React Router
- Single Page Applications require special configuration

**If CSS/JS doesn't load:**
- Verify the `base` path in `vite.config.js` matches your repository name

## 📱 **Custom Domain (Optional):**
If you want to use a custom domain like `nesterautomation.com`:
1. Add a `CNAME` file to the `public/` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use custom domain

## 🎯 **Example Live URLs:**
- **Main Site:** `https://username.github.io/nester-automation/`
- **Portfolio:** `https://username.github.io/nester-automation/portfolio`
- **Contact:** `https://username.github.io/nester-automation/contact`
- **Projects:** `https://username.github.io/nester-automation/industrial-automation`

Your professional Nester Automation website is ready to go live! 🚀
