import { GEL, jsx } from '@westpac/core';
import { InputGroup } from '@westpac/input-group';
import { AddIcon, RemoveIcon } from '@westpac/icon';
import { Button } from '@westpac/button';
import { Select } from '@westpac/text-input';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Text add-on</h2>

			<h3>Before</h3>
			<InputGroup name="example-text-1" label="Total amount" before="$" />

			<h3>After</h3>
			<InputGroup name="example-text-2" label="Total amount" after=".00" />

			<h3>Before &amp; After</h3>
			<InputGroup name="example-text-3" label="Total amount" before="$" after=".00" />
			<br />

			<hr />

			<h2>Button add-on</h2>

			<h3>Default</h3>
			<InputGroup name="example-default-button" label="Search" after={<Button>Submit</Button>} />

			<h3>Primary</h3>
			<InputGroup
				name="example-primary-button"
				label="Search"
				after={<Button look="primary">Submit</Button>}
			/>

			<h3>Hero</h3>
			<InputGroup
				name="example-hero-button"
				label="Search"
				after={<Button look="hero">Submit</Button>}
			/>

			<h3>Faint</h3>
			<InputGroup
				name="example-faint-button"
				label="Search"
				after={<Button look="faint">Submit</Button>}
			/>

			<h3>Before &amp; After</h3>
			<InputGroup
				name="example-faint-buttons"
				label="Quantity"
				before={<Button iconAfter={RemoveIcon} assistiveText="Decrement value" />}
				after={<Button iconAfter={AddIcon} assistiveText="Increment value" />}
			/>

			<hr />

			<h2>Select add-on</h2>

			<h3>Before</h3>
			<InputGroup
				name="example-select-before"
				label="Total amount"
				before={
					<Select
						name="example-select-before-select"
						label="Currency"
						data={[
							{ text: 'Select', value: '' },
							{ text: 'AUD $', value: 'AUD $' },
							{ text: 'NZD $', value: 'NZD $' },
							{ text: 'USD $', value: 'USD $' },
						]}
					/>
				}
			/>

			<h3>After</h3>
			<InputGroup
				name="example-select-after"
				label="Total amount"
				after={
					<Select
						name="example-select-after-select"
						data={[
							{ text: 'Select', value: '' },
							{ text: 'Yearly', value: 'Yearly' },
							{ text: 'Monthly', value: 'Monthly' },
							{ text: 'Weekly', value: 'Weekly' },
						]}
					/>
				}
			/>

			<h3>Before &amp; After</h3>
			<InputGroup
				name="example-select-both"
				label="Total amount"
				before={
					<Select
						name="example-select-both-before"
						data={[
							{ text: 'Select', value: '' },
							{ text: 'AUD $', value: 'AUD $' },
							{ text: 'NZD $', value: 'NZD $' },
							{ text: 'USD $', value: 'USD $' },
						]}
					/>
				}
				after={
					<Select
						name="example-select-both-after"
						data={[
							{ text: 'Select', value: '' },
							{ text: 'Yearly', value: 'Yearly' },
							{ text: 'Monthly', value: 'Monthly' },
							{ text: 'Weekly', value: 'Weekly' },
						]}
					/>
				}
			/>
		</GEL>
	);
}

export default Example;
