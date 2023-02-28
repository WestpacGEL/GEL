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
			<Select name="example-default">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select name="example-optgroup">
				<optgroup label="An optgroup">
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</optgroup>
			</Select>

			<hr />

			<h2>Selected</h2>

			<h3>Preselected via value</h3>
			<Select name="example-selectedvalue" value="2">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>

			<h3>Preselected via attribute</h3>
			<Select name="example-selectedattribute">
				<option>Select</option>
				<option>1</option>
				<option selected>2</option>
				<option>3</option>
			</Select>

			<hr />

			<h2>Controlled</h2>
			<Select name="example-controlled" value={value} onChange={handleChange}>
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>

			<hr />

			<h2>Data driven</h2>

			<h3>Not preselected</h3>
			<Select
				name="example-datadriven"
				data={[
					{ text: 'Select', value: '' },
					{ text: '1', value: '', onClick: () => console.log('Selected 1') },
					{ text: '2', value: '', onClick: () => console.log('Selected 2') },
					{ text: '3', value: '', onClick: () => console.log('Selected 3') },
				]}
			/>

			<h3>Preselected via value</h3>
			<Select
				name="example-datadriven-selectedvalue"
				data={[
					{ text: 'Select', value: '' },
					{ text: '1', value: '1', onClick: () => console.log('Selected 1') },
					{ text: '2', value: '2', onClick: () => console.log('Selected 2') },
					{ text: '3', value: '3', onClick: () => console.log('Selected 3') },
				]}
				value="2"
			/>

			<h3>Preselected via attribute</h3>
			<Select
				name="example-datadriven-selectedattribute"
				data={[
					{ text: 'Select', value: '' },
					{ text: '1', value: '1', onClick: () => console.log('Selected 1') },
					{ text: '2', value: '2', onClick: () => console.log('Selected 2'), selected: true },
					{ text: '3', value: '3', onClick: () => console.log('Selected 3') },
				]}
			/>

			<hr />

			<h2>Sizes</h2>
			<Select name="example-small" size="small">
				<option>Small</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select name="example-medium" size="medium">
				<option>Medium</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select name="example-large" size="large">
				<option>Large</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select name="example-xlarge" size="xlarge">
				<option>XLarge</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>

			<hr />

			<h2>Invalid</h2>
			<Select name="example-invalid" invalid>
				<option>Invalid</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>

			<hr />

			<h2>Disabled</h2>
			<Select name="example-disabled" disabled>
				<option>disabled</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>

			<hr />

			<h2>Inline</h2>
			<Form action="#">
				<Select name="example-inline1" inline>
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</Select>{' '}
				<Select name="example-inline2" inline>
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</Select>{' '}
				<Button type="submit">Submit</Button>
			</Form>

			<hr />

			<h2>Fixed width</h2>
			<Select name="example-width-2" width={2}>
				<option>Size 2</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select name="example-width-3" width={3}>
				<option>Size 3</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select name="example-width-4" width={4}>
				<option>Size 4</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select name="example-width-5" width={5}>
				<option>Size 5</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select name="example-width-10" width={10}>
				<option>Size 10</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select name="example-width-20" width={20}>
				<option>Size 20</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Select name="example-width-30" width={30}>
				<option>Size 30</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
		</GEL>
	);
}

export default Example;
