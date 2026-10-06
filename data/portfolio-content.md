# Ahsan Ahmad Siddiqui — Professional Portfolio Content Specification

> **DevOps Engineer | Cloud Infrastructure & Systems Automation**  
> Bengaluru, Karnataka, India | [ahsansid001@gmail.com](mailto:ahsansid001@gmail.com)  
> [LinkedIn: linkedin.com/in/ahsan-ahmad-siddiqui-594120201/](https://www.linkedin.com/in/ahsan-ahmad-siddiqui-594120201/) | [GitHub: github.com/AhsanASid](https://github.com/AhsanASid)

---

## 1. Professional Summary

DevOps Engineer with enterprise systems operations experience and hands-on expertise in cloud-native platforms. Proven track record of eliminating 50+ hours of monthly operational toil through shell automation, maintaining high-availability production platforms, and resolving mission-critical incidents. Technically proficient in Infrastructure as Code (Terraform), container orchestration (Kubernetes, Docker, Helm), CI/CD pipelines (GitHub Actions), progressive delivery (Argo Rollouts), and full-stack observability (Prometheus, Grafana, Loki). Strong background in root cause analysis (RCA), blameless incident reviews, and cost-conscious cloud architecture.

---

## 2. Core Quantitative Metrics

| Metric | Achievement / Impact | Context / Domain |
| :--- | :--- | :--- |
| **50+ Hours** | Monthly Operational Toil Saved | Automated parallelized shell scripts for bi-weekly release checksums at Mobily Infotech |
| **100+** | Manual CLI Steps Eliminated | Streamlined complex manual release verification into automated background workflows |
| **17 Seconds** | Disaster Recovery Restoration | 100% full namespace backup and recovery executed via Velero & in-cluster MinIO |
| **24/7** | Enterprise High-Availability SLA | Frontline operations management & incident RCA for Oracle BRM production billing |

---

## 3. Technical Competencies Matrix

### Cloud & Infrastructure as Code (IaC)
- **AWS**: VPC, IAM Least-Privilege Policies, SSM Parameter Store Secrets, S3 Remote State with Native Locking, EKS Architecture.
- **Terraform**: Modular Multi-AZ VPC Architecture, Remote S3 Backend State Locking (`use_lockfile`), Plan-Only Architectural Validation (eliminating unnecessary billable cloud costs).

### Containers & Orchestration
- **Kubernetes (k8s)**: Namespace isolation, multi-tier deployments, configmaps/secrets, health probes.
- **kind (Kubernetes-in-Docker)**: Local production-parity multi-node cluster provisioning.
- **Docker**: Multi-stage builds, non-root user execution, security boundary hardening.
- **Helm 3**: Modular chart releases, values-as-code, dependency management.
- **Argo Rollouts**: Canary deployment controller, automated traffic shifting (25% → 50% → 75% → 100%), automated rollback triggers.

### CI/CD & Delivery Pipelines
- **GitHub Actions**: Automated pull request validation, linting, build verification, container publishing.
- **GitHub Container Registry (GHCR)**: Immutable commit-SHA tagged images, multi-architecture tagging.
- **GitOps Architecture**: Declarative state reconciliation and reproducible release versions.

### Observability & Disaster Recovery
- **Prometheus**: ServiceMonitor metrics scraping, resource-conscious 2-hour retention policies.
- **Grafana**: Declarative datasources-as-code and dashboards-as-code.
- **Loki & Promtail**: Single-binary log ingestion and PromQL-compatible LogQL querying.
- **Velero & MinIO**: Zero-cost S3-compatible snapshot backup, disaster simulation, and 100% namespace restoration in 17s.

### Scripting & Systems Operations
- **Shell Scripting (Bash/sh, Solaris)**: Parallelized background execution, time-based filtering, cron automation.
- **Python**: Automation utilities, microservice development, telemetry scripts.
- **Linux/Unix Internals**: Process inspection, IPC, signal handling, storage optimization.
- **Databases & Enterprise Platforms**: Oracle SQL, PL/SQL, Partitioned Database Optimization, Oracle BRM (Billing and Revenue Management), Remedy, Jira.

---

## 4. Featured Technical Projects

### Project 1: CloudOps: Automated Cloud Infrastructure & Progressive Delivery
*Technologies*: AWS, Terraform, Kubernetes (k8s/kind), Argo Rollouts, Helm 3, Prometheus, Grafana, Loki, Velero, MinIO, Docker, GitHub Actions, Python  
- **Phase 1 – Modular Cloud Infrastructure (AWS & Terraform)**: Built a reusable Terraform VPC module in `ap-south-1` across 2 AZs, least-privilege IAM roles, SSM Parameter Store secrets, and encrypted S3 remote state with native locking (`use_lockfile`); designed an EKS module validated via `terraform plan` (plan-only to strictly eliminate billable cloud spend).
- **Phase 2 – Container CI/CD Pipeline (GitHub Actions & GHCR)**: Developed a containerized Python microservice (`hello-api`) with non-root security and health endpoints (`/healthz`); built automated GitHub Actions workflows publishing immutable commit-SHA tagged images to GitHub Container Registry (GHCR).
- **Phase 3 – Full-Stack Observability (Helm, Prometheus & Loki)**: Deployed a resource-conscious telemetry pipeline into a dedicated namespace using Prometheus (metrics scraping, 2h retention) and single-binary Loki + Promtail (log streaming); declaratively provisioned Grafana datasources as code for unified metrics and log visualization.
- **Phase 4 – Progressive Delivery (Argo Rollouts)**: Migrated workloads from standard Deployments to Argo Rollouts on a local `kind` cluster, implementing automated multi-step Canary traffic shifting (25% → 50% → 75% → 100%) and automated rollback verification.
- **Phase 5 – Disaster Recovery & Platform Hardening (Velero & MinIO)**: Established zero-cost S3-compatible backup and DR using Velero and in-cluster MinIO, successfully executing full namespace backups, simulated catastrophic failure, and 100% state restoration in 17 seconds.

### Project 2: Enterprise Release Checksum & Systems Automation Engine
*Technologies*: Shell Scripting (Bash/Solaris), Unix Internals, Linux, Background Concurrency, Time-based Filtering, Cron  
- **Context**: Oracle BRM enterprise billing platform operations at Mobily Infotech.
- **Problem**: Bi-weekly enterprise releases involved over 100 repetitive manual CLI steps to verify artifact checksums, leading to 50+ hours of operational toil monthly and risk of human error.
- **Solution**: Engineered parallelized shell scripts utilizing time-based filtering and asynchronous background execution to calculate checksums, validate deployment packages, and log verification states automatically.
- **Impact**: Eliminated 100+ manual CLI steps per cycle and recovered 50+ hours of monthly engineering time.

### Project 3: Oracle BRM Partitioned Database Telemetry & SQL Performance Suite
*Technologies*: Oracle SQL, PL/SQL, Partitioned Database Optimization, UNIX CLI, Remedy, Jira  
- **Context**: High-availability billing platform capacity management at Mobily Infotech.
- **Problem**: Enterprise telecom billing tables generate massive transaction datasets where partition performance bottlenecks and exceptions risk SLA breaches.
- **Solution**: Developed optimized analytical SQL queries on partitioned tables to inspect telemetry, diagnose exceptions before service degradation, and provide actionable technical summaries that reduced MTTR for L2/L3 teams.
- **Impact**: Guaranteed 24/7 high availability, prevented customer-facing outages, and established proactive system capacity guidelines.

### Project 4: Hardened Python Microservice & DevSecOps Delivery Pipeline
*Technologies*: Python, Docker (Multi-stage, Non-root), GitHub Actions, GHCR, Linux, Kubernetes  
- **Problem**: Insecure container images and mutable tags introduce attack vectors and deployment inconsistencies.
- **Solution**: Built containerized Python service adhering to DevSecOps principles: multi-stage builds, non-root execution, explicit `/healthz` probes, and automated GitHub Actions workflows pushing immutable commit-SHA tagged images to GHCR.
- **Impact**: 100% automated CI/CD pipeline, zero root-container vulnerabilities, and reproducible immutable deployment artifacts.

---

## 5. Professional Experience

### Oracle BRM Administrator (Systems Operations & Automation)
**Mobily Infotech India Pvt Ltd** | Bengaluru, Karnataka, India  
*April 2025 – Present*
- Provide frontline technical support and operations management for critical enterprise billing platforms (Oracle BRM), ensuring high availability and strict SLA compliance across distributed production environments.
- Engineered parallelized shell scripts utilizing time-based filtering and background jobs to automate checksum operations for bi-weekly releases, eliminating 100+ manual CLI steps and saving 50+ hours of operational toil monthly.
- Participate in 24/7 on-call rotations, diagnosing complex production bottlenecks, executing blameless root cause analysis (RCA), and developing standard operating procedures (SOPs).
- Author and optimize complex Oracle SQL queries on large partitioned databases to support capacity management and detect anomalies before end-user service degradation.
- Championed incident and problem management workflows, drafting detailed technical summaries for L2/L3 engineering teams that reduced Mean Time to Resolution (MTTR).

### IT Operations Intern
**Mobily Infotech India Pvt Ltd** | Bengaluru, Karnataka, India  
*August 2024 – April 2025*
- Supported day-to-day operations, application telemetry monitoring, and release validation for enterprise billing software.
- Diagnosed backend system errors and database exceptions using Unix command-line utilities and analytical SQL queries.
- Assisted release management by executing deployment workflows and reviewing system integration documentation (HLD/LLD).
- Maintained strict adherence to operational SLAs, gaining hands-on foundation in high-availability enterprise environments.

---

## 6. Education & Certifications

### Education
- **Bachelor of Technology (B.Tech) – Information Technology** (2020 – 2024)  
  *Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM)* | Lucknow, Uttar Pradesh, India

### Verified Certifications
1. **AWS Educate: Getting Started with Storage (Amazon S3, EBS, EFS)** — Amazon Web Services (AWS)
2. **Python Real-World Applications (100 Projects Portfolio): Automation & Scripting** — Udemy
3. **Big Data Foundations – Level 1 & Hadoop Administration** — IBM
4. **Career Essentials in Generative AI** — Microsoft & LinkedIn
