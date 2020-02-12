/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import { Button } from '@westpac/button';
import { Form } from '@westpac/form';
import { useState } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ context }) {
	const [value, setValue] = useState('default text');

	const handleChange = event => {
		setValue(event.target.value);
	};

	return (
		<Playground context={context} brand={brand}>
			<Intopia />

			<h2>Default instance</h2>
			<TextInput />

			<h2>Controlled</h2>
			<TextInput defaultValue={value} onChange={handleChange} />
			<br />
			<hr />

			<h2>Size</h2>
			<TextInput size="small" placeholder="small" />
			<br />
			<TextInput size="medium" placeholder="medium" />
			<br />
			<TextInput size="large" placeholder="large" />
			<br />
			<TextInput size="xlarge" placeholder="xlarge" />
			<br />

			<hr />

			<h2>Invalid</h2>
			<TextInput invalid />
			<br />

			<hr />

			<h2>Disabled</h2>
			<TextInput disabled />
			<br />
			<TextInput disabled defaultValue="This input is disabled and contains a value" />
			<br />

			<hr />

			<h2>Readonly</h2>
			<TextInput readOnly defaultValue="This value is readonly" />
			<br />

			<hr />

			<h2>Inline</h2>
			<Form action="#">
				<TextInput inline /> <TextInput inline /> <Button type="submit">Submit</Button>
			</Form>
			<br />

			<hr />

			<h2>Fixed width</h2>
			<TextInput width={2} placeholder={2} />
			<br />
			<TextInput width={3} placeholder={3} />
			<br />
			<TextInput width={4} placeholder={4} />
			<br />
			<TextInput width={5} placeholder={5} />
			<br />
			<TextInput width={10} placeholder={10} />
			<br />
			<TextInput width={20} placeholder={20} />
			<br />
			<TextInput width={30} placeholder={30} />
		</Playground>
	);
}

export default Example;
