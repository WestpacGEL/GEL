import { FlexiCell } from '@westpac/flexi-cell';
import { screen, render } from '@testing-library/react';
import { type FlexiCellProps } from '../../src/components/FlexiCell';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

const SimpleFlexiCell = (props: FlexiCellProps) => (
	<GEL brand={wbc}>
		<FlexiCell {...props} />
	</GEL>
);

describe('Given the FlexiCell is rendered', () => {
	describe('when children is defined', () => {
		test('then the child component should be visible', () => {
			render(
				<SimpleFlexiCell>
					<div data-testid="mock-child">Flexi child</div>
				</SimpleFlexiCell>
			);

			expect(screen.getByTestId('mock-child')).toBeVisible();
		});
	});

	describe('when a badge is defined', () => {
		test('then the badge should be visible', () => {
			render(<SimpleFlexiCell badge={<div data-testid="mock-badge">Flexi badge</div>} />);

			expect(screen.getByTestId('mock-badge')).toBeVisible();
		});
	});

	describe('when a before is defined', () => {
		test('then the before should be visible', () => {
			render(<SimpleFlexiCell before={<div data-testid="mock-before">Flexi before</div>} />);

			expect(screen.getByTestId('mock-before')).toBeVisible();
		});
	});

	describe('when an after is defined', () => {
		test('then the after should be visible', () => {
			render(<SimpleFlexiCell after={<div data-testid="mock-after">Flexi after</div>} />);

			expect(screen.getByTestId('mock-after')).toBeVisible();
		});
	});

	describe('when withArrow is true', () => {
		test('then an arrow should be visible', () => {
			render(<SimpleFlexiCell withArrow />);

			expect(screen.getByRole('img', { name: 'Arrow Right' })).toBeVisible();
		});
	});
});
