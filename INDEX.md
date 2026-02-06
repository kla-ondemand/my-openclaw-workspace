# 🗂️ Workspace Index - OneLearn Engineering

**Last Updated:** 6 กุมภาพันธ์ 2026  
**Maintained by:** Tonkla + Busaba  
**Purpose:** Multi-project workspace with clear separation and cross-linking

---

## 📊 Quick Navigation

| โปรเจกต์หลัก | สถานะ | ลิงก์ | Priority |
|-------------|--------|-------|----------|
| 🤖 AI-First Team Process | 🟢 Active | [📁 projects/ai-first-team/](#1-ai-first-team-process) | 🔴 High |
| 📱 SFD Pocket POC | 🟡 Maintenance | [📁 projects/sfd-pocket/](#2-sfd-pocket-poc) | 🟡 Medium |
| 🏢 OneLearn Platform | 🟢 Active | [📁 projects/onelearn-platform/](#3-onelearn-platform-foundation) | 🔴 High |
| 📈 Performance Tracking | 🟢 Active | [📁 performance/](#4-performance--trial-period) | 🔴 High |

---

## 📁 Project Structure

```
workspace/
├── 📋 INDEX.md                    ← คุณอยู่ที่นี่ (Master Index)
├── 📖 README.md                   ← Overview ทั้งหมด
├── 🔗 LINKS.md                    ← Cross-project references
│
├── 📁 projects/                   ← โฟลเดอร์โปรเจกต์หลัก
│   ├── ai-first-team/            ← AI Process & Presentation
│   ├── sfd-pocket/               ← SFD POC (Complete)
│   ├── onelearn-platform/        ← Platform Foundation
│   └── team-analysis/            ← Creative Types Analysis
│
├── 📁 performance/                ← Trial Period Tracking
│   ├── goals/
│   ├── monthly/
│   ├── weekly/
│   └── daily/
│
├── 📁 shared/                     ← เอกสารกลาง
│   ├── templates/
│   ├── standards/
│   └── references/
│
├── 📁 archive/                    ← โปรเจกต์จบแล้ว/ไม่ active
│
├── 📁 config/                     ← Agent Configs
├── 📁 memory/                     ← Session memories
└── 📁 docs/                       ← General documentation
```

---

## 1. 🤖 AI-First Team Process

**สถานะ:** 🟢 Active (ประชุม 10:00 AM วันนี้)  
**เป้าหมาย:** Rollout AI assistant ให้ทีม 11 คน  
**Owner:** Tonkla (Lead)

### 📄 Key Documents

| เอกสาร | รายละเอียด | ลิงก์ |
|--------|-----------|--------|
| 🎯 Process Setup | เอกสารหลักสำหรับประชุม | [PROCESS_V01_TEAM_SETUP.md](./projects/ai-first-team/PROCESS_V01_TEAM_SETUP.md) |
| 🎨 Presentation | Web slides สำหรับ present | [AI_FIRST_TEAM_PRESENTATION.html](./projects/ai-first-team/AI_FIRST_TEAM_PRESENTATION.html) |
| 📝 Slide Guide | Canva/Design guide | [CANVA_SLIDES_GUIDE.md](./projects/ai-first-team/CANVA_SLIDES_GUIDE.md) |
| 📊 Team Analysis | Creative Types + AI mapping | [TEAM_AI_MAPPING.md](./projects/ai-first-team/TEAM_AI_MAPPING.md) |

### 🎯 Action Items
- [ ] Present 10:00 AM
- [ ] Setup AI for Ta, Off (14:00)
- [ ] Retro 18:00

---

## 2. 📱 SFD Pocket POC

**สถานะ:** 🟡 Complete (95%) - Maintenance mode  
**Live URL:** https://sfd-pocket-poc.vercel.app/  
**GitHub:** kla-ondemand/sfd-pocket-poc

### 📄 Key Documents

| เอกสาร | รายละเอียด | ลิงก์ |
|--------|-----------|--------|
| 📋 Activity Log | บันทึกการทำงาน Day 4 | [ACTIVITY_LOG_2026-02-05.md](./projects/sfd-pocket/ACTIVITY_LOG_2026-02-05.md) |
| 🎯 Requirements | JIRA Stories + SRS | [docs/requirements/](./projects/sfd-pocket/docs/requirements/) |
| 🏗️ Architecture | System design | [docs/architecture/](./projects/sfd-pocket/docs/architecture/) |
| 🧪 QA Reports | Testing results | [docs/qa/](./projects/sfd-pocket/docs/qa/) |

### 🎯 Next Phase (Admin Portal)
- [ ] Real-time dashboard
- [ ] Analytics & reports
- [ ] Booth management

---

## 3. 🏢 OneLearn Platform Foundation

**สถานะ:** 🟢 Active Development  
**Location:** `~/repos/onelearn-platform-foundation/`

### 📄 Key Documents

| เอกสาร | รายละเอียด | ลิงก์ |
|--------|-----------|--------|
| 🏗️ Infrastructure | Docker compose, services | [INFRASTRUCTURE.md](./projects/onelearn-platform/INFRASTRUCTURE.md) |
| 🔐 Admin Portal | OAuth, dashboard specs | [ADMIN_PORTAL_SPEC.md](./projects/onelearn-platform/ADMIN_PORTAL_SPEC.md) |
| 🤖 RAG System | Knowledge base docs | [RAG_SYSTEM.md](./projects/onelearn-platform/RAG_SYSTEM.md) |
| 📱 Knowledge Apps | Tauri + CLI docs | [KNOWLEDGE_APPS.md](./projects/onelearn-platform/KNOWLEDGE_APPS.md) |

### 🎯 Active Development
- [ ] Admin Portal testing
- [ ] Knowledge Apps build pipeline
- [ ] RAG system optimization

---

## 4. 📈 Performance & Trial Period

**ระยะเวลา:** 119 วัน (Day 5/119)  
**รายงาน:** Director & CTO (รายเดือน)

### 📄 Key Documents

| เอกสาร | รายละเอียด | ลิงก์ |
|--------|-----------|--------|
| 🎯 Performance Goals | กรอบเป้าหมาย | [PERFORMANCE_GOALS.md](./performance/goals/PERFORMANCE_GOALS.md) |
| 📊 Monthly Tracker | รายงานประจำเดือน | [MONTHLY_TRACKER.md](./performance/monthly/2026-02.md) |
| 📅 90-Day Roadmap | แผน 3 เดือน | [TRIAL_90DAYS.md](./performance/TRIAL_90DAYS.md) |
| 📝 Activity Logs | บันทึกรายวัน | [performance/daily/](./performance/daily/) |

### 🎯 Trial Milestones
- **Day 30:** First month review
- **Day 60:** Mid-point assessment
- **Day 90:** Critical milestone
- **Day 119:** Trial period end

---

## 5. 👥 Team Analysis

**Framework:** Adobe Creative Types  
**Team Size:** 11 คน

### 📄 Key Documents

| เอกสาร | รายละเอียด | ลิงก์ |
|--------|-----------|--------|
| 🎨 Team Composition | ตาราง Creative Types | [TEAM_COMPOSITION.md](./projects/team-analysis/TEAM_COMPOSITION.md) |
| 📝 Individual Profiles | โปรไฟล์แต่ละคน | [profiles/](./projects/team-analysis/profiles/) |
| 🎯 Communication Guide | วิธีคุยตาม Type | [COMMUNICATION_GUIDE.md](./projects/team-analysis/COMMUNICATION_GUIDE.md) |

### 🔍 Key Insights
- **Architects:** 4 คน (Tonkla, Pam, Alok, Off)
- **Regenerators:** 3 คน (Ploy, M, Ta)
- **Guides:** 2 คน (Games, Dew)
- **Gaps:** Artist, Adventurer, Warrior, Communicator

---

## 🔗 Cross-Project Links

### Documents ที่เชื่อมโยงกัน

```
AI-First Team Process
    ↳ ใช้ข้อมูลจาก: Team Analysis (Creative Types)
    ↳ สนับสนุน: SFD Pocket (Ta, Off training)
    ↳ รายงานผล: Performance Tracking

SFD Pocket POC
    ↳ อยู่ใน: OneLearn Platform ecosystem
    ↳ ใช้ทีม: Team Analysis profiles
    ↳ ติดตาม: Performance goals

OneLearn Platform
    ↳ ทีมพัฒนา: AI-First Team
    ↳ ใช้ process: Systematic AI Development
    ↳ รายงาน: Monthly performance
```

---

## 📋 Workspace Standards

### Naming Conventions
- **Projects:** `projects/{project-name}/`
- **Documents:** `UPPER_SNAKE_CASE.md`
- **Daily Logs:** `YYYY-MM-DD.md`
- **Activity Logs:** `ACTIVITY_LOG_YYYY-MM-DD.md`

### Document Templates
- [New Project Template](./shared/templates/PROJECT_TEMPLATE.md)
- [Meeting Notes Template](./shared/templates/MEETING_TEMPLATE.md)
- [Decision Record Template](./shared/templates/DECISION_TEMPLATE.md)

### Status Indicators
- 🟢 **Active** - กำลังทำงานอยู่
- 🟡 **Maintenance** - จบแล้ว แต่ต้องดูแล
- 🔴 **Blocked** - ติดปัญหา
- ⚪ **Planned** - วางแผนไว้ ยังไม่เริ่ม

---

## 🔄 Daily Workflow

```
1. เช้า: เช็ค INDEX.md ดูว่าวันนี้ต้องทำอะไร
2. เลือกโปรเจกต์: ไปที่โฟลเดอร์ projects/{name}/
3. ทำงาน: อัปเดตเอกสารในโฟลเดอร์นั้น
4. สรุป: อัปเดต Activity Log ใน performance/daily/
5. ค่ำ: Review ว่าแต่ละโปรเจกต์ความคืบหน้าเท่าไหร่
```

---

## 📊 Project Status Dashboard

| โปรเจกต์ | ความคืบหน้า | สถานะ | Next Action |
|---------|------------|--------|-------------|
| AI-First Team | 80% | 🟢 | Present 10:00 AM |
| SFD Pocket | 95% | 🟡 | Maintenance |
| OneLearn Platform | 60% | 🟢 | Admin Portal test |
| Performance Tracking | 40% | 🟢 | Daily logging |

---

**สรุป:** ใช้ Index นี้เป็น Entry point ทุกครั้งที่เริ่มทำงาน  
**ค้นหาไม่เจอ?** ใช้ `Cmd/Ctrl + F` ค้นหาในไฟล์นี้  
**ต้องการเพิ่มโปรเจกต์?** สร้างโฟลเดอร์ใน `projects/` และอัปเดต Index นี้

---

*จัดทำโดย: Busaba 🌸 | อัปเดตล่าสุด: 6 Feb 2026 07:20*
