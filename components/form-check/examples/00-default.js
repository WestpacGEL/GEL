import React from 'react';
import { FormCheck, Item } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormCheck name="example-default">
			<Item value="1">Option 1</Item>
			<Item value="2">Option 2</Item>
		</FormCheck>

		<hr />

		<h2>Checkbox</h2>
		<FormCheck type="checkbox" name="example-checkbox">
			<Item value="1">Option 1</Item>
			<Item value="2">Option 2</Item>
			<Item value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>

		<hr />

		<h2>Radio</h2>
		<FormCheck type="radio" name="example-radio">
			<Item value="1">Option 1</Item>
			<Item value="2">Option 2</Item>
			<Item value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>
	</>
);
