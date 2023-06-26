import { FlexiCell } from '@westpac/flexi-cell';
import { screen, render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { type FlexiCellLabelProps } from '../../src/components/FlexiCellLabel';

const SimpleFlexiCellLabel = (props: FlexiCellLabelProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Label {...props} />
	</GEL>
);

describe('Given the FlexiCellLabel is rendered', () => {
	describe('when the children prop is defined', () => {
		test('then the component should be displayed', () => {
			render(
				<SimpleFlexiCellLabel>
					<div data-testid="mock-child">child</div>
				</SimpleFlexiCellLabel>
			);

			expect(screen.getByTestId('mock-child')).toBeVisible();
		});
	});

	describe('when the tag prop is defined', () => {
		test('then the component should be rendered as that tag', () => {
			render(<SimpleFlexiCellLabel tag="button">mock button text</SimpleFlexiCellLabel>);

			expect(screen.getByRole('button', { name: 'mock button text' })).toBeVisible();
		});
	});

	describe('when the className prop is defined', () => {
		test('then the component should have that class', () => {
			render(
				<SimpleFlexiCellLabel className="mock-class" data-testid="mock-with-classname">
					mock child
				</SimpleFlexiCellLabel>
			);

			expect(screen.getByTestId('mock-with-classname')).toHaveClass('mock-class');
		});
	});
});
