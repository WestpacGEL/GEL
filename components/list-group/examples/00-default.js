/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ListGroup, Item } from '@westpac/list-group';
import { ButtonGroup, Button } from '@westpac/button';
import { Fragment } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

const styleExample = {
	marginLeft: '0.75rem',
};

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

			<h2>Simple</h2>
			<ListGroup>
				<Item>List item 1</Item>
				<Item>List item 2</Item>
				<Item>List item 3</Item>
				<Item>List item 4</Item>
			</ListGroup>

			<br />
			<hr />
			<br />

			<h2>More complex</h2>
			<ListGroup>
				<Item>
					Send me sms reminders
					<ButtonGroup size="small" name="example-default-1" css={styleExample}>
						<Button value="yes">Yes</Button>
						<Button value="no">No</Button>
					</ButtonGroup>
				</Item>
				<Item>
					Give me free money
					<ButtonGroup size="small" name="example-default-2" css={styleExample}>
						<Button value="yes">Yes</Button>
						<Button value="no">No</Button>
					</ButtonGroup>
				</Item>
				<Item>
					Call me all the time
					<ButtonGroup size="small" name="example-default-3" css={styleExample}>
						<Button value="yes">Yes</Button>
						<Button value="no">No</Button>
					</ButtonGroup>
				</Item>
				<Item>
					Deleted messages
					<ButtonGroup size="small" name="example-default-4" css={styleExample}>
						<Button value="yes">Yes</Button>
						<Button value="no">No</Button>
					</ButtonGroup>
				</Item>
			</ListGroup>

			<br />
			<hr />
			<br />

			<h2>Data driven</h2>
			<ListGroup
				data={[
					'List item 1',
					'List item 2',
					'List item 3',
					'List item 4',
					<Fragment>
						Send me sms reminders
						<ButtonGroup size="small" name="example-default-1" css={styleExample}>
							<Button value="yes">Yes</Button>
							<Button value="no">No</Button>
						</ButtonGroup>
					</Fragment>,
					<Fragment>
						Call me all the time
						<ButtonGroup size="small" name="example-default-3" css={styleExample}>
							<Button value="yes">Yes</Button>
							<Button value="no">No</Button>
						</ButtonGroup>
					</Fragment>,
				]}
			/>
		</Playground>
	);
};
