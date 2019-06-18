import React from 'react';

import { ButtonGroup, ButtonGroupButton } from '../src';
// import ButtonGroup from '@westpac/button-group';

import { InfoIcon } from '../../icon/src';


export default () => (
	<>
		<h3>Small</h3>
		<ButtonGroup size="small" block>
			<ButtonGroupButton icon={InfoIcon}>Left</ButtonGroupButton>
			<ButtonGroupButton icon={InfoIcon}>Middle</ButtonGroupButton>
			<ButtonGroupButton icon={InfoIcon}>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Medium</h3>
		<ButtonGroup size="medium" block>
			<ButtonGroupButton icon={InfoIcon}>Left</ButtonGroupButton>
			<ButtonGroupButton icon={InfoIcon}>Middle</ButtonGroupButton>
			<ButtonGroupButton icon={InfoIcon}>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Large</h3>
		<ButtonGroup size="large" block>
			<ButtonGroupButton icon={InfoIcon}>Left</ButtonGroupButton>
			<ButtonGroupButton icon={InfoIcon}>Middle</ButtonGroupButton>
			<ButtonGroupButton icon={InfoIcon}>Right</ButtonGroupButton>
		</ButtonGroup>

		<hr />

		<h3>Extra large</h3>
		<ButtonGroup size="xlarge" block>
			<ButtonGroupButton icon={InfoIcon}>Left</ButtonGroupButton>
			<ButtonGroupButton icon={InfoIcon}>Middle</ButtonGroupButton>
			<ButtonGroupButton icon={InfoIcon}>Right</ButtonGroupButton>
		</ButtonGroup>

	</>
);
