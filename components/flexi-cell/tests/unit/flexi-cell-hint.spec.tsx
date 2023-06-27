import { FlexiCell } from '@westpac/flexi-cell';
import { screen, render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { type FlexiCellHintProps } from '../../src/components/FlexiCellHint';

const SimpleFlexiCellHint = (props: FlexiCellHintProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Hint {...props} />
	</GEL>
);

describe('Given the FlexiCellHint is rendered', () => {
	describe('when the children prop is defined', () => {
		test('then the component should be displayed', () => {
			render(
				<SimpleFlexiCellHint>
					<span data-testid="mock-child">child</span>
				</SimpleFlexiCellHint>
			);

			expect(screen.getByTestId('mock-child')).toBeVisible();
		});
	});

	describe('when the tag prop is defined', () => {
		test('then the component should be rendered as that tag', () => {
			render(<SimpleFlexiCellHint tag="button">mock button text</SimpleFlexiCellHint>);

			expect(screen.getByRole('button', { name: 'mock button text' })).toBeVisible();
		});
	});
});
