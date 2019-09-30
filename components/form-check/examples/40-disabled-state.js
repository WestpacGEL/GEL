import React from 'react';
import { FormCheck, Item } from '../src';

export default () => (
	<>
		<h2>Disabled input</h2>

		<h3>Medium</h3>
		<FormCheck type="checkbox" name="example-checkbox-medium-disabled" size="medium">
			<Item value="1" disabled>
				Option 1
			</Item>
			<Item value="2" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-medium-disabled" size="medium">
			<Item value="1" disabled>
				Option 1
			</Item>
			<Item value="2" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>

		<h3>Large</h3>
		<FormCheck type="checkbox" name="example-checkbox-large-disabled" size="large">
			<Item value="1" disabled>
				Option 1
			</Item>
			<Item value="2" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-large-disabled" size="large">
			<Item value="1" disabled>
				Option 1
			</Item>
			<Item value="2" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>

		<h3>Inline</h3>
		<FormCheck type="checkbox" name="example-checkbox-medium-inline-disabled" size="medium" inline>
			<Item value="1" disabled>
				Option 1
			</Item>
			<Item value="2" disabled>
				Option 2
			</Item>
			<Item value="3" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-checkbox-large-inline-disabled" size="large" inline>
			<Item value="1" disabled>
				Option 1
			</Item>
			<Item value="2" disabled>
				Option 2
			</Item>
			<Item value="3" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>

		<hr />

		<h2>Disabled fieldset</h2>

		<fieldset disabled>
			<h3>Medium</h3>
			<FormCheck type="checkbox" name="example-checkbox-medium-disabled-fieldset" size="medium">
				<Item value="1">Option 1</Item>
				<Item value="2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Item>
			</FormCheck>
			<br />
			<FormCheck type="radio" name="example-radio-medium-disabled-fieldset" size="medium">
				<Item value="1">Option 1</Item>
				<Item value="2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Item>
			</FormCheck>

			<h3>Large</h3>
			<FormCheck type="checkbox" name="example-checkbox-large-disabled-fieldset" size="large">
				<Item value="1">Option 1</Item>
				<Item value="2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Item>
			</FormCheck>
			<br />
			<FormCheck type="radio" name="example-radio-large-disabled-fieldset" size="large">
				<Item value="1">Option 1</Item>
				<Item value="2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Item>
			</FormCheck>

			<h3>Inline</h3>
			<FormCheck
				type="checkbox"
				name="example-checkbox-medium-inline-disabled-fieldset"
				size="medium"
				inline
			>
				<Item value="1">Option 1</Item>
				<Item value="2">Option 2</Item>
				<Item value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Item>
			</FormCheck>
			<br />
			<FormCheck
				type="radio"
				name="example-checkbox-large-inline-disabled-fieldset"
				size="large"
				inline
			>
				<Item value="1">Option 1</Item>
				<Item value="2">Option 2</Item>
				<Item value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Item>
			</FormCheck>
		</fieldset>
	</>
);
