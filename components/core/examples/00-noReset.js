/** @jsx jsx */

import { GEL, jsx, useBrand } from '@westpac/core';

function Example({ brand }) {
	const { COLORS } = useBrand();
	const { tints, ...primaryColors } = COLORS;

	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<GEL brand={brand}>Your app</GEL>

			<hr />
			<h2>No reset</h2>
			<GEL brand={brand} noReset>
				Your app
			</GEL>
		</GEL>
	);
}

export default Example;
