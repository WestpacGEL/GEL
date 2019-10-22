/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { listGenerator } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h3>Bullet List</h3>
			<List appearance="primary">
				{listGenerator('Styled bullet list - primary', 3)}
				<Item>
					Styled bullet list - primary
					<List>
						{listGenerator('Styled bullet list - primary', 3)}
						<Item>
							Styled bullet list - primary
							<List>{listGenerator('Styled bullet list - primary', 3)}</List>
						</Item>
						<Item>Styled bullet list - primary</Item>
					</List>
				</Item>
				<Item>Styled bullet list - primary</Item>
			</List>
			<hr />
			<List appearance="hero">
				{listGenerator('Styled bullet list - hero', 3)}
				<Item>
					Styled bullet list - hero
					<List>{listGenerator('Styled bullet list - hero', 3)}</List>
				</Item>
				<Item>Styled bullet list - hero</Item>
			</List>
			<hr />
			<List appearance="neutral">
				{listGenerator('Styled bullet list - neutral', 3)}
				<Item>
					Styled bullet list - neutral
					<List>{listGenerator('Styled bullet list - neutral', 3)}</List>
				</Item>
				<Item>Styled bullet list - neutral</Item>
			</List>
		</GEL>
	);
}

export default Example;
