import React from 'react';
import { render, screen } from '@testing-library/react';

import { ErrorBoundary } from './error-boundary.js';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

function nestingTest({ name, Component }) {
	describe(`Nesting test for ${name}`, () => {
		beforeEach(() => {
			jest.resetModules();
			console.error = jest.fn();
		});

		afterEach(() => {
			console.error.mockClear();
		});

		test('Errors when the component is rendered outside of <GEL/>', () => {
			const Wrapper = () => <Component />;

			render(<Wrapper />, { wrapper: ErrorBoundary });
			expect(
				screen.queryByText(
					/GEL components require that you wrap your application with the <GEL \/> brand provider from @westpac\/core./i
				)
			).toBeInTheDocument();
		});

		test('Renders when the component is rendered inside of <GEL/>', () => {
			const Wrapper = () => (
				<GEL brand={wbc}>
					<Component data-testid="test-component" />
				</GEL>
			);

			render(<Wrapper />, { wrapper: ErrorBoundary });
			// console.log(screen.getByTestId('test-component'));
			expect(
				screen.queryByText(
					/GEL components require that you wrap your application with the <GEL \/> brand provider from @westpac\/core./i
				)
			).toBeNull();
			expect(console.error).toHaveBeenCalledTimes(0);
		});
	});
}

module.exports = exports = {
	nestingTest,
};
