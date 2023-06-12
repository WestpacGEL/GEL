import { GEL } from '@westpac/core';
import { InputField, Input, InputBefore, InputAfter } from '@westpac/input-field';
import { Button } from '@westpac/button';
import { Select, Textarea } from '@westpac/text-input';
import { VisibilityIcon, SearchIcon } from '@westpac/icon';

const IconButton = () => (
	<Button
		look="link"
		iconColor="grey"
		iconAfter={VisibilityIcon}
		assistiveText="Icon button action"
	/>
);

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	return (
		<GEL brand={brand}>
			<h3>Text add on</h3>
			<InputField label="Text before" hint="I am a hint" supportingText="Supporting text">
				<InputBefore>$AUD</InputBefore>
				<Input />
			</InputField>
			<InputField label="Text after" hint="I am a hint" supportingText="Supporting text">
				<Input />
				<InputAfter>Text</InputAfter>
			</InputField>
			<InputField label="Text before and after" hint="I am a hint" supportingText="Supporting text">
				<InputBefore>$AUD</InputBefore>
				<Input />
				<InputAfter>Text</InputAfter>
			</InputField>

			<h3>Icon add on</h3>
			<InputField label="Icon before" hint="I am a hint" supportingText="Supporting text">
				<InputBefore icon={SearchIcon} />
				<Input />
			</InputField>
			<InputField label="Icon after" hint="I am a hint" supportingText="Supporting text">
				<Input />
				<InputAfter icon={SearchIcon} />
			</InputField>
			<InputField label="Icon before and after" hint="I am a hint" supportingText="Supporting text">
				<InputBefore icon={SearchIcon} />
				<Input />
				<InputAfter icon={SearchIcon} />
			</InputField>

			<h3>Icons in buttons</h3>
			<InputField label="Icon button before" hint="I am a hint" supportingText="Supporting text">
				<InputBefore inset>
					<IconButton />
				</InputBefore>
				<Input />
			</InputField>
			<InputField label="Icon button after" hint="I am a hint" supportingText="Supporting text">
				<Input />
				<InputAfter inset>
					<IconButton />
				</InputAfter>
			</InputField>
			<InputField
				label="Icon button before and after"
				hint="I am a hint"
				supportingText="Supporting text"
			>
				<InputBefore inset>
					<IconButton />
				</InputBefore>
				<Input />
				<InputAfter inset>
					<IconButton />
				</InputAfter>
			</InputField>
			<h3>Button add on</h3>
			<InputField label="Button before" hint="I am a hint" supportingText="Supporting text">
				<InputBefore>
					<Button>Check</Button>
				</InputBefore>
				<Input />
			</InputField>
			<InputField label="Button after" hint="I am a hint" supportingText="Supporting text">
				<Input />
				<InputAfter>
					<Button>Check</Button>
				</InputAfter>
			</InputField>
			<InputField
				label="Button before and after"
				hint="I am a hint"
				supportingText="Supporting text"
			>
				<InputBefore>
					<Button>Check</Button>
				</InputBefore>
				<Input />
				<InputAfter>
					<Button>Check</Button>
				</InputAfter>
			</InputField>
			<InputField label="Primary Button after" hint="I am a hint" supportingText="Supporting text">
				<Input />
				<InputAfter>
					<Button look="primary">Check</Button>
				</InputAfter>
			</InputField>
			<InputField label="Faint Button after" hint="I am a hint" supportingText="Supporting text">
				<Input />
				<InputAfter>
					<Button look="faint">Check</Button>
				</InputAfter>
			</InputField>
			<h3>Select add on</h3>
			<InputField label="Select " hint="I am a hint" supportingText="Supporting text">
				<InputBefore>
					<Select size="medium" inline={false} invalid={false}>
						<option>Select</option>
						<option>Yearly</option>
						<option>Monthly</option>
						<option>Weekly</option>
					</Select>
				</InputBefore>
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
			<h3>Textarea</h3>
			<InputField label="Label" hint="I am a hint">
				<Textarea size="medium" inline={false} invalid={false} />
			</InputField>
		</GEL>
	);
}

export default Example;
