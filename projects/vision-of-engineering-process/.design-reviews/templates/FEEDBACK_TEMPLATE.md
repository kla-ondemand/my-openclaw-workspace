# Design Feedback Form

**Reviewer:** {YOUR_NAME}
**Role:** {YOUR_ROLE}
**Design:** {DESIGN_NAME}
**Date:** {DATE}

---

## Feedback Structure

### Issue/Observation

**Category:** [ ] Usability | [ ] Visual Design | [ ] Accessibility | [ ] Content | [ ] Technical

**Severity:** [ ] Critical | [ ] High | [ ] Medium | [ ] Low

**Location:** {Which screen/component/section?}

**Description:**

{Describe the issue clearly and specifically}

**Impact:**

{How does this affect users or business goals?}

**Suggested Fix:**

{Provide actionable suggestions}

**Supporting Evidence:**

- [ ] Screenshot attached
- [ ] Video/GIF attached
- [ ] User research data
- [ ] Analytics data
- [ ] Accessibility audit results

---

## Examples

### Example 1: Usability Issue

**Category:** Usability
**Severity:** High
**Location:** Login page - Password reset flow

**Description:**
The "Forgot Password?" link is too small (10px font) and positioned far from the password field. Users are likely to miss it.

**Impact:**
Users who forget their password may get frustrated and abandon the login process. This could increase support tickets.

**Suggested Fix:**
1. Increase link size to 14px
2. Position it directly below the password field
3. Consider using a button instead of a text link
4. Add helper text: "Forgot your password? Reset it here"

**Supporting Evidence:**
- Heatmap shows users clicking around the password field looking for reset option
- 3/5 usability test participants couldn't find the reset link

---

### Example 2: Accessibility Issue

**Category:** Accessibility
**Severity:** Critical
**Location:** Navigation menu - Mobile view

**Description:**
Hamburger menu button has no accessible label. Screen reader announces it as "button" with no context.

**Impact:**
Violates WCAG 2.1 AA (4.1.2 Name, Role, Value). Screen reader users cannot understand what the button does.

**Suggested Fix:**
Add `aria-label="Open navigation menu"` to the button element.

```html
<button aria-label="Open navigation menu" aria-expanded="false">
  <svg>...</svg>
</button>
```

**Supporting Evidence:**
- WAVE accessibility tool flagged this issue
- VoiceOver testing confirmed the problem

---

## Quick Feedback Template

Use this for minor issues:

**[Category] [Severity]:** {Brief description}
**Fix:** {Quick suggestion}

Example:
**[Visual] [Low]:** Button padding is inconsistent (16px left, 12px right)
**Fix:** Use 16px padding on all sides

---

## Review Guidelines

✅ **Do:**
- Be specific and constructive
- Provide context and rationale
- Suggest solutions, not just problems
- Consider user impact
- Back up feedback with evidence when possible

❌ **Don't:**
- Make it personal ("I don't like...")
- Be vague ("This doesn't look right")
- Criticize without suggesting alternatives
- Focus on subjective preferences without user data
- Assume something works without testing (Don't Trust, Verify!)

---

**Remember:** The goal is to improve the design, not to criticize the designer.
