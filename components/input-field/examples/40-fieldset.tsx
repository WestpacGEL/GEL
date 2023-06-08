import { GEL } from '@westpac/core';
import { InputField, Input, InputAfter } from '@westpac/input-field';
import { Select } from '@westpac/text-input';

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	return (
		<GEL brand={brand}>
			<h3>As a fieldset</h3>
			<InputField isFieldset label="Label" hint="I am a hint" supportingText="I am supporting text">
				<Input aria-label="input aria label" />
				<InputAfter>
					<Select aria-label="select aria label" size="medium" inline={false} invalid={false}>
						<option>Select</option>
						<option>Yearly</option>
						<option>Monthly</option>
						<option>Weekly</option>
					</Select>
				</InputAfter>
			</InputField>
		</GEL>
	);
}

export default Example;
