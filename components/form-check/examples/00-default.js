import React from 'react';

import { FormCheck, FormCheckItem } from '../src';
// import { Form } from '../../form/src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormCheck name="example-default">
			<FormCheckItem id="example-default-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-default-2">Option 2</FormCheckItem>
		</FormCheck>

		<hr />

		<h2>Checkbox</h2>
		<FormCheck type="checkbox" name="example-checkbox">
			<FormCheckItem id="example-checkbox-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-checkbox-2">Option 2</FormCheckItem>
			<FormCheckItem id="example-checkbox-3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<hr />

		<h2>Radio</h2>
		<FormCheck type="radio" name="example-radio">
			<FormCheckItem id="example-radio-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-radio-2">Option 2</FormCheckItem>
			<FormCheckItem id="example-radio-3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
	</>
);
