import React from 'react';

import { FormCheck, FormCheckItem } from '../src';

export default () => (
	<>
		<h2>Medium</h2>
		<FormCheck type="checkbox" name="example-checkbox-medium-disabled" size="medium">
			<FormCheckItem id="example-checkbox-medium-disabled-1" disabled>
				Option 1
			</FormCheckItem>
			<FormCheckItem id="example-checkbox-medium-disabled-2" disabled>
				Option 2
			</FormCheckItem>
			<FormCheckItem id="example-checkbox-medium-disabled-3" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-medium-disabled" size="medium">
			<FormCheckItem id="example-radio-medium-disabled-1" disabled>
				Option 1
			</FormCheckItem>
			<FormCheckItem id="example-radio-medium-disabled-2" disabled>
				Option 2
			</FormCheckItem>
			<FormCheckItem id="example-radio-medium-disabled-3" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<hr />

		<h2>Large</h2>
		<FormCheck type="checkbox" name="example-checkbox-large-disabled" size="large">
			<FormCheckItem id="example-checkbox-large-disabled-1" disabled>
				Option 1
			</FormCheckItem>
			<FormCheckItem id="example-checkbox-large-disabled-2" disabled>
				Option 2
			</FormCheckItem>
			<FormCheckItem id="example-checkbox-large-disabled-3" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-large-disabled" size="large">
			<FormCheckItem id="example-radio-large-disabled-1" disabled>
				Option 1
			</FormCheckItem>
			<FormCheckItem id="example-radio-large-disabled-2" disabled>
				Option 2
			</FormCheckItem>
			<FormCheckItem id="example-radio-large-disabled-3" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<hr />

		<h2>Inline</h2>
		<FormCheck type="checkbox" name="example-checkbox-medium-inline-disabled" size="medium" inline>
			<FormCheckItem id="example-checkbox-medium-inline-disabled-1" disabled>
				Option 1
			</FormCheckItem>
			<FormCheckItem id="example-checkbox-medium-inline-disabled-2" disabled>
				Option 2
			</FormCheckItem>
			<FormCheckItem id="example-checkbox-medium-inline-disabled-3" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-checkbox-large-inline-disabled" size="large" inline>
			<FormCheckItem id="example-radio-large-inline-disabled-1" disabled>
				Option 1
			</FormCheckItem>
			<FormCheckItem id="example-radio-large-inline-disabled-2" disabled>
				Option 2
			</FormCheckItem>
			<FormCheckItem id="example-radio-large-inline-disabled-3" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
	</>
);
