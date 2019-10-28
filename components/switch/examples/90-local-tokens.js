/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

function Example({ brand }) {
	const [checked, setChecked] = useState(false);
	const brandWithTokens = { ...brand };

	brandWithTokens['@westpac/switch'] = {
		labelCss: {
			padding: '10px',
		},
		textCss: {
			color: 'palevioletred',
		},
		toggleCss: {
			borderColor: 'mediumVioletred',
			backgroundColor: checked ? 'paleVioletRed' : 'white',
		},
		toggleTextCss: { color: checked ? 'white' : 'firebrick' },
	};

	return (
		<GEL brand={brandWithTokens}>
			<h2>With local tokens applied</h2>
			<Switch
				name="example-default"
				label="Turn notifications"
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
		</GEL>
	);
}

export default Example;
