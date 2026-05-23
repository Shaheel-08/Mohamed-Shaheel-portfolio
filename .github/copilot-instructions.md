# AI/ML Portfolio Website — Development & Deployment Guide

This is a premium, production-ready portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

## Setup Instructions

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory with EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**To get EmailJS credentials:**
1. Sign up at https://www.emailjs.com/
2. Create a service (Gmail recommended)
3. Create an email template with variables: `from_name`, `from_email`, `message`, `to_email`
4. Copy your Service ID, Template ID, and Public Key

### 3. Development Server

```bash
npm run dev
```

Site runs at `http://localhost:5173`

### 4. Production Build

```bash
npm run build
```

This generates optimized files in the `dist/` folder.

### 5. Preview Build

```bash
npm run preview
```

## Vercel Deployment

### Option 1: Automatic (Recommended)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" → Select your repository
4. Vercel auto-detects Vite configuration
5. Add environment variables in "Settings" → "Environment Variables"
6. Deploy automatically

### Option 2: Manual

```bash
npm install -g vercel
vercel
```

## Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── Navigation.jsx     # Top navbar
│   └── Footer.jsx         # Footer
├── assets/                # Images, icons, etc.
├── data/
│   └── portfolio.js       # Portfolio content
├── hooks/
│   └── useScrollAnimation.js
├── index.css              # Global styles
├── main.jsx               # React entry point
└── App.jsx                # Main component
```

## Customization

### Update Portfolio Content

Edit `src/data/portfolio.js`:
- Name, title, tagline
- About text
- Skills
- Projects (with GitHub and demo links)
- Achievements
- Education
- Contact links

### Add Your Image

Replace the profile picture placeholder in `Hero.jsx` with your image:

```jsx
<img src="/your-image.jpg" alt="Profile" className="rounded-full" />
```

### Modify Colors

Edit `tailwind.config.js`:

```js
colors: {
  dark: '#0f0f1e',    // Background
  darker: '#050510',  // Darker background
  accent: '#ff0044',  // Red accent
  cyan: '#00d9ff',    // Cyan hover
}
```

### Update Styles

Global styles in `src/index.css`:
- Animations
- Transitions
- Custom utilities
- Scrollbar styling

## Performance

- **Optimized bundle size** using Vite and code splitting
- **Fast load times** with tree-shaking and minification
- **Smooth animations** with Framer Motion
- **Mobile responsive** with Tailwind CSS
- **SEO friendly** with proper meta tags

## Dependencies

- **react** (18.2.0) - UI framework
- **framer-motion** (10.16.4) - Animations
- **emailjs-com** (3.2.0) - Email service
- **tailwindcss** (3.3.2) - Styling
- **vite** (4.4.5) - Build tool

## Troubleshooting

### EmailJS not sending

1. Check `.env.local` has correct credentials
2. Verify EmailJS account is active
3. Check email template variables match form fields
4. Allow email from "from_email" in settings

### Build fails

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Console errors

- Check `.env.local` is created and filled
- Verify all imports use correct paths
- Clear browser cache (Ctrl+Shift+Delete)

## Best Practices

- Keep `src/data/portfolio.js` as the single source of truth
- Use Framer Motion for all animations
- Use Tailwind utilities for styling
- Keep components reusable and modular
- Test on mobile devices regularly

## License

MIT License - Free to use and modify.

---

**Last Updated:** May 2026
