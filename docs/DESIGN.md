# Design System - AutoVisionTech

Guide complet du design system et des composants UI de la plateforme.

## Principes de design

### Vision
Créer une expérience premium, moderne et intuitive pour un marché automobile haut de gamme.

### Valeurs
- **Élégance** : Design raffiné et sophistiqué
- **Clarté** : Information hiérarchisée et lisible
- **Fluidité** : Interactions naturelles et transitions douces
- **Performance** : Rapidité et réactivité

---

## Palette de couleurs

### Couleurs principales

#### Dashboard
```css
--color-dashboard-dark: #0a0e17       /* Background principal */
--color-dashboard-secondary: #131820  /* Background secondaire */
--color-dashboard-card: #1a1f2e       /* Cartes et surfaces */
```

#### Accent Colors
```css
--color-metallic-blue: #2563eb        /* Bleu principal */
--color-metallic-silver: #94a3b8      /* Argent/Slate */
--color-neon-cyan: #06b6d4            /* Cyan accent */
```

#### Feedback Colors
```css
--color-neon-green: #10b981           /* Success */
--color-neon-red: #ef4444             /* Error */
--color-neon-yellow: #fbbf24          /* Warning */
```

### Gradients

#### Boutons et éléments interactifs
```css
/* Primary Gradient */
background: linear-gradient(to right, #2563eb, #06b6d4);

/* Card Gradients */
background: linear-gradient(135deg, 
  rgba(37, 99, 235, 0.1), 
  rgba(6, 182, 212, 0.1)
);

/* Text Gradients */
background: linear-gradient(to right, white, #bfdbfe, #a5f3fc);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Transparences

```css
/* Glassmorphism */
background: rgba(26, 31, 46, 0.8);
backdrop-filter: blur(20px);

/* Overlays */
background: rgba(0, 0, 0, 0.7);
backdrop-filter: blur(4px);
```

---

## Typographie

### Fontes

```css
font-family: -apple-system, BlinkMacSystemFont, 
             'Segoe UI', 'Roboto', 'Inter', sans-serif;
```

**Raisons du choix** :
- System fonts pour performance
- Fallback robuste
- Native appearance
- Excellent lisibilité

### Hiérarchie

```css
/* Hero Titles */
.hero-title {
  font-size: 3.75rem;      /* 60px */
  font-weight: 700;
  line-height: 1.1;
}

/* Page Titles */
.page-title {
  font-size: 3rem;          /* 48px */
  font-weight: 700;
  line-height: 1.2;
}

/* Section Titles */
.section-title {
  font-size: 2rem;          /* 32px */
  font-weight: 600;
  line-height: 1.3;
}

/* Card Titles */
.card-title {
  font-size: 1.25rem;       /* 20px */
  font-weight: 600;
  line-height: 1.4;
}

/* Body Text */
body {
  font-size: 1rem;          /* 16px */
  line-height: 1.6;
}

/* Small Text */
.text-sm {
  font-size: 0.875rem;      /* 14px */
}

/* Extra Small */
.text-xs {
  font-size: 0.75rem;       /* 12px */
}
```

### Text Styles

```css
/* Labels */
.field-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Descriptions */
.description {
  color: #94a3b8;
  line-height: 1.6;
}

/* Links */
.link {
  color: #3b82f6;
  text-decoration: underline;
  text-decoration-color: rgba(59, 130, 246, 0.3);
}

.link:hover {
  color: #2563eb;
  text-decoration-color: #2563eb;
}
```

---

## Spacing System

### Scale

```css
/* TailwindCSS spacing scale */
0.5 →  2px
1   →  4px
2   →  8px
3   →  12px
4   →  16px
5   →  20px
6   →  24px
8   →  32px
10  →  40px
12  →  48px
16  →  64px
20  →  80px
24  →  96px
```

### Application

```css
/* Containers */
.container-padding {
  padding: 2rem;          /* 32px */
}

/* Card spacing */
.card-padding {
  padding: 1.5rem;        /* 24px */
}

/* Form spacing */
.form-gap {
  gap: 1.5rem;            /* 24px */
}

/* Section spacing */
.section-margin {
  margin-bottom: 4rem;    /* 64px */
}
```

---

## Components

### 1. Boutons

#### Primary Button (Active)
```css
.btn-active {
  background: linear-gradient(to right, #2563eb, #06b6d4);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 30px rgba(37, 99, 235, 0.4);
  transition: all 0.3s;
}

.btn-active:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 40px rgba(37, 99, 235, 0.6);
}
```

#### Default Button
```css
.default-btn {
  background: rgba(51, 65, 85, 0.5);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(71, 85, 105, 0.5);
  backdrop-filter: blur(4px);
}

.default-btn:hover {
  background: rgba(71, 85, 105, 0.5);
  border-color: rgba(100, 116, 139, 1);
}
```

#### Action Buttons
```css
/* Save */
.save-btn {
  background: #16a34a;
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
}

/* Edit */
.edit-btn {
  background: #2563eb;
  box-shadow: 0 0 15px rgba(37, 99, 235, 0.3);
}

/* Delete */
.delete-btn {
  background: #dc2626;
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.3);
}
```

### 2. Inputs

```css
.input {
  width: 100%;
  padding: 1rem 3rem;
  border-radius: 1rem;
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(71, 85, 105, 0.5);
  color: white;
  transition: all 0.3s;
}

.input:focus {
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
}

