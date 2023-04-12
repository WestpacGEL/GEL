import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';

overridesTest({
	name: 'form',
	overrides: ['Field'],
	Component: (props) => <Field {...props} />,
});

nestingTest({
	name: 'form',
	Component: (props) => <Field label={props.children} />,
});

function SimpleField(props) {
	return (
		<GEL brand={wbc}>
			<Field {...props} data-testid="test-field">
				{props.children}
			</Field>
		</GEL>
	);
}

describe('Field component', () => {
	test('should render Field', () => {
		const { container } = render(<SimpleField />);
		expect(container).toBeInTheDocument();
	});

	test('should render Field component with FormLabel when label prop passed', () => {
		const { getByText } = render(<SimpleField label="test label" />);
		expect(getByText(/test label/).getAttribute('class')).toMatch(/form-label/gi);
	});

	test('should render Field component with Hint when hint prop passed', () => {
		const { getByText } = render(<SimpleField hint="test hint" />);
		expect(getByText(/test hint/).getAttribute('class')).toMatch(/form-hint/gi);
	});

	test('should render Field component with ErrorLabel when error prop passed', () => {
		const { getByText } = render(<SimpleField error="test error" />);
		expect(getByText(/test error/).getAttribute('class')).toMatch(/form-error-message/gi);
	});

	test('should visually hide label on Field if label and hideLabel prop is passed', () => {
		const { getByText } = render(<SimpleField label="test label" hideLabel />);
		expect(getByText(/test label/).getAttribute('class')).toMatch(/visuallyHidden/gi);
	});

	test('should render child component within Field tags', () => {
		const { getByTestId } = render(
			<SimpleField>
				<TextInput data-testid="test-input" />
			</SimpleField>
		);
		expect(getByTestId('test-input')).toBeInTheDocument();
	});
});
