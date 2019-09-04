import React from 'react';
import { ButtonGroup, ButtonGroupButton } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<ButtonGroup name="example-default">
			<ButtonGroupButton value="left">Left</ButtonGroupButton>
			<ButtonGroupButton value="middle">Middle</ButtonGroupButton>
			<ButtonGroupButton value="right">Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h2>Primary</h2>
		<ButtonGroup appearance="primary" name="example-primary">
			<ButtonGroupButton value="left">Left</ButtonGroupButton>
			<ButtonGroupButton value="middle">Middle</ButtonGroupButton>
			<ButtonGroupButton value="right">Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h2>Hero</h2>
		<ButtonGroup appearance="hero" name="example-hero">
			<ButtonGroupButton value="left">Left</ButtonGroupButton>
			<ButtonGroupButton value="middle">Middle</ButtonGroupButton>
			<ButtonGroupButton value="right">Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h2>Neutral</h2>
		<ButtonGroup appearance="neutral" name="example-neutral">
			<ButtonGroupButton value="left">Left</ButtonGroupButton>
			<ButtonGroupButton value="middle">Middle</ButtonGroupButton>
			<ButtonGroupButton value="right">Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h2>Faint</h2>
		<ButtonGroup appearance="faint" name="example-faint">
			<ButtonGroupButton value="left">Left</ButtonGroupButton>
			<ButtonGroupButton value="middle">Middle</ButtonGroupButton>
			<ButtonGroupButton value="right">Right</ButtonGroupButton>
		</ButtonGroup>
	</>
);
