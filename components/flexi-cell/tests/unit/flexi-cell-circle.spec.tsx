import { FlexiCell } from '@westpac/flexi-cell';
import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { FlexiCellCircleProps } from '../../src/components/FlexiCellCircle';

const SimpleFlexiCellCircle = (props: FlexiCellCircleProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Circle {...props} />
	</GEL>
);

describe.only('Given the FlexiCellCircle is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			const { getByText } = render(
				<SimpleFlexiCellCircle tag="a" href="#">
					label
				</SimpleFlexiCellCircle>
			);

			expect(getByText('label', { selector: 'a' })).toHaveAttribute('href', '#');
		});
	});
});
