import React from 'react';

import { FormCheck, FormCheckItem } from '../src';

export default () => (
	<>
		<h2>Medium</h2>
		<FormCheck type="checkbox" name="example-checkbox-medium" size="medium">
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<FormCheck type="radio" name="example-radio-medium" size="medium">
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<hr />

		<h2>Large</h2>
		<FormCheck type="checkbox" name="example-checkbox-large" size="large">
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">Option 2</FormCheckItem>
			<FormCheckItem value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<FormCheck type="radio" name="example-radio-large" size="large">
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
