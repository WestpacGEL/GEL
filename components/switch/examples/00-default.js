/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const [checked, setChecked] = useState(false);

	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Default instance (no styling props)</h2>
			<Switch name="example-default" id="example-default" label="Turn notifications" />
			<h2>Controlled</h2>
			<Switch
				name="example-checked"
				id="example-checked"
				label={'Turn notifications'}
				checked={checked}
				onChange={() => {
					console.log('Controlled');
					setChecked(!checked);
				}}
			/>
		</GEL>
	);
}

export default Example;
