import React from 'react';
import { FormCheck, FormCheckItem } from '../src';

export default () => (
	<>
		<h2>Disabled input</h2>

		<h3>Medium</h3>
		<FormCheck type="checkbox" name="example-checkbox-medium-disabled" size="medium">
			<FormCheckItem value="1" disabled>
				Option 1
			</FormCheckItem>
			<FormCheckItem value="2" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-medium-disabled" size="medium">
			<FormCheckItem value="1" disabled>
				Option 1
			</FormCheckItem>
			<FormCheckItem value="2" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<h3>Large</h3>
		<FormCheck type="checkbox" name="example-checkbox-large-disabled" size="large">
			<FormCheckItem value="1" disabled>
				Option 1
			</FormCheckItem>
			<FormCheckItem value="2" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-large-disabled" size="large">
			<FormCheckItem value="1" disabled>
				Option 1
			</FormCheckItem>
			<FormCheckItem value="2" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<h3>Inline</h3>
		<FormCheck
			type="checkbox"
			name="example-checkbox-medium-inline-disabled"
			size="medium"
			isInline
		>
			<FormCheckItem value="1" disabled>
				Option 1
			</FormCheckItem>
			<FormCheckItem value="2" disabled>
				Option 2
			</FormCheckItem>
			<FormCheckItem value="3" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-checkbox-large-inline-disabled" size="large" isInline>
			<FormCheckItem value="1" disabled>
				Option 1
			</FormCheckItem>
			<FormCheckItem value="2" disabled>
				Option 2
			</FormCheckItem>
			<FormCheckItem value="3" disabled>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<hr />

		<h2>Disabled fieldset</h2>

		<fieldset disabled>
			<h3>Medium</h3>
			<FormCheck type="checkbox" name="example-checkbox-medium-disabled-fieldset" size="medium">
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</FormCheckItem>
			</FormCheck>
			<br />
			<FormCheck type="radio" name="example-radio-medium-disabled-fieldset" size="medium">
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</FormCheckItem>
			</FormCheck>

			<h3>Large</h3>
			<FormCheck type="checkbox" name="example-checkbox-large-disabled-fieldset" size="large">
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</FormCheckItem>
			</FormCheck>
			<br />
			<FormCheck type="radio" name="example-radio-large-disabled-fieldset" size="large">
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</FormCheckItem>
			</FormCheck>

			<h3>Inline</h3>
			<FormCheck
				type="checkbox"
				name="example-checkbox-medium-inline-disabled-fieldset"
				size="medium"
				isInline
			>
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">Option 2</FormCheckItem>
				<FormCheckItem value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</FormCheckItem>
			</FormCheck>
			<br />
			<FormCheck
				type="radio"
				name="example-checkbox-large-inline-disabled-fieldset"
				size="large"
				isInline
			>
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">Option 2</FormCheckItem>
				<FormCheckItem value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</FormCheckItem>
			</FormCheck>
		</fieldset>
	</>
);
