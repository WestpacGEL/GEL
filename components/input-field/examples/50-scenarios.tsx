import { GEL } from '@westpac/core';
import {
	InputField,
	Input,
	InputBefore,
	InputAfter,
	useInputFieldContext,
} from '@westpac/input-field';
import { Button } from '@westpac/button';
import { Select, Textarea } from '@westpac/text-input';
import {
	TickIcon,
	VisibilityIcon,
	VisibilityOffIcon,
	SearchIcon,
	ClearIcon,
	RefreshIcon,
} from '@westpac/icon';
import { useState, ChangeEvent, useRef, useEffect } from 'react';

const InputTextarea = (props: any) => {
	const { id, ariaDescribedByValue } = useInputFieldContext();
	return <Textarea id={id} aria-describedby={ariaDescribedByValue} {...props} />;
};

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	const [type, setType] = useState('password');
	const [count, setCount] = useState(0);
	const [value, setValue] = useState('');
	const [charCountMessage, setCharCountMessage] = useState('250 remaining');
	const inputRef = useRef<HTMLInputElement>(null);

	const onChangeTextAreaInput = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setCharCountMessage(`${250 - value.length} remaining`);
	};

	// Multi state group (Inline field validation flow from Figma design)
	const mockPostAbaNumberAPI = async (abaNumber: string) => {
		const validRes: { status: keyof typeof addOnAfterMap; bank: string; errorMessage?: undefined } =
			{
				status: 'valid',
				bank: 'Capital One, New Orleans, Louisiana',
			};

		const invalidRes: {
			status: keyof typeof addOnAfterMap;
			bank?: undefined;
			errorMessage: string;
		} = {
			status: 'invalid',
			errorMessage: 'Routing number not found',
		};

		// Wait 1000ms to demonstrate the loading state
		await new Promise((r) => setTimeout(r, 1000));

		// Only one valid number for demonstration purposes
		return Promise.resolve(abaNumber === '647453' ? validRes : invalidRes);
	};

	const [abaNumber, setAbaNumber] = useState('');
	const [status, setStatus] = useState<keyof typeof addOnAfterMap>('idle');
	const [errorMessage, setErrorMessage] = useState('');
	const [supportMessage, setSupportMessage] = useState('');

	const onClickCheckBtn = async () => {
		inputRef?.current?.focus();
		// Set loading status on click
		setStatus('loading');

		// Check the submitted number
		const { status, errorMessage = '', bank = '' } = await mockPostAbaNumberAPI(abaNumber);

		// Update the status based on the result from the API
		setStatus(status);
		// Show appropriate message to the user
		setErrorMessage(errorMessage);
		setSupportMessage(bank);

		if (errorMessage) {
			// inputRef?.current?.focus();
		}
	};

	const addOnAfterMap = {
		idle: (
			<InputAfter>
				<Button look="hero" onClick={onClickCheckBtn}>
					Check
				</Button>
			</InputAfter>
		),
		loading: <InputAfter icon={RefreshIcon} iconProps={{ assistiveText: 'Loading' }} />,
		invalid: (
			<InputAfter>
				<Button look="hero" onClick={onClickCheckBtn}>
					Check
				</Button>
			</InputAfter>
		),
		valid: <InputAfter icon={TickIcon} iconProps={{ assistiveText: 'Success', color: 'green' }} />,
	};

	const onChangeTextInput = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setAbaNumber(value);

		// Allow the user to check the new number
		setStatus('idle');
	};

	return (
		<GEL brand={brand}>
			<h3>Number stepper</h3>
			<InputField label="Number of dependents">
				<InputBefore>
					<Button onClick={() => setCount(count - 1)} assistiveText="Increment number">
						-
					</Button>
				</InputBefore>
				<Input type="number" value={count} onChange={() => {}} />
				<InputAfter>
					<Button onClick={() => setCount(count + 1)} assistiveText="Decrement number">
						+
					</Button>
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
						assistiveText="Show password"
						aria-pressed={type === 'text'}
					/>
				</InputAfter>
			</InputField>

			<h3>Search with left icon and clear button</h3>
			<InputField label="Search">
				<InputBefore icon={SearchIcon} />
				<Input value={value} onChange={(event) => setValue(event.target.value)} />
				<InputAfter inset>
					<Button
						look="link"
						iconAfter={ClearIcon}
						iconColor="grey"
						onClick={() => setValue('')}
						assistiveText="Clear"
					/>
				</InputAfter>
			</InputField>

			<h3>Inline field validation flow</h3>
			<InputField
				label="Enter ABA routing number"
				hint="For a valid response use: 647453, all other numbers will show the invalid response"
				errorMessage={errorMessage}
				supportingText={supportMessage}
			>
				<Input ref={inputRef} type="numeric" value={abaNumber} onChange={onChangeTextInput} />
				{addOnAfterMap[status]}
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
				<InputTextarea onChange={onChangeTextAreaInput} />
			</InputField>
		</GEL>
	);
}

export default Example;
