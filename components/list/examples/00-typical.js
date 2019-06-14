import React from 'react';

import { List, ListItem } from '../src';

const exampleListContent = ['Styled bullet list - primary', 'Styled bullet list - primary'];
const exampleList = exampleListContent.map(item => <ListItem>{item}</ListItem>);

export default () => (
	<List color="primary">
		{exampleList}
		<ListItem>
			Styled bullet list - primary
			<List>
				{exampleList}
				<ListItem>
					Styled bullet list - primary
					<List>{exampleList}</List>
				</ListItem>
				<ListItem>Styled bullet list - primary</ListItem>
			</List>
		</ListItem>
		<ListItem>Styled bullet list - primary</ListItem>
		<ListItem>Styled bullet list - primary</ListItem>
		<ListItem>Styled bullet list - primary</ListItem>
	</List>
);
