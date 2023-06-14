import { FlexiCell } from '@westpac/flexi-cell';
import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { type FlexiCellHintProps } from '../../src/components/FlexiCellHint';

const SimpleFlexiCellHint = (props: FlexiCellHintProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Hint {...props} />
	</GEL>
);

describe('Given the FlexiCellHint is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			const { getByText } = render(<SimpleFlexiCellHint>hint</SimpleFlexiCellHint>);
			expect(getByText('hint')).toBeVisible();
		});
		test('then the component should be displayed', () => {
			const { getByText } = render(
				<SimpleFlexiCellHint tag="small" truncateText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</SimpleFlexiCellHint>
			);
			expect(getByText('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')).toBeVisible();
		});
	});
});
