/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	const [checked, setChecked] = useState(false);

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

			<h2>Default instance (no styling props)</h2>
			<Switch name="example-default" label="Turn notifications" />
			<h2>Controlled</h2>
			<Switch
				name="example-checked"
				label={'Turn notifications'}
				checked={checked}
				onChange={() => {
					console.log('Controlled');
					setChecked(!checked);
				}}
			/>
		</Playground>
	);
};
