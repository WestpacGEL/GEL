import React from 'react';
import { ListGroup, ListGroupItem } from '../src';
import { ButtonGroup, Button } from '@westpac/button-group';

const styleExample = {
	marginLeft: '0.75rem',
};

export default () => (
	<ListGroup>
		<ListGroupItem>
			Send me sms reminders
			<ButtonGroup size="small" name="example-default-1" css={styleExample}>
				<Button value="yes">Yes</Button>
				<Button value="no">No</Button>
			</ButtonGroup>
		</ListGroupItem>
		<ListGroupItem>
			Give me free money
			<ButtonGroup size="small" name="example-default-2" css={styleExample}>
				<Button value="yes">Yes</Button>
				<Button value="no">No</Button>
			</ButtonGroup>
		</ListGroupItem>
		<ListGroupItem>
			Call me all the time
			<ButtonGroup size="small" name="example-default-3" css={styleExample}>
				<Button value="yes">Yes</Button>
				<Button value="no">No</Button>
			</ButtonGroup>
		</ListGroupItem>
		<ListGroupItem>
			Deleted messages
			<ButtonGroup size="small" name="example-default-4" css={styleExample}>
				<Button value="yes">Yes</Button>
				<Button value="no">No</Button>
			</ButtonGroup>
		</ListGroupItem>
	</ListGroup>
);
