import { FlexiCell } from '@westpac/flexi-cell';
import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { type FlexiCellFooterProps } from '../../src/components/FlexiCellFooter';

const SimpleFlexiCellFooter = (props: FlexiCellFooterProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Label {...props} />
	</GEL>
);

describe('Given the FlexiCellFooter is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			const { getByText } = render(
				<SimpleFlexiCellFooter tag="footer">label</SimpleFlexiCellFooter>
			);

			expect(getByText('label', { selector: 'footer' })).toBeVisible();
		});
	});
});
