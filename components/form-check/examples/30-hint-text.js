import { GEL, jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';
import { useState } from 'react';

function Example({ brand }) {
	const [formCheckValue, setFormCheckValue] = useState(['1', '3']);

	const [loneRanger1, setLoneRanger1] = useState(false);
	const [loneRanger2, setLoneRanger2] = useState(true);

	return (
		<GEL brand={brand}>
			<h2>Checkbox</h2>

			<h3>Medium</h3>
			<FormCheck type="checkbox" name="example-checkbox-medium" size="medium">
				<Option value="1" hint="This is hint text">
					Option 1
				</Option>
				<Option value="2" hint="This is hint text">
					Option 2
				</Option>
				<Option value="3" hint="This is hint text">
					Option 3
				</Option>
			</FormCheck>

			<h3>Large</h3>
			<FormCheck type="checkbox" name="example-checkbox-large" size="large">
				<Option value="1" hint="This is hint text">
					Option 1
				</Option>
				<Option value="2" hint="This is hint text">
					Option 2
				</Option>
				<Option value="3" hint="This is hint text">
					Option 3
				</Option>
			</FormCheck>

			<hr />

			<h2>Radio</h2>

			<h3>Medium</h3>
			<FormCheck type="radio" name="example-radio-medium" size="medium">
				<Option value="1" hint="This is hint text">
					Option 1
				</Option>
				<Option value="2" hint="This is hint text">
					Option 2
				</Option>
				<Option value="3" hint="This is hint text">
					Option 3
				</Option>
			</FormCheck>

			<h3>Large</h3>
			<FormCheck type="radio" name="example-radio-large" size="large">
				<Option value="1" hint="This is hint text">
					Option 1
				</Option>
				<Option value="2" hint="This is hint text">
					Option 2
				</Option>
				<Option value="3" hint="This is hint text">
					Option 3
				</Option>
			</FormCheck>
		</GEL>
	);
}

export default Example;
