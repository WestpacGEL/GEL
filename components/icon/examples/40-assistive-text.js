/** @jsx jsx */

import { jsx } from '@westpac/core';
import { FavouriteIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<Playground brand={brand}>
			<Intopia />

			<h2>Assistive text (screen reader text)</h2>
			<FavouriteIcon assistiveText="Love heart" />
		</Playground>
	);
}

export default Example;
