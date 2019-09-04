import React from 'react';

import { ButtonGroup, ButtonGroupButton } from '../src';
import { InfoIcon } from '@westpac/icon';

export default () => (
	<>
		<h2>Small</h2>
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

		<h2>Medium</h2>
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

		<h2>Large</h2>
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

		<h2>Extra large</h2>
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
