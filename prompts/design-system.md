# Banana Byte Design System

## Core Principles
- Clean, minimal aesthetic with subtle depth
- Content-first approach with clear hierarchy
- Consistent spacing and alignment
- Smooth, purposeful animations
- Responsive and accessible design

## Layout Structure

### Container Widths
```css
.container {
  max-width: 1200px;  /* Main container */
}
.content {
  max-width: 1000px;  /* Content sections */
}
.text-content {
  max-width: 800px;   /* Text-heavy content */
}
```

### Spacing System
- Section spacing: 8rem (desktop), 4rem (mobile)
- Component spacing: 2rem (desktop), 1.5rem (mobile)
- Inner padding: 3rem (desktop), 2rem (mobile)
- Grid gaps: 2rem-3rem

## Typography

### Font Scale
```css
h1 {
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: -0.02em;
}

h2 {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: -0.02em;
}

h3 {
  font-size: 1.8rem;
  font-weight: 300;
}

p.large {
  font-size: 1.3rem;
  line-height: 1.8;
}

p {
  font-size: 1.1rem;
  line-height: 1.7;
}
```

### Text Styles
- Headers: Light weight (300)
- Body: Light weight (300)
- Accents: Regular weight (400)
- Opacity variations: 1.0, 0.8, 0.7

## Component Patterns

### Cards
```css
.card {
  padding: 3rem;
  border-radius: 24px;
  background: rgba(var(--text-color-rgb), 0.02);
  border: 1px solid rgba(var(--text-color-rgb), 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(var(--text-color-rgb), 0.08);
  border-color: rgba(var(--text-color-rgb), 0.15);
}
```

### Timeline Elements
```css
.timeline {
  display: flex;
  gap: 2rem;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 3.5rem;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(var(--text-color-rgb), 0.1);
}
```

### Skill Items
```css
.skill-item {
  text-align: center;
}

.skill-item span {
  color: var(--accent-color);
  font-size: 1.2rem;
  font-weight: 400;
}

.skill-item p {
  opacity: 0.8;
  font-weight: 300;
}
```

## Animation Guidelines

### Transitions
```css
/* Standard transition */
transition: all 0.3s ease;

/* Content fade-in */
.content {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.content.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Hover Effects
- Subtle elevation changes
- Smooth shadow transitions
- Gentle opacity adjustments
- Border color enhancements

## Responsive Design

### Breakpoints
```css
/* Mobile */
@media (max-width: 768px) {
  h1 { font-size: 2.8rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.5rem; }
  
  .card { padding: 2rem; }
  .container { padding: 0 1.5rem; }
}
```

### Mobile Adaptations
- Single column layouts
- Reduced padding and margins
- Adjusted font sizes
- Simplified animations
- Stack horizontal elements

## Color System

### Variables
```css
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --text-color-rgb: 51, 51, 51;
  --accent-color: #your-accent-color;
}
```

### Opacity Levels
- Primary content: 1
- Secondary text: 0.8
- Subtle text: 0.7
- Borders: 0.1
- Card backgrounds: 0.02

## Implementation Guidelines

### Content Structure
1. Hero section with clear value proposition
2. Concise, scannable content blocks
3. Progressive disclosure of information
4. Clear calls-to-action

### Performance Considerations
- Optimize images and media
- Minimize DOM nesting
- Use efficient CSS selectors
- Implement lazy loading
- Optimize animations

### Accessibility
- Semantic HTML structure
- Sufficient color contrast
- Keyboard navigation
- Screen reader friendly
- Responsive text sizing

### Best Practices
- Maintain consistent spacing
- Use established patterns
- Follow responsive guidelines
- Test across devices
- Ensure smooth animations

## Page-Specific Patterns

### About Page
- Personal introduction
- Professional timeline
- Skills showcase
- Areas of focus

### Services Page
- Service categories
- Detailed offerings
- Process explanation
- Call to action

### Work Page
- Project grid
- Case studies
- Visual storytelling
- Results showcase

### Contact Page
- Clear contact methods
- Simple form design
- Response expectations
- Professional tone 