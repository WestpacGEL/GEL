import React from 'react';

import { FormCheck, FormCheckItem } from '../src';

export default () => (
	<>
		<h2>Medium</h2>
		<FormCheck type="checkbox" name="example-checkbox-medium-inline" size="medium" inline>
			<FormCheckItem id="example-checkbox-medium-inline-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-checkbox-medium-inline-2">Option 2</FormCheckItem>
			<FormCheckItem id="example-checkbox-medium-inline-3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-medium-inline" size="medium" inline>
			<FormCheckItem id="example-radio-medium-inline-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-radio-medium-inline-2">Option 2</FormCheckItem>
			<FormCheckItem id="example-radio-medium-inline-3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<hr />

		<h2>Large</h2>
		<FormCheck type="checkbox" name="example-checkbox-large-inline" size="large" inline>
			<FormCheckItem id="example-checkbox-large-inline-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-checkbox-large-inline-2">Option 2</FormCheckItem>
			<FormCheckItem id="example-checkbox-large-inline-3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-large-inline" size="large" inline>
			<FormCheckItem id="example-radio-large-inline-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-radio-large-inline-2">Option 2</FormCheckItem>
			<FormCheckItem id="example-radio-large-inline-3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
	</>
);
