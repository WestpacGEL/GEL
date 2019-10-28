/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
// import { Switch } from '@westpac/switch';
import { Switch } from '../src/Switch-v2';

function Example({ brand }) {
	const [checked, setChecked] = useState(false);

	return (
		<GEL brand={brand}>
			<h2>Default instance (no styling props)</h2>
			<Switch name="example-default" label="Turn notifications" />

			{/* <Switch
				name="example-default"
				label="Turn notifications"
				checked={checked}
				onChange={() => setChecked(!checked)}
			/> */}
		</GEL>
	);
}

export default Example;
