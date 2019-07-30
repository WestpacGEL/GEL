import React from 'react';
import { List, ListItem } from '../src';
import { listGenerator } from './_utils';

export default () => (
	<>
		<h3>Ordered</h3>
		<List type="ordered">
			{listGenerator('Ordered', 3)}
			<ListItem>
				Ordered list
				<List>{listGenerator('Ordered', 3)}</List>
			</ListItem>
			{listGenerator('Ordered', 3)}
			<ListItem>
				Ordered list
				<List type="bullet">{listGenerator('Ordered', 3)}</List>
			</ListItem>
			{listGenerator('Ordered', 3)}
		</List>
	</>
);
