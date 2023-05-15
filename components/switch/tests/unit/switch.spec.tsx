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
		const { getByRole } = render(<SimpleSwitch label="A Switch" onChange={handleChange} />);
		const switchInput = getByRole('checkbox');
		expect(switchInput).toBeInTheDocument();
		const user = userEvent.setup();
		expect(switchInput).toHaveProperty('checked');
		expect(switchInput).not.toBeChecked();
		await user.click(switchInput);
		expect(switchInput).toBeChecked();
		expect(handleChange).toHaveBeenCalledTimes(1);
		await user.click(switchInput);
		expect(switchInput).not.toBeChecked();
		expect(handleChange).toHaveBeenCalledTimes(2);
	});

	test('should change its background colour upon being clicked', async () => {
		const handleChange = jest.fn();
		const { container, getByRole } = render(
			<SimpleSwitch label="A Switch" onChange={handleChange} />
		);
		const user = userEvent.setup();
		const switchInput = getByRole('checkbox');
		const switchToggle = container.querySelector('span[class$=-switch-toggle]') as HTMLElement;
		expect(switchToggle).toBeInTheDocument();
		expect(switchInput).toBeInTheDocument();
		const uncheckedSwitchTogglebackgroundColor = window
			.getComputedStyle(switchToggle)
			.getPropertyValue('background-color');
		await user.click(switchInput);
		const checkedSwitchTogglebackgroundColor = window
			.getComputedStyle(switchToggle)
			.getPropertyValue('background-color');
		expect(checkedSwitchTogglebackgroundColor).not.toEqual(uncheckedSwitchTogglebackgroundColor);
		await user.click(switchInput);
		expect(window.getComputedStyle(switchToggle).getPropertyValue('background-color')).toEqual(
			uncheckedSwitchTogglebackgroundColor
		);
		await user.click(switchInput);
		expect(window.getComputedStyle(switchToggle).getPropertyValue('background-color')).toEqual(
			checkedSwitchTogglebackgroundColor
		);
		expect(handleChange).toHaveBeenCalledTimes(3);
	});
});
