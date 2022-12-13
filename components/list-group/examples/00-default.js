/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ListGroup, Item } from '@westpac/list-group';
import { ButtonGroup, Item as BtnGroupItem } from '@westpac/button-group';
import { Fragment } from 'react';

const styleExample = {
	marginLeft: '0.75rem',
};

function Example({ brand }) {
	return (
		<GEL brand={brand}>
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
						<BtnGroupItem value="yes">Yes</BtnGroupItem>
						<BtnGroupItem value="no">No</BtnGroupItem>
					</ButtonGroup>
				</Item>
				<Item>
					Give me free money
					<ButtonGroup size="small" name="example-default-2" css={styleExample}>
						<BtnGroupItem value="yes">Yes</BtnGroupItem>
						<BtnGroupItem value="no">No</BtnGroupItem>
					</ButtonGroup>
				</Item>
				<Item>
					Call me all the time
					<ButtonGroup size="small" name="example-default-3" css={styleExample}>
						<BtnGroupItem value="yes">Yes</BtnGroupItem>
						<BtnGroupItem value="no">No</BtnGroupItem>
					</ButtonGroup>
				</Item>
				<Item>
					Deleted messages
					<ButtonGroup size="small" name="example-default-4" css={styleExample}>
						<BtnGroupItem value="yes">Yes</BtnGroupItem>
						<BtnGroupItem value="no">No</BtnGroupItem>
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
					// eslint-disable-next-line react/jsx-key
					<Fragment>
						Send me sms reminders
						<ButtonGroup size="small" name="example-default-1" css={styleExample}>
							<BtnGroupItem value="yes">Yes</BtnGroupItem>
							<BtnGroupItem value="no">No</BtnGroupItem>
						</ButtonGroup>
					</Fragment>,
					// eslint-disable-next-line react/jsx-key
					<Fragment>
						Call me all the time
						<ButtonGroup size="small" name="example-default-3" css={styleExample}>
							<BtnGroupItem value="yes">Yes</BtnGroupItem>
							<BtnGroupItem value="no">No</BtnGroupItem>
						</ButtonGroup>
					</Fragment>,
				]}
			/>
		</GEL>
	);
}

export default Example;
