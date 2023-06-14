import { FlexiCell } from '@westpac/flexi-cell';
import { screen, render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { type FlexiCellFooterProps } from '../../src/components/FlexiCellFooter';

const SimpleFlexiCellFooter = (props: FlexiCellFooterProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Label {...props} />
	</GEL>
);

describe('Given the FlexiCellFooter is rendered', () => {
	describe('when the children prop is defined', () => {
		test('then the component should be displayed', () => {
			render(
				<SimpleFlexiCellFooter>
					<div data-testid="mock-child">child</div>
				</SimpleFlexiCellFooter>
			);

			expect(screen.getByTestId('mock-child')).toBeVisible();
		});
	});

	describe('when the tag prop is defined', () => {
		test('then the component should be rendered as that tag', () => {
			render(<SimpleFlexiCellFooter tag="footer">mock footer text</SimpleFlexiCellFooter>);

			expect(screen.getByRole('contentinfo')).toBeVisible();
		});
	});
});
