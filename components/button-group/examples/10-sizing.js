import React from 'react';

import { ButtonGroup, ButtonGroupButton } from '../src';
// import ButtonGroup from '@westpac/button-group';

export default () => (
	<>
		<h3>Small</h3>
		<ButtonGroup size="small" name="example-small">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Medium</h3>
		<ButtonGroup size="medium" name="example-medium">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Large</h3>
		<ButtonGroup size="large" name="example-large">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Extra large</h3>
		<ButtonGroup size="xlarge" name="example-xlarge">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>
	</>
);
