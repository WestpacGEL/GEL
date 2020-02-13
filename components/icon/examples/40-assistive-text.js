/** @jsx jsx */

import { jsx } from '@westpac/core';
import { FavouriteIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	return (
		<Playground context={context}>
			<Intopia />

			<h2>Assistive text (screen reader text)</h2>
			<FavouriteIcon assistiveText="Love heart" />
		</Playground>
	);
}

export default Example;
