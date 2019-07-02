import React from 'react';
import { List, ListItem } from '../src';
import { listGenerator } from './_utils';
//re-do this to take in a name and num times?
const exampleListContent = ['Styled bullet list - primary', 'Styled bullet list - primary'];
const exampleList = exampleListContent.map(item => <ListItem>{item}</ListItem>);

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
		<List color="hero">
			{exampleList}
			<ListItem>
				Styled bullet list - primary
				<List>{exampleList}</List>
			</ListItem>
			<ListItem>Styled bullet list - primary</ListItem>
		</List>
		<hr />
		<List color="neutral">
			{exampleList}
			<ListItem>
				Styled bullet list - primary
				<List>{exampleList}</List>
			</ListItem>
			<ListItem>Styled bullet list - primary</ListItem>
		</List>
	</>
);
