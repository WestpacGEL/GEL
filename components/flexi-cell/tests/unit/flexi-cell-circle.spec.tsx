import { FlexiCell } from '@westpac/flexi-cell';
import { screen, render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { FlexiCellCircleProps } from '../../src/components/FlexiCellCircle';

const SimpleFlexiCellCircle = (props: FlexiCellCircleProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Circle {...props} />
	</GEL>
);

describe('Given the FlexiCellCircle is rendered', () => {
	describe('when the children prop is defined', () => {
		test('then the component should be displayed', () => {
			render(
				<SimpleFlexiCellCircle>
					<div data-testid="mock-child">child</div>
				</SimpleFlexiCellCircle>
			);

			expect(screen.getByTestId('mock-child')).toBeVisible();
		});
	});

	describe('when the tag prop is defined', () => {
		test('then the component should be rendered as that tag', () => {
			render(
				<SimpleFlexiCellCircle tag="a" href="#">
					mock link text
				</SimpleFlexiCellCircle>
			);

			expect(screen.getByRole('link', { name: 'mock link text' })).toBeVisible();
		});
	});
});
