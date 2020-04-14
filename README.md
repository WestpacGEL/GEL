# GEL [![CircleCI](https://circleci.com/gh/WestpacGEL/GEL/tree/master.svg?style=svg)](https://circleci.com/gh/WestpacGEL/GEL/tree/master)

The design system for Westpac GEL

## Builds

There are three different builds that exist in this repo:

1. [Component build](#component-build)
1. [Docs build](#docs-build)
1. [Website build](#website-build)

### Component build

This build is running all the components examples directly and nothing else.
It's for development of a component and for testing it.

You run it via:

```sh
yarn dev [component name]
```

### Docs build

This build is for the developer documentation site that puts all the examples of all components together with a navigation.
It's for the docs that are published to below:

| Purpose    | branch    | url                                    |
| ---------- | --------- | -------------------------------------- |
| Production | `master`  | https://westpacgel.netlify.com         |
| Staging    | `develop` | https://westpacgel-staging.netlify.com |

You run it via:

```sh
yarn docs
```

### Website build

This build is for the website and keystone process.
It's for the public documentation site and the admin UI.

You run it via:

```sh
yarn start
```

To run the website locally you'll need [postgres](https://www.keystonejs.com/quick-start/adapters#installing-postgresql) and a `.env` file.

Create the database via:

```sh
psql -c 'create database "gel3_website";'
```

The `website/.env` file requires the following items:

```
NODE_ENV=development

CLOUDINARY_CLOUD_NAME="FILLME"
CLOUDINARY_KEY="FILLME"
CLOUDINARY_SECRET="FILLME"

DATABASE_URL="postgres://localhost/gel3_website"
```

#### Website deployment

Everything for staging is added to the `staging` branch. So make sure you've merged everything you need into that branch and check it out:

```sh
git checkout staging
```

Then you can run the deploy script which will deploy the website with [pm2](https://github.com/Unitech/pm2):

```sh
yarn website:deploy-staging
```

_(💡 This requires your ssh key be installed on the server)_

## npm scripts

### root level

| script                        | description                                           |
| ----------------------------- | ----------------------------------------------------- |
| `yarn`                        | install all dependencies                              |
| `yarn nuke`                   | removes all `node_modules` for fresh start            |
| `yarn fresh`                  | removes all `node_modules` and reinstalls them        |
| `yarn build`                  | build all dist folders                                |
| `yarn build:dev`              | build all dist for local consumption                  |
| `yarn docs`                   | build docs for all components and open server         |
| `yarn docs:build`             | build docs for all components to `./docs/` folder     |
| `yarn new [package-name]`     | create a specified empty component                    |
| `yarn dev [package-name]`     | start the example server of a component               |
| `yarn test`                   | runs test                                             |
| `yarn format`                 | runs prettier to format all code                      |
| `yarn website:deploy-staging` | deploys the site to staging from the `staging` branch |

### component level

| script                  | description                      |
| ----------------------- | -------------------------------- |
| `yarn start`            | start the example server         |
| `yarn test`             | runs test headless               |
| `yarn test:dev`         | runs test by opening cypress app |
| `yarn test:integration` | runs integration tests           |

## Monorepo

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
│   │   ├── start.js                # entry file for `yarn start` task
│   │   └── start.webpack.config.js # dynamic webpack config to run the `yarn start` task
│   │
│   ├── public/                     # file in this folder will be moved into the docs/ folder
│   │
│   ├── transformer/                # the transfomer files to convert tokens into platform data
│   │   ├── _utils.js               # shared logic
│   │   └── web.js                  # transforms tokens to web
│   │
│   ├── buildExports.js             # helps cypress testing of each component
│   ├── cli.js                      # helper file for cli like adding a new module
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
│   │   ├── src/                    # to automatically create the dist
│   │   ├── tokens/                 # token files
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── STG/
│   │   └── etc
│   └── WBC/
│       └── etc
│
└── docs/                           # the static files for the documentation (build artifact)
```

## Component

```sh
.
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

## Decisions

- All scripts are run through the `yarn` command
- The `helpers/` folder includes all helpers for builds, docs, testing etc
- We have two different example / doc concerns:
  1. Examples: they are for building components locally and to explain code per component
  1. Docs: this is a website that includes all components and be published to https://westpacgel.github.io/GEL/
- Multi-brand will be achieved by added a brand package that will be passed to the `<GEL/>` component

  ```jsx
  import { GEL } from '@westpac/core';
  import brand from '@westpac/WBC';

  export const App = () => <GEL brand={brand}>Your app</GEL>;
  ```

- Tokens and overrides (everything regarding consistent branding) will be contained in the brand packages in `brands/*`
- Tokens will include these four categories:
  - `colors`
  - `layout`
  - `packs`
  - `spacing`
  - `type`
- All components use named exports as the default, no default exports
- All brands components will have a default export containing the "tokens" objects in addition to the named exports of each.
- Each component has overrides that can be overridden by:

  1. overrides contained in the brand object
  2. overrides passed into `<GEL/>` wrapper
  3. overrides passed to the component directly via the `overrides` prop

  ```jsx
  import { GEL } from '@westpac/core';
  import brand from '@westpac/wbc';

  brand['@westpac/tabcordion'].TabItem.styles = ( styles, state ) => { ...styles, border: 'red solid 2px' };
  brand['@westpac/tabcordion'].TabRow.component = <TabRow />;

  export const App = () => <GEL brand={brand}>Your app</GEL>;
  ```

- These overrides are pre-defined in the component them-self and will be reconciled as a cascade
- Each package can be addressed by its name as the key in the tokens
- The `example/` folder is for documenting composition of several components together e.g. templates
- Fonts can't be shipped with npm so the tokens only define the css declarations for the fonts
- css-in-js [emotion](https://emotion.sh/docs/introduction) is used with the `jsx` pragma and babel plugin
- For css-in-js we use `jsx` imported from `@westpac/core` and never depend on `emotion` directly other than inside core itself
- All components that are made up of a group of other components like `list`, `breadcrumb`, `button-group`, `input-group` etc can be driven solely by the
  `data` prop
- If children have to be altered inside a component we use the `cloneElement` function when we know it's a shallow depth.
  We use context when we don't know how deep the children are going to be.

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

```js
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

### TOKENS

| name      | purpose                                                  |
| --------- | -------------------------------------------------------- |
| `COLORS`  | Our colors including tints                               |
| `LAYOUT`  | Only breakpoints so far                                  |
| `PACKS`   | Mostly typography packs for reuse and consistency        |
| `SPACING` | A function with minor scale to allow you to hit the grid |
| `TYPE`    | Font files and definitions                               |
| `BRAND`   | The current brand string                                 |

## Overrides naming convention

Every single component (including root component) have three items in their override object:

```
overrides = {
	ComponentName : {
		[name]: {
			styles: (base-styles, state-props) => styles,
			component: <React.Component/>
			attributes: (base-attributes, state-props) => Object,
		}
	}
}
```

| Key          | Type                 | Description                                                                            | Function arguments                                                                                                                                                                  |
| ------------ | -------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `styles`     | `function` => Object | A function that returns an object of css properties for emotion                        | (`base-styles`,`state/props`) `base-styles` = the styles that would have been applied to the component, `state/props` = all props and all known state (without setters)             |
| `attributes` | `function` => Object | A function that returns an object of attributes that will be spread onto the component | (`base-attributes`,`state/props`) `base-attributes` = the attributes that would have been applied to the component, `state/props` = all props and all known state (without setters) |
| `component`  | `react component`    | A react component which will receive all props                                         | -                                                                                                                                                                                   |

### Naming convention for files inside components

| name            | purpose                                                                     |
| --------------- | --------------------------------------------------------------------------- |
| `index.js`      | Export only public API                                                      |
| `_utils.js`     | For code shared between components (ignored in examples) `[optional]`       |
| `ComponentX.js` | All component files are named after the exported component and pascal cased |
| `00-*.js`       | All files inside the `examples/` folder are sorted by file name             |
| `*.js`          | All jsx files are postfixed with `.js`                                      |
| `*.spec.js`     | All (jest) unit tests are postfixed with `.spec.js`                         |

## Props API vocabulary

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

## Blender support

[The blender](https://github.com/WestpacGEL/blender) can generate human readable html and css from react and emotion components.
For this to work we require `label` attributes in our `css` prop and a couple files to blend and the `blender` key inside your `package.json`.

### getLabel

We have to add labels for every variations for props.
To archive this we have the `getLabel` function that you can import from `@westpac/core`.
Make sure you only add variations that will change CSS.
Adding more means more css classes and more html.
The best way to do this I found was to add the labels to the overrides files:

- look at the `[something]Styles` function
- copy all props from there that are being constructed
- go to the css props and insert `getLabel` with an appropriate prefix

```jsx
/** @jsx jsx */
import { jsx, getLabel } from '@westpac/core';

const Component = ({ state, ...rest }) => <div {...rest} />;

const componentStyles = (_, { dismissible, look }) => {
	//     There are two props here ----^

	const styleMap = {}; // more code here
	return {
		// The `Component-prefix` is also important to name what (sub)component this is
		label: getLabel('Component-prefix', { dismissible, look }),
		//                          ----^
		// So we add those two into the getLabel function
		padding: dismissible ? '1.125rem 1.875rem 1.125rem 1.125rem' : '1.125rem',
		// you can see here --^ how the prop changes css dynamically
		transition: 'opacity 300ms ease-in-out',
		opacity: 1,
		borderTop: '1px solid',
		borderBottom: '1px solid',
		...styleMap[look].css,
		// here too we change css dynamically with props
	};
};

const componentAttributes = () => null;

export const defaultComponent = {
	component: Component,
	styles: componentStyles,
	attributes: componentAttributes,
};
```

For the prefixes try to name so it's visible what is a parent of what.

So `getLabel('Component')` on the root component and `getLabel('Component-subcomponent')` on the sub-component will become:

```html
<div class="GEL-Component-v1_0_0-props">
	<div class="GEL-Component-v1_0_0-subcomponent-props">
		Your sub-component
	</div>
</div>
```

### Core components

Inside the `package.json`

```json
"blender": {
	"recipe": "path/to/recipe.js",
	"js": "path/to/jquery-lib.js",
	"isCore": true
},
```

The `js` file should contain any framework other component rely on.
In our case that's jQuery.

The `recipe` file must export two named components `AllStyles` and `Docs`:

```jsx
import React from 'react';
import { Component } from '../src/index.js';

export function AllStyles({ brand, children }) {
	return <Component brand={brand}>{children}</Component>;
}

export function Docs({ brand }) {
	return [
		{
			heading: 'The Core Component',
			component: () => (
				<Component brand={brand}>Add your GEL components inside the Core component</Component>
			),
		},
	];
}
```

Both of these function get the `brand` object passed in and only in core `AllStyles` also get's `children` so we can remove core from the other components later.
The `Docs` component returns an array with a `heading` and a `component` key.

In short:

- The `AllStyles` component should contain all possible variations for a component
- The `Docs` component should contain everything we want to show in the documentation.

### Other components

Inside the `package.json`

```json
"blender": {
	"recipe": "blender/recipe.js",
	"js": "blender/script.js"
},
```

The `js` file is optional and only required if you have js functionality.

The `recipe` file must export two named components `AllStyles` and `Docs`:

```jsx
import { GEL } from '@westpac/core';
import React from 'react';

import { Component } from '@westpac/alert';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Component look="success" />
			<Component look="info" />
			<Component look="warning" />
			<Component heading="Your alert heading" />
			<Component dismissible />
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A success alert',
			component: () => (
				<GEL brand={brand}>
					<Component look="success">Your alert body</Component>
				</GEL>
			),
		},
		{
			heading: 'A info alert',
			component: () => (
				<GEL brand={brand}>
					<Component look="info">Your alert body</Component>
				</GEL>
			),
		},
		{
			heading: 'A warning alert',
			component: () => (
				<GEL brand={brand}>
					<Component look="warning">Your alert body</Component>
				</GEL>
			),
		},
	];
}
```

Same as the core component.
