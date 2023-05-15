import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '@westpac/switch';
import wbc from '@westpac/wbc';
import { overridesTest } from '../../../../helpers/tests/overrides-test';
import { nestingTest } from '../../../../helpers/tests/nesting-test';
import { SwitchProps } from '../../src/Switch';

overridesTest({
	name: 'switch',
	overrides: ['Switch', 'Label', 'Toggle'],
	Component: ({ label, ...rest }: SwitchProps) => <Switch label="A Switch" {...rest}></Switch>,
});

nestingTest({
	name: 'switch',
	Component: ({ label, ...rest }: SwitchProps) => <Switch label="A Switch" {...rest}></Switch>,
});

// Component specific tests
describe('Switch component', () => {
	const SimpleSwitch = (props: SwitchProps) => (
		<GEL brand={wbc}>
			<Switch {...props} data-testid="switch-parent" />
		</GEL>
	);

	test('It should render Switch', () => {
		const { container } = render(<SimpleSwitch label="A Switch" />);
		expect(container).toBeInTheDocument();
	});

	test('should change its checked valued when clicked', async () => {
		const handleChange = jest.fn();
		const { container, getByRole, getByTestId, getByLabelText } = render(
			<SimpleSwitch label="A Switch" onChange={handleChange} />
		);
		const switchText = getByLabelText('A Switch');
		const switchInput = getByRole('checkbox');
		const switchToggle = container.querySelector('span[class$=-switch-toggle]') as HTMLElement;
		const switchParent = getByTestId('switch-parent');
		const user = userEvent.setup();
		expect(switchInput).toHaveProperty('checked');
		expect(switchInput).not.toBeChecked();
		expect(switchInput).toHaveProperty('checked', false);
		await user.click(switchText);
		expect(switchInput).toBeChecked();
		expect(switchInput).toHaveProperty('checked', true);
		expect(handleChange).toHaveBeenCalledTimes(1);
		await user.click(switchInput);
		expect(switchInput).not.toBeChecked();
		expect(switchInput).toHaveProperty('checked', false);
		expect(handleChange).toHaveBeenCalledTimes(2);
		await user.click(switchToggle);
		expect(switchInput).toBeChecked();
		expect(switchInput).toHaveProperty('checked', true);
		expect(handleChange).toHaveBeenCalledTimes(3);
		await user.click(switchParent);
		expect(switchInput).not.toBeChecked();
		expect(switchInput).toHaveProperty('checked', false);
		expect(handleChange).toHaveBeenCalledTimes(4);
	});

	test('should change its background colour upon being clicked', async () => {
		const handleChange = jest.fn();
		const { container, getByRole, getByTestId, getByLabelText } = render(
			<SimpleSwitch label="A Switch" onChange={handleChange} />
		);
		const user = userEvent.setup();
		const switchText = getByLabelText('A Switch');
		const switchInput = getByRole('checkbox');
		const switchToggle = container.querySelector('span[class$=-switch-toggle]') as HTMLElement;
		const switchParent = getByTestId('switch-parent');
		expect(switchToggle).toBeInTheDocument();
		expect(switchInput).toBeInTheDocument();
		expect(switchText).toBeInTheDocument();
		const uncheckedSwitchTogglebackgroundColor = window
			.getComputedStyle(switchToggle)
			.getPropertyValue('background-color');
		await user.click(switchInput);
		const checkedSwitchTogglebackgroundColor = window
			.getComputedStyle(switchToggle)
			.getPropertyValue('background-color');
		expect(checkedSwitchTogglebackgroundColor).not.toEqual(uncheckedSwitchTogglebackgroundColor);
		await user.click(switchParent);
		expect(window.getComputedStyle(switchToggle).getPropertyValue('background-color')).toEqual(
			uncheckedSwitchTogglebackgroundColor
		);
		await user.click(switchText);
		expect(window.getComputedStyle(switchToggle).getPropertyValue('background-color')).toEqual(
			checkedSwitchTogglebackgroundColor
		);
		await user.click(switchToggle);
		expect(window.getComputedStyle(switchToggle).getPropertyValue('background-color')).toEqual(
			uncheckedSwitchTogglebackgroundColor
		);
		expect(handleChange).toHaveBeenCalledTimes(4);
	});
});
