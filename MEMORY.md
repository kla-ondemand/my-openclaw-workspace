# MEMORY.md

## 🎯 HIGH PRIORITY - Tonkla's Performance Goals

**This is CRITICAL for Tonkla's career at Learn Corporation (OneLearn):**

### Documents Created (2026-02-03):
1. **PERFORMANCE_GOALS.md** - Complete framework for Lead Software Engineer role
2. **MONTHLY_TRACKER.md** - Monthly scorecard for Director/CTO reports  
3. **TRIAL_90DAYS.md** - Day-by-day guide for first 3 months

### Key Reminders:
- **Trial period success** = Technical delivery + Team leadership + Organizational impact
- **Monthly reporting** is required to Director and CTO
- **90-day milestone** is critical for full-time role confirmation
- Track metrics: Sprint completion ≥90%, System uptime 99.9%, Team satisfaction 4.5/5

### Monthly Actions:
- Week 1: Review metrics, set sprint goals
- Week 4: Compile report, present to leadership
- Use MONTHLY_TRACKER.md template every month
- Focus on measurable business impact

### Daily Activity Tracking:

- **2026-02-04:** Infrastructure & Platform Foundation (Day 3)
  - Core infrastructure: MongoDB, MySQL, PostgreSQL, Nginx deployed
  - Dev services: Redis, Kafka, RabbitMQ, Elasticsearch, ClickHouse, Prometheus, Grafana
  - Telegram bot integration: @kla_onelearn_tech_bot operational
  - MCP server setup for shadcn/ui component registry
  - Git repo initialized with 190+ files
  - See ACTIVITY_LOG_2026-02-04.md for full details

- **2026-02-03:** Complete SFD Pocket POC development (see ACTIVITY_LOG_2026-02-03.md)
  - 15 hours of focused work
  - 38 tests passing (100%)
  - Full documentation delivered
  - Performance framework established

**NEVER FORGET:** These goals are tied to Tonkla's career progression at OneLearn. Check in regularly on progress!

### Performance Documents Location:
All documents are in the workspace and GitHub repo:
- `PERFORMANCE_GOALS.md` - Goals framework
- `MONTHLY_TRACKER.md` - Monthly reports
- `TRIAL_90DAYS.md` - 90-day roadmap
- `ACTIVITY_LOG_2026-02-04.md` - Day 3: Infrastructure & Platform Foundation
- `ACTIVITY_LOG_2026-02-03.md` - Day 2: SFD Pocket POC Complete

---

## 🏗️ Infrastructure Setup (2026-02-04)

### Main Infrastructure (~/server/)
Centralized dev infrastructure shared across projects:

**Core Databases:**
- **MongoDB** - localhost:27017 (admin/password123)
- **MySQL** - localhost:3306 (onelearn/password123)
- **PostgreSQL** - localhost:5432 (onelearn/password123)
- **Nginx** - localhost:80/443

**Location:** `~/server/docker-compose.yml`

### OneLearn Platform Infrastructure
**Location:** `~/repos/onelearn-platform-foundation/`

**Dev Services (docker-compose.dev.yml):**
- **Redis** - localhost:6379
- **Kafka** - localhost:9092 (+ Zookeeper 2181)
- **RabbitMQ** - localhost:5672 (UI: 15672)
- **Elasticsearch** - localhost:9200
- **ClickHouse** - localhost:8123/9000
- **Prometheus** - localhost:9090
- **Grafana** - localhost:3001

**Connection strings:** See `.env.example`

**Quick Start:**
```bash
# 1. Start main infra
cd ~/server && docker compose up -d

# 2. Start dev services
cd ~/repos/onelearn-platform-foundation
docker compose -f docker-compose.dev.yml up -d
```

---

## 🚀 Active Projects

### SFD Pocket - Booth Stamp Collection POC
**Status:** ✅ POC Complete, LIVE on Vercel
**Live URL:** https://sfd-pocket-poc.vercel.app/
**Location:** `~/repos/sfd-pocket-poc/`
**GitHub:** `kla-ondemand/sfd-pocket-poc`

#### Completed (2026-02-03):
- ✅ Complete QR stamp collection system with Next.js + TypeScript
- ✅ 38 tests passing (100%) - 14 unit + 24 E2E
- ✅ Full documentation (README + Wiki with 6 pages)
- ✅ **DEPLOYED TO VERCEL** - Live at https://sfd-pocket-poc.vercel.app/
  - `vercel.json` - Build configuration (Singapore region)
  - `next.config.ts` - Next.js native build
  - `scripts/deploy.sh` - One-command deploy
- ✅ GitHub wiki with Architecture, Testing, Installation guides

#### Next Priority:
1. **Admin Portal** - Full spec created in `ADMIN_PORTAL_SPEC.md`
   - Real-time dashboard
   - Analytics & reports
   - Booth management
   - User management
   - Export capabilities
   - Real-time dashboard
   - Analytics & reports
   - Booth management
   - User management
   - Export capabilities

#### Key Files:
- `ADMIN_PORTAL_SPEC.md` - Complete specification
- `README.md` - Project documentation
- `wiki/` - GitHub wiki pages

---

## 🏢 Career - OneLearn (Learn Corporation)

**Role:** Lead Software Engineer  
**Trial Period:** 119 days (started 2026-02-02)  
**Reports to:** Director & CTO (monthly)

### Priority Documents:
1. **TRIAL_90DAYS.md** - Daily/weekly guide for first 3 months
2. **PERFORMANCE_GOALS.md** - Goals framework with KPIs
3. **MONTHLY_TRACKER.md** - Monthly scorecard template
4. **ACTIVITY_LOG_2026-02-03.md** - Complete activity log for performance reviews

### Key Metrics to Track:
- Sprint completion ≥90%
- System uptime 99.9%
- Code review turnaround <24h
- Team satisfaction 4.5/5
- Knowledge sharing sessions 2/month

### Important Dates:
- **Day 30:** First month review
- **Day 60:** Mid-point assessment  
- **Day 90:** Critical milestone
- **Day 119:** Trial period end

---

## Lessons Learned

### 2026-02-03: Always verify dev servers actually work

**What happened:**
- Told user the Next.js dev server was running at http://localhost:3000
- Server process started but the app was broken (missing tw-animate-css)
- User got errors when trying to access the page

**Root cause:**
- Didn't actually verify the page loads correctly
- Only checked that the process started
- CSS error caused 500 errors on the actual page

**Lesson:**
- Always run `curl` or similar to verify HTTP 200 before saying "it's working"
- Check for common errors (missing deps, CSS issues, build errors)
- Wait for "Ready" message then test the actual endpoint

**Tonkla's note:**
> "every run, before tell me recheck it working, remember to your memory"

Now I will always verify servers with an actual HTTP request before declaring success.
