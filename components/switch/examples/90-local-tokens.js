/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

const LabelNew = props => (
	<strong css={{ color: 'palevioletred', paddingRight: '2rem' }} {...props} />
);

function Example({ brand }) {
	const [checked, setChecked] = useState(false);
	const brandWithTokens = { ...brand };

	brandWithTokens['@westpac/switch'] = {
		toggleCSS: {
			borderColor: 'mediumVioletred',
			backgroundColor: checked ? 'paleVioletRed' : 'white',
		},
		toggleTextCSS: { color: checked ? 'white' : 'firebrick' },
		Label: LabelNew,
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
