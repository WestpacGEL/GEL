# @westpac/core

## 2.2.0

### Minor Changes

- 46b3d4db: Refactor getLabel to use switch() instead of chain of if…else
- c6d4f18e: Add ability for useFonts hook to add custom CSS, allows you to override the defaults

### Patch Changes

- 63f89d17: Update dependencies

## 2.1.0

### Minor Changes

- bd71ca99: Remove GEL className from core wrapper element

## 2.0.0

### Major Changes

- 6a9ef63b: - Remove .GEL parent class specificity solution
  - Normalize CSS applied to components directly as needed
  - Normalize.css available an opt-in via boolean prop on `<GEL />`, applied at global document scope if enabled

## 1.1.0

### Minor Changes

- 44475eb5: Add titleCase helper function
- d1c90c38: Update font demos
- 876e36c3: Increase component styling specificity, prepend all selectors with `.GEL` parent class
- bedde7bc: Reset focus outline styling when tabindex="-1"
- fb727cea: Add new WBG brand font examples assets

## 1.0.1

### Patch Changes

- 520c2fc4: fix distribution files
