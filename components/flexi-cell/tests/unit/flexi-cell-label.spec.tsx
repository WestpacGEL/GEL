import { FlexiCell } from '@westpac/flexi-cell';
import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { type FlexiCellLabelProps } from '../../src/components/FlexiCellLabel';

const SimpleFlexiCellLabel = (props: FlexiCellLabelProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Label {...props} />
	</GEL>
);

describe('Given the FlexiCellLabel is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			const { getByText } = render(<SimpleFlexiCellLabel tag="a">label</SimpleFlexiCellLabel>);

			expect(getByText('label', { selector: 'a' })).toBeVisible();
		});
	});
});
