/** @jsx jsx */

import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<Playground brand={brand}>
			<Intopia />

			<h2>Primary</h2>
			<List>
				<Item>Styled bullet list - primary</Item>
				<Item>Styled bullet list - primary</Item>
				<Item>Styled bullet list - primary</Item>
			</List>

			<br />
			<hr />
			<br />

			<h2>Hero</h2>
			<List look="hero">
				<Item>Styled bullet list - hero</Item>
				<Item>Styled bullet list - hero</Item>
				<Item>Styled bullet list - hero</Item>
			</List>

			<br />
			<hr />
			<br />

			<h2>Neutral</h2>
			<List look="neutral">
				<Item>Styled bullet list - neutral</Item>
				<Item>Styled bullet list - neutral</Item>
				<Item>Styled bullet list - neutral</Item>
			</List>

			<br />
			<hr />
			<br />

			<h2>Nesting with cascading look prop</h2>
			<List>
				<Item>Styled bullet list - primary</Item>
				<Item>Styled bullet list - primary</Item>
				<Item>Styled bullet list - primary</Item>
				<Item>
					Styled bullet list - primary
					<List>
						<Item>Styled bullet list - primary</Item>
						<Item>
							Styled bullet list - primary
							<List look="neutral">
								<Item>Styled bullet list - neutral</Item>
								<Item>Styled bullet list - neutral</Item>
								<Item>Styled bullet list - neutral</Item>
							</List>
						</Item>
						<Item>Styled bullet list - primary</Item>
						<Item>
							Styled bullet list - primary
							<List>
								<Item>Styled bullet list - primary</Item>
								<Item>Styled bullet list - primary</Item>
								<Item>Styled bullet list - primary</Item>
							</List>
						</Item>
						<Item>Styled bullet list - primary</Item>
					</List>
				</Item>
				<Item>Styled bullet list - primary</Item>
			</List>

			<br />
			<hr />
			<br />

			<List look="hero">
				<Item>Styled bullet list - hero</Item>
				<Item>Styled bullet list - hero</Item>
				<Item>Styled bullet list - hero</Item>
				<Item>
					Styled bullet list - hero
					<List>
						<Item>Styled bullet list - hero</Item>
						<Item>
							Styled bullet list - hero
							<List look="neutral">
								<Item>Styled bullet list - neutral</Item>
								<Item>Styled bullet list - neutral</Item>
								<Item>Styled bullet list - neutral</Item>
							</List>
						</Item>
						<Item>Styled bullet list - hero</Item>
						<Item>
							Styled bullet list - hero
							<List>
								<Item>Styled bullet list - hero</Item>
								<Item>Styled bullet list - hero</Item>
								<Item>Styled bullet list - hero</Item>
							</List>
						</Item>
					</List>
				</Item>
				<Item>Styled bullet list - hero</Item>
			</List>

			<br />
			<hr />
			<br />

			<List look="neutral">
				<Item>Styled bullet list - neutral</Item>
				<Item>Styled bullet list - neutral</Item>
				<Item>Styled bullet list - neutral</Item>
				<Item>
					Styled bullet list - neutral
					<List>
						<Item>Styled bullet list - neutral</Item>
						<Item>
							Styled bullet list - neutral
							<List look="primary">
								<Item>Styled bullet list - primary</Item>
								<Item>Styled bullet list - primary</Item>
								<Item>Styled bullet list - primary</Item>
							</List>
						</Item>
						<Item>Styled bullet list - neutral</Item>
						<Item>
							Styled bullet list - neutral
							<List>
								<Item>Styled bullet list - neutral</Item>
								<Item>Styled bullet list - neutral</Item>
								<Item>Styled bullet list - neutral</Item>
							</List>
						</Item>
						<Item>Styled bullet list - neutral</Item>
					</List>
				</Item>
				<Item>Styled bullet list - neutral</Item>
			</List>
		</Playground>
	);
}

export default Example;
