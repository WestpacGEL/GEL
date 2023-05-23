import { GEL } from '@westpac/core';
import { InputField, Input, InputBefore, InputAfter } from '@westpac/input-field';
import { Button } from '@westpac/button';
import { SearchIcon } from '@westpac/icon';

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	return (
		<GEL brand={brand}>
			<h3>Invalid with error message/s</h3>
			<InputField
				label="Label"
				hint="I am a hint"
				supportingText="I am supporting text"
				errorMessage="If there is an error it can go here"
			>
				<Input invalid />
				<InputAfter>
					<Button>Check</Button>
				</InputAfter>
			</InputField>
			<InputField
				label="Label"
				hint="I am a hint"
				supportingText="I am supporting text"
				errorMessage={[
					'If there is an error it can go here',
					'If there is another error it can go here',
				]}
			>
				<Input invalid />
				<InputAfter>
					<Button>Check</Button>
				</InputAfter>
			</InputField>
			<InputField
				label="Label"
				hint="I am a hint"
				supportingText="Supporting text"
				errorMessage="If there is an error it can go here"
			>
				<InputBefore icon={SearchIcon} />
				<Input invalid />
				<InputAfter icon={SearchIcon} />
			</InputField>
			<h3>Disabled</h3>
			<InputField label="Label" hint="I am a hint" supportingText="Supporting text">
				<InputBefore icon={SearchIcon} />
				<Input disabled />
				<InputAfter icon={SearchIcon} />
			</InputField>
			<InputField label="Label" hint="I am a hint" supportingText="Supporting text">
				<InputBefore>$AUD</InputBefore>
				<Input disabled />
				<InputAfter>Text</InputAfter>
			</InputField>
			<h3>Readonly</h3>
			<InputField label="Label" hint="I am a hint" supportingText="Supporting text">
				<InputBefore icon={SearchIcon} />
				<Input readOnly />
				<InputAfter icon={SearchIcon} />
			</InputField>
			<InputField label="Label" hint="I am a hint" supportingText="Supporting text">
				<InputBefore>$AUD</InputBefore>
				<Input readOnly />
				<InputAfter>Text</InputAfter>
			</InputField>
		</GEL>
	);
}

export default Example;
