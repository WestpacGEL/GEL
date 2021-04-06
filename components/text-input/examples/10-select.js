/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Select } from '@westpac/text-input';
import { Button } from '@westpac/button';
import { Form } from '@westpac/form';

function Example({ brand }) {
	const [value, setValue] = useState();

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Select name="thing">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>

			<hr />

			<h2>Controlled</h2>
			<Select name="thing" value={value} onChange={handleChange}>
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>

			<hr />

			<h2>Data driven</h2>
			<Select
				data={[
					{ text: 'Select', value: '' },
					{ text: '1', value: '', onClick: () => console.log('Selected 1') },
					{ text: '2', value: '', onClick: () => console.log('Selected 2') },
					{ text: '3', value: '', onClick: () => console.log('Selected 3') },
				]}
			/>

			<hr />

			<h2>Sizes</h2>
			<Select size="small">
				<option>Small</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select>
				<option>Medium</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select size="large">
				<option>Large</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select size="xlarge">
				<option>XLarge</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>

			<hr />

			<h2>Invalid</h2>
			<Select invalid>
				<option>Invalid</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>

			<hr />

			<h2>Disabled</h2>
			<Select disabled>
				<option>disabled</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>

			<hr />

			<h2>Inline</h2>
			<Form action="#">
				<Select inline>
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</Select>{' '}
				<Select inline>
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</Select>{' '}
				<Button type="submit">Submit</Button>
			</Form>

			<hr />

			<h2>Fixed width</h2>
			<Select width={2}>
				<option>Size 2</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select width={3}>
				<option>Size 3</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select width={4}>
				<option>Size 4</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select width={5}>
				<option>Size 5</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select width={10}>
				<option>Size 10</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select width={20}>
				<option>Size 20</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select width={30}>
				<option>Size 30</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
		</GEL>
	);
}

export default Example;
