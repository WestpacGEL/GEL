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
			const { getByText } = render(
				<SimpleFlexiCellAdornment tag="aside">
					<FlexiCell.Label>label</FlexiCell.Label>
				</SimpleFlexiCellAdornment>
			);

			expect(getByText('label', { selector: 'aside' })).toBeVisible();
		});
	});
});
