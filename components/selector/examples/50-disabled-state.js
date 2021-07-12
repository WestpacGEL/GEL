/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Selector, Option } from '@westpac/selector';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Global disabled</h2>

			<h3>Button</h3>
			<Selector type="button" name="default-button" disabled>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</Selector>

			<h3>Submit</h3>
			<Selector type="submit" name="default-submit" disabled>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</Selector>

			<h3>Radio</h3>
			<Selector type="radio" name="default-radio" disabled>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="default-checkbox" disabled>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
				<Option value="3">Option 3</Option>
			</Selector>

			<hr />

			<h2>Disabled specific options</h2>

			<h3>Button</h3>
			<Selector type="button" name="default-button-specific" defaultValue={['2']}>
				<Option value="1">Option 1</Option>
				<Option value="2" disabled>
					Option 2
				</Option>
			</Selector>

			<h3>Submit</h3>
			<Selector type="submit" name="default-submit-specific" defaultValue={['2']}>
				<Option value="1">Option 1</Option>
				<Option value="2" disabled>
					Option 2
				</Option>
			</Selector>

			<h3>Radio</h3>
			<Selector type="radio" name="default-radio-specific" defaultValue={['2']}>
				<Option value="1">Option 1</Option>
				<Option value="2" disabled>
					Option 2
				</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="default-checkbox-specific">
				<Option value="1">Option 1</Option>
				<Option value="2" disabled>
					Option 2
				</Option>
				<Option value="3">Option 3</Option>
			</Selector>

			<hr />

			<h2>Disabled fieldset</h2>

			<fieldset disabled>
				<h3>Button</h3>
				<Selector type="button" name="default-button-fieldset" defaultValue={['2']}>
					<Option value="1">Option 1</Option>
					<Option value="2" disabled>
						Option 2
					</Option>
				</Selector>

				<h3>Submit</h3>
				<Selector type="submit" name="default-submit-fieldset" defaultValue={['2']}>
					<Option value="1">Option 1</Option>
					<Option value="2" disabled>
						Option 2
					</Option>
				</Selector>

				<h3>Radio</h3>
				<Selector type="radio" name="default-radio-fieldset" defaultValue={['2']}>
					<Option value="1">Option 1</Option>
					<Option value="2" disabled>
						Option 2
					</Option>
				</Selector>

				<h3>Checkbox</h3>
				<Selector type="checkbox" name="default-checkbox-fieldset">
					<Option value="1">Option 1</Option>
					<Option value="2" disabled>
						Option 2
					</Option>
					<Option value="3">Option 3</Option>
				</Selector>
			</fieldset>
		</GEL>
	);
}

export default Example;
