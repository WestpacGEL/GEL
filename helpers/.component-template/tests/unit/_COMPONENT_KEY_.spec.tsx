import { _COMPONENT_NAME_ } from '../../src';
import { render, screen } from '@testing-library/react';

describe('Given the _COMPONENT_NAME_ is rendered', () => {
	describe('when default props are defined', () => {
		test('then the component should be displayed', () => {
			render(<_COMPONENT_NAME_ />);

			expect(screen.getByRole('generic', { name: '_COMPONENT_NAME_' })).toBeVisible();
		});
	});
});
