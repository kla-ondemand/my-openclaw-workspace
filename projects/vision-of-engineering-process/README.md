# Vision of Engineering Process

An AI-First team transformation presentation and interactive web experience showcasing the implementation of AI assistants in software development teams at Learn Corporation (OneLearn).

## Overview

This project demonstrates the vision and process for building an AI-augmented development team where every team member has an AI assistant to enhance productivity by 3-4x. The presentation covers team structure, workflows, tools, and metrics for successful AI integration.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion 11
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:5173 in your browser
```

### Available Scripts

```bash
# Development
pnpm dev          # Start dev server with hot reload

# Build
pnpm build        # Build for production (TypeScript + Vite)
pnpm preview      # Preview production build locally

# Type Checking
pnpm lint         # Run TypeScript type checking
```

## Project Structure

```
vision-of-engineering-process/
├── src/                    # Source code
├── public/                 # Static assets
├── .design-reviews/        # Design review documentation
├── dist/                   # Production build output
├── node_modules/           # Dependencies
│
├── PROCESS_V01_TEAM_SETUP.md       # AI-First team process documentation
├── AI_FIRST_TEAM_PRESENTATION.html # Presentation content
├── CANVA_SLIDES_GUIDE.md           # Presentation design guide
│
├── index.html              # Entry point
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Documentation

- **[Process v0.1 - Team Setup](./PROCESS_V01_TEAM_SETUP.md)** - Detailed guide for implementing AI-First team structure
- **[Canva Slides Guide](./CANVA_SLIDES_GUIDE.md)** - Presentation design specifications
- **[Design Reviews](./.design-reviews/)** - Design iteration and feedback

## Team Structure

The AI-First team model includes:

- **Director** - Strategic AI assistant for reporting and planning
- **PM** - Sprint planning and documentation AI assistant
- **Lead Developer** - System design AI assistant (Busaba)
- **Developers** - Dual AI assistants (coding + process)

## Key Metrics

Target productivity improvements:

| Metric | Before | Target |
|--------|--------|--------|
| Code Review Time | 2-3 days | 2-3 hours |
| Bug Fix Time | 4-8 hours | 30 min - 1 hour |
| Test Writing | 2-3 hours | 15-30 min |
| Documentation | 1-2 days | 2-3 hours |
| Sprint Velocity | 10 pts/week | 30+ pts/week |

## Development Workflow

1. **Morning Standup** - AI assistants log daily tasks
2. **During Development** - AI assists with coding, testing, debugging
3. **Before Commit** - Automated quality checks
4. **End of Day** - AI generates summaries and updates tracking

## Build & Deploy

```bash
# Production build
pnpm build

# The dist/ folder contains optimized static files ready to deploy
# Deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.)
```

## Version

- **Version:** 1.0.0
- **Last Updated:** 2026-02-06
- **Authors:** Tonkla (Pituk Kaewsuksai) + Busaba (AI Assistant)

## License

Private - Learn Corporation (OneLearn)

---

**Prepared by:** Tonkla (Lead Software Engineer) + Busaba (AI Assistant)
**Organization:** Learn Corporation (OneLearn)
