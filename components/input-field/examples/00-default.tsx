import { GEL } from '@westpac/core';
import { InputField, Input, InputBefore, InputAfter } from '@westpac/input-field';
import { Button } from '@westpac/button';

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	return (
		<GEL brand={brand}>
			<h3>Single add on</h3>
			<InputField label="Label" hint="I am a hint" supportingText="I am supporting text">
				<Input />
				<InputAfter>
					<Button>Check</Button>
				</InputAfter>
			</InputField>
			<h3>Combination</h3>
			<InputField label="Label" hint="I am a hint" supportingText="I am supporting text">
				<InputBefore>$AUD</InputBefore>
				<Input />
				<InputAfter>
					<Button>Check</Button>
				</InputAfter>
			</InputField>
		</GEL>
	);
}

export default Example;
