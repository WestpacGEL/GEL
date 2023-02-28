import { GEL, jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Global disabled</h2>
			<FormCheck name="default" disabled>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<FormCheck type="radio" name="default-radio" disabled>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheck>

			<hr />

			<h2>Disabled specific options</h2>
			<h3>Medium</h3>
			<FormCheck type="checkbox" name="example-checkbox-medium-disabled" defaultValue={['2']}>
				<Option value="1">Option 1</Option>
				<Option value="2" disabled>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<FormCheck type="radio" name="example-radio-medium-disabled">
				<Option value="1">Option 1</Option>
				<Option value="2" disabled>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<hr />

			<h3>Large</h3>
			<FormCheck
				type="checkbox"
				name="example-checkbox-large-disabled"
				size="large"
				defaultValue={['2']}
			>
				<Option value="1">Option 1</Option>
				<Option value="2" disabled>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<FormCheck type="radio" name="example-radio-large-disabled" size="large">
				<Option value="1">Option 1</Option>
				<Option value="2" disabled>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<hr />

			<h3>Inline</h3>
			<FormCheck
				type="checkbox"
				name="example-checkbox-medium-inline-disabled"
				size="medium"
				inline
				defaultValue={['2']}
			>
				<Option value="1">Option 1</Option>
				<Option value="2" disabled>
					Option 2
				</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheck>

			<FormCheck type="radio" name="example-checkbox-large-inline-disabled" size="large" inline>
				<Option value="1">Option 1</Option>
				<Option value="2" disabled>
					Option 2
				</Option>
				<Option value="3">
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
				<FormCheck
					type="checkbox"
					name="example-checkbox-medium-disabled-fieldset"
					defaultValue={['2']}
				>
					<Option value="1">Option 1</Option>
					<Option value="2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint
						tempora magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam
						officiis, provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur
						quaerat vitae aspernatur eveniet libero.
					</Option>
				</FormCheck>

				<FormCheck type="radio" name="example-radio-medium-disabled-fieldset" defaultValue="2">
					<Option value="1">Option 1</Option>
					<Option value="2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint
						tempora magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam
						officiis, provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur
						quaerat vitae aspernatur eveniet libero.
					</Option>
				</FormCheck>

				<hr />

				<h3>Large</h3>
				<FormCheck
					type="checkbox"
					name="example-checkbox-large-disabled-fieldset"
					size="large"
					defaultValue={['2']}
				>
					<Option value="1">Option 1</Option>
					<Option value="2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint
						tempora magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam
						officiis, provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur
						quaerat vitae aspernatur eveniet libero.
					</Option>
				</FormCheck>

				<FormCheck
					type="radio"
					name="example-radio-large-disabled-fieldset"
					size="large"
					defaultValue="2"
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

				<h3>Inline</h3>
				<FormCheck
					type="checkbox"
					name="example-checkbox-medium-inline-disabled-fieldset"
					size="medium"
					inline
					defaultValue={['2']}
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

				<FormCheck
					type="radio"
					name="example-checkbox-large-inline-disabled-fieldset"
					size="large"
					inline
					defaultValue="2"
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
