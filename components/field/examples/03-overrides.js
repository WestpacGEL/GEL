/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Field, Fieldset } from '@westpac/field';
import { TextInput } from '@westpac/text-input';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/field'] = {
		Field: {
			styles: (styles) => ({
				...styles,
				border: '1px solid palevioletred',
				padding: '1rem',
			}),
		},
		Fieldset: {
			styles: (styles) => ({
				...styles,
				border: '1px solid forestgreen',
				padding: '1rem',
			}),
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<Field label="Text input example" hint="I am a text input">
				{(inputProps) => <TextInput {...inputProps} />}
			</Field>
			<br />
			<Fieldset legend="I am legend" hint="I am a hint">
				<TextInput />
			</Fieldset>

			<hr />

			<h2>With overrides and component overrides</h2>
			<Field
				label="Text input example"
				hint="I am a text input"
				overrides={{
					Field: {
						styles: (styles) => ({ ...styles, border: '2px dotted MediumVioletRed' }),
					},
				}}
			>
				{(inputProps) => <TextInput {...inputProps} />}
			</Field>
			<br />
			<Fieldset
				legend="I am legend"
				hint="I am a hint"
				overrides={{
					Fieldset: {
						styles: (styles) => ({ ...styles, border: '2px dotted DarkOrchid' }),
					},
				}}
			>
				<TextInput />
			</Fieldset>
		</GEL>
	);
}

export default Example;
