import { GEL } from '@westpac/core';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
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
			<Switch {...props} />
		</GEL>
	);

	test('It should render Switch', () => {
		const { container } = render(<SimpleSwitch label="A Switch" />);
		expect(container).toBeInTheDocument();
	});

	test('should be able to have its checked valued changed', () => {
		render(<SimpleSwitch label="A Switch" />);
		const switchInput = screen.getByRole('checkbox');
		expect(switchInput).toHaveProperty('checked');
		expect(switchInput).toHaveProperty('checked', false);
		fireEvent.change(switchInput, { target: { checked: true } });
		expect(switchInput).toHaveProperty('checked', true);
		fireEvent.change(switchInput, { target: { checked: false } });
		expect(switchInput).toHaveProperty('checked', false);
	});

	test(`should change it's background colour upon changing its checked value `, () => {
		const { container } = render(<SimpleSwitch label="A Switch" />);
		const switchToggle = container.querySelector('span[class$=-switch-toggle]') as Element;
		const switchInput = screen.getByRole('checkbox');
		expect(switchToggle).toBeInTheDocument();
		expect(switchInput).toBeInTheDocument();
		const uncheckedSwitchTogglebackgroundColor = window
			.getComputedStyle(switchToggle)
			.getPropertyValue('background-color');
		fireEvent.change(switchInput, { target: { checked: true } });
		const checkedSwitchTogglebackgroundColor = window
			.getComputedStyle(switchToggle)
			.getPropertyValue('background-color');
		expect(checkedSwitchTogglebackgroundColor).not.toEqual(uncheckedSwitchTogglebackgroundColor);
	});
});
