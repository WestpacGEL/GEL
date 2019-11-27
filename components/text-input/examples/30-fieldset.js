/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Text, Textarea, Select } from '@westpac/text-input';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia/>

			<h2>Default</h2>
			<fieldset>
				<legend>Legend</legend>
				<Text />
				<br />
				<Select>
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
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
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</Select>
				<br />
				<Textarea />
			</fieldset>
		</GEL>
	);
}

export default Example;
