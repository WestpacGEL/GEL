/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { AndroidIcon, GithubIcon, AppleIcon } from '@westpac/icon';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<List>
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
			</List>

			<br />
			<hr />

			<h2>Bullet</h2>

			<h3>Primary</h3>
			<List type="bullet" look="primary">
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
			</List>

			<h3>Hero</h3>
			<List type="bullet" look="hero">
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
			</List>

			<h3>Neutral</h3>
			<List type="bullet" look="neutral">
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
			</List>

			<h3>Nesting with cascading look</h3>

			<h4>Default / neutral</h4>
			<List>
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>
					Styled bullet list
					<List>
						<Item>Styled bullet list</Item>
						<Item>
							Styled bullet list
							<List look="neutral">
								<Item>Styled bullet list - neutral</Item>
								<Item>Styled bullet list - neutral</Item>
								<Item>Styled bullet list - neutral</Item>
							</List>
						</Item>
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
				</Item>
				<Item>Styled bullet list</Item>
			</List>

			<h4>Hero / neutral</h4>
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

			<h4>Neutral / primary</h4>
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

			<hr />

			<h2>Tick</h2>

			<h3>Hero</h3>
			<List type="tick" look="hero">
				<Item>Styled tick list - hero</Item>
				<Item>Styled tick list - hero</Item>
				<Item>Styled tick list - hero</Item>
				<Item>
					Styled tick list - hero
					<List>
						<Item>Styled tick list - hero</Item>
						<Item>Styled tick list - hero</Item>
						<Item>Styled tick list - hero</Item>
					</List>
				</Item>
				<Item>Styled tick list - hero</Item>
			</List>

			<h3>Success</h3>
			<List type="tick" look="success">
				<Item>Styled tick list - success</Item>
				<Item>Styled tick list - success</Item>
				<Item>Styled tick list - success</Item>
				<Item>
					Styled tick list - success
					<List>
						<Item>Styled tick list - success</Item>
						<Item>Styled tick list - success</Item>
						<Item>Styled tick list - success</Item>
					</List>
				</Item>
				<Item>Styled tick list - success</Item>
			</List>

			<br />
			<hr />

			<h2>Cross</h2>

			<h3>Hero</h3>
			<List type="cross" look="hero">
				<Item>Styled cross list - hero</Item>
				<Item>Styled cross list - hero</Item>
				<Item>Styled cross list - hero</Item>
				<Item>
					Styled cross list - hero
					<List>
						<Item>Styled cross list - hero</Item>
						<Item>Styled cross list - hero</Item>
						<Item>Styled cross list - hero</Item>
					</List>
				</Item>
				<Item>Styled cross list - hero</Item>
			</List>

			<h3>Danger</h3>
			<List type="cross" look="danger">
				<Item>Styled cross list - danger</Item>
				<Item>Styled cross list - danger</Item>
				<Item>Styled cross list - danger</Item>
				<Item>
					Styled cross list - danger
					<List>
						<Item>Styled cross list - danger</Item>
						<Item>Styled cross list - danger</Item>
						<Item>Styled cross list - danger</Item>
					</List>
				</Item>
				<Item>Styled cross list - danger</Item>
			</List>

			<br />
			<hr />

			<h2>Icon</h2>

			<h3>Primary</h3>
			<List type="icon" icon={AndroidIcon} look="primary">
				<Item>Styled icon list - primary</Item>
				<Item>Styled icon list - primary</Item>
				<Item>Styled icon list - primary</Item>
				<Item>
					Styled icon list - primary
					<List>
						<Item>Styled icon list - primary</Item>
						<Item>Styled icon list - primary</Item>
						<Item>Styled icon list - primary</Item>
					</List>
				</Item>
				<Item>Styled icon list - primary</Item>
			</List>

			<h3>Hero</h3>
			<List type="icon" icon={AndroidIcon} look="hero">
				<Item>Styled icon list - hero</Item>
				<Item>Styled icon list - hero</Item>
				<Item>Styled icon list - hero</Item>
				<Item>
					Styled icon list - hero
					<List>
						<Item>Styled icon list - hero</Item>
						<Item>Styled icon list - hero</Item>
						<Item>Styled icon list - hero</Item>
					</List>
				</Item>
				<Item>Styled icon list - hero</Item>
			</List>

			<h3>Neutral</h3>
			<List type="icon" icon={AndroidIcon} look="neutral">
				<Item>Styled icon list - neutral</Item>
				<Item>Styled icon list - neutral</Item>
				<Item>Styled icon list - neutral</Item>
				<Item>
					Styled icon list - neutral
					<List>
						<Item>Styled icon list - neutral</Item>
						<Item>Styled icon list - neutral</Item>
						<Item>Styled icon list - neutral</Item>
					</List>
				</Item>
				<Item>Styled icon list - neutral</Item>
			</List>
		</GEL>
	);
}

export default Example;
