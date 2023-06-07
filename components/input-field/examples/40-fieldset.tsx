import { GEL } from '@westpac/core';
import { InputField, Input, InputBefore, InputAfter } from '@westpac/input-field';
import { Button } from '@westpac/button';
import { Select } from '@westpac/text-input';

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	return (
		<GEL brand={brand}>
			<h3>As a fieldset</h3>
			<InputField isFieldset label="Label" hint="I am a hint" supportingText="I am supporting text">
				<Input />
				<InputAfter>
					<Select size="medium" inline={false} invalid={false}>
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
