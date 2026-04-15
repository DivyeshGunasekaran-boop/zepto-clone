# Design Brief: QuickCart — Zepto-Parity Premium Grocery

## Direction
QuickCart — Zepto-exact frontend UX with refined purple brand, smooth carousel animations, and elevated grocery shopping experience.

## Tone
Fast-commerce premium. Functional, polished, no pretension. Zepto-inspired UX patterns with premium shadow depth and smooth interactions.

## Differentiation
Smooth carousel animations with CSS transitions, category tabs display real product images, map modal on location click, profile panel replaces login after authentication, Zepto-style footer category grid.

## Color Palette

| Token | OKLCH | Role |
|-------|-------|------|
| Primary (Purple) | 0.48 0.27 308 | Header, CTAs, brand identity — Zepto purple #7B2FF7 |
| Accent (Green) | 0.51 0.19 145 | ADD buttons, success — vibrant fast-commerce action |
| Secondary (Orange) | 0.65 0.2 50 | Discount badges — promotional highlights |
| Background | 0.985 0.003 285 | Main content — pure white, light mode |
| Card | 1 0 0 | Product cards, modals — elevated surfaces |
| Foreground | 0.12 0.02 285 | Body text — high contrast dark |
| Border | 0.9 0.008 285 | Card edges, dividers — subtle refinement |
| Muted | 0.94 0.006 285 | Secondary text, inactive — gentle hierarchy |

## Typography
- **Display**: DM Sans 700 — hero carousel, section headers, price
- **Body**: DM Sans 400-600 — product names, descriptions, labels
- **Scale**: H1 text-3xl, H2 text-xl, Body text-sm, Label text-xs

## Elevation & Depth
Refined shadow hierarchy: cards use shadow-lg on hover, sticky header shadow-md, modals shadow-2xl. Layer z-hierarchy with glassmorphic modal overlay. Smooth 0.5s carousel transitions create premium motion.

## Structural Zones

| Zone | Background | Border | Notes |
|------|-----------|--------|-------|
| Header | Primary purple | None | Sticky, white search bar, location + cart icons |
| Hero Carousel | Gradient/photo | None | Full-width, smooth slide transitions, 5 banners auto-rotate |
| Category Tabs | Background white | border-border bottom | Horizontal scroll, images instead of emoji icons |
| Product Grid | Background white | None | 2 col mobile, 3-4 col tablet, 4+ col desktop |
| Product Card | Card white | border-border | Image, name, price, discount badge, ADD button |
| Map Modal | Card white | border-border | Centered pop-up, location picker, close button |
| Profile Panel | Primary/10 | border-primary/20 | Header right, shows phone + logout after login |
| Footer | Muted/40 | border-top | Zepto-style category sections (Groceries, Fresh Produce, Household, Snacks, Beverages, Personal Care, Medicines) |

## Spacing & Rhythm
Consistent 16px (1rem) gaps between sections, 12px (0.75rem) inside cards, 8px (0.5rem) micro-spacing. Product grid uses 2-3 col on mobile, 4 col on desktop with 16px gutters. Category tabs: 12px gap between images.

## Component Patterns
- **Hero Carousel**: Full-width container, smooth CSS slide transition (0.5s), auto-advance every 3s, clickable indicators at bottom
- **Category Tabs**: Horizontal scrollable row, product image (48x48px) + label, active state = border-bottom primary
- **Product Card**: Image 100% width, discount badge (top-left), name (2-line clamp), crossed price + sale price, ADD button (bottom-right, green, bold)
- **Map Modal**: Centered overlay, map placeholder, location search input, confirm button
- **Profile Panel**: Shows user phone (from login state), logout link, rounded pill shape

## Motion
- **Carousel**: 0.5s smooth slide transition, fade opacity on transition
- **Modal Pop**: Scale 0.95→1 over 0.3s, backdrop blur entrance
- **Card Hover**: Shadow-lg + border-primary/15, smooth 0.22s transition
- **Button States**: Shadow-md hover, scale-95 active, all 0.22s
- **Indicators**: Fade opacity on hover (200ms)

## Constraints
- All colors OKLCH token-driven, no hex literals
- Shadows: sm (subtle), md (hover buttons), lg (card elevation), xl (modals)
- Border-radius: 0px header, 8px cards/modals, 6px buttons, 4px badges
- No gradients except carousel backgrounds and accent hover states
- Every surface has intentional depth — no flat backgrounds

## Signature Detail
Seamless purple→green action flow with smooth 0.5s carousel animations creates premium fast-commerce identity. Zepto UX patterns elevated with refined motion and professional shadow depth.
