import React, { useState } from 'react';
import { ButtonGroup, Item } from '@westpac/button-group';
import { GEL } from '@westpac/core';
import { fireEvent, render, screen } from '@testing-library/react';
import { overridesTest } from '../../../../helpers/tests/overrides-test.js';
import { nestingTest } from '../../../../helpers/tests/nesting-test.js';
import wbc from '@westpac/wbc';

// The default tests every component should run
overridesTest({
	name: 'button-group', // the name has to be the package name without '@westpac/' scope
	overrides: ['ButtonGroup'], // every single override root key
	Component: (props) => (
		<ButtonGroup {...props} name="Default">
			<Item inputProps={{ value: "left" }}>Left</Item>
		</ButtonGroup> // the component with all components rendered
	),
});

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'button-group',
	Component: (props) => (
		<ButtonGroup {...props} name="Default">
			<Item inputProps={{ value: "left" }} >{props.children}</Item>
		</ButtonGroup>
	),
});

function SimpleButtonGroup(props) {
	return (
		<GEL brand={wbc}>
			<ButtonGroup {...props}>
				{props.children}
			</ButtonGroup>
		</GEL>
	)
}

const HelperComponent = function () {
	const [value, setValue] = useState('left');		
	return (
		<GEL brand={wbc}>
			<ButtonGroup
				name="example-custom-key"
				// defaultValue="left"
				value={value}
				onChange={(e, v) => {
					console.log(`custom-key: ${v}`);
					setValue(v);
				}}
			>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
			<h1>The Value</h1>
			<span data-testid='the-value'>{value}</span>
		 </GEL>
	);
};

// Component specific tests
describe('ButtonGroup component', () => {
	test('should display its Items', () => {
		render(
			<SimpleButtonGroup>
				<Item>Left</Item>
				<Item>Middle</Item>
				<Item>Right</Item>
			</SimpleButtonGroup>
		);
		
		const LeftItem = screen.getByText('Left');
		expect(LeftItem).toBeVisible();

		const MiddleItem = screen.getByText('Middle');
		expect(MiddleItem).toBeVisible();

		const RightItem = screen.getByText('Right');
		expect(RightItem).toBeVisible();

	});

	test('should change the input value set by which button was clicked', () => {
		const { getByTestId } = render(<HelperComponent />);

		const theDisplayedValue = getByTestId('the-value');
		const theMiddleInputItem = screen.getByText('Middle');
		const theRightInputItem = screen.getByText('Right');
		
		expect(theDisplayedValue).toHaveTextContent('left');

		fireEvent.click(theMiddleInputItem);
		expect(theDisplayedValue).toHaveTextContent('middle');

		fireEvent.click(theRightInputItem);
		expect(theDisplayedValue).toHaveTextContent('right')
	})	

	test('should change the background color of LeftItem component when clicked', () => {
		const { getByText } =
		render(
			<SimpleButtonGroup>
				<Item>Left</Item>
				<Item>Middle</Item>
				<Item>Right</Item>
			</SimpleButtonGroup>
		);

		const innnerSpan = getByText('Left');
		const outerSpan = innnerSpan.parentElement;

		const backgroundColorBeforeClick = window.getComputedStyle(outerSpan).getPropertyValue('background-color');
		console.log(backgroundColorBeforeClick);
		fireEvent.click(outerSpan);

		const styles = window.getComputedStyle(outerSpan);
		const backgroundColorAfterClick = styles['background-color'];
		console.log(backgroundColorAfterClick);
		expect(styles['background-color']).toEqual(styles.backgroundColor);
		expect(backgroundColorAfterClick).not.toEqual(backgroundColorBeforeClick);
	})
});
