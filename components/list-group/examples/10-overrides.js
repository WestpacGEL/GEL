/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { List, Item as ListItem } from '@westpac/list';
import { ButtonGroup, Button } from '@westpac/button';
import { ListGroup, Item } from '@westpac/list-group';
import { Fragment } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const styleExample = {
	marginLeft: '0.75rem',
};

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/list-group'] = {
		styles: styles => ({
			...styles,
			outline: '4px solid hotpink',
		}),
		subComponent: {
			Item: {
				styles: styles => ({
					...styles,
					outline: '2px dotted blue',
				}),
			},
		},
	};

	// to test that list styles don't spill over
	overridesWithTokens['@westpac/list'] = {
		subComponent: {
			Item: {
				styles: styles => ({
					...styles,
					background: 'rgba(255,0,0,0.2)',
				}),
			},
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia />

			<ListGroup>
				<Item>List item 1</Item>
				<Item>List item 2</Item>
				<Item>List item 3</Item>
				<Item>List item 4</Item>
			</ListGroup>

			<br />
			<hr />
			<br />

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

			<br />
			<hr />
			<br />

			<h2>With overrides and component overrides</h2>
			<ListGroup
				overrides={{
					subComponent: {
						Item: {
							styles: styles => ({
								...styles,
								outline: '3px dotted green',
							}),
						},
					},
				}}
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
		</GEL>
	);
}

export default Example;
