import React from 'react';
import chroma from 'chroma-js';
import { render, fireEvent } from '@testing-library/react';

import { ErrorBoundary } from '../../../../helpers/tests/error-boundary.js';
import { Alert } from '@westpac/alert';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

describe('Alert', () => {
	beforeEach(() => {
		jest.resetModules();
		console.error = jest.fn();
	});

	afterEach(() => {
		console.error.mockClear();
	});

	test('Errors when the component is rendered outside of <GEL/>', () => {
		const text = 'Our alert content';
		const LoneAlert = () => <Alert>{text}</Alert>;

		const { container } = render(<LoneAlert />, { wrapper: ErrorBoundary });

		expect(container).toHaveTextContent(
			/GEL components require that you wrap your application with the <GEL \/> brand provider from @westpac\/core./i
		);
		expect(console.error).toHaveBeenCalledTimes(2);
	});

	test('Comes with an SVG icon', () => {
		const text = 'Our alert content';
		const SimpleAlert = () => (
			<GEL brand={wbc}>
				<Alert>{text}</Alert>
			</GEL>
		);

		const { container } = render(<SimpleAlert />);

		expect(container).toContainHTML('svg');
	});

	test('Can disable SVG icon', () => {
		const text = 'Our alert content';
		const SimpleAlert = () => (
			<GEL brand={wbc}>
				<Alert icon={null}>{text}</Alert>
			</GEL>
		);

		const { container } = render(<SimpleAlert />);

		expect(container).not.toContainHTML('svg');
	});

	test('Adds the body content', () => {
		const text = 'Our alert content';
		const SimpleAlert = () => (
			<GEL brand={wbc}>
				<Alert>{text}</Alert>
			</GEL>
		);

		const { container } = render(<SimpleAlert />);

		expect(container).toHaveTextContent(text);
	});

	test('Adds all HTML tags to body content', () => {
		const text = 'alert text';
		const SimpleAlert = () => (
			<GEL brand={wbc}>
				<Alert>
					Our <strong data-testid="stronger">{text}</strong> content
				</Alert>
			</GEL>
		);

		const { container, getByTestId } = render(<SimpleAlert />);

		expect(getByTestId('stronger')).toHaveTextContent(text);
	});

	test('Adds a headline', () => {
		const text = 'headline text';
		const SimpleAlert = () => (
			<GEL brand={wbc}>
				<Alert heading={text}>Our alert content</Alert>
			</GEL>
		);

		const { container } = render(<SimpleAlert />);

		expect(container.querySelector('h2')).toHaveTextContent(text);
	});

	test('Adds a headline with a different tag', () => {
		const text = 'headline text';
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

	['success', 'info', 'warning', 'danger'].map(look => {
		test(`${look.charAt(0).toUpperCase() + look.slice(1)} alert uses ${look} color`, () => {
			const { COLORS } = wbc;

			const SimpleAlert = () => (
				<GEL brand={wbc}>
					<Alert look={look} data-testid="alert">
						Our alert content
					</Alert>
				</GEL>
			);

			const { container, getByTestId } = render(<SimpleAlert />);

			const allowedColors = [
				...Object.entries(COLORS).filter(([name]) => name.includes(look)),
				...Object.entries(COLORS.tints).filter(([name]) => name.includes(look)),
			].map(([_, color]) => color.toLowerCase());

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

			expect(allowedColors.includes(chroma(color).hex())).toBe(true);
			expect(allowedColors.includes(chroma(borderColor).hex())).toBe(true);
			expect(allowedColors.includes(chroma(backgroundColor).hex())).toBe(true);
			expect(container).toContainHTML('svg');
		});
	});

	test('System alert uses system color', () => {
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
		].map(([_, color]) =>
			chroma(color)
				.hex()
				.toLowerCase()
		);

		const backgroundColor = window
			.getComputedStyle(getByTestId('alert'))
			.getPropertyValue('background-color')
			.toLowerCase();

		expect(allowedColors.includes(chroma(backgroundColor).hex())).toBe(true);
		expect(container).toContainHTML('svg');
	});

	test('Dismissible alerts can be ... dismissed', () => {
		const sleep = wait => new Promise(resolve => setTimeout(resolve, wait));

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

		const { container, getByTestId } = render(<SimpleAlert />);

		expect(getByTestId('alert')).toBeVisible();

		fireEvent.click(getByTestId('alert-btn'));

		sleep(500).then(() => {
			expect(getByTestId('alert')).not.toBeVisible();
		});
	});
});
