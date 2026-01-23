# backend-team — Node.js Backend Learning Journey (Zero → Pro)

A structured daily roadmap to learn Backend Development with **Node.js** from scratch to professional level — designed for teams.

> **Study Plan:** 6 days/week (1 day review/rest)  
> **Daily Time:** 2–3 hours/day  
> **Goal:** Build production-ready APIs, ship projects, and deploy them.

---

## Table of Contents
- [How We Study](#how-we-study)
- [Rules & Workflow](#rules--workflow)
- [Roadmap Stages](#roadmap-stages)
- [Weekly Projects](#weekly-projects)
- [Repo Structure](#repo-structure)
- [How to Run](#how-to-run)
- [Contribution Guide](#contribution-guide)
- [Definition of Done](#definition-of-done)
- [Resources](#resources)

---

## How We Study

### Daily Template (2–3 hours)
1. **Learn (45–60m)**: video/article + notes  
2. **Apply (60–90m)**: code hands-on  
3. **Ship (30–45m)**: small task + push to GitHub  
4. **Review (10m)**: quick questions + TODO for tomorrow

---

## Rules & Workflow

### Git Rules
- One **repo** for the team
- Each member works on a personal branch:
  - `feature/<name>/<task>`
- Minimum: **1 commit per day**
- Every day ends with a Pull Request (PR) or at least a pushed branch.

### PR Rules
- PR must include:
  - what you built
  - how to test it
  - screenshots/logs if needed

### Weekly Session
- **Review & Demo** for the weekly mini-project
- Code Review for PRs
- Plan next week

---

## Roadmap Stages

### Stage 0 — Setup & JS Essentials (3 days)
- Node.js LTS, npm, VS Code, Git/GitHub
- JS essentials for backend
- Async: callbacks, promises, async/await

**Deliverable:** repo setup + async exercises

---

### Stage 1 — Node.js Fundamentals (10 days)
- Core modules: fs, path, os
- HTTP server using Node core
- Routing without frameworks
- Debugging & project structure

**Deliverable:** basic HTTP API without Express

---

### Stage 2 — Express + REST APIs (14 days)
- Express routing + middleware
- REST conventions + status codes
- Controllers/Services architecture
- JWT auth + roles
- Pagination/filtering/sorting
- Security basics (CORS, helmet, rate limiting)

**Deliverable:** REST API (CRUD + Auth + Roles)

---

### Stage 3 — Databases (14 days)
Choose one:
- **MongoDB + Mongoose**
- **PostgreSQL + Prisma**

Topics:
- CRUD, relations, indexes
- migrations/seed
- advanced queries
- caching intro (Redis)

**Deliverable:** Blog API (users + posts + comments)

---

### Stage 4 — Testing & Code Quality (10 days)
- Jest + Supertest
- mocking & fixtures
- lint + prettier
- centralized error handling
- clean structure

**Deliverable:** tested API + clean codebase

---

### Stage 5 — Security, Performance, Production (10 days)
- OWASP basics
- bcrypt password hashing
- logging (winston/pino)
- health checks
- Docker basics
- background jobs intro

**Deliverable:** production-ready API + Docker

---

### Stage 6 — Deployment + CI/CD (7 days)
- GitHub Actions (run tests on push)
- Deploy app + DB + secrets
- Swagger/OpenAPI docs
- Release v1.0

**Deliverable:** deployed API with docs + CI

---

## Weekly Projects

- Week 1: **HTTP API (Node core)**
- Week 2: **Todo API (Express CRUD)**
- Week 3: **Todo API + JWT Auth + Roles**
- Week 4: **Blog API + Database**
- Week 5: **Add Tests**
- Week 6: **Docker + Deploy + Swagger**
- Final: **Graduation Project (2–3 weeks)**

---

## Repo Structure

Recommended layout:

