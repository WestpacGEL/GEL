/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { listGenerator } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Reset nesting level</h2>
			<List type="ordered">
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>
					Styled ordered list
					<List type="bullet" nested={0}>
						<Item>Styled bullet list</Item>
						<Item>Styled bullet list</Item>
						<Item>Styled bullet list</Item>
					</List>
				</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
			</List>

			<br />
			<hr />
			<br />

			<List>
				<Item>Styled bullet list - primary</Item>
				<Item>Styled bullet list - primary</Item>
				<Item>Styled bullet list - primary</Item>
				<Item>
					Styled bullet list - primary
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
									<List nested={0}>
										<Item>Styled bullet list - Reset to level 0 nesting</Item>
										<Item>Styled bullet list - Reset to level 0 nesting</Item>
										<Item>Styled bullet list - Reset to level 0 nesting</Item>
									</List>
								</Item>
								<Item>Styled bullet list - primary</Item>
							</List>
						</Item>
						<Item>Styled bullet list - primary</Item>
					</List>
				</Item>
				<Item>Styled bullet list - primary</Item>
			</List>
		</GEL>
	);
}

export default Example;
