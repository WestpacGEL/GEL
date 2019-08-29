import React from 'react';
import { List, ListItem } from '../src';
import { listGenerator } from './_utils';
import { AndroidIcon, GithubIcon } from '@westpac/icon';

export default () => {
	return (
		<>
			<h3>Icon</h3>
			<List type="icon" icon={AndroidIcon}>
				{listGenerator('Styled icon list', 3)}
				<ListItem>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolor provident quasi nisi
					officia tempore fuga autem, animi iste molestiae, qui omnis doloribus aliquid ipsam rem
					fugiat veniam voluptatem accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Est, unde quis, molestias nisi quae voluptates nemo quaerat nihil, consequuntur
					nobis ratione rerum asperiores eveniet dicta maiores quia nostrum
					<List>{listGenerator('Styled icon list', 3)}</List>
				</ListItem>
			</List>
			<hr />
			<List type="icon" icon={AndroidIcon}>
				{listGenerator('Styled icon list', 3)}
				<ListItem type="icon" icon={GithubIcon}>
					Styled icon list
					<List>{listGenerator('Styled icon list', 3)}</List>
				</ListItem>
			</List>
		</>
	);
};
