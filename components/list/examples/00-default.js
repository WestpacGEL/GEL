import React from 'react';
import { List, ListItem } from '../src';
import { listGenerator } from './_utils';

export default () => (
	<>
		<h3>Bullet List</h3>
		<List>
			{listGenerator('Styled bullet list - primary', 3)}
			<ListItem>
				Styled bullet list - primary
				<List>
					{listGenerator('Styled bullet list - primary', 3)}
					<ListItem>
						Styled bullet list - primary
						<List>{listGenerator('Styled bullet list - primary', 3)}</List>
					</ListItem>
					<ListItem>Styled bullet list - primary</ListItem>
				</List>
			</ListItem>
			<ListItem>Styled bullet list - primary</ListItem>
		</List>
		<hr />
		<List appearance="hero">
			{listGenerator('Styled bullet list - hero', 3)}
			<ListItem>
				Styled bullet list - hero
				<List>{listGenerator('Styled bullet list - hero', 3)}</List>
			</ListItem>
			<ListItem>Styled bullet list - hero</ListItem>
		</List>
		<hr />
		<List appearance="neutral">
			{listGenerator('Styled bullet list - neutral', 3)}
			<ListItem>
				Styled bullet list - neutral
				<List>{listGenerator('Styled bullet list - neutral', 3)}</List>
			</ListItem>
			<ListItem>Styled bullet list - neutral</ListItem>
		</List>
	</>
);
