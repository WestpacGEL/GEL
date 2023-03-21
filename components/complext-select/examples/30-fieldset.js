import { GEL, jsx } from '@westpac/core';
import { TextInput, Textarea, Select } from '@westpac/text-input';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<fieldset>
				<legend>Legend</legend>
				<TextInput />
				<br />
				<br />
				<Select>
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</Select>
				<br />
				<br />
				<Textarea />
			</fieldset>

			<hr />

			<h2>Disabled</h2>
			<fieldset disabled>
				<legend>Legend</legend>
				<TextInput />
				<br />
				<br />
				<Select>
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</Select>
				<br />
				<br />
				<Textarea />
			</fieldset>
		</GEL>
	);
}

export default Example;
