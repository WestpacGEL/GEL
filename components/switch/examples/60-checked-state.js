/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Switch name="example-checked" checked>
				Turn notifications
			</Switch>
		</GEL>
	);
}

export default Example;
