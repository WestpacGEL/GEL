import { GEL, jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';
import { useState } from 'react';

function Example({ brand }) {
	const [formCheckValue, setFormCheckValue] = useState(['1', '3']);

	const [loneRanger1, setLoneRanger1] = useState(false);
	const [loneRanger2, setLoneRanger2] = useState(true);

	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<FormCheck name="example-default">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<hr />

			<h2>Types</h2>

			<h3>Checkbox</h3>
			<FormCheck type="checkbox" name="example-checkbox">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<h3>Radio</h3>
			<FormCheck type="radio" name="example-radio">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<hr />

			<h2>Long lines</h2>

			<h3>Checkbox</h3>
			<FormCheck type="checkbox" name="example-checkbox-longlines">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<h3>Radio</h3>
			<FormCheck type="radio" name="example-radio-longlines">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<hr />

			<h2>Default value</h2>

			<h3>Checkbox</h3>
			<FormCheck type="checkbox" name="example-checkbox-defaultvalue" defaultValue={['2', '3']}>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<h3>Radio</h3>
			<FormCheck type="radio" name="exmaple-radio-defaultvalue" defaultValue="2">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<hr />

			<h2>Managed state</h2>

			<h3>Checkbox</h3>
			<p>{formCheckValue.toString()}</p>
			<FormCheck
				type="checkbox"
				name="example-checkbox-defaultvalue"
				value={formCheckValue}
				onChange={(value, event) => setFormCheckValue(value)}
			>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<hr />

			<h2>Option alone with defaultChecked</h2>

			<h3>Checkbox</h3>
			<Option type="checkbox" name="example-lone-checkbox" value="1">
				Option 1
			</Option>
			<Option type="checkbox" name="example-lone-checkbox" value="2" defaultChecked>
				Option 2
			</Option>
			<Option type="checkbox" name="example-lone-checkbox" value="3" defaultChecked>
				Option 3
			</Option>

			<h3>Radio</h3>
			<Option type="radio" name="example-lone-radio" value="1">
				Option 1
			</Option>
			<Option type="radio" name="example-lone-radio" value="2" defaultChecked>
				Option 2
			</Option>
			<Option type="radio" name="example-lone-radio" value="3">
				Option 3
			</Option>

			<hr />

			<h2>Option alone state managed</h2>
			<Option
				value="1"
				checked={loneRanger1}
				onChange={(event) => setLoneRanger1(event.target.checked)}
			>
				Option 1
			</Option>
			<Option
				value="2"
				checked={loneRanger2}
				onChange={(event) => setLoneRanger2(event.target.checked)}
			>
				Option 2
			</Option>

			<hr />

			<h2>preventDefault</h2>
			<p css={{ fontStyle: 'italic' }}>Checking not implemented</p>

			<h3>Checkbox</h3>
			<FormCheck
				type="checkbox"
				name="example-checkbox-preventdefault"
				onChange={(event) => {
					event.preventDefault();
					console.log('I have to do all the logic myself now');
				}}
			>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<h3>Radio</h3>
			<FormCheck
				type="radio"
				name="example-radio-preventdefault"
				onChange={(event) => {
					event.preventDefault();
					console.log('I have to do all the logic myself now');
				}}
			>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>
		</GEL>
	);
}

export default Example;
