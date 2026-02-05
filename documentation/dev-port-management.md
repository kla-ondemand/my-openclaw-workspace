# Development Port Management

> Central registry for development server ports across all projects

---

## 📋 Quick Reference

| Project | Port | Service | Status |
|---------|------|---------|--------|
| ondemand-team-sync | 3900-3950 | Next.js Dev Server | ✅ Active |
| onelearn-platform-foundation | 3000-3010 | Various Services | ✅ Active |
| sfd-pocket-poc | 3000 | Next.js Dev | ✅ Active |
| my-performance-portfolio | TBD | - | 📝 Planning |
| onelearn-bots | TBD | - | 📝 Planning |
| sde-process | - | Documentation | 📄 Static |

---

## 🎯 Port Allocation Strategy

### Standard Port Ranges

| Range | Purpose | Projects |
|-------|---------|----------|
| **3000-3010** | Primary Frontend Apps | sfd-pocket-poc, onelearn-platform-foundation |
| **3900-3950** | Team Sync Platform | ondemand-team-sync (monorepo) |
| **5000-5010** | Backend APIs | Reserved |
| **8000-8010** | Documentation Sites | Reserved |
| **9000-9010** | Utility Services | Reserved |

---

## 📁 Project Details

### ondemand-team-sync
**Location:** `~/repos/ondemand-team-sync`  
**Port Range:** 3900-3950

| Service | Port | URL | Notes |
|---------|------|-----|-------|
| Web App | 3900 | http://localhost:3900 | Main Next.js app |
| Admin Dashboard | 3902 | http://localhost:3902 | Vite + React |
| Mobile App | 3903 | http://localhost:3903 | Tauri 2.0 |
| API Gateway | 5004 | http://localhost:5004 | Reserved |

**Start Command:**
```bash
cd ~/repos/ondemand-team-sync
pnpm dev
```

---

### onelearn-platform-foundation
**Location:** `~/repos/onelearn-platform-foundation`  
**Port Range:** 3000-3010, 5000-5100

| Service | Port | URL | Notes |
|---------|------|-----|-------|
| Knowledge Portal | 3001 | http://localhost:3001 | Next.js |
| RAG Knowledge Base | 3002 | http://localhost:3002 | Python/FastAPI |
| Prometheus | 9090 | http://localhost:9090 | Monitoring |
| Grafana | 3000 | http://localhost:3000 | Dashboards |

**Infrastructure Services:**
```yaml
# Docker Compose Dev Services
Redis: 6379
Kafka: 9092
RabbitMQ: 5672, 15672
Elasticsearch: 9200
ClickHouse: 8123, 9000
PostgreSQL: 5432
MongoDB: 27017
MySQL: 3306
```

---

### sfd-pocket-poc
**Location:** `~/repos/sfd-pocket-poc`  
**Port:** 3000

| Service | Port | URL | Notes |
|---------|------|-----|-------|
| Next.js App | 3000 | http://localhost:3000 | Main application |
| Admin Portal | 3001 | http://localhost:3001 | Admin dashboard |

**Start Command:**
```bash
cd ~/repos/sfd-pocket-poc
pnpm dev
```

---

### sde-process
**Location:** `~/repos/sde-process`  
**Type:** Documentation Repository

No dev server required. Static markdown documentation.

---

## 🔧 Port Management Guidelines

### 1. Reserving a New Port

1. Check this registry for available ports
2. Add your project to the table above
3. Update this document via PR
4. Use consistent ports across team

### 2. Port Conflict Resolution

**If port is in use:**
```bash
# Find process using port
lsof -i :3000

# Kill process (if safe)
kill -9 <PID>

# Or use alternative port
PORT=3001 pnpm dev
```

### 3. Environment Configuration

**Standard .env.local template:**
```bash
# Development Server
PORT=3000
HOST=localhost

# API Endpoints
API_URL=http://localhost:5000
NEXT_PUBLIC_API_URL=http://localhost:5000

# Services
REDIS_URL=redis://localhost:6379
DATABASE_URL=postgresql://localhost:5432
```

---

## 📊 Port Status Dashboard

| Port | Project | Status | Last Updated |
|------|---------|--------|--------------|
| 3000 | sfd-pocket-poc | ✅ Active | 2026-02-05 |
| 3001 | onelearn-platform-foundation | ✅ Active | 2026-02-05 |
| 3900 | ondemand-team-sync | ✅ Active | 2026-02-05 |
| 3902 | ondemand-team-sync | ✅ Active | 2026-02-05 |
| 3903 | ondemand-team-sync | ✅ Active | 2026-02-05 |
| 5004 | ondemand-team-sync | 📝 Reserved | 2026-02-05 |

---

## 🚀 Quick Start Commands

```bash
# Start all main projects
# Terminal 1: SFD Pocket
cd ~/repos/sfd-pocket-poc && pnpm dev

# Terminal 2: OneLearn Platform
cd ~/repos/onelearn-platform-foundation && docker compose -f docker-compose.dev.yml up -d

# Terminal 3: Team Sync
cd ~/repos/ondemand-team-sync && pnpm dev

# Terminal 4: Infrastructure (if not running)
cd ~/server && docker compose up -d
```

---

## 📞 Support

**Port Conflicts?** Check this registry first  
**Need New Port?** Update this document  
**Questions?** Ask in #dev-infrastructure

---

**Last Updated:** 2026-02-05  
**Maintained by:** Engineering Team
