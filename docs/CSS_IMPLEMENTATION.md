# CSS Implementation Strategy

## Recommended Approach for GitHub Pages

### Option 1: Jekyll + Custom CSS (Recommended)
**Pros**: Full control, easy GitHub Pages integration, good performance
**Cons**: More initial setup

### Option 2: Static HTML + Tailwind CSS
**Pros**: Rapid development, utility-first approach
**Cons**: Larger file size, requires build step

### Option 3: Jekyll + Minimal Theme + Overrides
**Pros**: Quick start, less code to write
**Cons**: Less customisation flexibility

## Quick Start Implementation

### 1. File Structure
```
/
├── _config.yml
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── animations.css
│   ├── js/
│   │   └── alpine.min.js
│   └── images/
├── _includes/
│   ├── header.html
│   ├── footer.html
│   └── mountain-bg.svg
└── _layouts/
    └── default.html
```

### 2. Core CSS Variables
```css
:root {
  /* Colours */
  --snow: #FAFAFA;
  --sky: #0369A1;
  --midnight: #1E293B;
  --alpine-glow: #FDA4AF;
  --powder: #E0F2FE;
  --pine: #14532D;
  --glacier: #64748B;
  --mist: #F1F5F9;
  
  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 3rem;
  --space-xl: 4rem;
  
  /* Animation */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 3. Simple Mountain Background SVG
```html
<svg class="mountain-bg" viewBox="0 0 1440 400">
  <path d="M0,400 L360,100 L720,250 L1080,80 L1440,300 L1440,400 Z" 
        fill="currentColor" opacity="0.05"/>
</svg>
```

### 4. Minimal Snowfall Effect
```css
@keyframes snowfall {
  to { transform: translateY(100vh); }
}

.snow-container {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.snowflake {
  position: absolute;
  top: -10px;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  animation: snowfall 10s linear infinite;
  opacity: 0.8;
}

/* Generate multiple snowflakes with CSS */
.snowflake:nth-child(1) { left: 10%; animation-delay: 0s; }
.snowflake:nth-child(2) { left: 20%; animation-delay: 1s; }
/* ... etc */
```

### 5. Countdown Timer Component
```html
<div class="countdown-timer">
  <div class="countdown-item">
    <span class="countdown-number" data-days>00</span>
    <span class="countdown-label">Days</span>
  </div>
  <div class="countdown-item">
    <span class="countdown-number" data-hours>00</span>
    <span class="countdown-label">Hours</span>
  </div>
</div>
```

```css
.countdown-timer {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--powder), white);
  border-radius: 12px;
  border: 2px dashed var(--sky);
}

.countdown-number {
  font-size: 2rem;
  font-weight: bold;
  color: var(--sky);
  font-variant-numeric: tabular-nums;
}
```

### 6. Simple JavaScript Enhancements
```javascript
// Parallax on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.mountain-bg');
  parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Countdown timer
function updateCountdown() {
  const tripDate = new Date('2025-12-21T15:00:00');
  const now = new Date();
  const diff = tripDate - now;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  document.querySelector('[data-days]').textContent = days;
  document.querySelector('[data-hours]').textContent = hours;
}
```

## Practical Tips

1. **Start Simple**: Build with vanilla CSS first, add framework later if needed
2. **Progressive Enhancement**: Site should work without JavaScript
3. **Performance First**: 
   - Inline critical CSS
   - Lazy load images
   - Use system fonts initially
4. **Test on Mobile**: Most friends will check on phones
5. **Browser Support**: Modern browsers only (your friends are young!)

## GitHub Pages Setup
```yaml
# _config.yml
title: La Tania 2025
description: Annual ski trip to Courchevel
theme: null  # We're using custom styles
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap
```

## Fun Easter Eggs to Add Later
1. Click the mountain 5 times to trigger avalanche animation
2. Type "powder" to make it snow harder
3. Hover over Tim's name for a ski emoji
4. Secret yeti appears at midnight