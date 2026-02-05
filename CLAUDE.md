# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

This is an **OpenClaw AI workspace** — a persistent workspace for an AI assistant named **Bussaba** (บุษบา) who helps **Tonkla** (Pituk Kaewsuksai), a Lead Software Engineer at Learn Corporation (OneLearn). It is not a traditional code project; it's a configuration/memory/tooling workspace for an AI agent system.

## Architecture

The workspace follows an agent memory pattern:

- **`config/`** — Identity and behavior configuration. `SOUL.md` defines personality, `IDENTITY.md` defines who the agent is, `USER.md` describes the human, `AGENTS.md` has workspace rules. These files are read at session start and should not be casually modified.
- **`memory/`** — Daily activity logs in `YYYY-MM-DD-HHMM.md` format. Raw session logs.
- **`MEMORY.md`** (root) — Curated long-term memory. Distilled insights from daily logs. Contains career tracking, infrastructure details, active projects, and lessons learned. Security-sensitive — only load in direct sessions with Tonkla, never in shared/group contexts.
- **`scripts/`** — Shell and Python scripts for GitHub org analysis (README standards, repo auditing). All scripts use `gh` CLI for GitHub API access against the `it-ondemand` org.
- **`reports/`** — CSV outputs from the analysis scripts.
- **`data/`** and **`cron/`** — State files for scheduled tasks (meme delivery, cron jobs).
- **`diary/`** — Personal diary entries.

## Key Conventions

- **Session startup**: Read `SOUL.md` → `USER.md` → recent memory files → `MEMORY.md` (main sessions only).
- **Memory persistence**: The agent has no memory between sessions. All continuity comes from files. "Mental notes" do not survive — write everything to files.
- **Safety**: `trash` over `rm`. Ask before external actions (emails, posts). Internal actions (reading, organizing, searching) are safe to do freely.
- **Heartbeats**: Periodic polls check `HEARTBEAT.md` for tasks. If empty, respond `HEARTBEAT_OK`. Track check state in `memory/heartbeat-state.json`.

## Running Scripts

Scripts require `gh` CLI authenticated with access to the `it-ondemand` GitHub org.

```bash
# README standards analysis (shell version, sequential)
bash scripts/analyze_readme.sh

# README standards analysis (Python version, with summary stats)
python3 scripts/analyze_repos.py

# Reports output to reports/ directory
```

## Important Files Not to Delete

- `config/IDENTITY.md`, `config/SOUL.md`, `config/USER.md` — core agent identity
- `MEMORY.md` — long-term curated memory
