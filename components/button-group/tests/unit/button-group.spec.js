import React, { useState } from 'react';
import { ButtonGroup, Item } from '@westpac/button-group';
import { GEL } from '@westpac/core';
import { render, screen, } from '@testing-library/react';
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
{/* <Item value="left">Left</Item> */}  // Warning: Failed prop type: The prop `inputProps` is marked as required in `ButtonGroupItem`, but its value is `undefined`
{/* <Item inputProps={{ value: "left" }} >Left</Item> */} // Works
{/* <Item inputProps={'left'}>Left</Item> // Gives "TypeError: Cannot read properties of undefined (reading 'value')" */}
{/* <Item inputProps={{ text: "Left", value: "left" }} >Left</Item> */} // Works
{/* <Item inputProps={{ value: "left" }} >Left</Item> */} // Works
{/* <Item value="left" inputProps={'left'}>Left</Item> // Gives "Invalid Attribute name error" */}

// another default test to check that the component errors when outside of GEL and renders when inside
nestingTest({
	name: 'button-group',
	Component: (props) => (
		<ButtonGroup {...props} name="Default">
			<Item inputProps={{ value: "left" }} >{props.children}</Item>
		</ButtonGroup>
	),
});
{/* <Item inputProps={{ value: "left" }} ></Item> */} // Doesn't work
{/* <Item>{props.children}</Item> */} // Doesn't work
{/* <Item inputProps={{ text: "Left", value: "left" }} >Left</Item> // Doesn't work */}
{/* <Item inputProps={{ text: "Left", value: "left" }} >{props.children}</Item> */} // Works
{/* <Item inputProps={{ value: "left" }} >{props.children}</Item> */}  // Works


function SimpleButtonGroup(props) {
	return (
		<GEL brand={wbc}>
			<ButtonGroup {...props}>
				{props.children}
			</ButtonGroup>
		</GEL>
	)
}

// Component specific tests
describe('Button component', () => {
	test('should display items', () => {
		render(
			// Works
			// <SimpleButtonGroup data-testid="my-button-group" name="default">
			// 	<ButtonGroup name="example defaultValue={0}">
			// 		<Item value="left" inputProps={'left'}>Left</Item>
			// 		<Item value="middle" inputProps={'middle'}>Middle</Item>
			// 		<Item value="right" inputProps={'right'}>Right</Item>
			// 	</ButtonGroup>
			// </SimpleButtonGroup>

			// Works
			<SimpleButtonGroup>
				<Item>Left</Item>
				<Item>Middle</Item>
				<Item>Right</Item>
			</SimpleButtonGroup>

			// Works
			// <GEL brand={wbc}>
			// 	<ButtonGroup name="example defaultValue={0}">
			// 		<Item value="left" inputProps={'left'}>Left</Item>
			// 		<Item value="middle" inputProps={'middle'}>Middle</Item>
			// 		<Item value="right" inputProps={'right'}>Right</Item>
			// 	</ButtonGroup>
			// </GEL>

			// Works
			// <GEL brand={wbc}>
			// 	<ButtonGroup
			// 		name="example-data-driven"
			// 		data={[
			// 			{ text: "Left", value: "left" },
			// 			{ text: "Middle", value: "middle" },
			// 			{ text: "Right", value: "right" },
			// 		]}
			// 	/>
			// </GEL>

			// Works
			// <GEL brand={wbc}>
			// 		<ButtonGroup name="example-composed">
			// 			<Item value="left">Left</Item>
			// 			<Item value="middle">Middle</Item>
			// 			<Item value="right">Right</Item>
			//   	</ButtonGroup>
			// </GEL>

			// Works
			// <GEL brand={wbc}>
			// 	<ButtonGroup name="daves-example">
			// 		<Item inputProps={{ text: "Left", value: "left" }} >Left</Item>
			// 		<Item inputProps={{ text: "Middle", value: "middle" }} >Middle</Item>
			// 		<Item inputProps={{ text: "Right", value: "right" }} >Right</Item>
			// 	</ButtonGroup>			
			// </GEL>

			// Works
			// <GEL brand={wbc}>
			// <ButtonGroup name="daves-example">
			// 	<Item>Left</Item>
			// 	<Item>Middle</Item>
			// 	<Item>Right</Item>
			// </ButtonGroup>			
			// </GEL>

			// Works
			// <SimpleButtonGroup data-testid="my-button-group" name="default">
			// 	<Item value="left" inputProps={'left'}>Left</Item>
			// 	<Item value="middle" inputProps={'middle'}>Middle</Item>
			// 	<Item value="right" inputProps={'right'}>Right</Item>
			// </SimpleButtonGroup>

			// Works
			// <SimpleButtonGroup data-testid="my-button-group" name="default">
			// 	<Item>Left</Item>
			// 	<Item>Middle</Item>
			// 	<Item>Right</Item>
			// </SimpleButtonGroup>			


		)
		
		const LeftItem = screen.getByText('Left');
		expect(LeftItem).toBeVisible();
		const MiddleItem = screen.getByText('Middle');
		expect(MiddleItem).toBeVisible();
		const RightItem = screen.getByText('Right');
		expect(RightItem).toBeVisible();

	});
});
