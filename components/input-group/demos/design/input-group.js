import { useState } from 'react';
import { InputGroup } from '@westpac/input-group';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Container } from '../../../../helpers/demos';
import { Select } from '@westpac/text-input';
import { Button } from '@westpac/button';
import { HouseIcon } from '@westpac/icon';

const Demo = ({ context, showCode, showDemo }) => {
	const [value, setValue] = useState(0);

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container width={25}>
				<InputGroup
					name="example-icon"
					label="Total amount"
					after={<Button look="link" iconAfter={HouseIcon} />}
				/>
				<br />

				<InputGroup
					name="example-with-button"
					label="Total amount"
					withWrapper={false}
					after={<Button look="primary">Check</Button>}
				/>
				<br />

				<InputGroup name="example-text" label="Total amount" before="AUS $" after=".00" />
				<br />
				<InputGroup
					name="example-select"
					label="Total amount"
					withWrapper={false}
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
			</Container>
			<br />
			<Container width={50}>
				<InputGroup
					name="example-button"
					label="Filter by name"
					withWrapper={false}
					invalid
					after={<Button>Go</Button>}
				/>

				<br />
				<InputGroup
					name="example-select"
					label="Total amount"
					withWrapper={false}
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
				></InputGroup>
			</Container>
			<br />
			<Container width={15}>
				<InputGroup
					name="example-button"
					label="Filter by name"
					value={value}
					withWrapper={false}
					onChange={(event) => setValue(event.target.value)}
					before={<Button onClick={() => setValue((value) => value - 1)}>-</Button>}
					after={<Button onClick={() => setValue((value) => value + 1)}>+</Button>}
				/>
			</Container>
		</Playground>
	);
};

export default Demo;
