# La Tania 2025 - Design Guide

## Visual Concept
**Minimalist Alpine** - Clean, spacious design with subtle mountain-themed elements that delight without overwhelming.

## Colour Palette

### Primary Colours
- **Snow White**: `#FAFAFA` - Main background
- **Deep Sky**: `#0369A1` - Primary accent (links, CTAs)
- **Midnight Blue**: `#1E293B` - Text and headers

### Accent Colours
- **Alpine Glow**: `#FDA4AF` - Sunrise/sunset pink for highlights
- **Fresh Powder**: `#E0F2FE` - Light blue for subtle backgrounds
- **Pine Green**: `#14532D` - Secondary accent for success states

### Neutral Tones
- **Glacier Grey**: `#64748B` - Body text
- **Mist**: `#F1F5F9` - Section backgrounds
- **Shadow**: `#94A3B8` - Borders and dividers

## Typography
- **Headers**: Inter or Montserrat - Clean, modern sans-serif
- **Body**: System font stack for fast loading
- **Special**: Numbers in costs could use a monospace font (JetBrains Mono)

## Fun UI Elements

### 1. Animated Mountain Header
```css
/* SVG mountain silhouette that parallaxes on scroll */
.mountain-bg {
  position: fixed;
  bottom: 0;
  opacity: 0.05;
  transform: translateY(calc(var(--scroll) * 0.5px));
}
```

### 2. Snowfall Animation (Toggle On/Off)
```css
/* Gentle CSS snowflakes - optional for fun */
.snowflake {
  animation: fall linear infinite;
  opacity: 0.7;
}
```

### 3. Ski Lift Progress Bar
- Page scroll indicator styled as a ski lift cable
- Little gondola icon moves along as you scroll

### 4. Temperature Widget
- Shows current La Tania temperature
- Thermometer fills with blue/red based on temp
- Click to toggle between °C/°F

### 5. Countdown Timer
- Days/hours until trip
- Styled like a ski pass or lift ticket
- Flips animation on number change

### 6. Interactive Piste Map
- Hover over runs to see difficulty
- Your chalet marked with pulsing dot
- Ski lifts animate on hover

## Component Styles

### Cards
```css
.info-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}
.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

### Buttons
```css
.btn-primary {
  background: linear-gradient(135deg, #0369A1, #0284C7);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s;
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(3,105,161,0.3);
}
```

### Navigation
- Sticky header that shrinks on scroll
- Mobile: Slide-out menu with frosted glass effect
- Active page indicated by blue underline

## Micro-interactions

1. **Cost Cards**: Flip animation to reveal what's included
2. **Photo Gallery**: Ken Burns effect on hover
3. **FAQ Accordion**: Smooth expand with rotating chevron
4. **Contact Form**: Fields slide up on focus
5. **Loading States**: Animated ski tracks

## Responsive Approach
- Mobile-first design
- Breakpoints: 640px, 768px, 1024px
- Touch-friendly tap targets (min 44px)
- Swipeable photo galleries on mobile

## Performance Tricks
- Lazy load images below the fold
- Use CSS transforms for animations (GPU-accelerated)
- Preload critical fonts
- Inline critical CSS

## Accessibility
- High contrast ratios (WCAG AA)
- Focus indicators on all interactive elements
- Ski emojis have aria-labels
- Animations respect prefers-reduced-motion

## Special Touches
- 404 page: "Off-piste! Let's get you back on track"
- Loading skeleton shaped like ski equipment
- Easter egg: Konami code triggers snowstorm
- Favicon: Simple mountain peak icon

## Implementation Approach
1. Start with vanilla CSS for simplicity
2. Add Alpine.js for interactive components
3. Consider Tailwind CSS for rapid development
4. Use CSS custom properties for theming

## Example Hero Section
```html
<section class="hero">
  <div class="mountain-bg"></div>
  <h1 class="hero-title">
    La Tania <span class="accent">2025</span>
  </h1>
  <p class="hero-dates">21-28 December</p>
  <div class="hero-cta">
    <button class="btn-primary">Check Availability</button>
    <button class="btn-ghost">View Photos</button>
  </div>
  <div class="scroll-indicator">
    <div class="ski-pole"></div>
  </div>
</section>
```

## Inspiration Sites
- stripe.com (clean animations)
- airbnb.com (card layouts)
- Modern ski resort sites (verbier.ch, vailresorts.com)
- Minimalist Japanese design principles