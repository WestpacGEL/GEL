import { GEL } from '@westpac/core';
import { InputField, Input, InputBefore, InputAfter } from '@westpac/input-field';
import { Button } from '@westpac/button';
import { Select, Textarea } from '@westpac/text-input';
import { TickIcon, VisibilityIcon, VisibilityOffIcon, SearchIcon, ClearIcon } from '@westpac/icon';
import { useState, ChangeEvent } from 'react';

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	const [type, setType] = useState('password');
	const [count, setCount] = useState(0);
	const [valid, setTest] = useState(false);
	const [value, setValue] = useState('');
	const [charCountMessage, setCharCountMessage] = useState('250 remaining');

	const onChangeTextAreaInput = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setCharCountMessage(`${250 - value.length} remaining`);
	};

	return (
		<GEL brand={brand}>
			<h3>Number stepper</h3>
			<InputField label="Number of dependents">
				<InputBefore>
					<Button onClick={() => setCount(count - 1)}>-</Button>
				</InputBefore>
				<Input value={count} />
				<InputAfter>
					<Button onClick={() => setCount(count + 1)}>+</Button>
				</InputAfter>
			</InputField>

			<h3>Masked characters in field</h3>
			<InputField label="Password">
				<Input type={type} />
				<InputAfter inset>
					<Button
						look="link"
						iconColor="grey"
						iconAfter={type === 'text' ? VisibilityIcon : VisibilityOffIcon}
						onClick={() => (type === 'text' ? setType('password') : setType('text'))}
					/>
				</InputAfter>
			</InputField>

			<h3>Search with left icon and clear button</h3>
			<InputField label="Search">
				<InputBefore icon={SearchIcon} />
				<Input value={value} onChange={(event) => setValue(event.target.value)} />
				<InputAfter inset>
					<Button look="link" iconAfter={ClearIcon} iconColor="grey" onClick={() => setValue('')} />
				</InputAfter>
			</InputField>

			<h3>Inline field validation flow</h3>
			<InputField label="Enter ABA routing number">
				<Input />
				<InputAfter inset={valid}>
					{valid ? (
						<Button
							look="link"
							iconColor="green"
							iconAfter={TickIcon}
							onClick={() => setTest(!valid)}
						/>
					) : (
						<Button onClick={() => setTest(!valid)}>Check</Button>
					)}
				</InputAfter>
			</InputField>

			<h3>Currency and frequency</h3>
			<InputField label="Salary">
				<InputBefore>$AUD</InputBefore>
				<Input />
				<InputAfter>
					<Select name="example-default">
						<option>Select</option>
						<option>Per year</option>
						<option>Per month</option>
						<option>Per week</option>
					</Select>
				</InputAfter>
			</InputField>

			<h3>Textarea with character count</h3>
			<InputField label="Comments" hint="I am a hint" supportingText={charCountMessage}>
				<Textarea onChange={onChangeTextAreaInput} />
			</InputField>
		</GEL>
	);
}

export default Example;
