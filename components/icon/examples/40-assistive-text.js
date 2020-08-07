/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { FavouriteIcon } from '@westpac/icon';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Assistive text (screen reader text)</h2>
			<FavouriteIcon assistiveText="Love heart" />
		</GEL>
	);
}

export default Example;
