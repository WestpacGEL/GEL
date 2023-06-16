import { FlexiCell } from '@westpac/flexi-cell';
import { screen, render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { type FlexiCellAdornmentProps } from '../../src/components/FlexiCellAdornment';

const SimpleFlexiCellAdornment = (props: FlexiCellAdornmentProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Adornment {...props} />
	</GEL>
);

describe('Given the FlexiCellAdornment is rendered', () => {
	describe('when the children prop is defined', () => {
		test('then the component should be displayed', () => {
			render(
				<SimpleFlexiCellAdornment>
					<div data-testid="mock-child">child</div>
				</SimpleFlexiCellAdornment>
			);

			expect(screen.getByTestId('mock-child')).toBeVisible();
		});
	});

	describe('when the tag prop is defined', () => {
		test('then the component should be rendered as that tag', () => {
			render(<SimpleFlexiCellAdornment tag="button">mock button text</SimpleFlexiCellAdornment>);

			expect(screen.getByRole('button', { name: 'mock button text' })).toBeVisible();
		});
	});
});
