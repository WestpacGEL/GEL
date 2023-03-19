import React, { useState } from 'react';
import { ButtonDropdown } from '@westpac/button-dropdown';
import { GEL } from '@westpac/core';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'button-dropdown', // the name has to be the package name without '@westpac/' scope
	overrides: ['ButtonDropdown'], // every single override root key
	Component: (props) => (
		<ButtonDropdown {...props} text="Default Dropdown" open={true}>
			ButtonDropdown content
		</ButtonDropdown> // the component with all components rendered
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'button-dropdown',
	Component: (props) => <ButtonDropdown {...props} />,
});

const SimpleButtonDropdown = (props) => (
	<GEL brand={wbc}>
		<ButtonDropdown {...props} text="Default Dropdown">
			{props.children}
		</ButtonDropdown>
	</GEL>
);

// Component specific tests
describe('Button component', () => {
	test('should display dropdown items when clicked', () => {
		render(
			<SimpleButtonDropdown data-testid="my-button" text="Click Me">
				<p>I am opened</p>
			</SimpleButtonDropdown>
		);
		const childInDropDown = screen.getByText(/I am opened/i);
		expect(childInDropDown).not.toBeVisible();

		fireEvent.click(screen.queryByRole('button'));
		expect(childInDropDown).toBeVisible();
	});
});
