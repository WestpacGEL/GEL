---
'@westpac/form': minor
---

- Fieldset/Field: remove aria-invalid on error, set on input directly via invalid prop, reorder error and hint aria-describedby values
- ErrorMessage: add role="list" to list type error messages (e.g. DOB Pattern) to improve VoiceOver experience (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
