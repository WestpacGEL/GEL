/** @jsx jsx */

import { jsx } from '@westpac/core';
import { HouseIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<Playground context={context} brand={brand}>
			<Intopia />

			<HouseIcon />
		</Playground>
	);
}

export default Example;
