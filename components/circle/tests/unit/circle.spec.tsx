import { Circle } from '@westpac/circle';
import { screen, render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

describe('Given the Circle is rendered', () => {
	describe('when the children prop is defined', () => {
		test('then the component should be displayed', () => {
			render(
				<GEL brand={wbc}>
					<Circle>
						<div data-testid="mock-child">child</div>
					</Circle>
				</GEL>
			);

			expect(screen.getByTestId('mock-child')).toBeVisible();
		});
	});

	describe('when the tag prop is defined', () => {
		test('then the component should be rendered as that tag', () => {
			render(
				<GEL brand={wbc}>
					<Circle tag="a" href="#">
						mock link text
					</Circle>
				</GEL>
			);

			expect(screen.getByRole('link', { name: 'mock link text' })).toBeVisible();
		});
	});
});
