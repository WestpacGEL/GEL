/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Selector, Option } from '@westpac/selector';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h3>Button</h3>
			<Selector
				type="button"
				name="example-button-onchange"
				onChange={(_, value) => console.log(`Selected option ${value}`)}
			>
				<Option value="1">Here is button text</Option>
				<Option value="2">Here is button text</Option>
				<Option value="3">Here is button text</Option>
			</Selector>

			<h3>Submit</h3>
			<Selector
				type="submit"
				name="example-submit-onchange"
				onChange={(_, value) => console.log(`Selected option ${value}`)}
			>
				<Option value="1">Here is button text</Option>
				<Option value="2">Here is button text</Option>
				<Option value="3">Here is button text</Option>
			</Selector>

			<h3>Radio</h3>
			<Selector
				type="radio"
				name="example-radio-onchange"
				onChange={(_, value) => console.log(`Selected option ${value}`)}
			>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector
				type="checkbox"
				name="example-checkbox-onchange"
				onChange={(_, value, wasSelected) =>
					console.log(`${wasSelected ? 'De-selected' : 'Selected'} option ${value}`)
				}
			>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>
		</GEL>
	);
}

export default Example;
