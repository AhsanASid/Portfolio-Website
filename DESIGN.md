# Design System Specification (v2) — The Systems Ledger

## Philosophy
An editorial-technical visual world built for systems operations and cloud infrastructure engineering. Inspired by high-craft engineering publications (Linear, Stripe Press, Swiss technical manuals). Conveys reliability, precision, and operational discipline.

## Typography
- **Display & Headings**: Space Grotesk (self-hosted WOFF2 via `@fontsource/space-grotesk`)
  - Optical traits: Architectural ink traps, mechanical precision, tight letter-spacing (`-0.035em` for hero, `-0.025em` for section titles).
- **Body & UI**: Geist Sans (self-hosted WOFF2 via `@fontsource/geist-sans`)
  - Optical traits: Modern neo-grotesque, optimized for screen reading at 15–18px, balanced x-height.
- **Telemetry & Metrics**: JetBrains Mono (self-hosted WOFF2 via `@fontsource/jetbrains-mono`)
  - Optical traits: Monospace with tabular numerals (`font-variant-numeric: tabular-nums`) for exact alignment across metrics, timestamps, and commit tags.

## Color Tokens
### Dark Mode (Default)
- `--color-bg-base`: `#0D0F11` (Deep Carbon canvas)
- `--color-bg-surface`: `#15181C` (Graphite module containers)
- `--color-bg-subtle`: `#1C2025` (Elevated pills and code grounds)
- `--color-border-subtle`: `#22272E` (1px structural gridlines)
- `--color-border-active`: `#38424E` (Interactive focus and hover borders)
- `--color-text-primary`: `#F3F4F6` (Bone white high-contrast text)
- `--color-text-secondary`: `#94A3B8` (Muted steel body copy)
- `--color-text-tertiary`: `#64748B` (Subtle metadata and timestamps)
- `--color-accent`: `#F97316` (Safety phosphor orange)
- `--color-accent-subtle`: `rgba(249, 115, 22, 0.12)` (Accent badge ground)

### Light Mode (Paper Bone)
- `--color-bg-base`: `#F8F7F4` (Warm architectural paper bone)
- `--color-bg-surface`: `#FFFFFF` (Crisp white cards)
- `--color-bg-subtle`: `#F1EFEA` (Warm stone tint)
- `--color-border-subtle`: `#E2DFD8` (Paper rule dividers)
- `--color-border-active`: `#CBD5E1` (Border hover state)
- `--color-text-primary`: `#111827` (Zinc black text)
- `--color-text-secondary`: `#475569` (Charcoal slate body copy)
- `--color-text-tertiary`: `#64748B` (Muted gray)
- `--color-accent`: `#EA580C` (Burnt amber accent)

## Motion Guidelines (Emil Kowalski Craft Rules)
- **Transitions**: Specified properties only (`transform`, `opacity`, `border-color`, `background-color`). Never use `transition: all`.
- **Curves**: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` for entrances and interactive reveals; `--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)` for toasts.
- **Press Feedback**: Buttons scale to `scale(0.98)` on `:active` with 120ms duration.
- **Card Hover**: Cards lift `-2px` on hover with border highlight in 200ms.
- **Scale Rule**: Nothing enters from `scale(0)` (always scale from `0.95` or purely translate `translateY(12px) → 0`).
- **Accessibility**: All motion collapses to zero duration under `@media (prefers-reduced-motion: reduce)`.
