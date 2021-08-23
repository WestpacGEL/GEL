import React from 'react';
import { render } from '@testing-library/react';

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
			const { container } = render(<Component />, { wrapper: ErrorBoundary });

			expect(container).toHaveTextContent(
				/GEL components require that you wrap your application with the <GEL \/> brand provider from @westpac\/core./i
			);
			expect(console.error).toHaveBeenCalledTimes(2);
		});

		test('Renders when the component is rendered inside of <GEL/>', () => {
			const Wrapper = () => (
				<GEL brand={wbc}>
					<Component />
				</GEL>
			);

			const { container } = render(<Wrapper />, { wrapper: ErrorBoundary });

			expect(container).not.toHaveTextContent(
				/GEL components require that you wrap your application with the <GEL \/> brand provider from @westpac\/core./i
			);
			expect(console.error).toHaveBeenCalledTimes(0);
		});
	});
}

module.exports = exports = {
	nestingTest,
};
