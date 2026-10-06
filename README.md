# Ahsan Ahmad Siddiqui — Portfolio Website

[![GitHub Pages Deployment](https://github.com/AhsanASid/Portfolio-Website/actions/workflows/deploy.yml/badge.svg)](https://github.com/AhsanASid/Portfolio-Website/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live%20Portfolio-AhsanASid.github.io%2FPortfolio--Website-06b6d4?style=flat&logo=github)](https://AhsanASid.github.io/Portfolio-Website/)
[![License: MIT](https://img.shields.io/badge/License-MIT-3b82f6.svg)](LICENSE)
[![Tech Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-10b981)](#tech-stack)

> **DevOps Engineer specializing in cloud-native platforms, AWS, Terraform (IaC), Kubernetes, Helm, Argo Rollouts, shell automation, and observability.**

🌐 **Live Website**: [https://AhsanASid.github.io/Portfolio-Website/](https://AhsanASid.github.io/Portfolio-Website/)  
👤 **Author**: Ahsan Ahmad Siddiqui ([@AhsanASid](https://github.com/AhsanASid))  
🏢 **Role**: Oracle BRM Administrator (Systems Operations & Automation) at Mobily Infotech India Pvt Ltd  
📍 **Location**: Bengaluru, Karnataka, India  
📫 **Contact**: [ahsansid001@gmail.com](mailto:ahsansid001@gmail.com) | [LinkedIn](https://www.linkedin.com/in/ahsan-ahmad-siddiqui-594120201/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Real-World Metrics](#-key-real-world-metrics)
- [Technical Skills Matrix](#-technical-skills-matrix)
- [Featured Production Projects](#-featured-production-projects)
- [Professional Experience](#-professional-experience)
- [Education & Certifications](#-education--certifications)
- [Frontend Architecture](#-frontend-architecture)
- [Automated GitHub Actions CI/CD](#-automated-github-actions-cicd)
- [License](#-license)

---

## 🌟 Overview

This repository hosts the official personal portfolio website of **Ahsan Ahmad Siddiqui**, a **DevOps Engineer** with enterprise systems operations experience and hands-on expertise in cloud-native platforms.

Key highlights:
- Eliminating 50+ hours of monthly operational toil through shell automation at Mobily Infotech.
- Codifying immutable Infrastructure as Code (Terraform) across AWS with S3 backend locking.
- Orchestrating containerized workloads with Kubernetes, Helm, and Argo Rollouts (canary traffic shifting).
- Implementing full-stack observability (Prometheus, Grafana, Loki) and 17-second disaster recovery (Velero & MinIO).

The website delivers a modern dark aesthetic inspired by obsidian terminal interfaces and cloud platforms, built with pure Vanilla HTML5, CSS3, and JavaScript with zero external build dependencies and strict WCAG 2.1 AA accessibility compliance.

---

## ⚡ Key Real-World Metrics

| Metric | Achievement | Description / Context |
| :--- | :--- | :--- |
| **50+ Hours** | Monthly Operational Toil Saved | Engineered parallelized shell scripts automating bi-weekly release checksums at Mobily Infotech |
| **100+ Steps** | Manual CLI Steps Eliminated | Streamlined complex manual release verification into background automated jobs |
| **17 Seconds** | Disaster Recovery Restoration | 100% full namespace state restoration following simulated node failure via Velero & MinIO |
| **24/7 SLA** | Enterprise High Availability | Frontline operations & RCA for mission-critical Oracle BRM billing systems |

---

## 🛠 Technical Skills Matrix

- **Cloud & Infrastructure as Code (IaC)**: AWS (VPC, IAM Least-Privilege, SSM Parameter Store, S3 State Locking, EKS), Terraform (Modular Architecture, S3 Backend Locking, Plan-Only Architectural Validation)
- **Containers & Orchestration**: Kubernetes (k8s), kind (Kubernetes-in-Docker), Docker (Multi-stage, Non-root security), Helm 3, Argo Rollouts (Canary Deployments)
- **CI/CD & Delivery Pipelines**: GitHub Actions, GitHub Container Registry (GHCR / Immutable SHA tagging), GitOps Architecture, Automated Rollbacks, Multi-Step Traffic Shifting
- **Observability & Disaster Recovery**: Prometheus (Metrics Scraping, Retention Management), Grafana (Declarative Datasources-as-Code), Loki, Promtail, Velero (Backup & Restore), MinIO (S3 API)
- **Scripting & Systems**: Python, Shell Scripting (Bash/sh, Solaris), Linux/Unix Internals, Process Automation, Cron
- **Databases & Operations**: Oracle SQL, PL/SQL, Partitioned Database Optimization, Oracle BRM (Billing and Revenue Management), Remedy, Jira

---

## 🚀 Featured Production Projects

### 1. CloudOps: Automated Cloud Infrastructure & Progressive Delivery
- **Tech Stack**: AWS, Terraform, Kubernetes, Argo Rollouts, Helm 3, Prometheus, Grafana, Loki, Velero, MinIO, Docker, GitHub Actions, Python
- **Key Capabilities**:
  - **Modular AWS & Terraform**: VPC in `ap-south-1` across 2 AZs, least-privilege IAM, SSM Parameter Store, and encrypted S3 remote state with native locking (`use_lockfile`).
  - **Container CI/CD**: Containerized Python microservice (`hello-api`) with non-root security and `/healthz` endpoints; automated GitHub Actions publishing immutable commit-SHA tagged images to GHCR.
  - **Full-Stack Telemetry**: Prometheus metrics scraping (2h retention) and single-binary Loki + Promtail log streaming with Grafana datasources as code.
  - **Progressive Delivery**: Argo Rollouts canary traffic shifting (25% → 50% → 75% → 100%) on a local kind cluster with automated rollbacks.
  - **Disaster Recovery**: Velero & in-cluster MinIO backup executing 100% namespace state restoration in 17 seconds.

### 2. Enterprise Release Checksum & Systems Automation Engine
- **Tech Stack**: Shell Scripting (Bash/sh), Solaris, Linux, Unix Internals, Background Concurrency, Cron, Oracle BRM
- **Key Capabilities**:
  - Replaced over 100 manual CLI steps per bi-weekly release cycle with parallelized background workers.
  - Automated checksum calculations and package integrity verification across distributed servers.
  - Saved 50+ hours of operational engineering toil every month at Mobily Infotech.

### 3. Oracle BRM Partitioned Database Telemetry & SQL Performance Suite
- **Tech Stack**: Oracle SQL, PL/SQL, Partitioned Databases, Oracle BRM, Unix CLI, Remedy, Jira
- **Key Capabilities**:
  - Authored and optimized analytical queries across large partitioned billing databases to track capacity and detect telemetry anomalies.
  - Supported 24/7 on-call rotations and conducted blameless root cause analyses (RCA) that reduced MTTR.

### 4. Hardened Python Microservice & DevSecOps Delivery Pipeline
- **Tech Stack**: Python, Docker (Multi-stage, Non-root), GitHub Actions, GHCR, Linux, Kubernetes
- **Key Capabilities**:
  - Built minimal-footprint container image adhering to non-root execution and security best practices.
  - Automated GitHub Actions workflow publishing immutable commit-SHA tagged images to GHCR.

---

## 💼 Professional Experience

### Oracle BRM Administrator (Systems Operations & Automation)
**Mobily Infotech India Pvt Ltd** | Bengaluru, Karnataka, India  
*April 2025 – Present*
- Frontline technical support and operations management for critical enterprise billing platforms (Oracle BRM), ensuring high availability and strict SLA compliance.
- Engineered parallelized shell scripts saving 50+ hours of monthly operational toil and eliminating 100+ manual CLI steps.
- Participated in 24/7 on-call rotations, diagnosing complex production bottlenecks and executing blameless RCA.
- Authored and optimized complex Oracle SQL queries on large partitioned databases to detect anomalies before end-user degradation.

### IT Operations Intern
**Mobily Infotech India Pvt Ltd** | Bengaluru, Karnataka, India  
*August 2024 – April 2025*
- Supported day-to-day operations, application telemetry monitoring, and release validation for enterprise billing software.
- Diagnosed backend system errors and database exceptions using Unix command-line utilities and analytical SQL queries.

---

## 🎓 Education & Certifications

### Education
- **Bachelor of Technology (B.Tech) – Information Technology** (2020 – 2024)  
  *Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM)* | Lucknow, Uttar Pradesh, India

### Certifications
- **AWS Educate: Getting Started with Storage (Amazon S3, EBS, EFS)** — Amazon Web Services
- **Python Real-World Applications (100 Projects Portfolio): Automation & Scripting** — Udemy
- **Big Data Foundations – Level 1 & Hadoop Administration** — IBM
- **Career Essentials in Generative AI** — Microsoft & LinkedIn

---

## 📂 Repository Structure

```text
Portfolio-Website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Actions deployment pipeline
├── css/
│   ├── animations.css          # Keyframe animations, reveal transitions, and effects
│   └── style.css               # Core styling, design tokens, layout, and responsive rules
├── data/
│   ├── content.json            # Authentic JSON profile, skills, projects, and metric data
│   └── portfolio-content.md    # Canonical Markdown documentation and system specifications
├── js/
│   └── main.js                 # Vanilla JavaScript runtime, observers, interactions, counters
├── .gitignore                  # Git ignore rules for OS, IDE, and temporary files
├── .nojekyll                   # Signals GitHub Pages to bypass Jekyll processing
├── index.html                  # Main portfolio single-page application entrypoint
├── LICENSE                     # MIT License
└── README.md                   # Repository overview, architecture, and deployment guide
```

---

## 🚀 Automated GitHub Actions CI/CD

Deployment is fully automated using GitHub Actions via `.github/workflows/deploy.yml`. Every commit pushed to `main` triggers:
1. Static code checkout.
2. GitHub Pages configuration and asset packaging.
3. Edge deployment to GitHub Pages.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
