import { FlexiCell } from '@westpac/flexi-cell';
import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { type FlexiCellBodyProps } from '../../src/components/FlexiCellBody';

const SimpleFlexiCellBody = (props: FlexiCellBodyProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Label {...props} />
	</GEL>
);

describe('Given the FlexiCellBody is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			const { getByText } = render(
				<SimpleFlexiCellBody tag="a" href="#href">
					label
				</SimpleFlexiCellBody>
			);

			expect(getByText('label', { selector: 'a' })).toHaveAttribute('href', '#href');
		});
	});
});
