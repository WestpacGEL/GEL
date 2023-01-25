import React, { Fragment } from 'react';
import { render, fireEvent, keyboard } from '@testing-library/react';

import { Autocomplete } from '@westpac/autocomplete';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

const DEFAULT_OPTIONS = [
	{ value: 'bench press a', label: 'Bench Press a' },
	{ value: 'squat', label: 'Squat' },
	{ value: 'deadlift', label: 'Deadlift' },
];

// The default tests every component should run
// overridesTest({
// 	name: 'autocomplete', // the name has to be the package name without '@westpac/' scope
// 	overrides: [
// 		// 'Control',
// 		// 'IndicatorsContainer',
// 		// 'ClearIndicator',
// 		// 'Menu',
// 		// 'Option',
// 		// 'ValueContainer',
// 		'Footer',
// 		// 'NoOptionsMessage',
// 	], // every single override root key
// 	beforeValidate: () => {
// 		fireEvent('click');
// 		fireEvent('type', 's');
// 	},
// 	Component: (props) => <Autocomplete {...props} footer={FooterTest} options={DEFAULT_OPTIONS} />, // the component with all components rendered
// });

const SimpleAutocomplete = (props) => (
	<GEL brand={wbc}>
		<Autocomplete options={DEFAULT_OPTIONS} {...props} />
	</GEL>
);

const triggerFilterAndShowMenu = (container, filterValue) => {
	const input = container.querySelector('[data-value] input');
	fireEvent.click(input);
	fireEvent.change(input, { target: { value: filterValue } });
};

// Component specific tests
describe('Autocomplete component', () => {
	test('The quantity of options in the DOM should be the same as the array passed as an input', async () => {
		const { container, getByText } = render(<SimpleAutocomplete />);
		triggerFilterAndShowMenu(container, 'a');

		const menuContainer = getByText('Bench Press a').parentNode;
		expect(menuContainer.children.length).toBe(DEFAULT_OPTIONS.length);
	});

	test('The filter should be filtering', () => {
		const { container, getByText } = render(<SimpleAutocomplete />);
		const searchText = DEFAULT_OPTIONS[0].label;
		triggerFilterAndShowMenu(container, searchText);
		const menuContainer = getByText(searchText).parentNode;
		expect(menuContainer.children.length).toBe(1);
	});

	test('The clear button should clear the option selected', () => {
		const { container, queryByText } = render(<SimpleAutocomplete isClearable />);
		const optionToBeSelected = DEFAULT_OPTIONS[0].label;
		triggerFilterAndShowMenu(container, 'a');
		fireEvent.click(queryByText(optionToBeSelected));

		const clearButton = container.querySelector('[aria-label="Clear"]');
		expect(clearButton).toBeDefined();
		fireEvent.touchEnd(clearButton);

		const option = queryByText(optionToBeSelected);
		expect(option).toBeNull();
	});

	test('The invalid property should not print an error message', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error');
		render(<SimpleAutocomplete invalid />);
		expect(consoleErrorSpy).not.toHaveBeenCalled();
	});

	test('The autocomplete/footer should be rendered with the content you asked for.', () => {
		const FOOTER_MESSAGE = 'My Footer message';
		const MockFooter = () => {
			return <Fragment>{FOOTER_MESSAGE}</Fragment>;
		};
		const { container, queryByText } = render(
			<SimpleAutocomplete footer={MockFooter} options={DEFAULT_OPTIONS} />
		);
		triggerFilterAndShowMenu(container, 'a');
		const footer = queryByText(FOOTER_MESSAGE);
		expect(footer).toBeDefined();
	});

	test('The sizes listed should be valid', () => {
		const SIZES = ['small', 'medium', 'large', 'xlarge'];
		const consoleErrorSpy = jest.spyOn(console, 'error');
		render(
			<>
				{SIZES.map((size) => (
					<SimpleAutocomplete key={size} size={size} options={DEFAULT_OPTIONS} />
				))}
			</>
		);
		expect(consoleErrorSpy).not.toHaveBeenCalled();
	});
});
