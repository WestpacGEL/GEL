import React from 'react';
import { ListGroup, ListGroupItem } from '../src';
import { ButtonGroup, ButtonGroupButton } from '../../button-group/src';

const styleExample = {
	paddingLeft: 12,
};

export default () => (
	<ListGroup>
		<ListGroupItem>
			Send me sms reminders
			<ButtonGroup size="small" name="example-default-1" css={styleExample}>
				<ButtonGroupButton>Yes</ButtonGroupButton>
				<ButtonGroupButton>No</ButtonGroupButton>
			</ButtonGroup>
		</ListGroupItem>
		<ListGroupItem>
			Give me free money
			<ButtonGroup size="small" name="example-default-2" css={styleExample}>
				<ButtonGroupButton>Yes</ButtonGroupButton>
				<ButtonGroupButton>No</ButtonGroupButton>
			</ButtonGroup>
		</ListGroupItem>
		<ListGroupItem>
			Call me all the time
			<ButtonGroup size="small" name="example-default-3" css={styleExample}>
				<ButtonGroupButton>Yes</ButtonGroupButton>
				<ButtonGroupButton>No</ButtonGroupButton>
			</ButtonGroup>
		</ListGroupItem>
		<ListGroupItem>
			Deleted messages
			<ButtonGroup size="small" name="example-default-4" css={styleExample}>
				<ButtonGroupButton>Yes</ButtonGroupButton>
				<ButtonGroupButton>No</ButtonGroupButton>
			</ButtonGroup>
		</ListGroupItem>
	</ListGroup>
);
