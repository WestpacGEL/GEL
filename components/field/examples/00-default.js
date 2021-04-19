/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Field } from '@westpac/field';
import { TextInput } from '@westpac/text-input';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Field label="Text input example" hint="I am a text input">
				{(inputProps) => <TextInput {...inputProps} />}
			</Field>
			<br />
			{/* <Field
				label="Select input example"
				hint="I am a select input"
				inputType="select"
				data={[
					{ text: 'Select', value: '' },
					{ text: '1', value: '', onClick: () => console.log('Selected 1') },
					{ text: '2', value: '', onClick: () => console.log('Selected 2') },
					{ text: '3', value: '', onClick: () => console.log('Selected 3') },
				]}
			/>
			<br />
			<Field label="Text input with error" hint="I have an error" error="Im an error" /> */}
			<h4>Visually hidden label</h4>
			<Field hideLabel label="Hidden label" hint="I have a hidden label">
				{(inputProps) => <TextInput {...inputProps} />}
			</Field>
		</GEL>
	);
}

export default Example;
