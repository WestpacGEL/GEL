import React from 'react';
import { List, Item } from '../src';
import { listGenerator } from './_utils';

export default () => (
	<>
		<h3>Ordered</h3>
		<List type="ordered">
			{listGenerator('Ordered', 3)}
			<Item>
				Ordered list
				<List>{listGenerator('Ordered', 3)}</List>
			</Item>
			{listGenerator('Ordered', 3)}
			<Item>
				Ordered list
				<List type="bullet">{listGenerator('Ordered', 3)}</List>
			</Item>
			{listGenerator('Ordered', 3)}
		</List>
	</>
);
