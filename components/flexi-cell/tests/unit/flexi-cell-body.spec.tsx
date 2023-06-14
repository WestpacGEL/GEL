import { FlexiCell } from '@westpac/flexi-cell';
import { screen, render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';
import { type FlexiCellBodyProps } from '../../src/components/FlexiCellBody';

const SimpleFlexiCellBody = (props: FlexiCellBodyProps) => (
	<GEL brand={wbc}>
		<FlexiCell.Label {...props} />
	</GEL>
);

describe('Given the FlexiCellBody is rendered', () => {
	describe('when the children prop is defined', () => {
		test('then the component should be displayed', () => {
			render(
				<SimpleFlexiCellBody>
					<div data-testid="mock-child">child</div>
				</SimpleFlexiCellBody>
			);

			expect(screen.getByTestId('mock-child')).toBeVisible();
		});
	});

	describe('when the tag prop is defined', () => {
		test('then the component should be rendered as that tag', () => {
			render(
				<SimpleFlexiCellBody tag="a" href="#">
					mock link text
				</SimpleFlexiCellBody>
			);

			expect(screen.getByRole('link', { name: 'mock link text' })).toBeVisible();
		});
	});
});
