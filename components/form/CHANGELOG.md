# @westpac/form

## 3.2.1

### Patch Changes

- 5885e9e7: defaultProps removed due to deprecation on React 18.3
- Updated dependencies [5885e9e7]
  - @westpac/text-input@2.3.1
  - @westpac/repeater@2.3.1
  - @westpac/a11y@2.2.1
  - @westpac/core@3.2.1
  - @westpac/fork@2.2.1
  - @westpac/icon@2.1.1

## 3.2.0

### Minor Changes

- 20f9f31f: Proptypes created using typescript and type fixes

### Patch Changes

- Updated dependencies [bf4dc0e5]
- Updated dependencies [20f9f31f]
  - @westpac/core@3.2.0
  - @westpac/text-input@2.2.0
  - @westpac/repeater@2.2.0
  - @westpac/a11y@2.2.0
  - @westpac/fork@2.2.0
  - @westpac/icon@2.1.0

## 3.1.0

### Minor Changes

- 39e90efa: Updated components to export TypeScript interfaces using existing prop types.

### Patch Changes

- 8d3f5b3d: ESLint implementation
- Updated dependencies [39e90efa]
- Updated dependencies [8d3f5b3d]
  - @westpac/a11y@2.1.0
  - @westpac/core@3.1.0
  - @westpac/fork@2.1.0
  - @westpac/repeater@2.1.0
  - @westpac/text-input@2.1.0
  - @westpac/icon@2.0.1

## 3.0.0

### Major Changes

- 46182557: Update to react 18

### Minor Changes

- 0a8fe41c: Refactor internal id state to not require useEffect

### Patch Changes

- Updated dependencies [46182557]
  - @westpac/a11y@2.0.0
  - @westpac/core@3.0.0
  - @westpac/fork@2.0.0
  - @westpac/icon@2.0.0
  - @westpac/repeater@2.0.0
  - @westpac/text-input@2.0.0

## 2.0.0

### Major Changes

- 14215b04: - Field/Fieldset: remove props hintIdPrefix and instanceIdPrefix, add instanceId, render aria-describedby if required
  - Fieldset: remove ariadescribedby prop, add legendTabIndex and legendRef props
  - FormLabel: fix hidden formLabel tag (label), add ForwardRef
  - ErrorMessage: fix alert icon size

### Minor Changes

- 301d001c: - Field/Fieldset: remove aria-invalid on error, set on input directly via invalid prop, reorder error and hint aria-describedby values
  - ErrorMessage: add role="list" to list type error messages (e.g. DOB Pattern) to improve VoiceOver experience (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)

### Patch Changes

- Updated dependencies [4abb0528]
  - @westpac/text-input@1.4.0

## 1.0.1

### Patch Changes

- 63f89d17: Update dependencies
- Updated dependencies [63f89d17]
- Updated dependencies [74cf1085]
- Updated dependencies [46b3d4db]
- Updated dependencies [c6d4f18e]
  - @westpac/a11y@1.0.3
  - @westpac/core@2.2.0
  - @westpac/fork@1.0.0
  - @westpac/icon@1.3.3
  - @westpac/repeater@1.0.0
  - @westpac/text-input@1.3.0

## 1.0.0

### Minor Changes

- 4ae7b97f: - Add PasswordInput component
  - Add @westpac/text-input dependency

### Patch Changes

- Updated dependencies [8058c8c3]
- Updated dependencies [6a9ef63b]
- Updated dependencies [0f2587f5]
  - @westpac/text-input@1.1.0
  - @westpac/core@2.0.0
  - @westpac/a11y@1.0.1
  - @westpac/icon@1.3.1

## 1.0.0-alpha.2

### Patch Changes

- 520c2fc4: fix distribution files
- Updated dependencies [520c2fc4]
  - @westpac/a11y@1.0.0-beta.2
  - @westpac/core@1.0.1
  - @westpac/icon@1.0.1
