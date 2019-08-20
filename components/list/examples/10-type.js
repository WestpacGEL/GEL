import React from 'react';
import { List, ListItem } from '../src';
import { listGenerator } from './_utils';

export default () => (
	<>
		<h3>Link List</h3>
		<List type="link">
			{listGenerator('Styled link list', 3)}
			<ListItem>
				Styled link list
				<List>{listGenerator('Styled link list', 3)}</List>
			</ListItem>
			<ListItem>Styled link list</ListItem>
		</List>
		<hr />
		<h3>Tick List</h3>
		<List type="tick">
			{listGenerator('Styled tick list', 3)}
			<ListItem>
				Styled tick list
				<List>{listGenerator('Styled tick list', 3)}</List>
			</ListItem>
			<ListItem>Styled tick list</ListItem>
		</List>
		<hr />
		<h3>Unstyled</h3>
		<List type="unstyled">
			{listGenerator('Unstyled list', 3)}
			<ListItem>
				Unstyled list
				<List>
					{listGenerator('Unstyled list', 3)}
					<ListItem>
						Unstyled list<List>{listGenerator('Unstyled list', 3)}</List>
					</ListItem>
				</List>
			</ListItem>
			<ListItem>Unstyled list</ListItem>
		</List>
		<hr />
		<h3>Large</h3>
		<List size="large">
			{listGenerator('Large list', 3)}
			<ListItem>
				Large list
				<List>
					{listGenerator('Large list', 3)}
					<ListItem>
						Large list<List>{listGenerator('Large list', 3)}</List>
					</ListItem>
				</List>
			</ListItem>
			<ListItem>Large list</ListItem>
		</List>
	</>
);
