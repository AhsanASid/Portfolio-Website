---
name: Ahsan Ahmad Siddiqui Portfolio
description: Enterprise systems operations and cloud-native engineering portfolio
colors:
  bg-obsidian: "#0b0f17"
  bg-slate-deep: "#0f172a"
  bg-slate-card: "#141e33"
  bg-slate-hover: "#1e293b"
  bg-slate-elevated: "#1a253c"
  accent-cyan: "#06b6d4"
  accent-cyan-hover: "#22d3ee"
  accent-cyan-light: "#67e8f9"
  accent-emerald: "#10b981"
  accent-emerald-hover: "#34d399"
  accent-amber: "#f59e0b"
  bg-footer: "#070a10"
  text-primary: "#f8fafc"
  text-secondary: "#94a3b8"
  text-muted: "#889bb8"
  border-subtle: "rgba(255, 255, 255, 0.08)"
  border-light: "rgba(255, 255, 255, 0.14)"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 700
    lineHeight: 1.15
  heading:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  mono:
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  xxl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-cyan}"
    textColor: "{colors.bg-obsidian}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
  card:
    backgroundColor: "{colors.bg-slate-card}"
    rounded: "{rounded.lg}"
    padding: "1.75rem"
---

# Design System: Ahsan Ahmad Siddiqui Portfolio

## Overview
This design system establishes an authoritative, calm visual language for Ahsan Ahmad Siddiqui's engineering portfolio. Ahsan is a Software Engineer at Mobily Infotech with ~2 years of experience in enterprise systems operations (Oracle BRM, production release support, automated checksum verification) and aspiring DevOps/cloud-native engineering.

The aesthetic philosophy centers on **quiet technical authority**: replacing flashy AI/cyberpunk templates with disciplined systems typography, restrained neutral elevation, and high-signal operational proof points.

## Colors
* **Obsidian Foundation**: `--bg-obsidian: #0b0f17` serves as the primary canvas, paired with `--bg-slate-deep: #0f172a` and `--bg-slate-card: #141e33`.
* **Primary Accent**: `--accent-cyan: #06b6d4` for focused interactive calls-to-action and primary links.
* **Semantic Status**: `--accent-emerald: #10b981` reserved exclusively for live status indicators ("Available", verified operational metrics).
* **Text Contrast**: Text tokens (`--text-primary: #f8fafc`, `--text-secondary: #94a3b8`) strictly maintain WCAG AA (>4.5:1) contrast against card and body backgrounds.

## Typography
* **Primary Sans**: `Plus Jakarta Sans` for clean, geometric headlines and comfortable long-form reading.
* **Technical Monospace**: `JetBrains Mono` reserved for shell commands, architecture labels, tags, and metrics.
* **Hierarchy**: Enforces a 1.25:1 typographic ratio step between hierarchy levels to prevent flat typography. Gradient text is avoided in favor of crisp solid tokens.

## Layout
* **Max Container**: `1240px` centered with responsive fluid side padding (`1.5rem` desktop, `1rem` mobile).
* **Spacing Scale**: Consistent 8px baseline (`0.5rem`, `1rem`, `1.5rem`, `2.5rem`, `4rem`).
* **Line Length**: Body paragraphs and summaries constrained to `max-width: 68ch` with `text-wrap: pretty` to eliminate awkward line wraps and orphan words.

## Elevation & Depth
* **Neutral Elevation**: Subtle, directional elevation shadows (`0 8px 24px -4px rgba(0, 0, 0, 0.45)`) replace zero-offset colored blur halos.
* **Surface Separation**: Uses 1px subtle hairline borders (`rgba(255, 255, 255, 0.08)`) and surface background color shifts rather than stacked nested cards.

## Shapes
* Small chips/buttons: `6px` radius (`var(--radius-sm)`).
* Cards and panels: `16px` radius (`var(--radius-lg)`).
* Pills and status badges: `9999px` (`var(--radius-full)`).

## Components
* **Buttons**: High-contrast solid fills with subtle lift on hover, gated behind `@media (hover: hover) and (pointer: fine)`.
* **Metric Cards**: High-visibility numbers in solid white/slate text with uppercase monospace labels.
* **Project Architecture Cards**: Flattened single-layer containers with clean structural dividers and verified technical metrics.

## Do's and Don'ts
* **DO**: Lead with quantified engineering impact (50+ hours toil saved, 2 years enterprise experience).
* **DO**: Respect `prefers-reduced-motion` on all animations.
* **DON'T**: Use decorative glowing neon shadows (`dark-glow`) or radial ambient color blobs.
* **DON'T**: Use fake terminal cursors or `> Hello world` greetings in the main headline.
* **DON'T**: Use text below 11px on mobile viewports.
