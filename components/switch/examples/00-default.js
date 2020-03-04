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

			<h2>Default</h2>
			<Switch name="example-default" label="eStatements" />
			<h2>Controlled</h2>
			<Switch
				name="example-controlled"
				label={'eStatements'}
				checked={checked}
				onChange={() => {
					console.log(`Controlled = ${JSON.stringify(!checked)}`);
					setChecked(!checked);
				}}
			/>
		</Playground>
	);
};
