# Design Critique Guidelines

A design critique is a structured discussion to evaluate design work and provide constructive feedback.

---

## Critique Meeting Structure (60 min)

### 1. Setup (5 min)

- Designer shares screen/artifacts
- Everyone reviews the design context
- Clarify the goals and constraints

### 2. Designer Presentation (10 min)

Designer presents:
- **Problem:** What user problem are we solving?
- **Goals:** What are the design objectives?
- **Constraints:** What limitations exist (technical, timeline, brand)?
- **Solution:** Walk through the design
- **Specific Questions:** What feedback do you need?

**Rule:** No interruptions during presentation. Take notes.

### 3. Clarifying Questions (5 min)

Ask questions to understand the design better:
- "How does a user get to this screen?"
- "What happens when...?"
- "Why did you choose...?"

**Not feedback yet** - just understanding.

### 4. Feedback Discussion (30 min)

Team provides structured feedback:

#### Round 1: What Works Well (5 min)
- Positive observations
- Successful design decisions
- Strengths to preserve

#### Round 2: Issues & Suggestions (20 min)
- Categorize by severity (Critical → Low)
- Focus on user impact
- Provide actionable suggestions
- Designer takes notes, doesn't defend

#### Round 3: Open Discussion (5 min)
- Designer asks follow-up questions
- Team discusses alternative approaches
- Prioritize feedback together

### 5. Action Items & Next Steps (10 min)

- Summarize key feedback
- Define action items with owners
- Set timeline for revisions
- Schedule follow-up review if needed

---

## Critique Principles

### The Four Pillars of Good Critique

