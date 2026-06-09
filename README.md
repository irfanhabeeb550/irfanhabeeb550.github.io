# 🌐 Irfan Habeeb K — Portfolio Website

**Live at:** [irfanhabeeb550.github.io](https://irfanhabeeb550.github.io)

---

## 📂 File Structure

```
portfolio/
├── index.html          ← Main website (all sections)
├── pay.html            ← Dedicated payment page
├── css/
│   └── style.css       ← All styles, colors, design
├── js/
│   ├── main.js         ← Animations, scroll effects
│   └── pay.js          ← Razorpay + UPI payment logic
└── assets/
    └── Irfan_Habeeb_K_Resume.pdf  ← Downloadable resume
```

---

## ✏️ How to Edit Your Website (Directly on GitHub)

You can edit any file directly from GitHub without installing anything.

### Step 1: Open the File
1. Go to your repo: [github.com/irfanhabeeb550/irfanhabeeb550.github.io](https://github.com/irfanhabeeb550/irfanhabeeb550.github.io)
2. Click on the file you want to edit (e.g., `index.html`)

### Step 2: Edit the File
1. Click the **pencil icon (✏️)** in the top-right corner of the file
2. Make your changes in the editor
3. Scroll down, type a short description (e.g., "Updated about section")
4. Click **"Commit changes"**

### Step 3: Wait
- Changes go live at [irfanhabeeb550.github.io](https://irfanhabeeb550.github.io) within **1–2 minutes**

---

## 📋 What to Edit & Where

### 🏠 Hero Section (Name, Title, Tagline)
**File:** `index.html` → Look for `<!-- ===== HERO ===== -->`

```html
<!-- Change your name -->
<h1>IRFAN HABEEB K</h1>

<!-- Change your title -->
<p class="subtitle">Mechanical Engineer | Data, Operations &amp; Project Management</p>

<!-- Change your tagline -->
<p class="tagline">Turning data into decisions and ideas into impact.</p>
```

### 👤 About Me Text
**File:** `index.html` → Look for `<!-- ===== ABOUT ===== -->`

```html
<p>I am a Mechanical Engineering graduate from NIT Calicut...</p>
```
Just replace the text inside the `<p>` tag.

### 📊 Stats (CGPA, Projects, etc.)
**File:** `index.html` → Inside the `stat-cards` div

```html
<h3>6.62</h3>        <!-- Change the number -->
<p>CGPA · NIT Calicut</p>  <!-- Change the label -->
```

### 🛠️ Skills & Percentages
**File:** `index.html` → Look for `<!-- ===== SKILLS ===== -->`

To change a skill percentage:
```html
<span class="skill-name">MySQL</span><span class="skill-percent">85%</span>
<div class="skill-bar"><div class="skill-fill" style="--fill-width: 85%" data-width="85"></div></div>
```
Change **both** the `85%` text AND `--fill-width: 85%` AND `data-width="85"` to your new percentage.

### 💼 Add a New Project
**File:** `index.html` → Look for `<!-- ===== PROJECTS ===== -->`

Copy this template and paste it inside the `projects-grid` div:
```html
<div class="project-card glass-card">
  <div class="card-accent"></div>
  <div class="project-body">
    <h3>Your Project Name</h3>
    <p>Description of what you built and what it does.</p>
    <div class="tags">
      <span class="tag">Tech 1</span>
      <span class="tag">Tech 2</span>
      <span class="tag">Tech 3</span>
    </div>
    <a href="https://github.com/irfanhabeeb550/your-repo" target="_blank" rel="noopener noreferrer" class="project-link">View on GitHub →</a>
  </div>
</div>
```

### 📋 Add a New Experience
**File:** `index.html` → Look for `<!-- ===== EXPERIENCE ===== -->`

Copy this template and paste it inside the `exp-timeline` div:
```html
<div class="timeline-item">
  <div class="timeline-dot"></div>
  <div class="timeline-content glass-card">
    <h3>Your Role Title</h3>
    <h4>Company Name · Month Year – Month Year</h4>
    <ul>
      <li>What you did or achieved</li>
      <li>Another accomplishment</li>
    </ul>
  </div>
</div>
```

### 📝 Add a Blog Post
**File:** `index.html` → Look for `<!-- ===== BLOG ===== -->`

Copy this template:
```html
<div class="blog-card glass-card">
  <span class="blog-date">Jun 2026</span>
  <h3>Your Blog Title</h3>
  <p>A short preview or excerpt of your blog post...</p>
  <a href="#" class="read-more">Read More →</a>
</div>
```

### 📧 Contact Info
**File:** `index.html` → Look for `<!-- ===== CONTACT ===== -->`

Find and replace:
- Email: `irfanhabeeb550@gmail.com`
- Phone: `+91 8606139046`
- Location: `Perinthalmanna, Kerala, India`

### 🎨 Change Colors
**File:** `css/style.css` → At the very top, edit the CSS variables:

```css
:root {
  --bg-primary: #0a0a0f;        /* Background color */
  --accent-1: #667eea;           /* Main accent (blue) */
  --accent-2: #764ba2;           /* Secondary accent (purple) */
  --text-primary: #e8e8f0;       /* Main text color */
  --text-secondary: #a0a0b8;     /* Muted text color */
}
```

### 💰 Payment Settings
**File:** `js/pay.js` → Line with `key:`

```javascript
key: 'rzp_live_SzZbeftXq72aJv',  // Your Razorpay API key
```

### 📄 Update Resume
1. Go to the `assets/` folder in your repo
2. Click **"Add file" → "Upload files"**
3. Upload your new resume PDF (name it exactly: `Irfan_Habeeb_K_Resume.pdf`)
4. Commit

### 🖼️ Change Profile Photo
**File:** `index.html` → Search for `hero-photo`

```html
<img src="YOUR_NEW_IMAGE_URL" alt="Irfan Habeeb K" class="hero-photo">
```
Replace the URL with your new image direct link.

---

## 🚀 Editing from Your PC (Advanced)

If you prefer editing locally:

```powershell
# Navigate to your project
cd c:\Users\irfan\Desktop\PLACEMENT\website\portfolio

# Edit files with any text editor (VS Code, Notepad++, etc.)

# After editing, push changes:
git add .
git commit -m "describe your change"
git push
```

---

## 🔧 Tech Stack

- **HTML5** — Structure
- **CSS3** — Styling (dark theme, glassmorphism, gradients)
- **JavaScript** — Animations & interactions
- **Razorpay** — Payment gateway
- **UPI** — Direct UPI payments
- **Google Fonts** — Inter typeface
- **GitHub Pages** — Free hosting

---

© 2026 Irfan Habeeb K
