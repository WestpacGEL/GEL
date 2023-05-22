import { FlexiCell } from '../../src';
import { render, screen } from '@testing-library/react';
import { FlexiCellProps } from '../../src/components/FlexiCell';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

const SimpleFlexiCell = (props: FlexiCellProps) => (
	<GEL brand={wbc}>
		<FlexiCell {...props} />
	</GEL>
);

describe('Given the FlexiCell is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			const { getByText } = render(
				<SimpleFlexiCell
					tag="a"
					href="#"
					withBorder
					before={<h3>before</h3>}
					after={
						<FlexiCell.Adornment align="top">
							<FlexiCell.Label tag="h3">$9,999.99</FlexiCell.Label>
							<FlexiCell.Hint>avail $9,999.99</FlexiCell.Hint>
						</FlexiCell.Adornment>
					}
				>
					<FlexiCell.Label tag="h3">Credit card</FlexiCell.Label>
					<FlexiCell.Hint>Card ending in 1234</FlexiCell.Hint>
				</SimpleFlexiCell>
			);

			expect(getByText('before')).toBeVisible();
			expect(getByText('$9,999.99')).toBeVisible();
			expect(getByText('avail $9,999.99')).toBeVisible();
			expect(getByText('Credit card')).toBeVisible();
			expect(getByText('Card ending in 1234')).toBeVisible();
		});
	});
});
