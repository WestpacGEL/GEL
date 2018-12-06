# GUI3

The design system for Westpac GEL

## Packages

```sh
.
├── index.js            # only for exports
├── styled.js           # only for styles
├── package.json        # scope: `@westpac/`
├── Component.js        # only for the components, can be multiple files
├── util.js             # for reused logic within the component
├── assets/             # all other files here
│   ├── svg/            # like svgs
│   └── fonts/          # or font files
├── docs/               # the doc folder is for seeing the components in action and and it's docs
│   └── index.html      # comes with something you can route to
└── tests/              # test includes all tests
    ├── unit.spec.js    # jest test file for unit tests
    └── test.cypress.js # cypress file for end-to-end files
```
