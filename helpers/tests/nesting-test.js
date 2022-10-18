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
			const text = 'Our alert content';
			const Wrapper = () => <Component>{text}</Component>;

			const { container } = render(<Wrapper />, { wrapper: ErrorBoundary });

			expect(container).toHaveTextContent(
				/GEL components require that you wrap your application with the <GEL \/> brand provider from @westpac\/core./i
			);
			expect(() => container.render()).toThrow();
		});

		test('Renders when the component is rendered inside of <GEL/>', () => {
			const text = 'Our alert content';
			const Wrapper = () => (
				<GEL brand={wbc}>
					<Component>{text}</Component>
				</GEL>
			);

			const { container } = render(<Wrapper />, { wrapper: ErrorBoundary });

			expect(container).not.toHaveTextContent(
				/GEL components require that you wrap your application with the <GEL \/> brand provider from @westpac\/core./i
			);
			expect(console.error).toHaveBeenCalledTimes(0);
			expect(container).toHaveTextContent(text);
		});
	});
}

module.exports = exports = {
	nestingTest,
};
