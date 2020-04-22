import React from 'react';
import cloneDeep from 'lodash.clonedeep';
import { render } from '@testing-library/react';

import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

function overridesTest({ name, overrides, Component }) {
	describe(`Overrides test for ${name}`, () => {
		beforeEach(() => {
			jest.resetModules();
		});

		// We test every single override in sequence to make sure the overrides cascade correctly
		overrides.map(override => {
			let tokenOverrides;
			let brandOverrides;

			// 1. we test the token overrides
			test(`Token overrides ${override} applies styles, attributes and components correctly`, () => {
				const styleText = '"token overrides added style"';
				const attributeText = 'token overrides added attributes';
				const wrapper1 = 'token overrides wrapper 1';
				const wrapper2 = 'token overrides wrapper 2';

				const withOverrides = cloneDeep(wbc);
				tokenOverrides = {
					[override]: {
						styles: styles => ({ ...styles, content: styleText }),
						attributes: () => ({ 'data-attribute': attributeText }),
						component: ({ state, ...rest }) => (
							<div data-testid={wrapper1}>
								<div data-testid={wrapper2} {...rest} />
							</div>
						),
					},
				};
				withOverrides.OVERRIDES[`@westpac/${name}`] = tokenOverrides;

				const Wrapper = () => (
					<GEL brand={withOverrides}>
						<Component />
					</GEL>
				);

				const { container, getByTestId } = render(<Wrapper />);

				const content = window
					.getComputedStyle(container.querySelector(`[data-attribute="${attributeText}"]`))
					.getPropertyValue('content')
					.toLowerCase();

				// We just need to check if the items exist; toBeVisible works fine for that
				expect(container.querySelector(`[data-attribute="${attributeText}"]`)).toBeVisible();
				expect(getByTestId(wrapper1)).toBeVisible();
				expect(getByTestId(wrapper2)).toBeVisible();
				expect(content).toBe(styleText);
			});

			// 2. we test the brand overrides
			test(`Brand overrides ${override} applies styles, attributes and components correctly`, () => {
				const styleText = '"brand overrides added style"';
				const attributeText = 'brand overrides added attributes';
				const wrapper1 = 'brand overrides wrapper 1';
				const wrapper2 = 'brand overrides wrapper 2';

				const withOverrides = cloneDeep(wbc);
				brandOverrides = {
					[override]: {
						styles: styles => ({ ...styles, content: styleText }),
						attributes: () => ({ 'data-attribute': attributeText }),
						component: ({ state, ...rest }) => (
							<div data-testid={wrapper1}>
								<div data-testid={wrapper2} {...rest} />
							</div>
						),
					},
				};
				withOverrides[`@westpac/${name}`] = brandOverrides;

				const Wrapper = () => (
					<GEL brand={withOverrides}>
						<Component />
					</GEL>
				);

				const { container, getByTestId } = render(<Wrapper />);

				const content = window
					.getComputedStyle(container.querySelector(`[data-attribute="${attributeText}"]`))
					.getPropertyValue('content')
					.toLowerCase();

				expect(container.querySelector(`[data-attribute="${attributeText}"]`)).toBeVisible();
				expect(getByTestId(wrapper1)).toBeVisible();
				expect(getByTestId(wrapper2)).toBeVisible();
				expect(content).toBe(styleText);
			});

			// 3.
			test(`Brand overrides ${override} override token-overrides`, () => {
				const styleText = '"brand overrides added style"';
				const attributeText = 'brand overrides added attributes';
				const wrapper1 = 'brand overrides wrapper 1';
				const wrapper2 = 'brand overrides wrapper 2';

				const withOverrides = cloneDeep(wbc);
				withOverrides.OVERRIDES[`@westpac/${name}`] = tokenOverrides; // we apply the token overrides which should be overridden by the brand overrides
				brandOverrides = {
					[override]: {
						styles: styles => ({ ...styles, content: styleText }),
						attributes: () => ({ 'data-attribute': attributeText }),
						component: ({ state, ...rest }) => (
							<div data-testid={wrapper1}>
								<div data-testid={wrapper2} {...rest} />
							</div>
						),
					},
				};
				withOverrides[`@westpac/${name}`] = brandOverrides;

				const Wrapper = () => (
					<GEL brand={withOverrides}>
						<Component />
					</GEL>
				);

				const { container, getByTestId } = render(<Wrapper />);

				const content = window
					.getComputedStyle(container.querySelector(`[data-attribute="${attributeText}"]`))
					.getPropertyValue('content')
					.toLowerCase();

				expect(container.querySelector(`[data-attribute="${attributeText}"]`)).toBeVisible();
				expect(getByTestId(wrapper1)).toBeVisible();
				expect(getByTestId(wrapper2)).toBeVisible();
				expect(content).toBe(styleText);
			});

			// 4. we test the component overrides
			test(`Component overrides ${override} applies styles, attributes and components correctly`, () => {
				const styleText = '"component overrides added style"';
				const attributeText = 'component overrides added attributes';
				const wrapper1 = 'component overrides wrapper 1';
				const wrapper2 = 'component overrides wrapper 2';

				const withOverrides = cloneDeep(wbc);
				const overridesObj = {
					[override]: {
						styles: styles => ({ ...styles, content: styleText }),
						attributes: () => ({ 'data-attribute': attributeText }),
						component: ({ state, ...rest }) => (
							<div data-testid={wrapper1}>
								<div data-testid={wrapper2} {...rest} />
							</div>
						),
					},
				};

				const Wrapper = () => (
					<GEL brand={withOverrides}>
						<Component overrides={overridesObj} />
					</GEL>
				);

				const { container, getByTestId } = render(<Wrapper />);

				const content = window
					.getComputedStyle(container.querySelector(`[data-attribute="${attributeText}"]`))
					.getPropertyValue('content')
					.toLowerCase();

				expect(container.querySelector(`[data-attribute="${attributeText}"]`)).toBeVisible();
				expect(getByTestId(wrapper1)).toBeVisible();
				expect(getByTestId(wrapper2)).toBeVisible();
				expect(content).toBe(styleText);
			});

			// 5.
			test(`Component overrides ${override} override token-overrides`, () => {
				const styleText = '"component overrides added style"';
				const attributeText = 'component overrides added attributes';
				const wrapper1 = 'component overrides wrapper 1';
				const wrapper2 = 'component overrides wrapper 2';

				const withOverrides = cloneDeep(wbc);
				withOverrides.OVERRIDES[`@westpac/${name}`] = tokenOverrides; // we apply the token overrides which should be overridden by the brand overrides
				const overridesObj = {
					[override]: {
						styles: styles => ({ ...styles, content: styleText }),
						attributes: () => ({ 'data-attribute': attributeText }),
						component: ({ state, ...rest }) => (
							<div data-testid={wrapper1}>
								<div data-testid={wrapper2} {...rest} />
							</div>
						),
					},
				};

				const Wrapper = () => (
					<GEL brand={withOverrides}>
						<Component overrides={overridesObj} />
					</GEL>
				);

				const { container, getByTestId } = render(<Wrapper />);

				const content = window
					.getComputedStyle(container.querySelector(`[data-attribute="${attributeText}"]`))
					.getPropertyValue('content')
					.toLowerCase();

				expect(container.querySelector(`[data-attribute="${attributeText}"]`)).toBeVisible();
				expect(getByTestId(wrapper1)).toBeVisible();
				expect(getByTestId(wrapper2)).toBeVisible();
				expect(content).toBe(styleText);
			});

			// 6.
			test(`Component overrides ${override} override token-overrides and brand-override`, () => {
				const styleText = '"component overrides added style"';
				const attributeText = 'component overrides added attributes';
				const wrapper1 = 'component overrides wrapper 1';
				const wrapper2 = 'component overrides wrapper 2';

				const withOverrides = cloneDeep(wbc);
				withOverrides.OVERRIDES[`@westpac/${name}`] = tokenOverrides; // we apply the token overrides which should be overridden by the brand overrides
				withOverrides[`@westpac/${name}`] = brandOverrides; // we apply the brand overrides which should be overridden by the component overrides
				const overridesObj = {
					[override]: {
						styles: styles => ({ ...styles, content: styleText }),
						attributes: () => ({ 'data-attribute': attributeText }),
						component: ({ state, ...rest }) => (
							<div data-testid={wrapper1}>
								<div data-testid={wrapper2} {...rest} />
							</div>
						),
					},
				};

				const Wrapper = () => (
					<GEL brand={withOverrides}>
						<Component overrides={overridesObj} />
					</GEL>
				);

				const { container, getByTestId } = render(<Wrapper />);

				const content = window
					.getComputedStyle(container.querySelector(`[data-attribute="${attributeText}"]`))
					.getPropertyValue('content')
					.toLowerCase();

				expect(container.querySelector(`[data-attribute="${attributeText}"]`)).toBeVisible();
				expect(getByTestId(wrapper1)).toBeVisible();
				expect(getByTestId(wrapper2)).toBeVisible();
				expect(content).toBe(styleText);
			});
		});
	});
}

module.exports = exports = {
	overridesTest,
};
