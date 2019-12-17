/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Text, Textarea, Select } from '@westpac/text-input';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/text-input'] = {
		subComponent: {
			Text: {
				styles: styles => ({
					...styles,
					borderColor: 'palevioletred',
				}),
			},
			Select: {
				styles: styles => ({
					...styles,
					borderColor: 'forestgreen',
				}),
			},
			Textarea: {
				styles: styles => ({
					...styles,
					borderColor: 'royalblue',
				}),
			},
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />

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

			<h2>With overrides and component overrides</h2>
			<Text
			// overrides={{
			// 	subComponent: {
			// 		Text: {
			// 			styles: styles => ({ ...styles, backgroundColor: 'red' }),
			// 		},
			// 	},
			// }}
			/>
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
