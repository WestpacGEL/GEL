import { FlexiCell } from '../../src';
import { render, screen } from '@testing-library/react';
import { FlexiCellProps } from '../../src/components/FlexiCell';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { FlexiCellLabelProps } from '../../src/components/FlexiCellLabel';

const SimpleFlexiCellLabel = (props: FlexiCellLabelProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Label {...props} />
	</GEL>
);

describe.only('Given the FlexiCellLabel is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			const { getByText } = render(<SimpleFlexiCellLabel>label</SimpleFlexiCellLabel>);

			expect(getByText('label')).toBeVisible();
		});
	});
});
