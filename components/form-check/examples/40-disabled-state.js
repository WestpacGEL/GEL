/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Disabled input</h2>

			<h3>Medium</h3>
			<FormCheck type="checkbox" name="example-checkbox-medium-disabled" current="2">
				<Option value="1" disabled>
					Option 1
				</Option>
				<Option value="2" disabled>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<hr />

			<FormCheck type="radio" name="example-radio-medium-disabled" current="2">
				<Option value="1" disabled>
					Option 1
				</Option>
				<Option value="2" disabled>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<h3>Large</h3>
			<FormCheck type="checkbox" name="example-checkbox-large-disabled" size="large" current="2">
				<Option value="1" disabled>
					Option 1
				</Option>
				<Option value="2" disabled>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>
			<br />
			<FormCheck type="radio" name="example-radio-large-disabled" size="large" current="2">
				<Option value="1" disabled>
					Option 1
				</Option>
				<Option value="2" disabled>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<h3>Inline</h3>
			<FormCheck
				type="checkbox"
				name="example-checkbox-medium-inline-disabled"
				size="medium"
				inline
				current="2"
			>
				<Option value="1" disabled>
					Option 1
				</Option>
				<Option value="2" disabled>
					Option 2
				</Option>
				<Option value="3" disabled>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<hr />

			<FormCheck
				type="radio"
				name="example-checkbox-large-inline-disabled"
				size="large"
				inline
				current="2"
			>
				<Option value="1" disabled>
					Option 1
				</Option>
				<Option value="2" disabled>
					Option 2
				</Option>
				<Option value="3" disabled>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<hr />

			<h2>Disabled fieldset</h2>

			<fieldset disabled>
				<h3>Medium</h3>
				<FormCheck type="checkbox" name="example-checkbox-medium-disabled-fieldset" current="2">
					<Option value="1">Option 1</Option>
					<Option value="2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint
						tempora magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam
						officiis, provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur
						quaerat vitae aspernatur eveniet libero.
					</Option>
				</FormCheck>

				<hr />

				<FormCheck type="radio" name="example-radio-medium-disabled-fieldset" current="2">
					<Option value="1">Option 1</Option>
					<Option value="2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint
						tempora magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam
						officiis, provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur
						quaerat vitae aspernatur eveniet libero.
					</Option>
				</FormCheck>

				<h3>Large</h3>
				<FormCheck
					type="checkbox"
					name="example-checkbox-large-disabled-fieldset"
					size="large"
					current="2"
				>
					<Option value="1">Option 1</Option>
					<Option value="2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint
						tempora magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam
						officiis, provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur
						quaerat vitae aspernatur eveniet libero.
					</Option>
				</FormCheck>

				<hr />

				<FormCheck
					type="radio"
					name="example-radio-large-disabled-fieldset"
					size="large"
					current="2"
				>
					<Option value="1">Option 1</Option>
					<Option value="2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint
						tempora magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam
						officiis, provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur
						quaerat vitae aspernatur eveniet libero.
					</Option>
				</FormCheck>

				<h3>Inline</h3>
				<FormCheck
					type="checkbox"
					name="example-checkbox-medium-inline-disabled-fieldset"
					size="medium"
					inline
					current="2"
				>
					<Option value="1">Option 1</Option>
					<Option value="2">Option 2</Option>
					<Option value="3">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint
						tempora magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam
						officiis, provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur
						quaerat vitae aspernatur eveniet libero.
					</Option>
				</FormCheck>

				<hr />

				<FormCheck
					type="radio"
					name="example-checkbox-large-inline-disabled-fieldset"
					size="large"
					inline
					current="2"
				>
					<Option value="1">Option 1</Option>
					<Option value="2">Option 2</Option>
					<Option value="3">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint
						tempora magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam
						officiis, provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur
						quaerat vitae aspernatur eveniet libero.
					</Option>
				</FormCheck>
			</fieldset>
		</GEL>
	);
}

export default Example;
