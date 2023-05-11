import { GEL } from '@westpac/core';
import { Option } from '@westpac/form-check';
import { render } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';

overridesTest({
	name: 'form-check',
	overrides: ['Option', 'Label'],
	Component: (props: any) => <Option {...props}>Test</Option>,
});

nestingTest({
	name: 'form-check',
	Component: (props: any) => <Option {...props}>Test</Option>,
});

function SimpleOption(props: any) {
	return (
		<GEL brand={wbc}>
			<Option data-testid="test-option" {...props}>
				Text
			</Option>
		</GEL>
	);
}

describe('Option component', () => {
	test('It should render Option', () => {
		const { container } = render(<SimpleOption />);
		expect(container).toBeInTheDocument();
	});

	test('should render with hint', () => {
		const { getByText } = render(<SimpleOption hint="this is hint text" />);
		expect(getByText(/this is hint text/)).toBeInTheDocument();
	});

	test('should be disabled if disabled prop is passed', () => {
		const { getByTestId } = render(<SimpleOption disabled />);

		expect(getByTestId('test-option')).toBeDisabled();
	});
});
