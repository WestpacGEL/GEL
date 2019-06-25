import React from 'react';
import { List, ListItem } from '../src';
import { listGenerator } from './_utils';

export default () => (
	<>
		<h3>Link List</h3>
		<List appearance="link">
			{listGenerator('Styled link list', 3)}
			<ListItem>
				Styled link list
				<List>{listGenerator('Styled link list', 3)}</List>
			</ListItem>
			<ListItem>Styled link list</ListItem>
		</List>
		<hr />
		<h3>Tick List</h3>
		<List appearance="tick">
			{listGenerator('Styled tick list', 3)}
			<ListItem>
				Styled tick list
				<List>{listGenerator('Styled tick list', 3)}</List>
			</ListItem>
			<ListItem>Styled tick list</ListItem>
		</List>
		<hr />
		<h3>Unstyled</h3>
		<List appearance="unstyled">
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
	</>
);
