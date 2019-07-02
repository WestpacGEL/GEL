import React from 'react';
import { List, ListItem } from '../src';
import { listGenerator } from './_utils';
import { AndroidIcon } from '../../icon/src';

export default () => (
	<>
		<h3>Icon</h3>
		<List appearance="icon" icon={AndroidIcon}>
			{listGenerator('Styled icon list', 3)}
			<ListItem>
				Style icon list
				<List>{listGenerator('Styled icon list', 3)}</List>
			</ListItem>
		</List>
	</>
);
