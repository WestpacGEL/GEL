import React, { useState } from 'react';
import { FormCheck, Option } from '../src';

export default () => (
	<>
		<FormCheck type="checkbox" name="example-checkbox-checked">
			<Option value="1" checked>
				Option 1
			</Option>
			<Option value="2" checked>
				Option 2
			</Option>
			<Option value="3" checked>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Option>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-checked">
			<Option value="1">Option 1</Option>
			<Option value="2" checked>
				Option 2
			</Option>
			<Option value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Option>
		</FormCheck>
	</>
);
