/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import { Button } from '@westpac/button';
import { Form } from '@westpac/form';
import { useState } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const [value, setValue] = useState('default text');

	const handleChange = event => {
		setValue(event.target.value);
	};

	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Default</h2>
			<TextInput />

			<hr />

			<h2>Controlled</h2>
			<TextInput defaultValue={value} onChange={handleChange} />
			<hr />

			<h2>Size</h2>
			<TextInput size="small" placeholder="small" />
			<br />
			<TextInput size="medium" placeholder="medium" />
			<br />
			<TextInput size="large" placeholder="large" />
			<br />
			<TextInput size="xlarge" placeholder="xlarge" />

			<hr />

			<h2>Invalid</h2>
			<TextInput invalid />

			<hr />

			<h2>Disabled</h2>
			<TextInput disabled />
			<br />
			<TextInput disabled defaultValue="This input is disabled and contains a value" />

			<hr />

			<h2>Readonly</h2>
			<TextInput readOnly defaultValue="This value is readonly" />

			<hr />

			<h2>Inline</h2>
			<Form action="#">
				<TextInput inline /> <TextInput inline /> <Button type="submit">Submit</Button>
			</Form>

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
		</GEL>
	);
}

export default Example;
