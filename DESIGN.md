# Design Brief: QuickCart — Premium Grocery Delivery

## Direction
Premium modern grocery tech. Refined, polished UI with clear hierarchy, depth through refined shadows, and elevated card treatments. Purple-dominant brand identity with vibrant green accents and warm orange highlights. SaaS-quality visual system.

## Tone
Refined, approachable, modern. Polished visual hierarchy with elegant spacing. Premium grocery experience without pretension.

## Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| Primary (Purple) | 0.50 0.27 310 | Header, primary CTAs, refined brand identity |
| Accent (Green) | 0.52 0.18 145 | ADD buttons, success actions, vibrant CTAs |
| Secondary (Orange) | 0.68 0.18 50 | Discount badges, promotional highlights |
| Background | 0.995 0.002 0 | Main content area, light mode |
| Card | 0.975 0.004 0 | Product cards, elevated surfaces with depth |
| Foreground | 0.14 0.01 0 | Body text, high contrast |
| Border | 0.88 0.008 0 | Refined card edges, subtle dividers |
| Muted | 0.91 0.005 0 | Secondary text, inactive states |

## Typography
**Display/Body**: DM Sans (400, 600, 700 weights) — clean, modern, grocery-ready
**Mono**: JetBrains Mono — technical clarity if needed

## Shape & Radius
Card corners: 8px (rounded-lg). Badges: 0px (sharp). Button corners: 6px (rounded-md). Header: 0px.

## Elevation & Depth
Refined shadow hierarchy: cards use `shadow-lg` on hover for subtle elevation. Sticky header with `shadow-md` bottom border. Layered z-hierarchy with glassmorphic depth. No flat surfaces — every zone has intentional visual separation.

## Structural Zones

| Zone | Background | Border | Usage |
|------|-----------|--------|-------|
| Header | Primary (purple) | None | Sticky, search, cart icon |
| Category Tabs | Background (white) | Bottom border-border | Scrollable, active = bold text + underline |
| Product Grid | Background (white) | None | Card-based, 2 columns mobile, 4+ desktop |
| Product Card | Card (off-white) | border-border | Image, name, description, price, discount badge, quantity, ADD button |
| Cart Sidebar | Card (off-white) | border-border left | Fixed or modal on mobile |
| Footer | Muted/30% | border-top | Light divider |

## Component Patterns
- **Product Card**: Image → Name/Description → Price crossed out + discounted price → Discount badge (secondary background, sharp corners) → Quantity selector → ADD button (green, bold)
- **Discount Badge**: Orange background, dark text, sharp corners, small text
- **ADD Button**: Green background, white text, bold font weight, rounded corners
- **Category Tabs**: Text-only active state with bold weight + underline in primary color
- **Search Bar**: Animated placeholder cycling through suggestions

## Motion
- Fade-in on load (300ms)
- Card hover: shadow-lg + border primary/20 (smooth 0.25s)
- Button states: shadow-md on hover, scale-95 on active (0.25s)
- Entry animations: slide-up + fade (300ms staggered)
- Smooth placeholder cycling in search bar (400ms per cycle)

## Constraints
- All colors token-driven via OKLCH CSS variables
- Shadows: sm (hover subtle), md (hover buttons), lg (card elevation) only
- Border-radius: consistent lg (8px), no extreme radius
- Gradients: accent gradient for interactive hover states only
- No flat surfaces; every zone has intentional depth

## Signature Detail
Refined deep purple (#6B2FD7) paired with vibrant green action buttons creates premium brand identity. Elegant shadow hierarchy and smooth transitions elevate the experience beyond typical grocery apps. Premium SaaS aesthetic applied to fast commerce.
