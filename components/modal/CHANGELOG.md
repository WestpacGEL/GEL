# @westpac/modal

## 2.3.0

### Minor Changes

- 373cccde: refactored modal, also made minor changes to fix escape exiting modal and removing unused refs
- 1f2e1275: Add white, black tokens and update references

### Patch Changes

- Updated dependencies [c88fada6]
- Updated dependencies [cab56804]
- Updated dependencies [6d326e14]
- Updated dependencies [2a2c53b9]
- Updated dependencies [1f2e1275]
  - @westpac/button@3.0.0
  - @westpac/icon@2.2.0

## 2.2.1

### Patch Changes

- 5885e9e7: defaultProps removed due to deprecation on React 18.3
- Updated dependencies [5885e9e7]
  - @westpac/heading@2.3.1
  - @westpac/button@2.2.1
  - @westpac/hooks@3.1.1
  - @westpac/body@2.2.1
  - @westpac/core@3.2.1
  - @westpac/icon@2.1.1

## 2.2.0

### Minor Changes

- 20f9f31f: Proptypes created using typescript and type fixes

### Patch Changes

- e9d5db29: Fixed some React 18 Hydration Errors.
- Updated dependencies [bf4dc0e5]
- Updated dependencies [e9d5db29]
- Updated dependencies [20f9f31f]
  - @westpac/core@3.2.0
  - @westpac/hooks@3.1.0
  - @westpac/heading@2.2.0
  - @westpac/button@2.2.0
  - @westpac/body@2.2.0
  - @westpac/icon@2.1.0

## 2.1.0

### Minor Changes

- 39e90efa: Updated components to export TypeScript interfaces using existing prop types.

### Patch Changes

- Updated dependencies [39e90efa]
- Updated dependencies [8d3f5b3d]
  - @westpac/body@2.1.0
  - @westpac/button@2.1.0
  - @westpac/core@3.1.0
  - @westpac/heading@2.1.0
  - @westpac/hooks@3.0.1
  - @westpac/icon@2.0.1

## 2.0.0

### Major Changes

- 46182557: Update to react 18

### Patch Changes

- Updated dependencies [2cb88a1b]
- Updated dependencies [7d97398b]
- Updated dependencies [46182557]
  - @westpac/button@2.0.0
  - @westpac/body@2.0.0
  - @westpac/core@3.0.0
  - @westpac/heading@2.0.0
  - @westpac/hooks@3.0.0
  - @westpac/icon@2.0.0

## 1.2.0

### Minor Changes

- 89dfb30b: Replaced peer dependency react-spring with @react-spring/web

### Patch Changes

- Updated dependencies [4a3282a0]
  - @westpac/icon@1.4.0

## 1.1.5

### Patch Changes

- 63f89d17: Update dependencies
- Updated dependencies [7d16f040]
- Updated dependencies [63f89d17]
- Updated dependencies [46b3d4db]
- Updated dependencies [c6d4f18e]
  - @westpac/button@1.3.0
  - @westpac/body@1.4.1
  - @westpac/core@2.2.0
  - @westpac/heading@1.0.2
  - @westpac/hooks@2.0.1
  - @westpac/icon@1.3.3

## 1.1.4

### Patch Changes

- 9ebaca8c: Remove unnecessary role="dialog" attribute, caused verbose announcement in screen readers
- Updated dependencies [6b03b105]
- Updated dependencies [efacd90d]
  - @westpac/icon@1.3.2
  - @westpac/hooks@2.0.0
  - @westpac/button@1.2.1

## 1.1.3

### Patch Changes

- Updated dependencies [8058c8c3]
- Updated dependencies [6a9ef63b]
- Updated dependencies [0b22b4a0]
- Updated dependencies [d27d24ca]
  - @westpac/body@1.4.0
  - @westpac/button@1.2.0
  - @westpac/core@2.0.0
  - @westpac/heading@1.0.1
  - @westpac/hooks@1.1.1
  - @westpac/icon@1.3.1

## 1.1.2

### Patch Changes

- df18cdfd: Implement heading focus using react-focus-on autoFocus feature, bump dependency

## 1.1.1

### Patch Changes

- eab4ab3f: Fix heading focus on modal show
- Updated dependencies [a6bafb53]
  - @westpac/icon@1.3.0

## 1.1.0

### Minor Changes

- f5fa9ac6: Bump react-spring to v9.0.0-rc.3
- 7bd3b897: - Fix scrolling for long modals
  - Remove unncessary react-spring element wrapping
  - Simplify react-spring show/hide interpolation

### Patch Changes

- d178cd3f: Fix content border styling.
- Updated dependencies [6c12e7b4]
- Updated dependencies [afc39be7]
- Updated dependencies [c83b7c35]
  - @westpac/icon@1.2.0
  - @westpac/body@1.3.0
  - @westpac/button@1.1.1

## 1.0.0

### Major Changes

- c01e5287: Add Blender support

### Minor Changes

- ce6b5ec0: Update close button to use new unstyled button and adjust position
- 9e006727: Adjust HTML structure, outside click handler, animation and scroll styling

### Patch Changes

- Updated dependencies [5389e762]
- Updated dependencies [a360cfa2]
- Updated dependencies [44475eb5]
- Updated dependencies [d1c90c38]
- Updated dependencies [39f838c3]
- Updated dependencies [488a01e4]
- Updated dependencies [e459618e]
- Updated dependencies [3822e198]
- Updated dependencies [a058a7d3]
- Updated dependencies [22242655]
- Updated dependencies [993c63ba]
- Updated dependencies [876e36c3]
- Updated dependencies [1ac01d72]
- Updated dependencies [bedde7bc]
- Updated dependencies [1a8e1ace]
- Updated dependencies [1d736ec9]
- Updated dependencies [fb727cea]
- Updated dependencies [f638aa74]
- Updated dependencies [398fc6aa]
  - @westpac/heading@1.0.0
  - @westpac/icon@1.1.0
  - @westpac/core@1.1.0
  - @westpac/button@1.1.0
  - @westpac/body@1.2.0
  - @westpac/hooks@1.1.0

## 1.0.0-beta.3

### Major Changes

- 36e8efb9: - Rename internal `<Title />` component for consistency (now `<Heading />`)
  - Use `<Body />` component for body text
  - Update header padding

### Patch Changes

- Updated dependencies [36e8efb9]
- Updated dependencies [ebefc31f]
  - @westpac/body@1.1.0
  - @westpac/icon@1.0.2

## 1.0.0-beta.2

### Patch Changes

- 520c2fc4: fix distribution files
- Updated dependencies [520c2fc4]
  - @westpac/button@1.0.1
  - @westpac/core@1.0.1
  - @westpac/heading@1.0.0-beta.2
  - @westpac/hooks@1.0.1
  - @westpac/icon@1.0.1
