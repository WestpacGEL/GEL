import { GEL, jsx } from '@westpac/core';
import { FormCheckReveal, Option } from '@westpac/form-check';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Types</h2>

			<h3>Checkbox</h3>
			<FormCheckReveal type="checkbox" name="example-checkbox" show={5}>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
				<Option value="4">Option 4</Option>
				<Option value="5">Option 5</Option>
				<Option value="6">Option 6</Option>
				<Option value="7">Option 7</Option>
				<Option value="8">Option 8</Option>
			</FormCheckReveal>

			<h3>Radio</h3>
			<FormCheckReveal type="radio" name="example-radio" show={2}>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</FormCheckReveal>

			<hr />

			<h2>Long lines</h2>

			<h3>Checkbox</h3>
			<FormCheckReveal type="checkbox" name="example-checkbox-longlines" show={1}>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheckReveal>

			<h3>Radio</h3>
			<FormCheckReveal type="radio" name="example-radio-longlines" show={2}>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheckReveal>

			<hr />

			<h2>Inline</h2>

			<h3>Checkbox</h3>
			<FormCheckReveal type="checkbox" name="example-checkbox-inline" inline show={1}>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheckReveal>

			<h3>Radio</h3>
			<FormCheckReveal type="radio" name="example-radio-inline" inline show={1}>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</FormCheckReveal>
		</GEL>
	);
}

export default Example;
