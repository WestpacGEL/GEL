/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	return (
		<Playground context={context} brand={brand}>
			<Intopia />

			<Switch name="example-checked" label="Turn notifications" checked />
		</Playground>
	);
}

export default Example;
