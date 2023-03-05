import { GEL, jsx } from '@westpac/core';
import { AndroidIcon, GithubIcon, AppleIcon } from '@westpac/icon';
import { List, Item } from '@westpac/list';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>AndroidIcon</h2>

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

			<h2>AndroidIcon / GithubIcon / AppleIcon</h2>

			<List type="icon" icon={AndroidIcon}>
				<Item>Styled icon list</Item>
				<Item>Styled icon list</Item>
				<Item>Styled icon list</Item>
				<Item type="icon" icon={GithubIcon}>
					Styled icon list
					<List icon={AppleIcon}>
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
