import { InputField } from '../../src';
import { render, screen } from '@testing-library/react';

describe('Given the InputField is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			render(<InputField />);

			expect(screen.getByRole('term')).toHaveTextContent('InputField');
		});
	});
});
