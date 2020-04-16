/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ButtonDropdown } from '@westpac/button-dropdown';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />
			<h2>Default Open</h2>
			<ButtonDropdown text="Default Dropdown" open={true}>
				<p>Example dropdown content...</p>
			</ButtonDropdown>{' '}
		</GEL>
	);
}

export default Example;
