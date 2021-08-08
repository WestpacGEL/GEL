---
'@westpac/list': minor
---

Update tick/cross list to use aria-label attribute, rather than VisuallyHidden item, to convey tick/cross meaning. This approach is simpler, drops the @westpac/a11y dependency and means assistive technologies announce the correct number of list items (a11y)
