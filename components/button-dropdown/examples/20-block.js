/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ButtonDropdown } from '@westpac/button-dropdown';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />
			<h2>Block</h2>
			<ButtonDropdown look="primary" block text="Primary Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<h3>Responsive Block</h3>
			<ButtonDropdown look="primary" block={[true, false, true, false]} text="Primary Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
		</GEL>
	);
}

export default Example;
