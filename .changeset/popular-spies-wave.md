---
'@westpac/alert': minor
---

- Icon now mandatory (no longer accepts null `icon` prop value) (a11y)
- Update default icons, now unique; determined by alert `look` (a11y)
- Icon now only customisable if `look` is info (a11y)
- Add new `mode` prop, provides new text option (icon + text only, strips background/border/padding)
- Dismissible not available in new text `mode`
- Remove unnecessary wrapping element
- Only render as react-spring component if dismissible
