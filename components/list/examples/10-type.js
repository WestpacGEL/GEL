/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h3>Link List</h3>
			<List type="link">
				<Item>Styled link list</Item>
				<Item>Styled link list</Item>
				<Item>Styled link list</Item>
				<Item>
					Styled link list
					<List>
						<Item>Styled link list</Item>
						<Item>Styled link list</Item>
						<Item>Styled link list</Item>
					</List>
				</Item>
				<Item>Styled link list</Item>
			</List>

			<br />
			<hr />
			<br />

			<h3>Tick List</h3>
			<List type="tick">
				<Item>Styled tick list</Item>
				<Item>Styled tick list</Item>
				<Item>Styled tick list</Item>
				<Item>
					Styled tick list
					<List>
						<Item>Styled tick list</Item>
						<Item>Styled tick list</Item>
						<Item>Styled tick list</Item>
					</List>
				</Item>
				<Item>Styled tick list</Item>
			</List>

			<br />
			<hr />
			<br />

			<h3>Unstyled</h3>
			<List type="unstyled">
				<Item>Unstyled list</Item>
				<Item>Unstyled list</Item>
				<Item>Unstyled list</Item>
				<Item>
					Unstyled list
					<List>
						<Item>Unstyled list</Item>
						<Item>Unstyled list</Item>
						<Item>Unstyled list</Item>
						<Item>
							Unstyled list
							<List>
								<Item>Unstyled list</Item>
								<Item>Unstyled list</Item>
								<Item>Unstyled list</Item>
							</List>
						</Item>
					</List>
				</Item>
				<Item>Unstyled list</Item>
			</List>
		</GEL>
	);
}

export default Example;
