# @westpac/pictogram

## 1.4.2

### Patch Changes

- 63f89d17: Update dependencies
- Updated dependencies [63f89d17]
- Updated dependencies [46b3d4db]
- Updated dependencies [c6d4f18e]
  - @westpac/core@2.2.0

## 1.4.1

### Patch Changes

- 24db70e1: Fix svg positioning within parent span, noticable when small

## 1.4.0

### Minor Changes

- a9289b8d: - Add new pictograms
  - Rename EnvelopePictogram, now EnvelopeEmailPictogram
  - Update TickPictogram assistiveText
- 94e1da73: - Add additional pictograms
  - Rename AustraliaPictogram: now GlobeAustraliaPictogram
  - Remap colors: STG uses text/pop, RAMS uses primary/pop, BOM+BSA use hero/pop, other brands use hero/primary
  - Update mode default: duo for all brands

### Patch Changes

- 4cf224b9: Fix WBC brand default mode (duo)
- Updated dependencies [6a9ef63b]
  - @westpac/core@2.0.0

## 1.3.0

### Minor Changes

- fb0c84c0: Add colour override feature

## 1.2.0

### Minor Changes

- 04ffd51b: Add PiggyBankPictogram

## 1.1.0

### Minor Changes

- c110f6c8: - Rename BankCardPictogram and BankCardLockedPictogram (was CreditCardPictogram and CardLockedPictogram)
  - Update PadlockPictogram and PadlockLockedPictogram assistiveText
- 97e2508e: Remove pictograms (LocationPin, TelephoneCall and Number1-Number5)
- e4611d2d: Set default mode depending on brand (WBC brand uses duo mode, others use dark mode)
