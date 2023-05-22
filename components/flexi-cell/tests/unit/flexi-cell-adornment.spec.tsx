import { FlexiCell } from '../../src';
import { render, screen } from '@testing-library/react';
import { FlexiCellProps } from '../../src/components/FlexiCell';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import {
	FlexiCellAdornment,
	FlexiCellAdornmentProps,
} from '../../src/components/FlexiCellAdornment';

const SimpleFlexiCellAdornment = (props: FlexiCellAdornmentProps) => (
	<GEL brand={wbc}>
		<FlexiCellAdornment {...props} />
	</GEL>
);

describe.only('Given the FlexiCellAdornment is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			const { getByText } = render(
				<SimpleFlexiCellAdornment>
					<FlexiCell.Label>label</FlexiCell.Label>
				</SimpleFlexiCellAdornment>
			);

			expect(getByText('label')).toBeVisible();
		});
	});
});
