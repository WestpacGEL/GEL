/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, Before, After } from '@westpac/input-group';
import { AddIcon, RemoveIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Text add-on</h2>

			<h3>Before</h3>
			<InputGroup name="example-text-1" label="Total amount">
				<Before type="text" data="$" />
			</InputGroup>

			<h3>After</h3>
			<InputGroup name="example-text-2" label="Total amount">
				<After type="text" data=".00" />
			</InputGroup>

			<h3>Before &amp; After</h3>
			<InputGroup name="example-text-3" label="Total amount">
				<Before type="text" data="$" />
				<After type="text" data=".00" />
			</InputGroup>
			<br />

			<hr />

			<h2>Button add-on</h2>

			<h3>Default</h3>
			<InputGroup name="example-default-button" label="Search">
				<After type="button" data="Submit" />
			</InputGroup>

			<h3>Primary</h3>
			<InputGroup name="example-primary-button" label="Search" look="primary">
				<After type="button" data="Submit" />
			</InputGroup>

			<h3>Hero</h3>
			<InputGroup name="example-hero-button" label="Search" look="hero">
				<After type="button" data="Submit" />
			</InputGroup>

			<h3>Faint</h3>
			<InputGroup name="example-faint-button" label="Search" look="faint">
				<After type="button" data="Submit" />
			</InputGroup>

			<h3>Before &amp; After</h3>
			<InputGroup name="example-faint-buttons" label="Quantity">
				<Before type="button" iconAfter={RemoveIcon} assistiveText="Decrement value" />
				<After type="button" iconAfter={AddIcon} assistiveText="Increment value" />
			</InputGroup>

			<hr />

			<h2>Select add-on</h2>

			<h3>Before</h3>
			<InputGroup name="example-select-before" label="Total amount">
				<Before
					type="select"
					name="example-select-before-select"
					label="Currency"
					data={[
						{ text: 'Select', value: '' },
						{ text: 'AUD $', value: 'AUD $' },
						{ text: 'NZD $', value: 'NZD $' },
						{ text: 'USD $', value: 'USD $' },
					]}
				/>
			</InputGroup>

			<h3>After</h3>
			<InputGroup name="example-select-after" label="Total amount">
				<After
					type="select"
					name="example-select-after-select"
					label="Frequency"
					data={[
						{ text: 'Select', value: '' },
						{ text: 'Yearly', value: 'Yearly' },
						{ text: 'Monthly', value: 'Monthly' },
						{ text: 'Weekly', value: 'Weekly' },
					]}
				/>
			</InputGroup>

			<h3>Before &amp; After</h3>
			<InputGroup name="example-select-both" label="Total amount">
				<Before
					type="select"
					name="example-select-both-before"
					label="Currency"
					data={[
						{ text: 'Select', value: '' },
						{ text: 'AUD $', value: 'AUD $' },
						{ text: 'NZD $', value: 'NZD $' },
						{ text: 'USD $', value: 'USD $' },
					]}
				/>
				<After
					type="select"
					name="example-select-both-after"
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
