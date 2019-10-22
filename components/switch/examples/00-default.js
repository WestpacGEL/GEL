/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default instance (no styling props)</h2>
			<Switch name="example-default">Turn notifications</Switch>
		</GEL>
	);
}

export default Example;
