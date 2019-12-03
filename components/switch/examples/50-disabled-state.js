/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<Switch name="example-disabled" id="example-disabled" label="Turn notifications" disabled />
		</GEL>
	);
}

export default Example;
