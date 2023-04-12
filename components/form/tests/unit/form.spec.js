import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import {
	Form,
	ChitChat,
	ErrorMessage,
	Fieldset,
	FormGroup,
	Hint,
	InputCluster,
	Item,
	FormLabel,
	FormSection,
} from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';

overridesTest({
	name: 'form',
	overrides: ['Form'],
	Component: (props) => <Form {...props} />,
});

nestingTest({
	name: 'form',
	Component: () => <Form />,
});

function SimpleForm(props) {
	return (
		<GEL brand={wbc}>
			<Form {...props}>{props.children}</Form>
		</GEL>
	);
}
// Component specific tests
describe('Form component', () => {
	test('It should render Form', () => {
		const { container } = render(<SimpleForm />);
		expect(container).toBeInTheDocument();
	});

	test('should render components within form', () => {
		const { getByTestId } = render(
			<SimpleForm>
				<FormGroup data-testid="test-group">
					<TextInput data-testid="test-input" />
				</FormGroup>
			</SimpleForm>
		);

		expect(getByTestId('test-group')).toBeInTheDocument();
		expect(getByTestId('test-input')).toBeInTheDocument();
	});

	/**
	 * Below test passes the spacing prop down to children as they consume FormContext
	 * Checks for spacing large as medium is default.
	 * Checks all components that consume FormContext (at the time of writing test)
	 */
	test('should render form group with styling from form using context', () => {
		const { getByTestId } = render(
			<SimpleForm spacing="large">
				<FormGroup data-testid="test-group">
					<FormLabel data-testid="test-label" />
					<Hint data-testid="test-hint" />
				</FormGroup>
			</SimpleForm>
		);
		expect(getByTestId('test-group')).toHaveStyle('margin-bottom: 1.5rem');
		expect(getByTestId('test-label')).toHaveStyle('margin-bottom: 1.125rem');
		expect(getByTestId('test-hint')).toHaveStyle('margin-bottom: 1.125rem');
	});
});
