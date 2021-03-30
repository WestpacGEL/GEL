/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { TextInput, Textarea, Select } from '@westpac/text-input';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/text-input'] = {
		TextInput: {
			styles: (styles) => ({
				...styles,
				borderColor: 'palevioletred',
			}),
		},
		Select: {
			styles: (styles) => ({
				...styles,
				borderColor: 'forestgreen',
			}),
		},
		Textarea: {
			styles: (styles) => ({
				...styles,
				borderColor: 'royalblue',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<TextInput />
			<br />
			<br />
			<Select name="thing">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Textarea />

			<hr />

			<h2>With overrides and component overrides</h2>
			<TextInput
				overrides={{
					TextInput: {
						styles: (styles) => ({ ...styles, borderWidth: '3px' }),
					},
				}}
			/>
			<br />
			<br />
			<Select
				name="thing"
				overrides={{
					Select: {
						styles: (styles) => ({ ...styles, borderWidth: '3px' }),
					},
				}}
			>
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Textarea
				overrides={{
					Textarea: {
						styles: (styles) => ({ ...styles, borderWidth: '3px' }),
					},
				}}
			/>
		</GEL>
	);
}

export default Example;
