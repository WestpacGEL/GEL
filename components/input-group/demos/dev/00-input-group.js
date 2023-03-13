import { jsx } from '@westpac/core';
import { useState } from 'react';
import { Select } from '@westpac/text-input';
import { Button } from '@westpac/button';
import { InputGroup } from '@westpac/input-group';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	const [value, setValue] = useState(0);

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<InputGroup
				name="example-text"
				label="Total amount"
				defaultValue="User input text"
				before="AUS $"
				after=".00"
			/>
			<br />
			<InputGroup
				name="example-select"
				label="Total amount"
				after={
					<Select
						name="example-select-select"
						label="Currency"
						defaultValue="monthly"
						onChange={(event) => console.log(`Selected ${event.target.value}`)}
						data={[
							{ text: 'Daily', value: 'daily' },
							{ text: 'Monthly', value: 'monthly' },
							{ text: 'Yearly', value: 'yearly' },
						]}
					/>
				}
			/>
			<br />
			<InputGroup
				name="example-button"
				label="Filter by name"
				defaultValue="User input text"
				after={<Button>Go</Button>}
			/>
			<br />
			<InputGroup
				name="example-select"
				label="Total amount"
				placeholder="Placeholder text"
				before={
					<Select
						name="example-select-select"
						label="option"
						onChange={(event) => console.log(`Selected ${event.target.value}`)}
						data={[
							{ text: 'Option', value: 'option' },
							{ text: 'Option 2', value: 'option2' },
							{ text: 'Option 3', value: 'option' },
						]}
					/>
				}
			/>
			<br />
			<InputGroup
				name="example-button"
				label="Filter by name"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				before={<Button onClick={() => setValue((value) => value - 1)}>-</Button>}
				after={<Button onClick={() => setValue((value) => value + 1)}>+</Button>}
			/>
		</Playground>
	);
};

export default Demo;
