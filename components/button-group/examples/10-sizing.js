import React from 'react';

import { ButtonGroup, ButtonGroupButton } from '../src';
// import ButtonGroup from '@westpac/button-group';

export default () => (
	<>
		<h3>Small</h3>
		<ButtonGroup size="small">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Medium</h3>
		<ButtonGroup size="medium">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Large</h3>
		<ButtonGroup size="large">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Extra large</h3>
		<ButtonGroup size="xlarge">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>
	</>
);
