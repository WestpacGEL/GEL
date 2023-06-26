import { FlexiCell } from '@westpac/flexi-cell';
import { screen, render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { FlexiCellButtonProps } from '../../src/components/FlexiCellButton';

const SimpleFlexiCellButton = (props: FlexiCellButtonProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Button {...props} />
	</GEL>
);

describe('Given the FlexiCellButton is rendered', () => {
	describe('when the chilcren prop is defined', () => {
		test('then the component should be displayed', () => {
			render(<SimpleFlexiCellButton>mock button</SimpleFlexiCellButton>);

			expect(screen.getByRole('button', { name: 'mock button' })).toBeVisible();
		});
	});
});
