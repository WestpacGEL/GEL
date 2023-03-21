import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Textarea } from '@westpac/text-input';
import { Form } from '@westpac/form';

const sizes = ['small', 'medium', 'large', 'xlarge'];
const widths = [2, 3, 4, 5, 10, 20, 30];

function Example({ brand }) {
	const [value, setValue] = useState('default text');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Textarea />

			<hr />

			<h2>Controlled</h2>
			<Textarea value={value} onChange={handleChange} />
			<hr />

			<h2>Size</h2>
			<Textarea size="small" placeholder="small" />
			<br />
			<br />
			<Textarea size="medium" placeholder="medium" />
			<br />
			<br />
			<Textarea size="large" placeholder="large" />
			<br />
			<br />
			<Textarea size="xlarge" placeholder="xlarge" />

			<hr />

			<h2>Invalid</h2>
			<Textarea placeholder="invalid" invalid />

			<hr />

			<h2>Disabled</h2>
			<Textarea disabled />
			<br />
			<br />
			<Textarea defaultValue="This textarea is disabled and contains a value" disabled />

			<hr />
			<h2>Read-only</h2>
			<Textarea defaultValue="This value is readonly" readOnly />

			<hr />

			<h2>Inline</h2>
			<Form>
				<Textarea inline /> <Textarea inline />
			</Form>

			<hr />

			<h2>Fixed width</h2>
			<Textarea width={2} placeholder={'W'.repeat(2)} />
			<br />
			<br />
			<Textarea width={3} placeholder={'W'.repeat(3)} />
			<br />
			<br />
			<Textarea width={4} placeholder={'W'.repeat(4)} />
			<br />
			<br />
			<Textarea width={5} placeholder={'W'.repeat(5)} />
			<br />
			<br />
			<Textarea width={10} placeholder={'W'.repeat(10)} />
			<br />
			<br />
			<Textarea width={20} placeholder={'W'.repeat(20)} />
			<br />
			<br />
			<Textarea width={30} placeholder={'W'.repeat(30)} />
		</GEL>
	);
}

export default Example;
