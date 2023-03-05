import { GEL, jsx } from '@westpac/core';
import { InputGroup, Before, After } from '@westpac/input-group';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>

			<InputGroup name="example-default-text" label="Total amount">
				<Before inputType="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup name="example-default-button" label="Filter by name">
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-default-text-button" label="Total amount">
				<Before inputType="text" data="AUS $" />
				<After inputType="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup name="example-default-select-button" label="Total amount">
				<Before
					inputType="select"
					label="Currency"
					data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]}
				/>
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-default-select" label="Total amount">
				<After
					inputType="select"
					label="Currency"
					data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]}
				/>
			</InputGroup>
			<br />

			<hr />

			<h2>Small</h2>
			<InputGroup name="example-small-text" label="Total amount" size="small">
				<Before inputType="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup name="example-small-button" label="Filter by name" size="small">
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-small-text-button" label="Total amount" size="small">
				<Before inputType="text" data="AUS $" />
				<After inputType="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup name="example-small-select-button" label="Total amount" size="small">
				<Before
					inputType="select"
					label="Currency"
					data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]}
				/>
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-small-select" label="Total amount" size="small">
				<After
					inputType="select"
					label="Currency"
					data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]}
				/>
			</InputGroup>
			<br />

			<hr />

			<h2>Medium</h2>
			<InputGroup name="example-medium-text" label="Total amount" size="medium">
				<Before inputType="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup name="example-medium-button" label="Filter by name" size="medium">
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-medium-text-button" label="Total amount" size="medium">
				<Before inputType="text" data="AUS $" />
				<After inputType="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup name="example-medium-select-button" label="Total amount" size="medium">
				<Before
					inputType="select"
					label="Currency"
					data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]}
				/>
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-medium-select" label="Total amount" size="medium">
				<After
					inputType="select"
					label="Currency"
					data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]}
				/>
			</InputGroup>
			<br />

			<hr />

			<h2>Large</h2>
			<InputGroup name="example-large-text" label="Total amount" size="large">
				<Before inputType="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup name="example-large-button" label="Filter by name" size="large">
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-large-text-button" label="Total amount" size="large">
				<Before inputType="text" data="AUS $" />
				<After inputType="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup name="example-large-select-button" label="Total amount" size="large">
				<Before
					inputType="select"
					label="Currency"
					data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]}
				/>
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-large-select" label="Total amount" size="large">
				<After
					inputType="select"
					label="Currency"
					data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]}
				/>
			</InputGroup>
			<br />

			<hr />

			<h2>XLarge</h2>
			<InputGroup name="example-xlarge-text" label="Total amount" size="xlarge">
				<Before inputType="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup name="example-xlarge-button" label="Filter by name" size="xlarge">
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-xlarge-text-button" label="Total amount" size="xlarge">
				<Before inputType="text" data="AUS $" />
				<After inputType="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup name="example-xlarge-select-button" label="Total amount" size="xlarge">
				<Before
					inputType="select"
					label="Currency"
					data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]}
				/>
				<After inputType="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-xlarge-select" label="Total amount" size="xlarge">
				<After
					inputType="select"
					label="Currency"
					data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]}
				/>
			</InputGroup>
		</GEL>
	);
}

export default Example;
