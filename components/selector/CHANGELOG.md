# @westpac/selector

## 2.0.0

### Major Changes

- 4de3976d: - Refactor nextIndicator implementation so it works for keyboard users, use toggle buttons and single hidden input, implemented via existing type prop (a11y)
  - Update button focus styling to match hover styling

## 1.2.0

### Minor Changes

- c7d31b61: Add React.forwardRef, forward ref to <input> DOM node

### Patch Changes

- 361add6a: - Fix flex layout styling issue in IE
  - Remove unnecessary WHCM state styling
- Updated dependencies [6b03b105]
  - @westpac/icon@1.3.2

## 1.1.0

### Minor Changes

- b668515c: - Added secondary label feature with ellipsis truncation
  - Top align icon/pictogram and indicator
  - Reduce indicator gap
  - Reduce icon and pictogram default size
  - Reduce next indicator size
  - Remove icon/pictogram vertical stacking in mobile breakpoint and remove content wrapping
  - Fix hover styling when hovered on indicator
  - Rename internal label sub-components

## 1.0.0

### Patch Changes

- Updated dependencies [6a9ef63b]
  - @westpac/core@2.0.0
  - @westpac/icon@1.3.1
