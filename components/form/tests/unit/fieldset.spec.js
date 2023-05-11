import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Fieldset } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';

overridesTest({
	name: 'form',
	overrides: ['Fieldset'],
	Component: (props) => <Fieldset {...props} />,
});

nestingTest({
	name: 'form',
	Component: (props) => <Fieldset legend={props.children} />,
});

function SimpleFieldset(props) {
	return (
		<GEL brand={wbc}>
			<Fieldset {...props}>{props.children}</Fieldset>
		</GEL>
	);
}

describe('Fieldset component', () => {
	test('should render Fieldset', () => {
		const { container } = render(<SimpleFieldset />);
		expect(container).toBeInTheDocument();
	});

	test('should render Fieldset component with FormLabel when legend prop passed', () => {
		const { getByText } = render(<SimpleFieldset legend="test legend" />);
		expect(getByText(/test legend/).getAttribute('class')).toMatch(/form-label/gi);
	});

	test('should render Fieldset component with Hint when hint prop passed', () => {
		const { getByText } = render(<SimpleFieldset hint="test hint" />);
		expect(getByText(/test hint/).getAttribute('class')).toMatch(/form-hint/gi);
	});

	test('should render Fieldset component when hint prop contains function', () => {
		const handleClick = jest.fn(() => {});
		const { getByTestId } = render(
			<SimpleFieldset hint={handleClick} data-testid="test-fieldset" />
		);
		expect(getByTestId('test-fieldset')).toBeInTheDocument();
	});

	test('should render Fieldset component with ErrorMessage when error prop passed', () => {
		const { getByText } = render(<SimpleFieldset error="test error" />);
		expect(getByText(/test error/).getAttribute('class')).toMatch(/form-error-message/gi);
	});

	test('should render child component within Fieldset tags', () => {
		const { getByTestId } = render(
			<SimpleFieldset>
				<TextInput data-testid="test-input" />
			</SimpleFieldset>
		);
		expect(getByTestId('test-input')).toBeInTheDocument();
	});
});
