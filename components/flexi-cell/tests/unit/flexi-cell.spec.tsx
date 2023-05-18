import { FlexiCell } from '../../src';
import { render, screen } from '@testing-library/react';

describe('Given the FlexiCell is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			render(<FlexiCell />);

			expect(screen.getByRole('term')).toHaveTextContent('FlexiCell');
		});
	});
});
