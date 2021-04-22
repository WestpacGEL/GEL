/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { NormalizeHtml } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Normalize disabled (default)</h2>
			<NormalizeHtml />
		</GEL>
	);
}

export default Example;
