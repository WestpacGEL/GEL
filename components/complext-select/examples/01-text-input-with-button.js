import { GEL, jsx } from '@westpac/core';
import { TextInputWithButton } from '@westpac/text-input';
import { Button } from '@westpac/button';
import { Form } from '@westpac/form';
import { useState } from 'react';

import { UmbrellaIcon } from '@westpac/icon';

function Example({ brand }) {
	const [value, setValue] = useState('default text');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<TextInputWithButton btnIcon={UmbrellaIcon} />
			<hr />

			<h2>Controlled</h2>
			<TextInputWithButton btnIcon={UmbrellaIcon} defaultValue={value} onChange={handleChange} />
			<hr />

			<h2>Size</h2>
			<TextInputWithButton btnIcon={UmbrellaIcon} size="small" placeholder="small" />
			<br />
			<br />
			<TextInputWithButton btnIcon={UmbrellaIcon} size="medium" placeholder="medium" />
			<br />
			<br />
			<TextInputWithButton btnIcon={UmbrellaIcon} size="large" placeholder="large" />
			<br />
			<br />
			<TextInputWithButton btnIcon={UmbrellaIcon} size="xlarge" placeholder="xlarge" />

			<hr />

			<h2>Invalid</h2>
			<TextInputWithButton btnIcon={UmbrellaIcon} invalid />

			<hr />

			<h2>Disabled</h2>
			<TextInputWithButton btnIcon={UmbrellaIcon} disabled />
			<br />
			<br />
			<TextInputWithButton
				btnIcon={UmbrellaIcon}
				defaultValue="This input is disabled and contains a value"
				disabled
			/>

			<hr />

			<h2>Read-only</h2>
			<TextInputWithButton btnIcon={UmbrellaIcon} defaultValue="This value is readonly" readOnly />

			<hr />

			<h2>Inline</h2>
			<Form action="#">
				<TextInputWithButton btnIcon={UmbrellaIcon} inline />{' '}
				<TextInputWithButton btnIcon={UmbrellaIcon} inline /> <Button type="submit">Submit</Button>
			</Form>

			<hr />

			<h2>Fixed width</h2>
			<TextInputWithButton btnIcon={UmbrellaIcon} width={2} placeholder={2} />
			<br />
			<br />
			<TextInputWithButton btnIcon={UmbrellaIcon} width={3} placeholder={3} />
			<br />
			<br />
			<TextInputWithButton btnIcon={UmbrellaIcon} width={4} placeholder={4} />
			<br />
			<br />
			<TextInputWithButton btnIcon={UmbrellaIcon} width={5} placeholder={5} />
			<br />
			<br />
			<TextInputWithButton btnIcon={UmbrellaIcon} width={10} placeholder={10} />
			<br />
			<br />
			<TextInputWithButton btnIcon={UmbrellaIcon} width={20} placeholder={20} />
			<br />
			<br />
			<TextInputWithButton btnIcon={UmbrellaIcon} width={30} placeholder={30} />
		</GEL>
	);
}

export default Example;
