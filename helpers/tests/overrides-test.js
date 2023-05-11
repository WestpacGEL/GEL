import { forwardRef } from 'react';
import cloneDeep from 'lodash.clonedeep';
import { render } from '@testing-library/react';
import { jest } from '@jest/globals';

import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

// this test ensures all the brand/token overrides apply correctly to a component and their children

const overridesTest = ({ name, overrides, styles: overridesStyles = {}, Component }) => {
	describe(`Overrides test for ${name}`, () => {
		beforeEach(() => {
			jest.resetModules();
		});

		// Test if the overrides cascade correctly in sequence
		overrides.forEach((override) => {
			let tokenOverrides;
			let brandOverrides;

			// 1. Test the token overrides
			test(`${override} - Token overrides applies styles, attributes and components correctly`, () => {
				const styleText = '"token overrides added style"';
				const attributeText = 'token overrides added attributes';

				const parentWrapper = 'token overrides parent wrapper';
				const childWrapper = 'token overrides child wrapper';

				const withOverrides = cloneDeep(wbc);

				tokenOverrides = {
					[override]: {
						styles: (styles) => ({ ...styles, content: styleText, ...overridesStyles[override] }),
						attributes: () => ({ 'data-attribute': attributeText }),
						// eslint-disable-next-line react/display-name
						component: forwardRef(
							({ 'data-attribute': dataAttribute, children, className }, ref) => (
								<div data-testid={parentWrapper}>
									<div
										ref={ref}
										data-testid={childWrapper}
										data-attribute={dataAttribute}
										className={className}
									>
										{' '}
										{children}
									</div>
								</div>
							)
						),
					},
				};

				withOverrides.OVERRIDES[`@westpac/${name}`] = tokenOverrides;
				const Wrapper = () => (
					<GEL brand={withOverrides}>
						<Component />
					</GEL>
				);

				const { container, getAllByTestId } = render(<Wrapper />);
				const content = window
					.getComputedStyle(container.querySelector(`[data-attribute="${attributeText}"]`))
					.getPropertyValue('content')
					.toLowerCase();

				// We just need to check if the items exist; toBeVisible works fine for that
				expect(container.querySelector(`[data-attribute="${attributeText}"]`)).toBeVisible();

				getAllByTestId(parentWrapper).forEach((parentWrapperElement) =>
					expect(parentWrapperElement).toBeVisible()
				);

				getAllByTestId(childWrapper).forEach((childWrapperElement) =>
					expect(childWrapperElement).toBeVisible()
				);

				expect(content).toBe(styleText);
			});

			// 2. Test the brand overrides
			test(`${override} - Brand overrides applies styles, attributes and components correctly`, () => {
				const styleText = '"brand overrides added style"';
				const attributeText = 'brand overrides added attributes';

				const parentWrapper = 'brand overrides parent wrapper';
				const childWrapper = 'brand overrides child wrapper';

				const withOverrides = cloneDeep(wbc);

				brandOverrides = {
					[override]: {
						styles: (styles) => ({ ...styles, content: styleText, ...overridesStyles[override] }),
						attributes: () => ({ 'data-attribute': attributeText }),
						// eslint-disable-next-line react/display-name
						component: forwardRef(
							({ 'data-attribute': dataAttribute, children, className }, ref) => (
								<div data-testid={parentWrapper}>
									<div
										ref={ref}
										data-testid={childWrapper}
										data-attribute={dataAttribute}
										className={className}
									>
										{' '}
										{children}
									</div>
								</div>
							)
						),
					},
				};

				withOverrides[`@westpac/${name}`] = brandOverrides;

				const Wrapper = () => (
					<GEL brand={withOverrides}>
						<Component />
					</GEL>
				);

				const { container, getAllByTestId } = render(<Wrapper />);

				const content = window
					.getComputedStyle(container.querySelector(`[data-attribute="${attributeText}"]`))
					.getPropertyValue('content')
					.toLowerCase();

				expect(container.querySelector(`[data-attribute="${attributeText}"]`)).toBeVisible();

				getAllByTestId(parentWrapper).forEach((parentWrapperElement) =>
					expect(parentWrapperElement).toBeVisible()
				);

				getAllByTestId(childWrapper).forEach((childWrapperElement) =>
					expect(childWrapperElement).toBeVisible()
				);

				expect(content).toBe(styleText);
			});

			// 3. Test if the brand overrides override the token overrides
			test(`${override} - Brand overrides override token-overrides`, () => {
				const styleText = '"brand overrides added style"';
				const attributeText = 'brand overrides added attributes';

				const parentWrapper = 'brand overrides parent wrapper';
				const childWrapper = 'brand overrides child wrapper';

				const withOverrides = cloneDeep(wbc);
				withOverrides.OVERRIDES[`@westpac/${name}`] = tokenOverrides; // we apply the token overrides which should be overridden by the brand overrides

				brandOverrides = {
					[override]: {
						styles: (styles) => ({ ...styles, content: styleText, ...overridesStyles[override] }),
						attributes: () => ({ 'data-attribute': attributeText }),
						// eslint-disable-next-line react/display-name
						component: forwardRef(
							({ 'data-attribute': dataAttribute, children, className }, ref) => (
								<div data-testid={parentWrapper}>
									<div
										ref={ref}
										data-testid={childWrapper}
										data-attribute={dataAttribute}
										className={className}
									>
										{' '}
										{children}
									</div>
								</div>
							)
						),
					},
				};

				withOverrides[`@westpac/${name}`] = brandOverrides;

				const Wrapper = () => (
					<GEL brand={withOverrides}>
						<Component />
					</GEL>
				);

				const { container, getAllByTestId } = render(<Wrapper />);

				const content = window
					.getComputedStyle(container.querySelector(`[data-attribute="${attributeText}"]`))
					.getPropertyValue('content')
					.toLowerCase();

				expect(container.querySelector(`[data-attribute="${attributeText}"]`)).toBeVisible();

				getAllByTestId(parentWrapper).forEach((parentWrapperElement) =>
					expect(parentWrapperElement).toBeVisible()
				);

				getAllByTestId(childWrapper).forEach((childWrapperElement) =>
					expect(childWrapperElement).toBeVisible()
				);

				expect(content).toBe(styleText);
			});

			// 4. Test the component overrides
			test(`${override} - Component overrides applies styles, attributes and components correctly`, () => {
				const styleText = '"component overrides added style"';
				const attributeText = 'component overrides added attributes';

				const parentWrapper = 'component overrides parent wrapper';
				const childWrapper = 'component overrides child wrapper';

				const withOverrides = cloneDeep(wbc);

				const overridesObj = {
					[override]: {
						styles: (styles) => ({ ...styles, content: styleText, ...overridesStyles[override] }),
						attributes: () => ({ 'data-attribute': attributeText }),
						// eslint-disable-next-line react/display-name
						component: forwardRef(
							({ 'data-attribute': dataAttribute, children, className }, ref) => (
								<div data-testid={parentWrapper}>
									<div
										ref={ref}
										data-testid={childWrapper}
										data-attribute={dataAttribute}
										className={className}
									>
										{' '}
										{children}
									</div>
								</div>
							)
						),
					},
				};

				const Wrapper = () => (
					<GEL brand={withOverrides}>
						<Component overrides={overridesObj} />
					</GEL>
				);

				const { container, getAllByTestId } = render(<Wrapper />);

				const content = window
					.getComputedStyle(container.querySelector(`[data-attribute="${attributeText}"]`))
					.getPropertyValue('content')
					.toLowerCase();

				expect(container.querySelector(`[data-attribute="${attributeText}"]`)).toBeVisible();

				getAllByTestId(parentWrapper).forEach((parentWrapperElement) =>
					expect(parentWrapperElement).toBeVisible()
				);

				getAllByTestId(childWrapper).forEach((childWrapperElement) =>
					expect(childWrapperElement).toBeVisible()
				);

				expect(content).toBe(styleText);
			});

			// 5. Test if the component overrides override the token overrides
			test(`${override} - Component overrides override token-overrides`, () => {
				const styleText = '"component overrides added style"';
				const attributeText = 'component overrides added attributes';

				const parentWrapper = 'component overrides parent wrapper';
				const childWrapper = 'component overrides child wrapper';

				const withOverrides = cloneDeep(wbc);
				withOverrides.OVERRIDES[`@westpac/${name}`] = tokenOverrides; // we apply the token overrides which should be overridden by the brand overrides
				const overridesObj = {
					[override]: {
						styles: (styles) => ({ ...styles, content: styleText, ...overridesStyles[override] }),
						attributes: () => ({ 'data-attribute': attributeText }),
						// eslint-disable-next-line react/display-name
						component: forwardRef(
							({ 'data-attribute': dataAttribute, children, className }, ref) => (
								<div data-testid={parentWrapper}>
									<div
										ref={ref}
										data-testid={childWrapper}
										data-attribute={dataAttribute}
										className={className}
									>
										{' '}
										{children}
									</div>
								</div>
							)
						),
					},
				};

				const Wrapper = () => (
					<GEL brand={withOverrides}>
						<Component overrides={overridesObj} />
					</GEL>
				);

				const { container, getAllByTestId } = render(<Wrapper />);

				const content = window
					.getComputedStyle(container.querySelector(`[data-attribute="${attributeText}"]`))
					.getPropertyValue('content')
					.toLowerCase();

				expect(container.querySelector(`[data-attribute="${attributeText}"]`)).toBeVisible();

				getAllByTestId(parentWrapper).forEach((parentWrapperElement) =>
					expect(parentWrapperElement).toBeVisible()
				);

				getAllByTestId(childWrapper).forEach((childWrapperElement) =>
					expect(childWrapperElement).toBeVisible()
				);

				expect(content).toBe(styleText);
			});

			// 6. Test if the component overrides override the token overrides and the brand overrides
			test(`${override} - Component overrides override token-overrides and brand-overrides`, () => {
				const styleText = '"component overrides added style"';
				const attributeText = 'component overrides added attributes';

				const parentWrapper = 'component overrides parent wrapper';
				const childWrapper = 'component overrides child wrapper';

				const withOverrides = cloneDeep(wbc);

				withOverrides.OVERRIDES[`@westpac/${name}`] = tokenOverrides; // we apply the token overrides which should be overridden by the brand overrides
				withOverrides[`@westpac/${name}`] = brandOverrides; // we apply the brand overrides which should be overridden by the component overrides

				const overridesObj = {
					[override]: {
						styles: (styles) => ({ ...styles, content: styleText, ...overridesStyles[override] }),
						attributes: () => ({ 'data-attribute': attributeText }),
						// eslint-disable-next-line react/display-name
						component: forwardRef(
							({ 'data-attribute': dataAttribute, children, className }, ref) => (
								<div data-testid={parentWrapper}>
									<div
										ref={ref}
										data-testid={childWrapper}
										data-attribute={dataAttribute}
										className={className}
									>
										{' '}
										{children}
									</div>
								</div>
							)
						),
					},
				};

				const Wrapper = () => (
					<GEL brand={withOverrides}>
						<Component overrides={overridesObj} />
					</GEL>
				);

				const { container, getAllByTestId } = render(<Wrapper />);

				const content = window
					.getComputedStyle(container.querySelector(`[data-attribute="${attributeText}"]`))
					.getPropertyValue('content')
					.toLowerCase();

				expect(container.querySelector(`[data-attribute="${attributeText}"]`)).toBeVisible();

				getAllByTestId(parentWrapper).forEach((parentWrapperElement) =>
					expect(parentWrapperElement).toBeVisible()
				);

				getAllByTestId(childWrapper).forEach((childWrapperElement) =>
					expect(childWrapperElement).toBeVisible()
				);

				expect(content).toBe(styleText);
			});
		});
	});
};

export { overridesTest };
