/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Text, Textarea, Select } from '@westpac/text-input';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/text-input'] = {
		textCSS: {
			borderColor: 'palevioletred',
		},
		textareaCSS: {
			borderColor: 'lightseagreen',
		},
		selectCSS: {
			borderColor: 'royalblue',
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<Text />
			<br />
			<Select name="thing">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<Textarea />
		</GEL>
	);
}

export default Example;
