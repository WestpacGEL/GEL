import { GEL, jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<List>
				<Item>Medium list spacing</Item>
				<Item>Medium list spacing</Item>
				<Item>Medium list spacing</Item>
				<Item>
					Medium list spacing
					<List>
						<Item>Medium list spacing</Item>
						<Item>Medium list spacing</Item>
						<Item>Medium list spacing</Item>
					</List>
				</Item>
				<Item>Medium list spacing</Item>
			</List>

			<br />
			<hr />

			<h2>Medium</h2>
			<List spacing="medium">
				<Item>Medium list spacing</Item>
				<Item>Medium list spacing</Item>
				<Item>Medium list spacing</Item>
				<Item>
					Medium list spacing
					<List>
						<Item>Medium list spacing</Item>
						<Item>Medium list spacing</Item>
						<Item>Medium list spacing</Item>
					</List>
				</Item>
				<Item>Medium list spacing</Item>
			</List>

			<br />
			<hr />

			<h2>Large</h2>
			<List spacing="large">
				<Item>Large list spacing</Item>
				<Item>Large list spacing</Item>
				<Item>Large list spacing</Item>
				<Item>
					Large list spacing
					<List>
						<Item>Large list spacing</Item>
						<Item>Large list spacing</Item>
						<Item>Large list spacing</Item>
					</List>
				</Item>
				<Item>Large list spacing</Item>
			</List>
		</GEL>
	);
}

export default Example;
