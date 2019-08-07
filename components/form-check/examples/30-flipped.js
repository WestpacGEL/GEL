import React from 'react';

import { FormCheck, FormCheckItem } from '../src';

export default () => (
	<>
		<h2>Medium</h2>
		<FormCheck type="checkbox" name="example-checkbox-large-flip" size="medium" flip>
			<FormCheckItem id="example-checkbox-medium-flip-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-checkbox-medium-flip-2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-checkbox-large-flip" size="medium" flip>
			<FormCheckItem id="example-radio-medium-flip-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-radio-medium-flip-2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<hr />

		<h2>Large</h2>
		<FormCheck type="checkbox" name="example-checkbox-large-flip" size="large" flip>
			<FormCheckItem id="example-checkbox-large-flip-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-checkbox-large-flip-2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-checkbox-large-flip" size="large" flip>
			<FormCheckItem id="example-radio-large-flip-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-radio-large-flip-2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<hr />

		<h2>Inline</h2>
		<FormCheck type="checkbox" name="example-checkbox-medium-inline-flip" size="medium" inline flip>
			<FormCheckItem id="example-checkbox-medium-inline-flip-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-checkbox-medium-inline-flip-2">Option 2</FormCheckItem>
			<FormCheckItem id="example-checkbox-medium-inline-flip-3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-checkbox-large-inline-flip" size="large" inline flip>
			<FormCheckItem id="example-radio-large-inline-flip-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-radio-large-inline-flip-2">Option 2</FormCheckItem>
			<FormCheckItem id="example-radio-large-inline-flip-3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
	</>
);
