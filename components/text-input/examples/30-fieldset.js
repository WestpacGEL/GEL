/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput, Textarea, Select } from '@westpac/text-input';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	return (
		<Playground context={context}>
			<Intopia />

			<h2>Default</h2>
			<fieldset>
				<legend>Legend</legend>
				<TextInput />
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
				<TextInput />
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
		</Playground>
	);
}

export default Example;
