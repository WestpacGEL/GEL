import React from 'react';

import { ButtonGroup, ButtonGroupButton } from '../src';
// import ButtonGroup from '@westpac/button-group';

export default () => (
	<>
		<h3>Default instance (no styling props)</h3>
		<ButtonGroup name="example-default">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Primary</h3>
		<ButtonGroup appearance="primary" name="example-primary">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Hero</h3>
		<ButtonGroup appearance="hero" name="example-hero">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Neutral</h3>
		<ButtonGroup appearance="neutral" name="example-neutral">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Faint</h3>
		<ButtonGroup appearance="faint" name="example-faint">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>
	</>
);
