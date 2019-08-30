import React from 'react';

import { FormCheck, FormCheckItem } from '../src';
// import { Form } from '../../form/src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormCheck name="example-default">
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">Option 2</FormCheckItem>
		</FormCheck>

		<hr />

		<h2>Checkbox</h2>
		<FormCheck type="checkbox" name="example-checkbox">
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">Option 2</FormCheckItem>
			<FormCheckItem value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<hr />

		<h2>Radio</h2>
		<FormCheck type="radio" name="example-radio">
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">Option 2</FormCheckItem>
			<FormCheckItem value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
	</>
);
