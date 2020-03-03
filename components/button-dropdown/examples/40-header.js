/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ButtonDropdown } from '@westpac/button-dropdown';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />
			<h2>Default header</h2>
			<ButtonDropdown headerText="Dropdown header" text="Default Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<h2>Header as h4</h2>
			<ButtonDropdown headerText="Dropdown header" headerTag="h4" text="Default Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
		</GEL>
	);
}

export default Example;
