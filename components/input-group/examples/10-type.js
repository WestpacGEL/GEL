/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, Left, Right } from '@westpac/input-group';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Text add-on</h2>

			<h3>Left</h3>
			<InputGroup name="example-text-1" label="Total amount">
				<Left type="text" data="$" />
			</InputGroup>

			<h3>Right</h3>
			<InputGroup name="example-text-2" label="Total amount">
				<Right type="text" data=".00" />
			</InputGroup>

			<h3>Left &amp; Right</h3>
			<InputGroup name="example-text-3" label="Total amount">
				<Left type="text" data="$" />
				<Right type="text" data=".00" />
			</InputGroup>
			<br />

			<hr />

			<h2>Button add-on</h2>

			<h3>Default</h3>
			<InputGroup name="example-default-button" label="Search">
				<Right type="button" data="Submit" />
			</InputGroup>

			<h3>Primary</h3>
			<InputGroup name="example-primary-button" label="Search" look="primary">
				<Right type="button" data="Submit" />
			</InputGroup>

			<h3>Hero</h3>
			<InputGroup name="example-hero-button" label="Search" look="hero">
				<Right type="button" data="Submit" />
			</InputGroup>

			<h3>Faint</h3>
			<InputGroup name="example-faint-button" label="Search" look="faint">
				<Right type="button" data="Submit" />
			</InputGroup>

			<h3>Left &amp; Right</h3>
			<InputGroup name="example-faint-buttons" label="Quantity">
				<Left type="button" data="-" />
				<Right type="button" data="+" />
			</InputGroup>

			<hr />

			<h2>Select add-on</h2>

			<h3>Left</h3>
			<InputGroup name="example-select-left" label="Total amount">
				<Left
					type="select"
					name="example-select-left-select"
					label="Currency"
					data={[
						{ text: 'Select', value: '' },
						{ text: 'AUD $', value: 'AUD $' },
						{ text: 'NZD $', value: 'NZD $' },
						{ text: 'USD $', value: 'USD $' },
					]}
				/>
			</InputGroup>

			<h3>Right</h3>
			<InputGroup name="example-select-right" label="Total amount">
				<Right
					type="select"
					name="example-select-right-select"
					label="Frequency"
					data={[
						{ text: 'Select', value: '' },
						{ text: 'Yearly', value: 'Yearly' },
						{ text: 'Monthly', value: 'Monthly' },
						{ text: 'Weekly', value: 'Weekly' },
					]}
				/>
			</InputGroup>

			<h3>Left &amp; Right</h3>
			<InputGroup name="example-select-both" label="Total amount">
				<Left
					type="select"
					name="example-select-both-left"
					label="Currency"
					data={[
						{ text: 'Select', value: '' },
						{ text: 'AUD $', value: 'AUD $' },
						{ text: 'NZD $', value: 'NZD $' },
						{ text: 'USD $', value: 'USD $' },
					]}
				/>
				<Right
					type="select"
					name="example-select-both-right"
					label="Frequency"
					data={[
						{ text: 'Select', value: '' },
						{ text: 'Yearly', value: 'Yearly' },
						{ text: 'Monthly', value: 'Monthly' },
						{ text: 'Weekly', value: 'Weekly' },
					]}
				/>
			</InputGroup>
		</GEL>
	);
}

export default Example;
