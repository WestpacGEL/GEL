/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, Before, After } from '@westpac/input-group';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Single add-on</h2>

			<h3>Composed</h3>

			<InputGroup name="example-text" label="Total amount">
				<Before type="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup name="example-button" label="Filter by name">
				<After type="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-select" label="Total amount">
				<After
					type="select"
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
			</InputGroup>
			<br />

			<h3>Data-driven</h3>
			<InputGroup
				name="example-text-datadriven"
				label="Total amount"
				data={{
					after: { type: 'text', data: '.00' },
				}}
			/>
			<br />

			<InputGroup
				name="example-button-datadriven"
				label="Filter by name"
				data={{
					after: { type: 'button', data: 'Submit' },
				}}
			/>
			<br />

			<InputGroup
				name="example-select-datadriven"
				label="Total amount"
				data={{
					before: {
						type: 'select',
						name: 'example-select-datadriven-select',
						label: 'Total amount',
						onChange: (event) => console.log(`Selected ${event.target.value}`),
						data: [
							{ text: 'Select', value: '' },
							{ text: 'AUD $', value: 'AUD $' },
							{ text: 'USD $', value: 'USD $' },
							{ text: 'GBP £', value: 'GBP £' },
						],
					},
				}}
			/>
			<br />

			<hr />

			<h2>Combination</h2>

			<h3>Composed</h3>
			<InputGroup name="example-text-button" label="Total amount">
				<Before type="text" data="AUS $" />
				<After type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup name="example-select-button" label="Total amount">
				<Before
					type="select"
					name="example-select-button-select"
					label="Currency"
					onChange={(event) => console.log(`Selected ${event.target.value}`)}
					data={[
						{ text: 'AUD $', value: 'AUD' },
						{ text: 'USD $', value: 'USD' },
						{ text: 'EUR €', value: 'EUR' },
					]}
				/>
				<After type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>

			<h3>Data-driven</h3>
			<InputGroup
				name="example-text-button-datadriven"
				label="Total amount"
				data={{
					before: { type: 'text', data: 'AUS $' },
					after: {
						type: 'button',
						data: 'Go',
						onClick: () => console.log('Go clicked'),
					},
				}}
			/>
			<br />

			<InputGroup
				name="example-select-button-datadriven"
				label="Total amount"
				look="primary"
				data={{
					before: {
						type: 'select',
						name: 'example-select-button-datadriven-select',
						label: 'Currency',
						onChange: (event) => console.log(`Selected ${event.target.value}`),
						data: [{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }],
					},
					after: {
						type: 'button',
						data: 'Go',
						onClick: () => console.log('Go clicked'),
					},
				}}
			/>
		</GEL>
	);
}

export default Example;
