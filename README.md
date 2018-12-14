# GEL [![CircleCI](https://circleci.com/gh/WestpacGEL/GEL/tree/master.svg?style=svg)](https://circleci.com/gh/WestpacGEL/GEL/tree/master)

The design system for Westpac GEL

## npm scripts

| script                      | description                                 |
| --------------------------- | ------------------------------------------- |
| `bolt`                      | install all dependencies                    |
| `bolt dev [package-name]`   | run the examples of the specified component |
| `bolt new [package-name]`   | create a specified empty component          |
| `bolt start [package-name]` | the script is reserved for something we ... |
| `bolt test`                 | runs test                                   |
| `bolt format`               | runs prettier to format all code            |

## Monorepo

```sh
.
├── LICENSE
├── README.md
├── package.json
├── yarn.lock
│
├── helper/
│   ├── example/
│   │   ├── index.js          # example wrapper for `bolt dev`
│   │   └── webpack.config.js # dynamic webpack config to run the `bolt dev` task
│   └── cli.js                # helper file for cli like adding a new module
│
├── components/               # all ds components that will be published
│   ├── component1/
│   ├── component2/
│   └── component3/
│
├── brands/
│   ├── WBC/
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── index.js          # only for exports
│   │   ├── svg/              # and with like svgs
│   │   ├── data/             # like design tokens
│   │   └── fonts/            # or font files
│   ├── STG/
│   │   └── etc
│   └── BOM/
│       └── etc
│
├── examples/                 # complex examples like templates
│   ├── demo1/                # for testing multiple components
│   │   └── tests/            # each have test folders
│   ├── demo2/
│   └── demo3/
│
└── docs/                     # everything related to the documentation site
    ├── page1.mdx
    ├── page2.mdx
    └── page3.mdx
```

## Component

```sh
.
├── README.md
├── LICENSE
├── package.json            # scope: `@westpac/`
│
├── src/                    # all the source
│   ├── index.js            # only for exports
│   ├── ComponentX.js       # only for the components, can be multiple files
│   ├── styled.js           # only for styles [optional]
│   ├── vanilla.js          # only for static site generation
│   └── util.js             # for reused logic within the component [optional]
│
├── docs/                   # documentation for docz later
│   ├── thing1.mdx          # documenting features etc
│   └── thing2.mdx
│
├── examples/               # the demo folder is for seeing the components in action
│   ├── 00-example.js       # show-case props and variations
│   ├── 10-example.js       # all files not starting with a dot or an underscore
│   ├── 20-example.js       # will be processes with `bolt dev`
│   └── _util.js            # for reused logic within the examples [optional]
│
└── tests/                  # test includes all tests
    ├── unit/
    │   └── unit.spec.js    # jest test file for unit tests
    └── integration/
        └── test.cypress.js # cypress test file for integration tests
```

## TODO

- [x] jest tests setup for each component
- [/] cypress test setup for each component
- [x] add circleCI
- [ ] write more docs around each decision me made
- [ ] connect brand/wbc packages to core component dynamic import
- [ ] fix up other components to new folder structure
