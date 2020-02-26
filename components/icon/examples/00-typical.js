/** @jsx jsx */

import { jsx } from '@westpac/core';
import { HouseIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

function Example({ context }) {
	return (
		<Playground context={context}>
			<Intopia />

			<HouseIcon />
		</Playground>
	);
}

export default Example;
