import React from 'react';

import { FormCheck, FormCheckItem } from '../src';

export default () => (
	<>
		<FormCheck type="checkbox" name="example-checkbox-checked">
			<FormCheckItem id="example-checkbox-checked-1" defaultChecked>
				Option 1
			</FormCheckItem>
			<FormCheckItem id="example-checkbox-checked-2" defaultChecked>
				Option 2
			</FormCheckItem>
			<FormCheckItem id="example-checkbox-checked-3" defaultChecked>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-checked">
			<FormCheckItem id="example-radio-checked-1">Option 1</FormCheckItem>
			<FormCheckItem id="example-radio-checked-2" defaultChecked>
				Option 2
			</FormCheckItem>
			<FormCheckItem id="example-radio-checked-3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
	</>
);
