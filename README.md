# Ahsan Ahmad Siddiqui — Personal Portfolio (v2)

> **Software Engineer @ Mobily Infotech | Aspiring DevOps & Cloud Engineer**  
> Systems Operations · Automation · AWS · Kubernetes · GitOps · Observability

Live URL: [https://ahsanasid.github.io/Portfolio-Website/](https://ahsanasid.github.io/Portfolio-Website/)

---

## Overview

Version 2 of Ahsan Ahmad Siddiqui's engineering portfolio. Built from scratch with an **editorial-technical** aesthetic inspired by mission-critical systems engineering and technical monographs. Designed with strict accessibility, responsive design across all breakpoints (360px, 768px, 1024px, 1440px), self-hosted typography, zero layout shift (CLS ~0), and dark/light mode support.

### Key Highlights
- **CloudOps 5-Phase Architecture**: Interactive architectural tracer detailing AWS VPC/EKS, container security, full-stack observability, Argo Rollouts Canary shifting, and 17s Velero disaster recovery.
- **Enterprise Case Studies**: Real production impact at Mobily Infotech eliminating 50+ hours of monthly toil via parallelized shell scripting and optimizing partitioned Oracle BRM databases.
- **Career Progression**: Transparent timeline showcasing the career promotion from IT Operations Intern to full-time Software Engineer.
- **100% Static Output**: Pre-rendered with Astro v5 for instant load times and zero runtime client bloat.

---

## Tech Stack

- **Framework**: [Astro v5](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with custom design tokens
- **Typography (Self-Hosted)**:
  - Display: Space Grotesk (`@fontsource/space-grotesk`)
  - Body: Geist Sans (`@fontsource/geist-sans`)
  - Telemetry / Mono: JetBrains Mono (`@fontsource/jetbrains-mono`)
- **Icons & Graphics**: Pure inline SVG architecture diagrams and telemetry badges (zero external font/icon CDNs)
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

---

## Getting Started Locally

### Prerequisites
- Node.js 18+ (tested on Node 22)
- npm or bun

### Installation
```bash
git clone https://github.com/AhsanASid/Portfolio-Website.git
cd Portfolio-Website
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:4321/Portfolio-Website/](http://localhost:4321/Portfolio-Website/) in your browser.

### Production Build
```bash
npm run build
```
Generates a fully optimized static build in the `dist/` directory.

### Preview Build Locally
```bash
npm run preview
```

---

## Deployment Workflow

The site is continuously deployed to GitHub Pages on every push to the `main` branch via the automated GitHub Actions workflow defined in `.github/workflows/deploy.yml`:
1. Checks out the repository.
2. Installs dependencies using `npm ci`.
3. Compiles the static site using `npm run build` into `dist/`.
4. Uploads `dist/` as the Pages artifact and triggers GitHub Pages deployment.

---

## Version Rollback

In the event of an emergency rollback to Version 1:
```bash
git checkout v1-final
```
Or to restore the `main` branch to the `v1-final` tag:
```bash
git checkout main
git reset --hard v1-final
git push origin main --force
```

---

## License & Copyright

&copy; 2026 Ahsan Ahmad Siddiqui. Engineered with reliability and precision. All rights reserved.
