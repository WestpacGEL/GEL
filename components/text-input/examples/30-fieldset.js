/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Text, Textarea, Select } from '@westpac/text-input';

// Example options
const options = ['Select', '1', '2', '3'];

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<fieldset>
				<legend>Legend</legend>
				<Text />
				<br />
				<Select>
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</Select>
				<br />
				<Textarea />
			</fieldset>

			<hr />

			<h2>Disabled</h2>
			<fieldset disabled>
				<legend>Legend</legend>
				<Text />
				<br />
				<Select>
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</Select>
				<br />
				<Textarea />
			</fieldset>
		</GEL>
	);
}

export default Example;
