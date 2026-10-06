# Ahsan Ahmad Siddiqui — Portfolio Website

[![GitHub Pages Deployment](https://github.com/AhsanASid/Portfolio-Website/actions/workflows/deploy.yml/badge.svg)](https://github.com/AhsanASid/Portfolio-Website/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live%20Portfolio-ahansasid.github.io%2FPortfolio--Website-06b6d4?style=flat&logo=github)](https://ahansasid.github.io/Portfolio-Website/)
[![License: MIT](https://img.shields.io/badge/License-MIT-3b82f6.svg)](LICENSE)
[![Tech Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-f59e0b)](#tech-stack)

> **High-performance, modern portfolio showcasing scalable data engineering pipelines, cloud infrastructure automation, and backend systems architecture.**

🌐 **Live URL**: [https://ahansasid.github.io/Portfolio-Website/](https://ahansasid.github.io/Portfolio-Website/)  
👤 **Author**: Ahsan Ahmad Siddiqui ([@AhsanASid](https://github.com/AhsanASid))  
📫 **Contact**: [ahsanasiddiqui.dev@gmail.com](mailto:ahsanasiddiqui.dev@gmail.com) | [LinkedIn](https://linkedin.com/in/ahsanasid)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Metrics & Highlights](#-key-metrics--highlights)
- [Tech Stack](#-tech-stack)
- [Repository Structure](#-repository-structure)
- [Featured Projects Showcase](#-featured-projects-showcase)
- [Technical Skills Matrix](#-technical-skills-matrix)
- [Engineering & UI/UX Principles](#-engineering--uiux-principles)
- [Local Development](#-local-development)
- [Automated GitHub Actions CI/CD](#-automated-github-actions-cicd)
- [Activating GitHub Pages](#-activating-github-pages)
- [License](#-license)

---

## 🌟 Overview

This repository hosts the official personal portfolio website of **Ahsan Ahmad Siddiqui**, a **Software & Data Engineer** specializing in modern cloud architectures, distributed ETL/ELT pipelines, infrastructure-as-code, and high-throughput backend microservices.

The website delivers a developer-centric aesthetic inspired by terminal interfaces, modern cloud platforms, and cyber-minimalist design systems. Built with pure Vanilla HTML5, CSS3, and JavaScript, it achieves near-instant load times, 60/120fps hardware-accelerated animations, zero external build dependencies, and strict WCAG 2.1 AA accessibility compliance.

---

## ⚡ Key Metrics & Highlights

| Metric | Achievement | Description |
| :--- | :--- | :--- |
| **Data Throughput** | `10M+ Records / Day` | Processed through automated batch and streaming ETL/ELT pipelines |
| **Algorithmic Ranking** | `TCS CodeVita Qualifier` | Ranked global contender solving complex dynamic programming & graph challenges |
| **Infrastructure as Code** | `100% Terraform IaC` | Multi-cloud GCP & AWS foundations codified with zero console drift |
| **Sub-Millisecond Caching** | `< 15ms Latency` | High-concurrency caching architecture with Redis and asynchronous Python |

---

## 🛠 Tech Stack

### Frontend & Client-Side Architecture
- **HTML5**: Semantic markup, ARIA landmarks, SEO meta tags, OpenGraph social cards.
- **CSS3**: Custom design tokens (CSS variables), Flexbox & Grid layouts, hardware-accelerated CSS animations (`transform`, `opacity`), responsive typography.
- **Vanilla JavaScript (ES6+)**: Zero dependencies, `IntersectionObserver` scroll reveals, rAF-throttled event handling, dynamic typing cadence, interactive project filtering.
- **Google Fonts**: *Plus Jakarta Sans* (modern sans-serif body & headings) and *JetBrains Mono* (monospaced code & data metrics).

### Deployment & CI/CD
- **GitHub Actions**: Automated, zero-touch continuous deployment workflow (`.github/workflows/deploy.yml`).
- **GitHub Pages**: Enterprise-grade static site hosting with HTTPS and edge CDN caching.
- **Jekyll Bypass (`.nojekyll`)**: Ensures unmodified static asset serving directly from the root workspace.

---

## 📂 Repository Structure

```text
Portfolio-Website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Actions deployment pipeline
├── assets/                     # Static media, icons, and diagrams
├── css/
│   ├── animations.css          # Keyframe animations, reveal transitions, and effects
│   └── style.css               # Core styling, design tokens, layout, and responsive rules
├── data/
│   ├── content.json            # Structured JSON profile, skills, projects, and metric data
│   └── portfolio-content.md    # Canonical Markdown documentation and system specifications
├── js/
│   └── main.js                 # Vanilla JavaScript runtime, observers, interactions, counters
├── .gitignore                  # Git ignore rules for OS, IDE, and temporary files
├── .nojekyll                   # Signals GitHub Pages to bypass Jekyll processing
├── index.html                  # Main portfolio single-page application entrypoint
└── README.md                   # Repository overview, architecture, and deployment guide
```

---

## 🚀 Featured Projects Showcase

### 1. Cloud-Native Event-Driven ETL Pipeline
- **Tech Stack**: Google Cloud Platform (GCP), Terraform, BigQuery, Cloud Run, Python, Pub/Sub, Docker
- **Repository**: [AhsanASid/cloud-native-etl-pipeline](https://github.com/AhsanASid/cloud-native-etl-pipeline)
- **Highlights**:
  - Event-driven ingestion utilizing **GCP Cloud Pub/Sub** with at-least-once delivery guarantees.
  - Auto-scaling stateless container workers on **Cloud Run** scaling from 0 to peak concurrency.
  - Partitioned and clustered analytical storage in **Google BigQuery** cutting scan costs by 40%.
  - Fully codified via **Terraform** modules with automated CI validation.

### 2. Distributed Data Processing Engine
- **Tech Stack**: Python, Apache Spark (PySpark), Docker, AWS S3, Apache Airflow, PostgreSQL, Parquet
- **Repository**: [AhsanASid/distributed-data-engine](https://github.com/AhsanASid/distributed-data-engine)
- **Highlights**:
  - Re-architected batch ingestion using distributed **PySpark** running in containerized clusters.
  - Multi-stage DAG orchestration with **Apache Airflow** enforcing retry semantics and audit metrics.
  - Export to Snappy-compressed columnar **Parquet** format, reducing disk footprint by 65%.
  - Elimination of out-of-memory (`OOM`) crashes on multi-gigabyte data transformations.

### 3. Scalable Microservice API & Caching Layer
- **Tech Stack**: FastAPI, Python, Redis, PostgreSQL, Docker Compose, AsyncIO, Pydantic v2
- **Repository**: [AhsanASid/scalable-microservice-cache](https://github.com/AhsanASid/scalable-microservice-cache)
- **Highlights**:
  - High-concurrency asynchronous REST endpoints powered by **FastAPI** and native `asyncio`.
  - Cache-aside layer with **Redis** delivering sub-12ms response times for frequent queries.
  - End-to-end type safety, serialization, and input sanitation with **Pydantic v2**.
  - Container orchestration with **Docker Compose** including automated health checks.

### 4. Competitive Programming & Algorithmic Problem Solving
- **Tech Stack**: C++, Python, Advanced Data Structures, Dynamic Programming, Graph Algorithms
- **Repository**: [AhsanASid/algorithmic-problem-solving](https://github.com/AhsanASid/algorithmic-problem-solving)
- **Highlights**:
  - 300+ optimized algorithmic solutions from **TCS CodeVita**, LeetCode, and global contests.
  - Implemented Segment Trees with Lazy Propagation, Fenwick Trees, Disjoint Set Union, and Tarjan's SCC.
  - Rigorous benchmarking framework verifying asymptotic bounds across adversarial input distributions.

---

## 🧠 Technical Skills Matrix

- **Programming Languages**: Python (Expert), SQL (Expert), C++ (Advanced), Bash / Shell (Advanced), JavaScript (Intermediate)
- **Data Engineering**: Distributed ETL/ELT, Google BigQuery, Apache Airflow, Apache Spark / PySpark, Data Modeling (Star/Snowflake), dbt, Pandas, NumPy
- **Cloud & DevOps**: Google Cloud Platform (GCP), Amazon Web Services (AWS), Terraform (IaC), Docker, Git & GitHub Actions CI/CD, Linux Systems
- **Backend Architecture**: FastAPI, PostgreSQL, Redis, Flask, RESTful APIs, Microservices, Event-Driven Architecture

---

## 🎨 Engineering & UI/UX Principles

1. **Zero-Dependency Architecture**: No heavy frameworks or large bundles. Loads instantly on low-bandwidth connections.
2. **GPU-Accelerated Rendering**: All animations leverage composited properties (`transform`, `opacity`) preventing costly browser reflows and repaints.
3. **Accessibility First (WCAG 2.1 AA)**:
   - Full support for `prefers-reduced-motion` media queries.
   - Screen-reader skip navigation link (`#main-content`).
   - Accessible color contrast ratios exceeding AA standards.
   - Semantic HTML elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
4. **Progressive Enhancement**: Built-in `<noscript>` fallback styles ensure full readability even if client-side scripting is disabled.

---

## 💻 Local Development

Running the portfolio locally requires no build steps, bundlers, or package installations:

### Option 1: Python HTTP Server (Built-in)
```bash
# Clone the repository
git clone https://github.com/AhsanASid/Portfolio-Website.git
cd Portfolio-Website

# Start a local static server (Python 3)
python3 -m http.server 8000
```
Open your browser at `http://localhost:8000`.

### Option 2: Node.js `serve` / `npx`
```bash
npx serve . -l 8000
```

### Option 3: VS Code Live Server Extension
Open the workspace directory in VS Code and click **Go Live** on the bottom status bar to view `index.html`.

---

## 🔄 Automated GitHub Actions CI/CD

The repository includes a production-ready GitHub Actions workflow in `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Key Workflow Features:
- **Zero-Touch Automation**: Any push to the `main` branch automatically packages and deploys the site.
- **Manual Trigger**: Supports `workflow_dispatch` for manual redeployments directly from the GitHub Actions tab.
- **Safe Concurrency**: Prevents race conditions with `cancel-in-progress: false` concurrency groups.
- **Official Actions**: Employs GitHub's latest `v4`/`v5` deployment actions for reliable artifact uploads and verification.

---

## ⚙️ Activating GitHub Pages

To activate live hosting on GitHub Pages:

1. Navigate to your repository on GitHub:  
   👉 **[https://github.com/AhsanASid/Portfolio-Website](https://github.com/AhsanASid/Portfolio-Website)**
2. Click on **Settings** (tab in the repository menu).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** > **Source**, select **GitHub Actions** from the dropdown menu (instead of "Deploy from a branch").
5. Push a commit to `main` (or run the workflow manually from the **Actions** tab).
6. Your live portfolio will be deployed and available at:  
   👉 **[https://ahansasid.github.io/Portfolio-Website/](https://ahansasid.github.io/Portfolio-Website/)**

---

## 📄 License

This project is open-source and available under the terms of the [MIT License](LICENSE).

---

© 2026 **Ahsan Ahmad Siddiqui**. Crafted with engineering precision.
