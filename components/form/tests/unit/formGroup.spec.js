import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { FormGroup } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';

overridesTest({
	name: 'form',
	overrides: ['FormGroup'],
	Component: (props) => <FormGroup {...props} />,
});

nestingTest({
	name: 'form',
	Component: (props) => <FormGroup>{props.children}</FormGroup>,
});

function SimpleFormGroup(props) {
	return (
		<GEL brand={wbc}>
			<FormGroup {...props}>{props.children}</FormGroup>
		</GEL>
	);
}

describe('FormGroup component', () => {
	test('should render FormGroup', () => {
		const { container } = render(<SimpleFormGroup />);
		expect(container).toBeInTheDocument();
	});

	test('should render FormGroup inline', () => {
		const { container } = render(<SimpleFormGroup inline />);
		expect(container).toBeInTheDocument();
	});

	test('should render child component within FormGroup', () => {
		const { getByTestId } = render(
			<SimpleFormGroup>
				<TextInput data-testid="test-input" />
			</SimpleFormGroup>
		);
		expect(getByTestId('test-input')).toBeInTheDocument();
	});

	test('should have the text-align:center styling if primary prop passed', () => {
		const { getByTestId } = render(<SimpleFormGroup data-testid="test-form-group" primary />);
		expect(getByTestId('test-form-group')).toHaveStyle('text-align: center');
	});
});
