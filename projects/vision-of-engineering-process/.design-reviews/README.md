# Design Review System

This directory contains structured design reviews, feedback, and design decisions for the AI-First Team project.

## Directory Structure

```
.design-reviews/
├── README.md           # This file
├── templates/          # Review templates and guidelines
├── sessions/           # Active and completed review sessions
└── archives/           # Archived reviews and historical decisions
```

## Quick Start

### Create a New Review Session

```bash
/uxui-design-review create {design-name}
```

Example:
```bash
/uxui-design-review create homepage-redesign
```

### Add Feedback to a Design

```bash
/uxui-design-review feedback add
```

### Generate Summary Report

```bash
/uxui-design-review summary
```

### Export Documentation

```bash
/uxui-design-review export
```

## Review Process

1. **Create Session** - Designer creates a review session for their design
2. **Share Design** - Attach screenshots, Figma links, or prototypes
3. **Collect Feedback** - Team members add structured feedback
4. **Discuss** - Design critique meeting to discuss major feedback
5. **Prioritize** - Categorize and prioritize action items
6. **Resolve** - Designer addresses feedback and updates design
7. **Archive** - Export final decisions and archive the session

## Feedback Categories

- **Usability** - User experience, interaction patterns
- **Visual Design** - Colors, typography, spacing, consistency
- **Accessibility** - WCAG compliance, keyboard navigation, screen readers
- **Content** - Copy, messaging, information architecture
- **Technical** - Implementation feasibility, performance
- **Brand** - Brand alignment, tone, visual identity

## Severity Levels

- **Critical** - Blocks user goals, must fix before launch
- **High** - Significant impact on UX, should fix soon
- **Medium** - Improvement opportunity, nice to have
- **Low** - Minor polish, future consideration

## Guidelines

- **Be constructive** - Focus on problems and solutions, not personal preferences
- **Be specific** - Point to exact elements, provide examples
- **Be actionable** - Suggest concrete improvements
- **Be respectful** - Critique the design, not the designer
- **Don't Trust, Verify** - Test designs with real users when possible

---

**Created:** 2026-02-06
**Team:** OneLearn - AI-First Team Project
