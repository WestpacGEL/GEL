/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<Playground brand={brand}>
			<Intopia />

			<Switch name="example-disabled" label="Turn notifications" disabled />
		</Playground>
	);
}

export default Example;
