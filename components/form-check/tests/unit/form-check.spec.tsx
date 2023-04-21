import { GEL } from '@westpac/core';
import { fireEvent, render } from '@testing-library/react';
import { FormCheck, Option } from '@westpac/form-check';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';
import { AllStyles } from '../../blender/recipe.js';

overridesTest({
	name: 'form-check',
	overrides: ['FormCheck', 'Option', 'Label'],
	Component: (props: any) => (
		<FormCheck type="checkbox" name="test" size="medium" inline={false} {...props}>
			<Option>Test</Option>
		</FormCheck>
	),
});

nestingTest({
	name: 'form-check',
	Component: (props: any) => (
		<FormCheck type="checkbox" name="test" size="medium" inline={false} {...props} />
	),
});

function SimpleFormCheck(props: any) {
	return (
		<GEL brand={wbc}>
			<FormCheck {...props}>{props.children}</FormCheck>
		</GEL>
	);
}

// Component specific tests
describe('FormCheck component', () => {
	test('It should render FormCheck', () => {
		const { container } = render(
			<SimpleFormCheck type="checkbox" name="test" size="medium" inline={false} />
		);
		expect(container).toBeInTheDocument();
	});

	test('should render with default prop values including default onChange', () => {
		const { container, getByLabelText } = render(
			<SimpleFormCheck
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
			<SimpleFormCheck type="checkbox" name="test-data">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</SimpleFormCheck>
		);
		expect(getByText(/Option 1/)).toBeInTheDocument();
		expect(getByText(/Option 2/)).toBeInTheDocument();
		expect(getByText(/Option 3/)).toBeInTheDocument();
	});

	test('should render options using data prop', () => {
		const { getByText } = render(
			<SimpleFormCheck
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
		const handleChange = jest.fn(() => {});
		const { getByLabelText } = render(
			<SimpleFormCheck
				type="checkbox"
				name="test-data"
				disabled
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
				onChange={handleChange}
			/>
		);
		expect(getByLabelText('Option 1')).toBeDisabled();
	});

	test('should call function when option changed and option should be checked/unchecked', () => {
		const handleChange = jest.fn(() => {});
		const { getByLabelText } = render(
			<SimpleFormCheck
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
			<SimpleFormCheck
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
			<SimpleFormCheck
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
			<SimpleFormCheck type="radio" name="test-data">
				<Option value="1" size="large">
					Option 1
				</Option>
				<Option value="2" size="large">
					Option 2
				</Option>
				<Option value="3" size="large">
					Option 3
				</Option>
			</SimpleFormCheck>
		);
		fireEvent.click(getByLabelText('Option 2'));
		expect(getByLabelText('Option 2')).toBeChecked();
		fireEvent.click(getByLabelText('Option 1'));
		expect(getByLabelText('Option 2')).not.toBeChecked();
		expect(getByLabelText('Option 1')).toBeChecked();
	});

	// ==============================
	// Extra Override Tests
	// NOTE/TODO: BlenderStyles don't seem to be working correctly, may require changes to various blender files
	// 				Fails when trying to call various blenderStyles using nestedOptions as defaultProps don't exist
	// ==============================

	// test('should override style/component/attributes', () => {
	// 	const { container } = render(<AllStyles brand={wbc} />);
	// 	expect(container).toBeInTheDocument();
	// });
});
