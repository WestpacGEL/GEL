# @westpac/selector

## 2.1.0

### Minor Changes

- fb906d96: Pass an index to children, use for id generation
- 887d9c53: Ensure option alone implementation receives an id
- 0a8fe41c: Refactor internal id state to not require useEffect

## 2.0.0

### Major Changes

- 4de3976d: - Refactor nextIndicator implementation so it works for keyboard users, use toggle buttons and single hidden input, implemented via existing type prop (a11y)
  - Add new link type option
  - Update button focus styling to match hover styling

### Minor Changes

- 6ecef9e0: - Reduce icon and pictogram gap
  - Reduce option margin and padding
  - Remove unnecessary primary label element
  - Update secondary label width to 50% with 12px padding gap
  - Reduce label to 16px in mobile
  - Reduce hint text size to 14px in mobile
  - Reduce check indicator size in mobile
  - Reduce secondary label to 400 weight and enable 'tnum' font feature setting
  - Remove secondary label ellipsis truncation, allow primary label to wrap
  - Reduce next indicator hover movement in mobile
  - Reduce hint gap in mobile

### Patch Changes

- 63f89d17: Update dependencies
- Updated dependencies [63f89d17]
- Updated dependencies [46b3d4db]
- Updated dependencies [c6d4f18e]
  - @westpac/core@2.2.0
  - @westpac/icon@1.3.3

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
