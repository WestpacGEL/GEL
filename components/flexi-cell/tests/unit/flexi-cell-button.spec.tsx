import { FlexiCell } from '@westpac/flexi-cell';
import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { FlexiCellButtonProps } from '../../src/components/FlexiCellButton';

const SimpleFlexiCellButton = (props: FlexiCellButtonProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Button {...props} />
	</GEL>
);

describe.only('Given the FlexiCellButon is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			const { getByText } = render(<SimpleFlexiCellButton>label</SimpleFlexiCellButton>);

			expect(getByText('label')).toBeVisible();
		});
	});
});
