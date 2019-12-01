/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import svgToTinyDataURI from 'mini-svg-data-uri';
import { List, Item } from '@westpac/list';
import { HouseIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/list'] = {
		css: {
			outline: '1px solid red',
		},
		nestedCSS: {
			1: {
				outline: '3px dotted blue',
			},
		},
		tickCSS: {
			'::before': {
				backgroundImage: `url("${svgToTinyDataURI(
					'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><polygon fill="black" points="8.6 15.6 4.4 11.4 3 20.8 8.6 18.4 20.6 6.4 19.2 5"/></svg>'
				)}")`,
			},
		},
		Icon: HouseIcon,
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<List type="icon">
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

			<List type="tick">
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
								<Item>Styled bullet list - primary</Item>
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
