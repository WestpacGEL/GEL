---
'@westpac/alert': minor
---

- Icon now mandatory (no longer accepts null `icon` prop value) (a11y)
- Update default icons, now unique; determined by alert `look` (a11y)
- Icon now only customisable if `look` is info (a11y)
- Add `mode` prop, new text (+ icon) alert style (background, border and padding removed)
- Dismissible not available in text `mode`
- Remove unnecessary wrapping div
- Only render as react-spring component if dismissible
