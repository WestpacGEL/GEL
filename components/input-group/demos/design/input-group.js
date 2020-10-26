/** @jsx jsx */

import { jsx } from '@westpac/core';
import { useState } from 'react';
import { InputGroup, Before, After } from '@westpac/input-group';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	const [value, setValue] = useState(0);

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<InputGroup name="example-text" label="Total amount">
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
			<InputGroup name="example-button" label="Filter by name">
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />
			<InputGroup name="example-select" label="Total amount">
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
			<InputGroup name="example-button" label="Filter by name" value={value}>
				<Before inputType="button" data="-" onClick={() => setValue((value) => value - 1)} />
				<After inputType="button" data="+" onClick={() => setValue((value) => value + 1)} />
			</InputGroup>
		</Playground>
	);
};
