import { GEL, jsx } from '@westpac/core';
import { InputGroup } from '@westpac/input-group';
import { Button } from '@westpac/button';
import { Select, TextInput } from '@westpac/text-input';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Single add-on</h2>

			<h3>Composed</h3>

			<InputGroup name="example-text" label="Total amount" before="AUS &" />
			<br />

			<InputGroup name="example-text" label="Total amount" before="AUS &" after=".00" />
			<br />

			<InputGroup
				name="example-select"
				label="Total amount"
				before={
					<Select
						name="example-select-select"
						label="Currency"
						onChange={(event) => console.log(`Selected ${event.target.value}`)}
						data={[
							{ text: 'Select', value: '' },
							{ text: 'AUD $', value: 'AUD $' },
							{ text: 'USD $', value: 'USD $' },
							{ text: 'GBP £', value: 'GBP £' },
						]}
					/>
				}
			/>
			<br />

			<hr />

			<h2>Combination</h2>

			<h3>Composed</h3>
			<InputGroup
				name="example-text-button"
				label="Total amount"
				after={<Button onClick={() => console.log('Go clicked')}>Go</Button>}
				before={<TextInput width={3} placeholder="AUS $" />}
			/>
			<br />

			<InputGroup
				name="example-select-button"
				label="Total amount"
				before={
					<Select
						name="example-select-button-select"
						label="Currency"
						onChange={(event) => console.log(`Selected ${event.target.value}`)}
						data={[
							{ text: 'AUD $', value: 'AUD' },
							{ text: 'USD $', value: 'USD' },
							{ text: 'EUR €', value: 'EUR' },
						]}
					/>
				}
				after={<Button onClick={() => console.log('Go clicked')}>Go</Button>}
			/>
		</GEL>
	);
}

export default Example;
