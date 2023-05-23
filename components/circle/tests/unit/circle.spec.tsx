import { Circle } from '@westpac/circle';
import { render } from '@testing-library/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

describe('Given the Circle is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			const { getByText } = render(
				<GEL brand={wbc}>
					<Circle>child</Circle>
				</GEL>
			);

			expect(getByText('child')).toBeVisible();
		});
	});
});
