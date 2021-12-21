# @westpac/list

## 1.3.0

### Minor Changes

- 7d40b7bd: - Link list with custom icon to include the icon within the link element (a11y)
  - Add new href prop to Item component, renders link element around item content
  - Add new Content override component, provides the link above
  - Ensure icon can be set at List or Item level

## 1.2.0

### Minor Changes

- 5381b0c7: Add link type and ability to render a link list with custom icon

### Patch Changes

- Updated dependencies [15f8f3fc]
  - @westpac/body@1.5.0

## 1.1.0

### Minor Changes

- 550db730: - Add new cross type list
  - Add success and danger looks for tick and cross type lists
- 78e7115b: Update tick/cross list to use aria-label attribute, rather than VisuallyHidden item, to convey tick/cross meaning. This approach is simpler, drops the @westpac/a11y dependency and means assistive technologies announce the correct number of list items (a11y)

### Patch Changes

- d6a0b3e4: Fixed blender support for tick and cross types
- 63f89d17: Update dependencies
- Updated dependencies [63f89d17]
- Updated dependencies [46b3d4db]
- Updated dependencies [c6d4f18e]
  - @westpac/body@1.4.1
  - @westpac/core@2.2.0

## 1.0.1

### Patch Changes

- 349a4894: Update link list chevron bullet to use link color
- Updated dependencies [8058c8c3]
- Updated dependencies [6a9ef63b]
  - @westpac/body@1.4.0
  - @westpac/core@2.0.0
  - @westpac/a11y@1.0.1

## 1.0.0

### Major Changes

- 8be551cd: Update font size
- 258f5589: - Enable icon list look styling
  - Update default bullet list to `hero` (was `primary`)
- f142c5eb: Remove on-page link auto-focus functionality, no longer required (bug fixed from iOS 13 and Android 10)
- 42a468b7: Add Blender support

### Patch Changes

- c5418e1e: Fix link lists, style links correctly
- ef6b06f0: Render tick list assistive text on outermost list only
- Updated dependencies [44475eb5]
- Updated dependencies [d1c90c38]
- Updated dependencies [86d29477]
- Updated dependencies [22242655]
- Updated dependencies [876e36c3]
- Updated dependencies [ef6b06f0]
- Updated dependencies [bedde7bc]
- Updated dependencies [fb727cea]
  - @westpac/core@1.1.0
  - @westpac/a11y@1.0.0
  - @westpac/body@1.2.0

## 1.0.0-beta.2

### Patch Changes

- 520c2fc4: fix distribution files
- Updated dependencies [520c2fc4]
  - @westpac/a11y@1.0.0-beta.2
  - @westpac/core@1.0.1
