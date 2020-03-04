/** @jsx jsx */

import { jsx } from '@westpac/core';
import { HouseIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

			<HouseIcon />
		</Playground>
	);
};
