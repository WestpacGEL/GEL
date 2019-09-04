import React from 'react';
import { ButtonGroup, ButtonGroupButton } from '../src';

export default () => (
	<>
		<h2>Small</h2>
		<ButtonGroup size="small" name="example-small">
			<ButtonGroupButton value="left">Left</ButtonGroupButton>
			<ButtonGroupButton value="middle">Middle</ButtonGroupButton>
			<ButtonGroupButton value="right">Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h2>Medium</h2>
		<ButtonGroup size="medium" name="example-medium">
			<ButtonGroupButton value="left">Left</ButtonGroupButton>
			<ButtonGroupButton value="middle">Middle</ButtonGroupButton>
			<ButtonGroupButton value="right">Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h2>Large</h2>
		<ButtonGroup size="large" name="example-large">
			<ButtonGroupButton value="left">Left</ButtonGroupButton>
			<ButtonGroupButton value="middle">Middle</ButtonGroupButton>
			<ButtonGroupButton value="right">Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h2>Extra large</h2>
		<ButtonGroup size="xlarge" name="example-xlarge">
			<ButtonGroupButton value="left">Left</ButtonGroupButton>
			<ButtonGroupButton value="middle">Middle</ButtonGroupButton>
			<ButtonGroupButton value="right">Right</ButtonGroupButton>
		</ButtonGroup>
	</>
);