#### 1. **Be Objective**
- Focus on user goals, not personal taste
- Use data and best practices
- Test assumptions (Don't Trust, Verify!)

❌ "I don't like this color"
✅ "This color fails WCAG contrast requirements (2.8:1, needs 4.5:1)"

#### 2. **Be Specific**
- Point to exact elements
- Describe the issue clearly
- Explain the impact

❌ "The navigation is confusing"
✅ "The navigation has 3 levels of hierarchy, but only 2 are visually distinct. Users may not understand the structure."

#### 3. **Be Constructive**
- Suggest solutions
- Explain your rationale
- Consider constraints

❌ "This layout doesn't work"
✅ "This layout might be hard to implement responsively. What if we used a card grid instead? It scales better across breakpoints."

#### 4. **Be Respectful**
- Critique the work, not the person
- Assume positive intent
- Acknowledge good work

❌ "You forgot about accessibility again"
✅ "I noticed we're missing alt text on these images. Let's add descriptive text for screen readers."

---

## Feedback Framework

Use this structure for all feedback:

```
[CATEGORY] [SEVERITY]: {Observation}

Impact: {How does this affect users?}
Suggestion: {What could we do instead?}
Rationale: {Why is this better?}
```

**Example:**

```
[Accessibility] [Critical]: The form error messages are only indicated by red color.

Impact: Color-blind users won't see the errors. Violates WCAG 1.4.1.
Suggestion: Add an error icon and move focus to the error message.
Rationale: Provides non-color indicators and helps all users spot errors faster.
```

---

## Designer's Role in Critique

### Before the Critique

- [ ] Prepare design artifacts (Figma, screenshots, prototypes)
- [ ] Write context (goals, constraints, decisions)
- [ ] Identify specific areas where you need feedback
- [ ] Test your design first (Don't Trust, Verify!)

### During the Critique

- [ ] Present clearly and concisely
- [ ] Listen actively, take notes
- [ ] Don't defend your work (yet)
- [ ] Ask clarifying questions
- [ ] Stay open to feedback

### After the Critique

- [ ] Review all feedback
- [ ] Prioritize issues by severity and impact
- [ ] Update design based on feedback
- [ ] Document design decisions
- [ ] Share revised design

---

## Reviewer's Role in Critique

### Before the Critique

- [ ] Review the design artifacts in advance
- [ ] Understand the context and goals
- [ ] Prepare specific, constructive feedback
- [ ] Test the design if possible (Don't Trust, Verify!)

### During the Critique

- [ ] Start with positive observations
- [ ] Be specific and actionable
- [ ] Consider the designer's constraints
- [ ] Focus on user impact
- [ ] Suggest, don't dictate

### After the Critique

- [ ] Follow up on action items you volunteered for
- [ ] Be available for questions
- [ ] Review revised designs
- [ ] Share additional insights if you think of them

---

## Common Critique Anti-Patterns

### ❌ The Taste Test
"I like/don't like..." without reasoning.

**Fix:** Focus on user goals and best practices, not personal preference.

### ❌ The Kitchen Sink
Providing feedback on everything, including out-of-scope items.

**Fix:** Stay focused on the designer's specific questions and critical issues.

### ❌ The Armchair Expert
Declaring solutions without understanding constraints.

**Fix:** Ask questions first, understand the context, then suggest.

### ❌ The Silent Treatment
Not providing feedback, then complaining later.

**Fix:** Speak up during critique. If you don't raise it now, accept the design.

### ❌ The Defender
Designer justifies every decision instead of listening.

**Fix:** Take notes first, defend later only if feedback misses context.

### ❌ The Repeater
Saying the same thing someone else already said.

**Fix:** Say "+1 to what X said" and add new perspective if you have it.

---

## Critique Etiquette

### Do's

✅ Start with what works well
✅ Ask questions to understand
✅ Provide specific examples
✅ Suggest alternatives
✅ Consider the designer's constraints
✅ Test your assumptions (Don't Trust, Verify!)
✅ Follow up on your feedback

### Don'ts

❌ Make it personal
❌ Redesign on the spot
❌ Dismiss ideas without explanation
❌ Focus on minor details while ignoring major issues
❌ Use critique to showcase your own ideas
❌ Provide feedback without context
❌ Assume you know everything about the problem

---

## Remote Critique Best Practices

When critiquing remotely (Zoom, Discord, etc.):

- **Record the session** (with permission) for notes
- **Use screen sharing** for visual reference
- **Use emoji reactions** (👍, 🤔, ⚠️) for quick feedback
- **Take turns speaking** to avoid talking over each other
- **Use chat** for links, notes, and side comments
- **Follow up in writing** after the meeting

---

## Templates & Tools

- **Review Template:** `/templates/REVIEW_TEMPLATE.md`
- **Feedback Form:** `/templates/FEEDBACK_TEMPLATE.md`
- **Figma Comments:** Use for in-context feedback
- **Screenshots:** Annotate with arrows, highlights, and notes
- **Screen Recording:** For interaction and animation feedback

---

## OneLearn Team Creative Types in Critique

Know your team's strengths in design feedback:

| Creative Type | Critique Style | Best Contributions |
|---------------|----------------|---------------------|
| **The Architect** (Tonkla, Pam, Alok, Off) | System-focused, structure-oriented | Information architecture, scalability, patterns |
| **The Regenerator** (Ploy, M, Ta) | Improvement-focused, refinement | Usability polish, edge cases, optimization |
| **The Guide** (Games, Dew) | Goal-focused, user-centered | User flow, clarity, guidance |
| **The Gardener** (Phear) | Growth-focused, holistic | Long-term vision, consistency, evolution |

**Tip:** Leverage these strengths! Ask Architects about structure, Regenerators about polish, Guides about user flow, Gardeners about growth.

---

## Don't Trust, Verify in Design Reviews

**Before saying "this design is good":**

- [ ] Test it with real users (even if just 3-5 people)
- [ ] Run accessibility audit tools (WAVE, axe, Lighthouse)
- [ ] Check color contrast (WebAIM Contrast Checker)
- [ ] Test keyboard navigation (unplug your mouse)
- [ ] Test screen reader (VoiceOver, NVDA)
- [ ] Test on mobile devices (not just desktop)
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Test with slow network (throttle to 3G)

**อย่าเชื่อ AI ทั้งหมด หมั่นตรวจสอบสม่ำเสมอ** - This applies to design too!

---

**Remember:** The goal is to ship great design that solves real user problems. Critique is a tool to get there together.
