---
name: YohGut Artisan Creamery
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d3'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2ed'
  surface-container: '#f6ece7'
  surface-container-high: '#f0e6e1'
  surface-container-highest: '#eae1dc'
  on-surface: '#1f1b18'
  on-surface-variant: '#424752'
  inverse-surface: '#342f2c'
  inverse-on-surface: '#f9efea'
  outline: '#727783'
  outline-variant: '#c2c6d3'
  surface-tint: '#175eb0'
  primary: '#0c59ab'
  on-primary: '#ffffff'
  primary-container: '#3572c6'
  on-primary-container: '#f8f8ff'
  inverse-primary: '#a9c7ff'
  secondary: '#865300'
  on-secondary: '#ffffff'
  secondary-container: '#ffb14e'
  on-secondary-container: '#714500'
  tertiary: '#854756'
  on-tertiary: '#ffffff'
  tertiary-container: '#a15f6e'
  on-tertiary-container: '#fff7f7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#00468c'
  secondary-fixed: '#ffddb9'
  secondary-fixed-dim: '#ffb962'
  on-secondary-fixed: '#2b1700'
  on-secondary-fixed-variant: '#663e00'
  tertiary-fixed: '#ffd9df'
  tertiary-fixed-dim: '#ffb1c1'
  on-tertiary-fixed: '#380a18'
  on-tertiary-fixed-variant: '#6e3543'
  background: '#fff8f5'
  on-background: '#1f1b18'
  surface-variant: '#eae1dc'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1200px
---

## Brand & Style

The brand personality is **artisanal, welcoming, and vibrant**. It balances the premium nature of high-quality frozen yogurt with a playful, accessible energy that invites indulgence. The target audience includes health-conscious foodies, families seeking a premium treat, and urban professionals.

The design style is a blend of **Minimalism** and **Tactile/Skeuomorphic** elements. We use the clean layouts of modern SaaS products but infuse them with "squishy" physical metaphors and soft, pillowy shapes that mimic the texture of the product itself. The visual mood is "Sweet Serenity"—a clean, bright space where the pops of color act as the "toppings" to a refined, neutral base.

## Colors

The palette is derived from the brand's physical interior and its bold logo. 

- **Primary (Blue):** A confident, trustworthy blue used for primary actions and core branding.
- **Secondary (Orange):** A warm, citrus-inspired orange for energy and highlights.
- **Tertiary (Peach/Pink):** Inspired by the interior walls, used for soft backgrounds and feminine accents.
- **Accent (Mint):** Derived from the shop's fluted paneling, used for freshness and health-oriented callouts.
- **Neutral:** A warm "Milk" off-white replaces harsh grays to maintain the creamy, artisanal feel. 

The color mode is strictly **light**, emphasizing cleanliness and the bright morning/afternoon feel of a yogurt shop.

## Typography

Typography plays a dual role: the headlines provide a technical, modern edge, while the body copy remains soft and approachable.

- **Headlines:** Space Grotesk is used to mirror the bold, geometric nature of the logo. It should feel impactful and slightly quirky. Large headlines should use tight letter spacing for a "packed" look.
- **Body & Labels:** Plus Jakarta Sans provides a friendly, rounded counterpoint. Its high legibility and soft terminals reinforce the "welcoming" brand pillar.
- **Hierarchy:** Use large scale contrasts. High-impact headlines should often appear in the Primary Blue or Secondary Orange to draw immediate attention.

## Layout & Spacing

The layout follows a **fluid grid** model with generous white space to evoke the "clean wood" minimalism of the shop interior. 

- **Grid:** A 12-column system for desktop, 4-column for mobile. 
- **Rhythm:** An 8px base unit drives all spacing. For a "premium" feel, prioritize "loose" vertical padding (64px+) between major sections to let the content breathe.
- **Mobile Adaptivity:** On mobile, horizontal margins shrink to 16px, and typography scales down slightly to ensure the bold headings don't break excessively.

## Elevation & Depth

To mimic the soft, whipped texture of yogurt, depth is created through **Ambient Shadows** and **Tonal Layers**.

- **Shadows:** Avoid harsh blacks. Use extra-diffused shadows tinted with the Primary Blue or Tertiary Peach (e.g., `rgba(53, 114, 198, 0.08)`). Shadows should look like "soft glows" rather than traditional drop shadows.
- **Layers:** Use the Neutral (Milk) color as the base surface, with elevated cards using pure white. This subtle contrast suggests a "toppings on yogurt" relationship.
- **Interactions:** When buttons are hovered, they should appear to "sink" or "squish" slightly (a subtle scale down to 0.98), reinforcing the tactile, soft brand nature.

## Shapes

The shape language is dominated by **circles and arches**, echoing the "Brew & Swirl" architectural features of the shop.

- **Corners:** Standard UI elements like cards and input fields use a 1rem (16px) radius. 
- **Arches:** Use large-scale arch shapes for image containers or section dividers to reference the shop's doorway and machine alcoves.
- **Buttons:** Buttons are exclusively **pill-shaped** to feel soft and inviting to the touch.

## Components

- **Buttons:** Primary buttons use a solid Blue fill with white text. Secondary buttons use a Mint or Peach tint with Blue text. All buttons must be pill-shaped.
- **Cards:** Cards should have a subtle 1px border in a darker tint of the Neutral color, paired with a soft ambient shadow. Use "Milk" as the card background.
- **Chips (Toppings):** Used for flavor tags or dietary info. These should use the Tertiary Peach and Accent Mint backgrounds with dark text.
- **Input Fields:** Use a thick 2px border in a soft gray, turning Primary Blue on focus. The corners must be highly rounded (12px+).
- **Progress Bars:** Represented as "swirls" or smooth fluid lines rather than rigid blocks.
- **Iconography:** Use thick-stroke, rounded icons. Avoid sharp points or thin lines.