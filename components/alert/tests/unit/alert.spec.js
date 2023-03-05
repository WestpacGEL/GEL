import React from 'react';
import chroma from 'chroma-js';
import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';

import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { Alert } from '@westpac/alert';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'alert', // the name has to be the package name without '@westpac/' scope
	overrides: ['Alert', 'Body', 'CloseBtn', 'Icon', 'Heading'], // every single override root key
	Component: (props) => (
		<Alert dismissible heading="heading" {...props}>
			Alert content
		</Alert>
	), // the component with all components rendered
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'alert',
	Component: (props) => <Alert {...props} />,
});

// Component specific tests
describe('Alert component', () => {
	test('should come with an SVG icon', () => {
		const text = 'Our alert content';
		const SimpleAlert = () => (
			<GEL brand={wbc}>
				<Alert>{text}</Alert>
			</GEL>
		);

		const { container } = render(<SimpleAlert />);
		// we are just testing that svg exists and not what kind as that would be too specific
		expect(container).toContainHTML('svg');
	});

	test('should replace SVG icon when specified', () => {
		const ourIcon = () => <span data-testid="our icon">Our icon</span>;
		const SimpleAlert = () => (
			<GEL brand={wbc}>
				<Alert icon={ourIcon}>Alert content</Alert>
			</GEL>
		);

		const { getByTestId } = render(<SimpleAlert />);

		expect(getByTestId('our icon')).toContainHTML('Our icon');
	});

	test('should add the body content', () => {
		const text = 'Our alert content';
		const SimpleAlert = () => (
			<GEL brand={wbc}>
				<Alert>{text}</Alert>
			</GEL>
		);

		const { container } = render(<SimpleAlert />);

		expect(container).toHaveTextContent(text);
	});

	test('should add all HTML tags to body content', () => {
		const text = 'alert text';
		const SimpleAlert = () => (
			<GEL brand={wbc}>
				<Alert>
					Our <strong>{text}</strong> content
				</Alert>
			</GEL>
		);

		const { container } = render(<SimpleAlert />);
		// we're testing both, that strong is added and that it has children (and parsed correctly via DOM)
		expect(container.querySelector('strong')).toHaveTextContent(text);
	});

	test('should add a heading', () => {
		const text = 'heading text';
		const SimpleAlert = () => (
			<GEL brand={wbc}>
				<Alert heading={text}>Our alert content</Alert>
			</GEL>
		);

		const { container } = render(<SimpleAlert />);

		expect(container.querySelector('h2')).toHaveTextContent(text);
	});

	test('should add a heading with a different tag', () => {
		const text = 'heading text';
		const SimpleAlert = () => (
			<GEL brand={wbc}>
				<Alert heading={text} headingTag="h6">
					Our alert content
				</Alert>
			</GEL>
		);

		const { container } = render(<SimpleAlert />);

		expect(container).not.toContainHTML('<h2>');
		expect(container.querySelector('h6')).toHaveTextContent(text);
	});

	// here we test a bunch of things in a loop. This is a good way to automate tests easily and DRY
	['success', 'info', 'warning', 'danger'].map((look) => {
		test(`should use ${look} color when alert is ${
			look.charAt(0).toUpperCase() + look.slice(1)
		}`, () => {
			const { COLORS } = wbc;

			const SimpleAlert = () => (
				<GEL brand={wbc}>
					<Alert look={look} data-testid="alert">
						Our alert content
					</Alert>
				</GEL>
			);

			const { container, getByTestId } = render(<SimpleAlert />);

			// We test only that the right category of colors is used.
			// We do not test exactly what color we use as that would be too noise and fail too often when designs change
			// We also convert all colors with chroma so that colors that use shortcuts like #ff0 are converted to #ffff00 to make comparison easier
			const allowedColors = [
				...Object.entries(COLORS).filter(([name]) => name.includes(look)),
				...Object.entries(COLORS.tints).filter(([name]) => name.includes(look)),
			].map(([_, color]) => chroma(color).hex().toLowerCase());

			// testing with testing id is saver than looking for html elements
			const color = window
				.getComputedStyle(getByTestId('alert'))
				.getPropertyValue('color')
				.toLowerCase();
			const borderColor = window
				.getComputedStyle(getByTestId('alert'))
				.getPropertyValue('border-color')
				.toLowerCase();
			const backgroundColor = window
				.getComputedStyle(getByTestId('alert'))
				.getPropertyValue('background-color')
				.toLowerCase();

			// We have to convert colors to hex as some colors are converted to rgb by the browser
			expect(allowedColors.includes(chroma(color).hex())).toBe(true);
			expect(allowedColors.includes(chroma(borderColor).hex())).toBe(true);
			expect(allowedColors.includes(chroma(backgroundColor).hex())).toBe(true);
			expect(container).toContainHTML('svg');
		});
	});

	// We test system separately as border color and text color is different
	test('should use system color when alert is System alert', () => {
		const { COLORS } = wbc;

		const SimpleAlert = () => (
			<GEL brand={wbc}>
				<Alert look="system" data-testid="alert">
					Our alert content
				</Alert>
			</GEL>
		);

		const { container, getByTestId } = render(<SimpleAlert />);

		const allowedColors = [
			...Object.entries(COLORS).filter(([name]) => name.includes('system')),
			...Object.entries(COLORS.tints).filter(([name]) => name.includes('system')),
		].map(([_, color]) => chroma(color).hex().toLowerCase());

		const backgroundColor = window
			.getComputedStyle(getByTestId('alert'))
			.getPropertyValue('background-color')
			.toLowerCase();

		expect(allowedColors.includes(chroma(backgroundColor).hex())).toBe(true);
		expect(container).toContainHTML('svg');
	});

	test('should be dismissed when alert is dismissible', async () => {
		const withOverrides = { ...wbc };
		withOverrides['@westpac/alert'] = {
			CloseBtn: {
				attributes: () => ({ 'data-testid': 'alert-btn' }),
			},
		};

		const SimpleAlert = () => (
			<GEL brand={withOverrides}>
				<Alert data-testid="alert" dismissible>
					Our alert content
				</Alert>
			</GEL>
		);

		const { getByTestId } = render(<SimpleAlert />);

		expect(getByTestId('alert')).toBeVisible();
		fireEvent.click(await getByTestId('alert-btn'));
		await waitForElementToBeRemoved(getByTestId('alert'));
	});
});
