# MEMORY.md

## 🚨 URGENT / ATTENTION (2026-02-07)
- **CRITICAL ALERT:** Google Cloud Run `learn-delivery-api` Database Timeout (Received 2026-02-06 22:16). **Action Required:** Check Cloud Console immediately.
- **CI/CD Failure:** `sfd-pocket-poc` Quality Gate failing on main branch. **Action Required:** Fix build/tests.

## 🎯 HIGH PRIORITY - Tonkla's Performance Goals

**This is CRITICAL for Tonkla's career at Learn Corporation (OneLearn):**

### Documents Created (2026-02-03):
1. **PERFORMANCE_GOALS.md** - Complete framework for Lead Software Engineer role → `performance/goals/`
2. **MONTHLY_TRACKER.md** - Monthly scorecard for Director/CTO reports → `performance/monthly/`
3. **TRIAL_90DAYS.md** - Day-by-day guide for first 3 months → `performance/`

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

- **2026-02-06:** 🧠 Strategic Vision & SFD Pocket v0.3.0 (Day 5)
  - Vision of Engineering Process: Created comprehensive presentation & web experience
  - Deliverables: `PROCESS_V01_TEAM_SETUP.md`, `AI_FIRST_TEAM_PRESENTATION.html`
  - Defined AI-First Metrics: Code review <3h, Bug fix <1h, Velocity 3x
  - Team Structure: Defined AI assistant roles for Director, PM, Lead, Devs
  - Tech Stack: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion
  - SFD Pocket v0.3.0: Release complete prototype, switch to PostgreSQL (Neon), new red UI theme.
  - Resolving 10 security vulnerabilities and implementing OAuth token exchange.
  - New Initiative: Created `ondemand-team-sync` repo.
  - See `performance/daily/ACTIVITY_LOG_2026-02-06.md` for full details

- **2026-02-05:** 🚀 EXCEPTIONAL Productivity - Prototype Complete (Day 4)
  - SFD Pocket: Backend + API + Tests + QA 100% complete
  - AI Agents: 4 agents deployed, 45+ minutes runtime
  - Output: 3,500+ lines code, 42 tests, 8,000+ words docs
  - Team Planning: Creative Types analysis complete
  - Documentation: SSO integration guide, Jira stories with AC/DoD
  - Performance Score: 9.6/10 (A+)
  - See PERFORMANCE_DAY4.md for full details
  - Status: 2 weeks work completed in 1 day
  - SFD Pocket: CI/CD pipeline, security scanning, camera v0.2.0
  - OneLearn Platform: Admin portal with Google OAuth, Tauri app, CLI tool
  - Workspace: Port management registry for 6 projects
  - 17 commits, 12,000+ lines added across 3 repos
  - See `projects/sfd-pocket/ACTIVITY_LOG_2026-02-05.md` for full details

- **2026-02-04:** Infrastructure & Platform Foundation (Day 3)
  - Core infrastructure: MongoDB, MySQL, PostgreSQL, Nginx deployed
  - Dev services: Redis, Kafka, RabbitMQ, Elasticsearch, ClickHouse, Prometheus, Grafana
  - Telegram bot integration: @kla_onelearn_tech_bot operational
  - MCP server setup for shadcn/ui component registry
  - Git repo initialized with 190+ files

- **2026-02-03:** Complete SFD Pocket POC development
  - 15 hours of focused work
  - 38 tests passing (100%)
  - Full documentation delivered
  - Performance framework established

**NEVER FORGET:** These goals are tied to Tonkla's career progression at OneLearn. Check in regularly on progress!

### Performance Documents Location:
- `performance/goals/PERFORMANCE_GOALS.md` - Goals framework
- `performance/monthly/MONTHLY_TRACKER.md` - Monthly reports
- `performance/TRIAL_90DAYS.md` - 90-day roadmap
- `projects/sfd-pocket/ACTIVITY_LOG_2026-02-05.md` - Day 4: Exceptional Productivity

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

### Team Composition (Adobe Creative Types) - Updated 2026-02-06

