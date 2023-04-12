import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { FormLabel } from '@westpac/form';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';

overridesTest({
	name: 'form',
	overrides: ['FormLabel'],
	Component: (props) => <FormLabel {...props} />,
});

nestingTest({
	name: 'form',
	Component: (props) => <FormLabel>{props.children}</FormLabel>,
});

function SimpleFormLabel(props) {
	return (
		<GEL brand={wbc}>
			<FormLabel {...props}>{props.children}</FormLabel>
		</GEL>
	);
}

describe('FormLabel component', () => {
	test('should render FormLabel', () => {
		const { container } = render(<SimpleFormLabel />);
		expect(container).toBeInTheDocument();
	});

	test('should render with correct text', () => {
		const { getByText } = render(<SimpleFormLabel>Test text</SimpleFormLabel>);
		expect(getByText(/Test text/)).toBeInTheDocument();
	});

	test('should render with smaller text size with subLabel prop passed', () => {
		const { getByText } = render(<SimpleFormLabel subLabel>Test text</SimpleFormLabel>);
		expect(getByText(/Test text/)).toHaveStyle('font-size: 0.875rem');
	});
});
