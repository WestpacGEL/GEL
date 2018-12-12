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
├── package.json
├── yarn.lock
│
├── helper/
│   ├── example/
│   │   ├── index.js          # example wrapper for `bolt dev`
│   │   └── webpack.config.js # dynamic webpack config to run the `bolt dev` task
│   └── cli.js                # helper file for cli like adding a new module
│
├── packages/                 # all ds components that will be published
│   ├── component1/
│   ├── component2/
│   └── component3/
│
├── examples/                 # complex examples like templates
│   ├── demo1/                # for testing multiple components
│   ├── demo2/                # and building out templates
│   └── demo3/                # will be sued to end-to-end test on
│
└── docs/                     # everything related to the documentation site
    ├── page1.mdx
    ├── page2.mdx
    └── page3.mdx
```

## Packages

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
│ // TODO this may go into a package
├── theme/                  # all other files here [optional]
│   ├── WBC/                # each brand has it's own folder
│   │   ├── index.js        # only for exports
│   │   ├── svg/            # and with like svgs
│   │   ├── data/           # like design tokens
│   │   └── fonts/          # or font files
│   └── STG/                # and other brands
│
├── examples/               # the demo folder is for seeing the components in action
│   ├── 00-example.js       # show-case props and variations
│   ├── 10-example.js       # all files not starting with a dot or an underscore
│   ├── 20-example.js       # will be processes with `bolt dev`
│   └── _util.js            # for reused logic within the examples [optional]
│
└── tests/                  # test includes all tests
    ├── unit/
    │   ├── unit.spec.js    # jest test file for unit tests
    └── integration/
        └── test.cypress.js # cypress test file for integration tests
```

## TODO

- core -> theme
- maybe make tokens package
- move emotion into theme package (remove deps)
- fix up other components to new folder structure
