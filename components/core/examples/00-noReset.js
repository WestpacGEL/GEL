/** @jsx jsx */

import { GEL, jsx, useBrand } from '@westpac/core';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const { COLORS } = useBrand();
	const { tints, ...primaryColors } = COLORS;

	return (
		<GEL brand={brand}>
			<Intopia ignore />

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
