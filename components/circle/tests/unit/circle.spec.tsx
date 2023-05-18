import { Circle } from '../../src';
import { render, screen } from '@testing-library/react';

describe('Given the Circle is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			render(<Circle />);

			expect(screen.getByRole('term')).toHaveTextContent('Circle');
		});
	});
});
