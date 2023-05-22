import { FlexiCell } from '../../src';
import { render, screen } from '@testing-library/react';
import { FlexiCellProps } from '../../src/components/FlexiCell';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { FlexiCellHint, FlexiCellHintProps } from '../../src/components/FlexiCellHint';

const SimpleFlexiCellHint = (props: FlexiCellHintProps) => (
	<GEL brand={wbc}>
		<FlexiCellHint {...props} />
	</GEL>
);

describe.only('Given the FlexiCellHint is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			const { getByText } = render(<SimpleFlexiCellHint>hint</SimpleFlexiCellHint>);
			expect(getByText('hint')).toBeVisible();
		});
	});
});
