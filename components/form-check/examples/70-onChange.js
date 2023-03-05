import { GEL, jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>onChange</h2>

			<h3>Checkbox</h3>
			<FormCheck
				type="checkbox"
				name="example-checkbox-onchange"
				onChange={(value, _) => console.log(`Selected options ${value}`)}
			>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<h3>Radio</h3>
			<FormCheck
				type="radio"
				name="example-radio-onchange"
				onChange={(value, _) => console.log(`Selected option ${value}`)}
			>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>
		</GEL>
	);
}

export default Example;
