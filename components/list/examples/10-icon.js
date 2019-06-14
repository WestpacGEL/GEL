import React from 'react';

import { List, ListItem } from '../src';

const exampleListContent = [
	'Styled bullet list - primary',
	'Styled bullet list - primary',
	'Styled bullet list - primary',
];
const exampleList = exampleListContent.map(item => <ListItem>{item}</ListItem>);

export default () => (
	<List color="primary" appearance="link">
		{exampleList}
	</List>
);
