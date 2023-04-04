import { GEL } from '@westpac/core';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputGroup } from '@westpac/input-group';
import { Button } from '@westpac/button';
import { Select } from '@westpac/text-input';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'input-group', // the name has to be the package name without '@westpac/' scope
	overrides: ['InputGroup'], // every single override root key
	Component: (props) => (
		<InputGroup
			{...props}
			name="Default"
			before={<Button>content</Button>}
			after={<Button>content</Button>}
		></InputGroup> // the component with all components rendered
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'input-group',
	Component: (props) => (
		<InputGroup {...props} name="Default" before={props.children}></InputGroup> // the component with all components rendered
	),
});

function SimpleInputGroup(props) {
	return (
		<GEL brand={wbc}>
			<InputGroup data-testid="input-group" {...props} />
		</GEL>
	);
}

// Component specific tests
describe('Input Group component', () => {
	test('should render Input Group', () => {
		const { container } = render(<SimpleInputGroup />);
		expect(container).toBeInTheDocument();
	});

	test('should render placeholder text', () => {
		const { getByPlaceholderText } = render(<SimpleInputGroup placeholder="placeholder text" />);
		expect(getByPlaceholderText('placeholder text')).toBeInTheDocument();
	});

	test('should render with default value', () => {
		const { getByTestId } = render(<SimpleInputGroup defaultValue="default value" />);
		expect(getByTestId('input-group')).toHaveValue('default value');
	});

	test('should change input value', () => {
		const { getByDisplayValue } = render(<SimpleInputGroup defaultValue="default value" />);
		const input = getByDisplayValue(/default value/);
		input.focus();
		expect(input).toHaveFocus();
		fireEvent.change(screen.getByTestId('input-group'), {
			target: { value: 'changed value' },
		});
		expect(input).toHaveValue('changed value');
		expect(input).toHaveDisplayValue('changed value');
	});

	test('should make input child component to readOnly when "readOnly" prop is passed', () => {
		const { getByDisplayValue } = render(
			<SimpleInputGroup defaultValue="default value" readOnly />
		);
		const input = getByDisplayValue(/default value/);
		expect(input).toHaveAttribute('readOnly');
	});

	test('should disable input child component when "disabled" prop is passed', () => {
		const { getByDisplayValue } = render(
			<SimpleInputGroup defaultValue="default value" disabled />
		);
		const input = getByDisplayValue(/default value/);
		input.focus();
		expect(input).not.toHaveFocus();
	});

	test('should render before button and be clickable', () => {
		const handleClick = jest.fn(() => {});
		const { getByText } = render(
			<SimpleInputGroup before={<Button onClick={handleClick}>click me before</Button>} />
		);
		fireEvent.click(getByText(/click me before/));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('should render after button and be clickable', () => {
		const handleClick = jest.fn(() => {});
		const { getByText } = render(
			<SimpleInputGroup after={<Button onClick={handleClick}>click me after</Button>} />
		);
		fireEvent.click(getByText(/click me after/));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('should render before text', () => {
		const { getByText } = render(<SimpleInputGroup before="before text" />);
		expect(getByText(/before text/)).toBeInTheDocument();
	});

	test('should render after text', () => {
		const { getByText } = render(<SimpleInputGroup after="after text" />);
		expect(getByText(/after text/)).toBeInTheDocument();
	});

	test('should render before select option and be interactable', () => {
		const { getByTestId } = render(
			<SimpleInputGroup
				before={
					<Select
						data-testid="before-select"
						label="Currency"
						defaultValue="monthly"
						onChange={() => {}}
						data={[
							{ text: 'Daily', value: 'daily' },
							{ text: 'Monthly', value: 'monthly' },
							{ text: 'Yearly', value: 'yearly' },
						]}
					/>
				}
			/>
		);
		const beforeSelect = getByTestId('before-select');
		expect(beforeSelect).toHaveValue('monthly');
		fireEvent.change(screen.getByTestId('before-select'), {
			target: { value: 'daily' },
		});
		expect(beforeSelect).not.toHaveValue('monthly');
		expect(beforeSelect).toHaveValue('daily');
		expect(beforeSelect).toHaveDisplayValue('Daily');
	});

	test('should render after select option and be interactable', () => {
		const { getByTestId } = render(
			<SimpleInputGroup
				after={
					<Select
						data-testid="after-select"
						label="Currency"
						defaultValue="monthly"
						onChange={() => {}}
						data={[
							{ text: 'Daily', value: 'daily' },
							{ text: 'Monthly', value: 'monthly' },
							{ text: 'Yearly', value: 'yearly' },
						]}
					/>
				}
			/>
		);
		const afterSelect = getByTestId('after-select');
		expect(afterSelect).toHaveValue('monthly');
		fireEvent.change(afterSelect, {
			target: { value: 'daily' },
		});
		expect(afterSelect).not.toHaveValue('monthly');
		expect(afterSelect).toHaveValue('daily');
		expect(afterSelect).toHaveDisplayValue('Daily');
	});

	test('should render both before and after elements at the same time', () => {
		const { getByText } = render(<SimpleInputGroup before="before text" after="after text" />);
		expect(getByText(/before text/)).toBeInTheDocument();
		expect(getByText(/after text/)).toBeInTheDocument();
	});
});
