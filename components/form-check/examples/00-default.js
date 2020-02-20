/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Default</h2>
			<FormCheck name="example-default">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>
			<hr />

			<h2>Checkbox</h2>
			<FormCheck type="checkbox" name="example-checkbox">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<h2>Radio</h2>
			<FormCheck type="radio" name="example-radio">
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<hr />

			<h2>With defaultValue</h2>
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

			<h2>With checked</h2>
			<FormCheck type="checkbox" name="example-checkbox-checked">
				<Option value="1">Option 1</Option>
				<Option value="2" checked>
					Option 2
				</Option>
				<Option value="3" checked>
					Option 3
				</Option>
			</FormCheck>

			<h3>Radio</h3>
			<FormCheck type="radio" name="example-radio-checked">
				<Option value="1">Option 1</Option>
				<Option value="2" checked>
					Option 2
				</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<hr />

			<h2>With onChange</h2>
			<h3>Checkbox</h3>
			<FormCheck
				type="checkbox"
				name="example-checkbox-onchange"
				onChange={(_, value, wasSelected) =>
					console.log(`${wasSelected ? 'De-selected' : 'Selected'} option ${value}`)
				}
			>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<h3>Radio</h3>
			<FormCheck
				type="radio"
				name="example-radio-onchange"
				onChange={(_, value) => console.log(`Selected option ${value}`)}
			>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<hr />

			<h2>With preventDefault</h2>
			<p css={{ fontStyle: 'italic' }}>Checking not implemented</p>
			<h3>Checkbox</h3>
			<FormCheck
				type="checkbox"
				name="example-checkbox-preventdefault"
				onChange={event => {
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
				onChange={event => {
					event.preventDefault();
					console.log('I have to do all the logic myself now');
				}}
			>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<hr />

			<h2>With long lines</h2>
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
		</GEL>
	);
}

export default Example;
