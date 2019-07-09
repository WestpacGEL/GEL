import React from 'react';

import { ButtonGroup, ButtonGroupButton } from '../src';
// import ButtonGroup from '@westpac/button-group';

import { InfoIcon } from '../../icon/src';

export default () => (
	<>
		<h3>Small</h3>
		<ButtonGroup size="small" icon={InfoIcon} name="example-small">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup size="small" block icon={InfoIcon} name="example-small-block">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Medium</h3>
		<ButtonGroup size="medium" icon={InfoIcon} name="example-medium">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup size="medium" block icon={InfoIcon} name="example-medium-block">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Large</h3>
		<ButtonGroup size="large" icon={InfoIcon} name="example-large">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup size="large" block icon={InfoIcon} name="example-large-block">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Extra large</h3>
		<ButtonGroup size="xlarge" icon={InfoIcon} name="example-xlarge">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup size="xlarge" block icon={InfoIcon} name="example-xlarge-block">
			<ButtonGroupButton>Left</ButtonGroupButton>
			<ButtonGroupButton>Middle</ButtonGroupButton>
			<ButtonGroupButton>Right</ButtonGroupButton>
		</ButtonGroup>
	</>
);
