/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

function Example({ brand }) {
	const [checked, setChecked] = useState(false);

	return (
		<GEL brand={brand}>
			<h2>Default instance (no styling props)</h2>
			<Switch name="example-default">Turn notifications</Switch>
		</GEL>
	);
}

export default Example;
