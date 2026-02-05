# My OpenClaw Workspace

Personal AI workspace powered by [OpenClaw](https://github.com/kla-ondemand), managed by **Bussaba** — an AI assistant for **Tonkla** (Pituk Kaewsuksai).

## Structure

```
├── config/       # Identity, personality, and system configuration
├── memory/       # Daily activity logs
├── scripts/      # Automation and analysis scripts
├── reports/      # Generated reports (README standards, repo analysis)
├── data/         # State files and data storage
├── diary/        # Personal diary entries
├── cron/         # Scheduled task configurations
├── INDEX.md      # Full workspace index
└── MEMORY.md     # Curated long-term memory
```

## Getting Started

1. Review `config/IDENTITY.md` for AI assistant identity
2. Check `config/USER.md` for user context
3. See `INDEX.md` for a detailed file-by-file breakdown

## Scripts

Analysis and automation scripts live in `scripts/`. Run them from the workspace root:

- `analyze_readme.sh` — Analyze README quality across repos
- `analyze_repos.sh` / `analyze_repos.py` — Repository analysis tools
- `check_readme.sh` / `check_readme_fast.sh` — README standards checker

## Reports

- `reports/readme_standards_report.csv` — README standards analysis across 100 it-ondemand repos
- `reports/readme_full_report.csv` — Extended README report
- `reports/repo_list.txt` — Repository listing
