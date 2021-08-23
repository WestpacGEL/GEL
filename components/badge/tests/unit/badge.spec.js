import React from 'react';
import chroma from 'chroma-js';
import { render } from '@testing-library/react';

import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import { Badge } from '@westpac/badge';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'badge', // the name has to be the package name without '@westpac/' scope
	overrides: ['Badge'], // every single override root key
	Component: (props) => <Badge value="Badge" {...props} />, // the component with all components rendered
});

// check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'badge',
	Component: (props) => <Badge value="Badge" {...props} />,
});

// component specific tests
describe('Badge specific tests', () => {
	test('Adds the text content', () => {
		const text = 'badge text';
		const SimpleBadge = () => (
			<GEL brand={wbc}>
				<Badge value={text} />
			</GEL>
		);

		const { container } = render(<SimpleBadge />);
		expect(container).toHaveTextContent(text);
	});

	// colors
	['primary', 'hero', 'neutral', 'success', 'info', 'warning', 'danger'].map((look) => {
		test(`${look.charAt(0).toUpperCase() + look.slice(1)} badge uses ${look} color`, () => {
			const { COLORS } = wbc;

			const SimpleBadge = () => (
				<GEL brand={wbc}>
					<Badge look={look} value="badge text" data-testid="badge" />
				</GEL>
			);

			const { getByTestId } = render(<SimpleBadge />);
			const allowedColors = [
				...Object.entries(COLORS).filter(([name]) => name.includes(look)),
				...Object.entries(COLORS.tints).filter(([name]) => name.includes(look)),
			].map(([_, color]) => chroma(color).hex().toLowerCase());

			// testing with testing id is safer than looking for html elements
			const color = window
				.getComputedStyle(getByTestId('badge'))
				.getPropertyValue('color')
				.toLowerCase();
			const borderColor = window
				.getComputedStyle(getByTestId('badge'))
				.getPropertyValue('border-color')
				.toLowerCase();
			const backgroundColor = window
				.getComputedStyle(getByTestId('badge'))
				.getPropertyValue('background-color')
				.toLowerCase();

			// We have to convert colors to hex as some colors are converted to rgb by the browser
			expect(chroma(color).hex()).toBe(chroma('#fff').hex());
			expect(allowedColors.includes(chroma(borderColor).hex())).toBe(true);
			expect(allowedColors.includes(chroma(backgroundColor).hex())).toBe(true);
		});
	});

	// Testing faint separately as background and text are unique to the others
	test('faint badge uses faint color', () => {
		const { COLORS } = wbc;

		const SimpleBadge = () => (
			<GEL brand={wbc}>
				<Badge look="faint" value="badge text" data-testid="badge" />
			</GEL>
		);

		const { getByTestId } = render(<SimpleBadge />);
		const allowedColors = [
			...Object.entries(COLORS).filter(
				([name]) => name.includes('muted') || name.includes('border')
			),
			...Object.entries(COLORS.tints).filter(
				([name]) => name.includes('muted') || name.includes('border')
			),
		].map(([_, color]) => chroma(color).hex().toLowerCase());

		// testing with testing id is saver than looking for html elements
		const color = window
			.getComputedStyle(getByTestId('badge'))
			.getPropertyValue('color')
			.toLowerCase();
		const borderColor = window
			.getComputedStyle(getByTestId('badge'))
			.getPropertyValue('border-color')
			.toLowerCase();
		const backgroundColor = window
			.getComputedStyle(getByTestId('badge'))
			.getPropertyValue('background-color')
			.toLowerCase();

		// We have to convert colors to hex as some colors are converted to rgb by the browser
		expect(allowedColors.includes(chroma(color).hex())).toBe(true);
		expect(allowedColors.includes(chroma(borderColor).hex())).toBe(true);
		expect(chroma(backgroundColor).hex()).toBe(chroma('#fff').hex());
	});
});
