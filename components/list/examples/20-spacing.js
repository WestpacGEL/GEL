/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h3>Medium</h3>
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
			<br />

			<h3>Large</h3>
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
