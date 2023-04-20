import { GEL } from '@westpac/core';
import { fireEvent, render } from '@testing-library/react';
import { FormCheckReveal, Option } from '@westpac/form-check';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';

overridesTest({
	name: 'form-check',
	overrides: ['FormCheckReveal', 'Trigger'],
	Component: (props: any) => (
		<FormCheckReveal show={1} inline={false} size="medium" name="test" {...props}>
			<Option value="1">Test</Option>
			<Option value="2">Test</Option>
			<Option value="3">Test</Option>
		</FormCheckReveal>
	),
});

nestingTest({
	name: 'form-check',
	Component: (props: any) => (
		<FormCheckReveal show={1} inline={false} size="medium" name="test" {...props}>
			<Option value="1">test</Option>
		</FormCheckReveal>
	),
});

function SimpleFormCheckReveal(props: any) {
	return (
		<GEL brand={wbc}>
			<FormCheckReveal show={props.show} {...props}>
				{props.children}
			</FormCheckReveal>
		</GEL>
	);
}

// Component specific tests
describe('FormCheckReveal component', () => {
	test('It should render FormCheckReveal', () => {
		const { container } = render(
			<SimpleFormCheckReveal
				type="checkbox"
				name="test"
				size="medium"
				show={1}
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
			/>
		);
		expect(container).toBeInTheDocument();
	});

	test('should render with default prop values', () => {
		const { container, getByLabelText } = render(
			<SimpleFormCheckReveal
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
			/>
		);
		fireEvent.click(getByLabelText('Option 1'));
		expect(container).toBeInTheDocument();
	});

	test('should render options using Option component children', () => {
		const { getByText } = render(
			<SimpleFormCheckReveal type="checkbox" name="test-data">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</SimpleFormCheckReveal>
		);
		expect(getByText(/Option 1/)).toBeInTheDocument();
		expect(getByText(/Option 2/)).toBeInTheDocument();
		expect(getByText(/Option 3/)).toBeInTheDocument();
	});

	test('should render with options while hiding some based on show prop', () => {
		const { getByText } = render(
			<SimpleFormCheckReveal type="checkbox" show={1} name="test-data">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</SimpleFormCheckReveal>
		);
		expect(getByText(/Option 1/)).toBeVisible();
		expect(getByText(/Option 2/)).not.toBeVisible();
		expect(getByText(/Option 3/)).not.toBeVisible();
	});

	test('should show extra options when trigger button clicked', () => {
		const { getByText, getByRole } = render(
			<SimpleFormCheckReveal type="checkbox" show={1} name="test-data">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</SimpleFormCheckReveal>
		);
		expect(getByText(/Option 1/)).toBeVisible();
		expect(getByText(/Option 2/)).not.toBeVisible();
		expect(getByText(/Option 3/)).not.toBeVisible();
		fireEvent.click(getByRole('button')); //clicking trigger button to call handleOpen in component
		expect(getByText(/Option 1/)).toBeVisible();
		expect(getByText(/Option 2/)).toBeVisible();
		expect(getByText(/Option 3/)).toBeVisible();
	});

	test('should render options using data prop', () => {
		const { getByText } = render(
			<SimpleFormCheckReveal
				type="checkbox"
				name="test-data"
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
			/>
		);
		expect(getByText(/Option 1/)).toBeInTheDocument();
		expect(getByText(/Option 2/)).toBeInTheDocument();
		expect(getByText(/Option 3/)).toBeInTheDocument();
	});

	test('should disable options', () => {
		const { getByLabelText } = render(
			<SimpleFormCheckReveal
				type="checkbox"
				name="test-data"
				disabled
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
			/>
		);
		expect(getByLabelText('Option 1')).toBeDisabled();
	});

	test('should call function when option changed and option should be checked/unchecked', () => {
		const handleChange = jest.fn(() => {});
		const { getByLabelText } = render(
			<SimpleFormCheckReveal
				type="checkbox"
				name="test-data"
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
				onChange={handleChange}
			/>
		);
		fireEvent.click(getByLabelText('Option 1'));
		expect(getByLabelText('Option 1')).toBeChecked();
		fireEvent.click(getByLabelText('Option 1'));
		expect(getByLabelText('Option 1')).not.toBeChecked();
		expect(handleChange).toHaveBeenCalledTimes(2);
	});

	test('should render with value pre-selected', () => {
		const { getByLabelText } = render(
			<SimpleFormCheckReveal
				type="checkbox"
				name="test-data"
				value={'2'}
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
			/>
		);
		expect(getByLabelText('Option 2')).toBeChecked();
	});

	test('should render with default value', () => {
		const { getByLabelText } = render(
			<SimpleFormCheckReveal
				type="checkbox"
				name="test-data"
				defaultValue={'2'}
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
			/>
		);
		expect(getByLabelText('Option 2')).toBeChecked();
	});

	test('should render as radio and be functional as radio', () => {
		const { getByLabelText } = render(
			<SimpleFormCheckReveal type="radio" name="test-data">
				<Option value="1" size="large">
					Option 1
				</Option>
				<Option value="2" size="large">
					Option 2
				</Option>
				<Option value="3" size="large">
					Option 3
				</Option>
			</SimpleFormCheckReveal>
		);
		fireEvent.click(getByLabelText('Option 2'));
		expect(getByLabelText('Option 2')).toBeChecked();
		fireEvent.click(getByLabelText('Option 1'));
		expect(getByLabelText('Option 2')).not.toBeChecked();
		expect(getByLabelText('Option 1')).toBeChecked();
	});
});
