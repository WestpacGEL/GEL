# GUI3

The design system for Westpac GEL

## npm scripts

To run the examples of the specified component:

```sh
bolt start [package-name]
```

To create a specified empty component:

```sh
bolt new [package-name]
```

To install all dependencies:

```sh
bolt
```

## Monorepo

```sh
.
├── LICENSE
├── README.md
├── helper/
│   ├── cli.js
│   └── docsComponent.js
├── package.json
├── yarn.lock
├── packages/
│   ├── component1/
│   ├── component2/
│   └── component3/
├── examples/
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
│   ├── ComponentX.js     # only for the components, can be multiple files
│   ├── styled.js         # only for styles [optional]
│   ├── vanilla.js        # only for static site generation
│   └── util.js           # for reused logic within the component [optional]
├── theme/                # all other files here [optional]
│   ├── WBC/              # each brand has it's own folder
│   │   ├── index.js      # only for exports
│   │   ├── svg/          # and with like svgs
│   │   ├── data/         # like design tokens
│   │   └── fonts/        # or font files
│   └── STG/              # and other brands
├── examples/             # the demo folder is for seeing the components in action
│   ├── example1.js       # show case props and variations
│   ├── example2.js
│   ├── example3.js
│   ├── babel.config.js   # extends root bable config
│   └── webpack.config.js # extends root webpack config
└── tests/                # test includes all tests
    ├── unit.spec.js      # jest test file for unit tests
    └── test.cypress.js   # cypress file for end-to-end files
```

## TODO

- core -> theme
- Maybe make tokens package
