import React, { useState } from 'react';
import { FormCheck, FormCheckItem } from '../src';

export default () => (
	<>
		<FormCheck type="checkbox" name="example-checkbox-checked">
			<FormCheckItem value="1" isChecked>
				Option 1
			</FormCheckItem>
			<FormCheckItem value="2" isChecked>
				Option 2
			</FormCheckItem>
			<FormCheckItem value="3" isChecked>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-checked">
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2" isChecked>
				Option 2
			</FormCheckItem>
			<FormCheckItem value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
	</>
);