.input::placeholder {
  color: rgba(148, 163, 184, 0.5);
}
```

### 3. Cards

```css
.card {
  background: rgba(26, 31, 46, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.3s;
}

.card:hover {
  border-color: rgba(59, 130, 246, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 16px 48px rgba(37, 99, 235, 0.2);
}
```

### 4. Badges

```css
/* Status Badge Base */
.status-badge {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
  border: 1px solid;
}

/* Available */
.available-badge {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border-color: rgba(16, 185, 129, 0.5);
}

/* Reserved */
.reserved-badge {
  background: rgba(251, 191, 36, 0.1);
  color: #fbbf24;
  border-color: rgba(251, 191, 36, 0.5);
}

/* Sold */
.sold-badge {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border-color: rgba(239, 68, 68, 0.5);
}
```

### 5. Modals

```css
/* Overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

/* Content */
.modal-content {
  background: rgba(30, 41, 59, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(71, 85, 105, 1);
  border-radius: 1.5rem;
  padding: 2rem;
  max-width: 28rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
```

### 6. Forms

```css
/* Form Group */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Form Label */
.form-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #94a3b8;
}

/* Input Wrapper */
.input-wrapper {
  position: relative;
}

/* Input Icon */
.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #3b82f6;
  pointer-events: none;
}
```

---

## Effects & Shadows

### Shadows

```css
/* Card Shadow */
--shadow-card: 0 8px 32px rgba(0, 0, 0, 0.6);

/* Card Hover */
--shadow-card-hover: 0 16px 48px rgba(37, 99, 235, 0.3);

/* Glow Effects */
--shadow-glow-blue: 0 0 30px rgba(37, 99, 235, 0.4);
--shadow-glow-green: 0 0 30px rgba(16, 185, 129, 0.4);
--shadow-button-active: 0 0 30px rgba(37, 99, 235, 0.4);
```

### Glassmorphism

```css
.glass {
  background: rgba(26, 31, 46, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Border Radius

```css
--border-radius: 1.5rem;     /* Large */
--border-radius-md: 1rem;    /* Medium */
--border-radius-sm: 0.75rem; /* Small */
--border-radius-full: 9999px;/* Pill */
```

---

## Animations

### Keyframes

```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide In */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Glow Pulse */
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(59,130,246,0.2);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 30px rgba(59,130,246,0.35);
    transform: scale(1.05);
  }
}

/* Spin */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Shake */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}
```

### Transitions

```css
/* Default */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Fast */
transition: all 0.15s ease-out;

/* Slow */
transition: all 0.5s ease-out;
```

---

## Responsive Design

### Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  /* Styles mobile */
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  /* Styles tablette */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Styles desktop */
}
```

### Mobile Adaptations

```css
/* Reduce text size */
.page-title {
  font-size: 2rem;    /* 32px on mobile */
}

/* Adjust spacing */
.container-padding {
  padding: 1rem;      /* 16px on mobile */
}

/* Stack elements */
.grid-responsive {
  grid-template-columns: 1fr;
}

/* Hamburger menu */
.mobile-menu {
  display: block;
}
```

---

## Icons

### Icon System

**Source** : Heroicons (via SVG inline)

```html
<!-- Exemple d'utilisation -->
<svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..."/>
</svg>
```

### Tailles standard

```css
.icon-xs  { width: 1rem; height: 1rem; }    /* 16px */
.icon-sm  { width: 1.25rem; height: 1.25rem; } /* 20px */
.icon-md  { width: 1.5rem; height: 1.5rem; }   /* 24px */
.icon-lg  { width: 2rem; height: 2rem; }       /* 32px */
.icon-xl  { width: 2.5rem; height: 2.5rem; }   /* 40px */
```

---

## Brand Elements

### Logo

```html
<div class="brand-logo">
  <div class="brand-icon-wrapper">
    <svg class="brand-icon"><!-- Car icon --></svg>
  </div>
  <div class="brand-text">
    <span class="brand-name">AutoVisionTech</span>
    <span class="brand-tagline">Premium Cars</span>
  </div>
</div>
```

```css
.brand-icon-wrapper {
  padding: 0.625rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb, #06b6d4);
  box-shadow: 0 0 30px rgba(37, 99, 235, 0.4);
}

.brand-name {
  font-size: 1.125rem;
  font-weight: 700;
  background: linear-gradient(to right, white, #bfdbfe, #a5f3fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-tagline {
  font-size: 0.625rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

---

## Accessibility

### Contrast Ratios

Tous les textes respectent les normes WCAG AA :
- Normal text : 4.5:1 minimum
- Large text : 3:1 minimum

### Focus States

```css
.focusable:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-radius: 0.5rem;
}
```

### ARIA Labels

```html
<button aria-label="Close modal">
  <svg><!-- X icon --></svg>
</button>
```

---

## Design Checklist

### Pour chaque composant

- [ ] Responsive sur tous les breakpoints
- [ ] States définis (hover, active, disabled, focus)
- [ ] Animations fluides
- [ ] Accessible (ARIA, keyboard navigation)
- [ ] Performance optimisée
- [ ] Documentation claire

### Pour chaque page

- [ ] Hero section engageante
- [ ] Hiérarchie visuelle claire
- [ ] Call-to-actions évidents
- [ ] Loading states
- [ ] Error states
- [ ] Empty states
- [ ] Cohérence avec le design system

---

Ce design system garantit cohérence, maintenabilité et expérience utilisateur premium.