# GEL [![CircleCI](https://circleci.com/gh/WestpacGEL/GEL/tree/master.svg?style=svg)](https://circleci.com/gh/WestpacGEL/GEL/tree/master)

**<p align="center">For the docs for the design system please go to</p>**
**<p align="center">https://gel.westpacgroup.com.au/design-system</p>**

This repository consists of the following parts:

- `/brands/*` and `/components/*` - The react design system components (published to npm)
- `/website` - The nextjs website
- `/website-backend` - The keystonejs instance
- `/helpers/*` - Some utility scripts
- `/nginx/*` - The backend nginx configuration

## Content

- [Development](#development)
- [Design System](#design-system)
- [Blender support](#blender-support)

## Development

To run this repo locally please use [yarn](https://yarnpkg.com/).
This repo is a monorepo.
Learn more about monorepos at https://monorepo.guide/.

```sh
cd path/to/repo
yarn
```

This will install all dependencies for all packages in this monorepo.

<details>
<summary>👉 The file structure of this monorepo</summary>

```sh
.
├── LICENSE
├── README.md
├── package.json
├── yarn.lock
│
├── helper/
│   ├── .component-template/        # the starter files for when a new component is created via cli
│   │
│   ├── example/
│   │   ├── components/             # an assortment of components helping us build the example pages
│   │   ├── _utils.js               # shared logic
│   │   ├── docs.js                 # entry file for `yarn docs` task
│   │   ├── docs.webpack.config.js  # dynamic webpack config to run the `yarn docs` task
│   │   ├── index.html              # the index.html file as entry point
│   │   ├── start.js                # entry file for `yarn start` task
│   │   └── start.webpack.config.js # dynamic webpack config to run the `yarn start` task
│   │
│   ├── public/                     # files in this folder will be moved into the docs/ folder
│   │
│   ├── tests/                      # test specific files for reuse between component tests
│   │
│   ├── transformer/                # the transfomer files to convert tokens into platform data
│   │   ├── _utils.js               # shared logic
│   │   └── web.js                  # transforms tokens to web
│   │
│   ├── buildExports.js             # helps cypress testing of each component
│   ├── cli.js                      # helper file for cli like adding a new module
│   ├── ds-info.js                  # helper file to generate the GEL.json
│   └── tester.js                   # helps cypress testing of each component
│
├── components/                     # all ds components that are published
│   ├── component1/                 # more on the structure of components below
│   ├── component2/
│   └── component3/
│
├── brands/                         # all brand components
│   ├── BOM/
│   │   ├── dist/                   # distribution files (build artifact)
│   │   ├── overrides/              # all overrides files specific to this brand
│   │   ├── src/                    # our source files
│   │   ├── tokens/                 # token files
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── BSA/
│   │   └── etc
│   └── WBC/
│       └── etc
│
├── website/                        # files for the website
│
├── website-backend/                # files for the website backend
│
└── docs/                           # the static files for the documentation (build artifact)
```

</details>
<details>
<summary>👉 npm scripts</summary>

| script                    | description                                           |
| ------------------------- | ----------------------------------------------------- |
| `yarn`                    | install all dependencies                              |
| `yarn nuke`               | removes all `node_modules` for fresh start            |
| `yarn fresh`              | removes all `node_modules` and reinstalls them        |
| `yarn build`              | build all dist folders for production                 |
| `yarn build:dev`          | build all dist for local consumption                  |
| `yarn docs`               | build docs for all components and run server          |
| `yarn docs:build`         | build docs for all components to `./docs/` folder     |
| `yarn new [package-name]` | create a new specified empty component                |
| `yarn dev [package-name]` | start the example server of a component               |
| `yarn test`               | runs tests                                            |
| `yarn format`             | runs prettier to format all code                      |
| `yarn deploy:staging`     | deploys the site to staging from the `staging` branch |
| `yarn deploy:live`        | deploys the site to live from the `master` branch     |

See the [Website README](./website/README.md#deployment) for details on it's deployment.

</details>

## Design System

The design system components are spread between two folders:

```
.
├── brands/     # The brand components
└── components/ # The design system components including core
```

There are two different ways you can run the components locally:

1. [Component build](#component-build)
1. [Docs build](#docs-build)

### Some high level decisions

- All components use named exports as the default, no default exports
- All brands components will have a default export containing the "tokens" objects in addition to the named exports of each.
- Fonts can't be shipped with npm so the tokens only define the css declarations for the fonts
- For css-in-js we use `jsx` imported from `@westpac/core` and never depend on `emotion` directly other than inside core itself

<details>
<summary>👉 The file structure of components</summary>

```sh
.
├── CHANGELOG.md
├── README.md
├── LICENSE
├── package.json            # scope: `@westpac/`
│
├── src/                    # all the source
│   ├── overrides/          # all overrides files for each sub-component
│   ├── _util.js            # for reused logic within the component [optional]
│   ├── index.js            # only for exports
│   └── ComponentX.js       # only for the components, can be multiple files
│
├── examples/               # the demo folder is for seeing the components in action
│   ├── _util.js            # for reused logic within the examples [optional]
│   ├── 00-example.js       # show-case props and variations
│   ├── 10-example.js       # all files not starting with a dot or an underscore
│   └── 20-example.js       # will be processes with `yarn start`
│
├── demos/                  # the examples that can be embedded into the website
│   ├── example-x.js
│   ├── example-y.js
│   └── example-z.js
│
└── tests/                  # test includes all tests
    ├── integration/
    │   └── test.cypress.js # cypress test file for integration tests
    └── unit/
        └── unit.spec.js    # jest test file for unit tests
```

</details>
<details>
<summary>👉 npm scripts</summary>

| script                  | description                      |
| ----------------------- | -------------------------------- |
| `yarn start`            | start the example server         |
| `yarn test`             | runs test headless               |
| `yarn test:dev`         | runs test by opening cypress app |
| `yarn test:integration` | runs integration tests           |

</details>

### Theming / Multi-brand

Multi-brand will be achieved by added a brand package that will be passed to the `<GEL/>` component

```jsx
import { GEL } from '@westpac/core';
import brand from '@westpac/WBC';

export const App = () => <GEL brand={brand}>Your app</GEL>;
```

The brand package includes tokens and overrides and will be available to all packages inside the `<GEL/>` wrapper via context.
This allows us to be as consistent as can be within the same app.
It also separates out all things to do with theming into a single package.
The brand package does not need to know anything about its components.
But it can opt in.

<details>
<summary>👉 Tokens</summary>

| name      | purpose                                                  |
| --------- | -------------------------------------------------------- |
| `COLORS`  | Our colors including tints                               |
| `LAYOUT`  | Only breakpoints so far                                  |
| `PACKS`   | Mostly typography packs for reuse and consistency        |
| `SPACING` | A function with minor scale to allow you to hit the grid |
| `TYPE`    | Font files and definitions                               |
| `BRAND`   | The current brand string                                 |

</details>

### Overrides

A consumer may choose to override a component in its build.
This can happen by adding the overrides into the same namespace as the component you wish to override.

```jsx
import { Tabcordion } from '@westpac/tabcordion';
import { GEL } from '@westpac/core';
import brand from '@westpac/wbc';

brand['@westpac/tabcordion'].TabItem.styles = ( styles, state ) => { ...styles, border: 'red solid 2px' };
brand['@westpac/tabcordion'].TabRow.component = <TabRow />;

export const App = () => (
	<GEL brand={brand}>
		All instances of the <Tabcordion/> now include the override specified above.
		No matter how many there are.
	</GEL>
);
```

There may also a need to add an override only to a single instance of the component.
In that case you may add the override to the component directly via the `overrides` prop each component has.

```jsx
import { Tabcordion } from '@westpac/tabcordion';
import { GEL } from '@westpac/core';
import brand from '@westpac/wbc';

brand['@westpac/tabcordion'].Tabcordion.styles = ( styles, state ) => { ...styles, border: 'red solid 2px' };

const overrides = {
	Tabcordion: {
		styles: ( styles, state ) => { ...styles, border: 'blue solid 2px' },
	},
};

export const App = () => (
	<GEL brand={brand}>
		<Tabcordion/> with red border
		<Tabcordion overrides={overrides} /> with blue border
		<Tabcordion/> with red border
	</GEL>
);
```

_(💡 Overrides will be reconciled as a cascade from less-specific to most-specific.)_

Every single component (including root component) have three items in their override object:

```
overrides = {
	[name]: {
		styles: (base-styles, state-props) => styles,
		component: <React.Component/>
		attributes: (base-attributes, state-props) => Object,
	}
}
```

<details>
<summary>👉 Overrides</summary>

| Key          | Type                 | Description                                                                            | Function arguments                                                                                                                                                                  |
| ------------ | -------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `styles`     | `function` => Object | A function that returns an object of css properties for emotion                        | (`base-styles`,`state/props`) `base-styles` = the styles that would have been applied to the component, `state/props` = all props and all known state (without setters)             |
| `attributes` | `function` => Object | A function that returns an object of attributes that will be spread onto the component | (`base-attributes`,`state/props`) `base-attributes` = the attributes that would have been applied to the component, `state/props` = all props and all known state (without setters) |
| `component`  | `react component`    | A react component which will receive all props                                         | -                                                                                                                                                                                   |

</details>

### Data driven API

Components that are made up by other components like `list`, `breadcrumb`, `button-group`, `input-group` etc can be solely driven by the `data` prop.
We also offer declarative APIs in-case a consumer wants to wrap a component.

```jsx
<Breadcrumb>
	<Crumb href="#/" text="Home" />
	<Crumb href="#/personal-banking/" text="Personal" />
	<Crumb href="#/credit-cards/" text="Credit cards" />
</Breadcrumb>
```

Is the same as:

```jsx
<Breadcrumb
	data={[
		{ href: '#/', text: 'Home' },
		{ href: '#/personal-banking/', text: 'Personal' },
		{ href: '#/credit-cards/', text: 'Credit cards' },
	]}
/>
```

### How we handle focus state

We use the useFocus hook in the `GEL` component.
You can [read about the focus hook on medium](https://medium.com/@wilkowskidom/how-i-learned-to-stop-worrying-and-love-the-outline-7a35b3b49e7).
The `GEL` also adds the global focus styling from our `PACKS.focus` token pack.
If you need to add it to something use:

```jsx
':focus': {
	...PACKS.focus,
},
```

However if you need a focus state that will persist across mouse users do something like this:

```jsx
const { PACKS } = useBrand();

const focus = { ...PACKS.focus };
focus.outline += ' !important'; // adding `!important` will make sure the focus persists

<Component
	css={{
		':focus': { ...focus },
	}}
/>;
```

<details>
<summary>👉 Naming convention for files inside components</summary>

| name            | purpose                                                                     |
| --------------- | --------------------------------------------------------------------------- |
| `index.js`      | Export only public API                                                      |
| `_utils.js`     | For code shared between components (ignored in examples) `[optional]`       |
| `ComponentX.js` | All component files are named after the exported component and pascal cased |
| `00-*.js`       | All files inside the `examples/` folder are sorted by file name             |
| `*.js`          | All jsx files are postfixed with `.js`                                      |
| `*.spec.js`     | All (jest) unit tests are postfixed with `.spec.js`                         |

</details>
<details>
<summary>👉 Props API vocabulary</summary>

| Prop                                       | Description                                                                                                                   |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `tag`                                      | When a component can be rendered as different tags                                                                            |
| `look`                                     | When talking about the look of a component like `success` or `hero`                                                           |
| `href`                                     | When something points at a thing via a link                                                                                   |
| `icon` `iconLeft` `iconRight`              | For passing in an icon                                                                                                        |
| `disabled` or `noBorder`                   | For passing boolean flags we use natural language and not `is` or `has` prefixes                                              |
| `size`                                     | For the physical size of a component, should be: `'small', 'medium', 'large', 'xlarge'`                                       |
| `spacing`                                  | For the whitespace size of a component, should be: `'small', 'medium', 'large', 'xlarge'`                                     |
| `value`                                    | For when a component shows a value, often numbers but not only                                                                |
| `selected`                                 | For things inside lists that are being targeted. Like `ButtonGroups` or `CheckGroup`. Takes string or array                   |
| `assistiveText`                            | For labeling things for assistive technology (generally renders using `VisuallyHidden` or `aria-label` depending on use case) |
| `xsmall` `small` `medium` `large` `xlarge` | For t-shirt sizing                                                                                                            |
| `data`                                     | A prop to drive a component-group from data alone                                                                             |

</details>

### Component build

This build is running all the components examples/demos directly and nothing else.
It's for development of a component and for testing it.

You run it via:

```sh
cd path/to/root/of/repo
yarn dev [component name]
```

### Docs build

This build is for the developer documentation site that puts all the examples of all components together with a navigation.
It's for the docs that are automatically published to:

| Purpose    | branch    | url                                    |
| ---------- | --------- | -------------------------------------- |
| Production | `master`  | https://westpacgel.netlify.com         |
| Staging    | `develop` | https://westpacgel-develop.netlify.com |

You run it via:

```sh
cd path/to/root/of/repo
yarn docs
```

## Blender support

[The blender](https://github.com/WestpacGEL/blender) can generate human readable html and css from react and emotion components.

Read more about how you add blender support in the blender [README.md](https://github.com/WestpacGEL/blender/tree/master#how-to-add-blender-support).
