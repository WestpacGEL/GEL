/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<Switch name="example-checked" label="Turn notifications" checked />
		</GEL>
	);
}

export default Example;
