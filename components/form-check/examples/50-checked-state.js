import React, { useState } from 'react';
import { FormCheck, Item } from '../src';

export default () => (
	<>
		<FormCheck type="checkbox" name="example-checkbox-checked">
			<Item value="1" checked>
				Option 1
			</Item>
			<Item value="2" checked>
				Option 2
			</Item>
			<Item value="3" checked>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-checked">
			<Item value="1">Option 1</Item>
			<Item value="2" checked>
				Option 2
			</Item>
			<Item value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>
	</>
);
