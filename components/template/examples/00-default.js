/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Template } from '@westpac/template';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Template />
		</GEL>
	);
}

export default Example;
