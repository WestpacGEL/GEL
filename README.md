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

TODO

- Move to webpack latest/ Parcel
- Remove demo/index.html
- Rename demo -> examples
- Move babel.rc and webpack config into root
- Make bablerc -> js file
- Make DemoLoader project
- Parcel instead of webpack
- core -> theme
- Maybe make tokens package
