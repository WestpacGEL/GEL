import { jsx } from '@westpac/core';
import { useState } from 'react';
import { InputGroup, Before, After } from '@westpac/input-group';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	const [value, setValue] = useState(0);

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<InputGroup name="example-text" label="Total amount" defaultValue="User input text">
				<Before inputType="text" data="AUS $" />
				<After inputType="text" data=".00" />
			</InputGroup>
			<br />
			<InputGroup name="example-select" label="Total amount">
				<After
					inputType="select"
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
			</InputGroup>
			<br />
			<InputGroup name="example-button" label="Filter by name" defaultValue="User input text">
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />
			<InputGroup name="example-select" label="Total amount" placeholder="Placeholder text">
				<Before
					inputType="select"
					name="example-select-select"
					label="option"
					onChange={(event) => console.log(`Selected ${event.target.value}`)}
					data={[
						{ text: 'Option', value: 'option' },
						{ text: 'Option 2', value: 'option2' },
						{ text: 'Option 3', value: 'option' },
					]}
				/>
			</InputGroup>
			<br />
			<InputGroup
				name="example-button"
				label="Filter by name"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			>
				<Before inputType="button" data="-" onClick={() => setValue((value) => value - 1)} />
				<After inputType="button" data="+" onClick={() => setValue((value) => value + 1)} />
			</InputGroup>
			<Title>Data driven</Title>
			<InputGroup
				name="example-text-button-datadriven"
				label="Total amount"
				data={{
					before: { inputType: 'text', data: 'AUS $' },
					after: {
						inputType: 'button',
						data: 'Go',
						onClick: () => console.log('Go clicked'),
					},
				}}
			/>
		</Playground>
	);
};

export default Demo;
