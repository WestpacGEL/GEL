import React from 'react';

import { ButtonGroup, ButtonGroupButton } from '../src';
// import ButtonGroup from '@westpac/button-group';

export default () => (
	<>
		<h3>Small</h3>
		<ButtonGroup size="small" block name="example-small-block">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Medium</h3>
		<ButtonGroup size="medium" block name="example-medium-block">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Large</h3>
		<ButtonGroup size="large" block name="example-large-block">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Extra large</h3>
		<ButtonGroup size="xlarge" block name="example-xlarge-block">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>
	</>
);
