import { GEL } from '@westpac/core';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { Select } from '@westpac/text-input';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'text-input', // the name has to be the package name without '@westpac/' scope
	overrides: ['Select'], // every single override root key
	Component: (props) => <Select {...props}>{props.children}</Select>,
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'select',
	Component: (props) => <Select {...props} defaultValue={props.children} />,
});

describe('Select component', () => {
	const DEFAULT_OPTIONS = [
		{ text: 'Pick an option' },
		{ text: 'One', value: '1' },
		{ text: 'Two', value: '2' },
		{ text: 'Three', value: '3' },
	];

	const SimpleSelect = (props) => (
		<GEL brand={wbc}>
			<Select {...props} data={DEFAULT_OPTIONS}></Select>
		</GEL>
	);

	test('should have all options rendered inside of it as specified', async () => {
		render(<SimpleSelect />);
		expect(screen.getAllByRole('option').length).toBe(DEFAULT_OPTIONS.length);
		expect(await screen.findByRole('option', { name: 'Pick an option' })).toBeInTheDocument();
		expect(await screen.findByRole('option', { name: 'One' })).toBeInTheDocument();
		expect(await screen.findByRole('option', { name: 'Two' })).toBeInTheDocument();
		expect(await screen.findByRole('option', { name: 'Three' })).toBeInTheDocument();
	});

	test('should have the first option selected by default', () => {
		render(<SimpleSelect />);
		expect(screen.getByRole('combobox')).toHaveDisplayValue('Pick an option');
		expect(screen.getByRole('option', { name: 'Pick an option' }).selected).toBe(true);
		expect(screen.getByRole('combobox').value).toBe('Pick an option');
		expect(screen.getByRole('option', { name: 'One' }).selected).toBe(false);
		expect(screen.getByRole('option', { name: 'Two' }).selected).toBe(false);
		expect(screen.getByRole('option', { name: 'Three' }).selected).toBe(false);
	});

	test('should allow user to select an option', async () => {
		const handleChange = jest.fn(() => {});
		render(<SimpleSelect onChange={handleChange} />);
		const user = userEvent.setup();
		const select = screen.getByRole('combobox');
		await user.selectOptions(select, 'Two');
		expect(screen.getByRole('option', { name: 'Two' }).selected).toBe(true);
		expect(select).toHaveValue('2');
		expect(handleChange).toHaveBeenCalledTimes(1);
	});
});
