/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { AndroidIcon, GithubIcon } from '@westpac/icon';
import { List, Item } from '@westpac/list';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia/>

			<h3>Icon</h3>
			<List type="icon" icon={AndroidIcon}>
				<Item>Styled icon list</Item>
				<Item>Styled icon list</Item>
				<Item>Styled icon list</Item>
				<Item>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolor provident quasi nisi
					officia tempore fuga autem, animi iste molestiae, qui omnis doloribus aliquid ipsam rem
					fugiat veniam voluptatem accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Est, unde quis, molestias nisi quae voluptates nemo quaerat nihil, consequuntur
					nobis ratione rerum asperiores eveniet dicta maiores quia nostrum
					<List>
						<Item>Styled icon list</Item>
						<Item>Styled icon list</Item>
						<Item>Styled icon list</Item>
					</List>
				</Item>
			</List>

			<br />
			<hr />
			<br />

			<List type="icon" icon={AndroidIcon}>
				<Item>Styled icon list</Item>
				<Item>Styled icon list</Item>
				<Item>Styled icon list</Item>
				<Item type="icon" icon={GithubIcon}>
					Styled icon list
					<List>
						<Item>Styled icon list</Item>
						<Item>Styled icon list</Item>
						<Item>Styled icon list</Item>
					</List>
				</Item>
			</List>
		</GEL>
	);
}

export default Example;
