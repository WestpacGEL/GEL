import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

function Example({ brand }) {
	const [checked, setChecked] = useState(false);

	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Switch name="example-default" label="eStatements" />
			<h2>Controlled</h2>
			<Switch
				name="example-controlled"
				label={'eStatements'}
				checked={checked}
				onChange={() => {
					console.log(`Controlled: ${JSON.stringify(!checked)}`);
					setChecked(!checked);
				}}
			/>
		</GEL>
	);
}

export default Example;
