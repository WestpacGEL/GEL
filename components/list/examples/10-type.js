/** @jsx jsx */

import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	return (
		<Playground context={context}>
			<Intopia />

			<h2>Bullet List</h2>
			<List type="bullet">
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>
					Styled bullet list
					<List>
						<Item>Styled bullet list</Item>
						<Item>Styled bullet list</Item>
						<Item>Styled bullet list</Item>
					</List>
				</Item>
				<Item>Styled bullet list</Item>
			</List>

			<br />
			<hr />
			<br />

			<h2>Link List</h2>
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

			<h2>Tick List</h2>
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

			<h2>Ordered</h2>
			<List type="ordered">
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>
					Styled ordered list
					<List>
						<Item>Styled ordered list</Item>
						<Item>Styled ordered list</Item>
						<Item>Styled ordered list</Item>
					</List>
				</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
			</List>

			<br />
			<hr />
			<br />

			<h2>Unstyled</h2>
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
		</Playground>
	);
}

export default Example;