| Role | Nick Name | Email | Birth Year | Gender | Creative Type | Strengths |
|------|-----------|-------|------------|--------|---------------|-----------|
| CTO + CPO | Pei | areerat.goo@ondemand.in.th | - | Female | - | Tech strategy, Product vision |
| Director | Games | saran.tan@ondemand.in.th | 1994 | Male | The Guide | Leadership, vision, direction |
| Lead Software Engineer | Tonkla | pituk.kae@ondemand.in.th | 1990 | Male | The Architect | System design, structure, planning |
| Project Manager | Ploy | suriyaporn.eam@ondemand.in.th | 1992 | Female | The Regenerator | Improvement, problem-solving |
| Project Manager | Pam | pawarisa.wor@ondemand.in.th | 1999 | Female | The Architect | System design, structure |
| Project Manager | Alok | apisit.sah@ondemand.in.th | 2001 | Male | The Architect | System design, structure |
| Project Coordinator | Dew | wimonsiri.boo@ondemand.in.th | 1996 | Female | The Guide | Coordination, communication |
| UX/UI Designer | M | apisit.wai@ondemand.in.th | 1998 | Male | The Regenerator | Refinement, quality |
| UX/UI Designer | Phear | nawarat.see@ondemand.in.th | 2001 | Female | The Gardener | Growth, nurturing |
| Developer | Ta | ta@ondemand.in.th | 2002 | Male | The Regenerator | Improvement, problem-solving |
| Developer | Off | sahagan.nuy@ondemand.in.th | 2000 | Male | The Architect | System design, structure |

**Team Size:** 11 คน (อัปเดต 6 ก.พ. 2026 - เพิ่ม Pei CTO+CPO)

**Type Distribution:**
- The Architect: 4 (Tonkla, Pam, Alok, Off) - Heavy on system/structure
- The Regenerator: 3 (Ploy, M, Ta) - Good for improvement cycles
- The Guide: 2 (Games, Dew) - Good for leadership/coordination
- The Gardener: 1 (Phear) - Growth mindset
- CTO/CPO: 1 (Pei) - Tech strategy & product vision

**Missing Types (Gaps):**
- **Artist** - Innovation, wild ideas, experimentation
- **Adventurer** - Risk-taking, new tech exploration
- **Warrior** - Execution pressure, deadline driving
- **Communicator/Networker** - External communication, stakeholder management ⚠️ NEW

**Current Workaround for Gaps:**
- **No Warrior:** Games drives deadlines more aggressively
- **No Communicator:** **Pam** (PM, Architect) temporarily handling external communication with stakeholders outside team/org
  - Status: Interim solution
  - Note: Monitor workload, consider hiring/training for this role

**Future Hiring Plan:**
- **Target:** Add new team member to fill Communicator/Networker gap
- **Timeline:** TBD (after Trial Period stabilization)
- **Role focus:** External stakeholder management, cross-team communication, client relations
- **Ideal profile:** Communicator or Networker creative type, possibly with PM/BA background
- **Status:** Planned - will discuss with Games/Director when ready to expand team

**Recommendations:**
- If no Warrior found, Games should drive deadlines more aggressively
- If no Artist found, encourage Phear (Gardener) to explore creative ideas

### 📝 Dev Team - Ta & Off (Observe Notes)

**น้อง Ta (Regenerator, born 2002)**
- **จุดแข็ง:** ปรับปรุง แก้ปัญหา ล้างสิ่งที่พัง
- **Observe อะไร:** ดูว่าเจอปัญหาแล้วแก้ยังไง ชอบ optimize อะไร
- **คำถามที่ควรถาม:** "ถ้าต้องทำให้ดีขึ้น คิดว่าตรงไหนควรปรับ?"
- **คุย workflow:** อยากได้ process ที่ลื่นไหล ไม่ติดขัด

**น้อง Off (Architect, born 2000)**
- **จุดแข็ง:** System design, structure
- **Observe อะไร:** ดูโครงสร้าง code การวาง pattern
- **คำถามที่ควรถาม:** "ระบบนี้ถ้าต้อง scale ขึ้น คิดว่าโครงสร้างนี้พอไหม?"
- **คุย workflow:** อยากได้โครงสร้างชัดเจน มี standard

**คำเตือนสำหรับบุษบา:** อย่าลืม! Ta กับ Off เป็น dev สองคนที่พี่ต้อง observe

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
