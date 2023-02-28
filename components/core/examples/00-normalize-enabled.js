import { GEL, jsx } from '@westpac/core';
import { NormalizeHtml } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand} normalize>
			<h2>Normalize enabled</h2>
			<NormalizeHtml />
		</GEL>
	);
}

export default Example;
