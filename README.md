# GEL [![CircleCI](https://circleci.com/gh/WestpacGEL/GEL/tree/master.svg?style=svg)](https://circleci.com/gh/WestpacGEL/GEL/tree/master)

The design system for Westpac GEL

## npm scripts

### root level

| script                      | description                                       |
| --------------------------- | ------------------------------------------------- |
| `bolt`                      | install all dependencies                          |
| `bolt nuke`                 | removes all `node_modules` for fresh start        |
| `bolt fresh`                | removes all `node_modules` and reinstalls them    |
| `bolt build`                | build all dist folders                            |
| `bolt docs`                 | build docs for all components and open server     |
| `bolt docs:build`           | build docs for all components to `./docs/` folder |
| `bolt dev [package-name]`   | run the examples of the specified component       |
| `bolt new [package-name]`   | create a specified empty component                |
| `bolt start [package-name]` | start the example server of a component           |
| `bolt test`                 | runs test                                         |
| `bolt format`               | runs prettier to format all code                  |

### component level

| script          | description                      |
| --------------- | -------------------------------- |
| `bolt start`    | start the example server         |
| `bolt build`    | builds dist files                |
| `bolt test`     | runs test headless               |
| `bolt test:dev` | runs test by opening cypress app |

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
│   ├── docz/                 # Docz files to style the docs
│   │   ├── theme.js
│   │   └── wrapper.js
│   ├── tester.js             # Helps cypress testing of each component
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
│   │   ├── fonts/            # design tokens files
│   │   └── tokens/           # font files
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
└── docs/                     # the built out files for the documentation
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
│   └── _util.js            # for reused logic within the component [optional]
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

## Decisions

- All scripts are run through the `bolt` command
- The `helpers/` folder will include all helpers for builds/docs/testing
- We have two different example / doc concerns:
  1. Examples: they are for building components locally and to explain code
  1. Docs: this is a website that will be published for documenting APIs to devs (https://westpacgel.github.io/GEL/)
- Multi-brand will be achieved by added a brand package that will be passed to the `<GEL/>` component

  ```jsx
  import { GEL } from '@westpac/core';
  import brand from '@westpac/WBC';

  export const App = () => <GEL brand={brand}>Your app</GEL>;
  ```

- Tokens and everything regarding consistent branding will be contained in the brand packages in `brands/*`
- Tokens will include at least the four categories:
  - `breakpoints`
  - `colors`
  - `spacing`
  - `typography`
- Brands will only have a default export containing the "tokens" object.
- All components (not brand packages) have at least one named export
- Each component has local tokens that can be overwritten with the object passed into `<GEL/>`

  ```jsx
  import { GEL } from '@westpac/core';
  import brand from '@westpac/WBC';

  brand['@westpac/tabcordion'].heading.space = '2rem';
  brand['@westpac/tabcordion'].components.TabRow = <TabRow />;

  export const App = () => <GEL brand={brand}>Your app</GEL>;
  ```

- Each package can be addressed by its name as the key in the tokens
- The `example/` folder is for documenting composition of several components together e.g. templates
- Fonts can't be shipped with npm so the tokens only define the path to the fonts
- css-in-js emotion will be used with the `jsx` pragma and babel plugin
- For css-in-js we use `jsx` by importing from `@westpac/core` and never depend on `emotion` directly other than inside core itself

### Naming convention for files inside components

| name            | purpose                                                                     |
| --------------- | --------------------------------------------------------------------------- |
| `index.js`      | Export only public API                                                      |
| `styled.js`     | Only for styled components `[optional]`                                     |
| `_util.js`      | For code shared between components (ignored in examples) `[optional]`       |
| `ComponentX.js` | All component files are named after the exported component and pascal cased |
| `00-*.js`       | All files inside the `examples/` folder are sorted by file name             |
| `*.js`          | All jsx files are postfixed with `.js`                                      |
| `*.spec.js`     | All (jest) unit tests are postfixed with `.spec.js`                         |

## TODO

- [ ] create a GEL brand
- [ ] build out root examples
- [x] create local default tokens
- [ ] add render props for visual internal components
- [ ] add helper for making new component
- [ ] make playground and docz multibrand
