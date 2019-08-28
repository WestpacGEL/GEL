import React from 'react';

import { ButtonGroup, ButtonGroupButton } from '../src';
// import ButtonGroup from '@westpac/button-group';

import { InfoIcon } from '../../icon/src';

export default () => (
	<>
		<h3>Small</h3>
		<ButtonGroup size="small" name="example-small">
			<ButtonGroupButton iconAfter={InfoIcon}>Left</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Middle</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Right</ButtonGroupButton>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup size="small" name="example-small-block" block>
			<ButtonGroupButton iconAfter={InfoIcon}>Left</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Middle</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Medium</h3>
		<ButtonGroup size="medium" name="example-medium">
			<ButtonGroupButton iconAfter={InfoIcon}>Left</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Middle</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Right</ButtonGroupButton>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup size="medium" name="example-medium-block" block>
			<ButtonGroupButton iconAfter={InfoIcon}>Left</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Middle</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Large</h3>
		<ButtonGroup size="large" name="example-large">
			<ButtonGroupButton iconAfter={InfoIcon}>Left</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Middle</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Right</ButtonGroupButton>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup size="large" name="example-large-block" block>
			<ButtonGroupButton iconAfter={InfoIcon}>Left</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Middle</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Extra large</h3>
		<ButtonGroup size="xlarge" name="example-xlarge">
			<ButtonGroupButton iconAfter={InfoIcon}>Left</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Middle</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Right</ButtonGroupButton>
		</ButtonGroup>
		<br />
		<br />
		<ButtonGroup size="xlarge" name="example-xlarge-block" block>
			<ButtonGroupButton iconAfter={InfoIcon}>Left</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Middle</ButtonGroupButton>
			<ButtonGroupButton iconAfter={InfoIcon}>Right</ButtonGroupButton>
		</ButtonGroup>
	</>
);
