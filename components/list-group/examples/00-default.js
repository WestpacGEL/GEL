import React from 'react';
import { ListGroup } from '../src';
import { ButtonGroup, ButtonGroupButton } from '../../button-group/src';

export default () => (
	<ListGroup>
		<li>
			<span>Send me sms reminders </span>
			<ButtonGroup size="small" name="example-default-1">
				<ButtonGroupButton>Yes</ButtonGroupButton>
				<ButtonGroupButton>No</ButtonGroupButton>
			</ButtonGroup>
		</li>
		<li>
			<span>Give me free money</span>
			<ButtonGroup size="small" name="example-default-2">
				<ButtonGroupButton>Yes</ButtonGroupButton>
				<ButtonGroupButton>No</ButtonGroupButton>
			</ButtonGroup>
		</li>
		<li>
			<span>Call me all the time</span>
			<ButtonGroup size="small" name="example-default-3">
				<ButtonGroupButton>Yes</ButtonGroupButton>
				<ButtonGroupButton>No</ButtonGroupButton>
			</ButtonGroup>
		</li>
		<li>
			<span>Deleted messages</span>
			<ButtonGroup size="small" name="example-default-4">
				<ButtonGroupButton>Yes</ButtonGroupButton>
				<ButtonGroupButton>No</ButtonGroupButton>
			</ButtonGroup>
		</li>
	</ListGroup>
);
