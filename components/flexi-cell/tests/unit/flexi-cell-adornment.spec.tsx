import { FlexiCell } from '@westpac/flexi-cell';
import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { type FlexiCellAdornmentProps } from '../../src/components/FlexiCellAdornment';

const SimpleFlexiCellAdornment = (props: FlexiCellAdornmentProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Adornment {...props} />
	</GEL>
);

describe.only('Given the FlexiCellAdornment is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			const { getByText, getByRole } = render(
				<SimpleFlexiCellAdornment tag="button">
					<FlexiCell.Label>label</FlexiCell.Label>
				</SimpleFlexiCellAdornment>
			);

			expect(getByRole('button')).toBeVisible();
			expect(getByText('label')).toBeVisible();
		});
	});
});
