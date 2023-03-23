import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { ComplexSelect, Item } from '@westpac/complex-select';
import { Button } from '@westpac/button';
import { Form } from '@westpac/form';

function Example({ brand }) {
	const [value, setValue] = useState();
	const [selectedKey, setSelectedKey] = useState('1');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<ComplexSelect name="example-default">
				<Item>Select</Item>
				<Item key="1">1</Item>
				<Item key="2">2</Item>
				<Item key="3">3</Item>
			</ComplexSelect>

			<ComplexSelect
				selectedKey={selectedKey}
				onSelectionChange={(key) => setSelectedKey(key)}
				name="example-default"
			>
				<Item key="">Select</Item>
				<Item key="1">1</Item>
				<Item key="2">2</Item>
				<Item key="3">3</Item>
			</ComplexSelect>
			<br />
			<br />
			{/* <ComplexSelect name="example-optgroup">
				<optgroup label="An optgroup">
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</optgroup>
			</ComplexSelect>

			<hr />

			<h2>Selected</h2>

			<h3>Preselected via value</h3>
			<ComplexSelect name="example-selectedvalue" value="2">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>

			<h3>Preselected via attribute</h3>
			<ComplexSelect name="example-selectedattribute">
				<option>Select</option>
				<option>1</option>
				<option selected>2</option>
				<option>3</option>
			</ComplexSelect>

			<hr />

			<h2>Controlled</h2>
			<ComplexSelect name="example-controlled" value={value} onChange={handleChange}>
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>

			<hr />

			<h2>Data driven</h2>

			<h3>Not preselected</h3>
			<ComplexSelect
				name="example-datadriven"
				data={[
					{ text: 'Select', value: '' },
					{ text: '1', value: '', onClick: () => console.log('Selected 1') },
					{ text: '2', value: '', onClick: () => console.log('Selected 2') },
					{ text: '3', value: '', onClick: () => console.log('Selected 3') },
				]}
			/>

			<h3>Preselected via value</h3>
			<ComplexSelect
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
			<ComplexSelect
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
			<ComplexSelect name="example-small" size="small">
				<option>Small</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>
			<br />
			<br />
			<ComplexSelect name="example-medium" size="medium">
				<option>Medium</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>
			<br />
			<br />
			<ComplexSelect name="example-large" size="large">
				<option>Large</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>
			<br />
			<br />
			<ComplexSelect name="example-xlarge" size="xlarge">
				<option>XLarge</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>

			<hr />

			<h2>Invalid</h2>
			<ComplexSelect name="example-invalid" invalid>
				<option>Invalid</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>

			<hr />

			<h2>Disabled</h2>
			<ComplexSelect name="example-disabled" disabled>
				<option>disabled</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>

			<hr />

			<h2>Inline</h2>
			<Form action="#">
				<ComplexSelect name="example-inline1" inline>
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</ComplexSelect>{' '}
				<ComplexSelect name="example-inline2" inline>
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</ComplexSelect>{' '}
				<Button type="submit">Submit</Button>
			</Form>

			<hr />

			<h2>Fixed width</h2>
			<ComplexSelect name="example-width-2" width={2}>
				<option>Size 2</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>
			<br />
			<br />
			<ComplexSelect name="example-width-3" width={3}>
				<option>Size 3</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>
			<br />
			<br />
			<ComplexSelect name="example-width-4" width={4}>
				<option>Size 4</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>
			<br />
			<br />
			<ComplexSelect name="example-width-5" width={5}>
				<option>Size 5</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>
			<br />
			<br />
			<ComplexSelect name="example-width-10" width={10}>
				<option>Size 10</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>
			<br />
			<br />
			<ComplexSelect name="example-width-20" width={20}>
				<option>Size 20</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect>
			<br />
			<br />
			<ComplexSelect name="example-width-30" width={30}>
				<option>Size 30</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</ComplexSelect> */}
		</GEL>
	);
}

export default Example;
