# GUI3

The design system for Westpac GEL

## npm scripts

`bolt start [package-name]`
- will run the demo of the specified component

`bolt new [package-name]`
- will create the specified empty component

`bolt`
- will install all dependencies


## Monorepo

```sh
.
├── LICENSE
├── README.md
├── helper.js
├── package.json
├── yarn.lock
├── packages/
│   ├── component1/
│   ├── component2/
│   └── component3/
├── demos/
│   ├── demo1/
│   ├── demo2/
│   └── demo3/
└── docs/
    ├── specs1.md
    ├── specs2.md
    └── specs3.md
```

## Packages

```sh
.
├── README.md
├── LICENSE
├── package.json          # scope: `@westpac/`
├── src/                  # all the source
│   ├── index.js          # only for exports
│   ├── Component.js      # only for the components, can be multiple files
│   ├── styled.js         # only for styles
│   ├── vanilla.js        # only for static site generation
│   └── util.js           # for reused logic within the component
├── theme/                # all other files here
│   ├── WBC/              # each brand has it's own folder
│   │   ├── index.js      # only for exports
│   │   ├── svg/          # and with like svgs
│   │   ├── data/         # like design tokens
│   │   └── fonts/        # or font files
│   └── STG/              # and other brands
├── demo/                 # the demo folder is for seeing the components in action
│   ├── index.html        # you can run this locally
│   ├── index.js          # import the component and test different combinations of props
│   └── webpack.config.js # yay 🎉!
└── tests/                # test includes all tests
    ├── unit.spec.js      # jest test file for unit tests
    └── test.cypress.js   # cypress file for end-to-end files
```
