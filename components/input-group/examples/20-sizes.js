/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, Left, Right } from '@westpac/input-group';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Default</h2>

			<InputGroup name="example-default-text" label="Total amount">
				<Left type="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup name="example-default-button" label="Filter by name">
				<Right type="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-default-text-button" label="Total amount">
				<Left type="text" data="AUS $" />
				<Right type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup name="example-default-select-button" label="Total amount">
				<Left type="select" data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]} />
				<Right type="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-default-select" label="Total amount">
				<Right type="select" data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]} />
			</InputGroup>
			<br />

			<hr />

			<h2>Small</h2>
			<InputGroup name="example-small-text" label="Total amount" size="small">
				<Left type="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup name="example-small-button" label="Filter by name" size="small">
				<Right type="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-small-text-button" label="Total amount" size="small">
				<Left type="text" data="AUS $" />
				<Right type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup name="example-small-select-button" label="Total amount" size="small">
				<Left type="select" data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]} />
				<Right type="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-small-select" label="Total amount" size="small">
				<Right type="select" data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]} />
			</InputGroup>
			<br />

			<hr />

			<h2>Medium</h2>
			<InputGroup name="example-medium-text" label="Total amount" size="medium">
				<Left type="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup name="example-medium-button" label="Filter by name" size="medium">
				<Right type="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-medium-text-button" label="Total amount" size="medium">
				<Left type="text" data="AUS $" />
				<Right type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup name="example-medium-select-button" label="Total amount" size="medium">
				<Left type="select" data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]} />
				<Right type="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-medium-select" label="Total amount" size="medium">
				<Right type="select" data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]} />
			</InputGroup>
			<br />

			<hr />

			<h2>Large</h2>
			<InputGroup name="example-large-text" label="Total amount" size="large">
				<Left type="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup name="example-large-button" label="Filter by name" size="large">
				<Right type="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-large-text-button" label="Total amount" size="large">
				<Left type="text" data="AUS $" />
				<Right type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup name="example-large-select-button" label="Total amount" size="large">
				<Left type="select" data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]} />
				<Right type="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-large-select" label="Total amount" size="large">
				<Right type="select" data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]} />
			</InputGroup>
			<br />

			<hr />

			<h2>XLarge</h2>
			<InputGroup name="example-xlarge-text" label="Total amount" size="xlarge">
				<Left type="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup name="example-xlarge-button" label="Filter by name" size="xlarge">
				<Right type="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-xlarge-text-button" label="Total amount" size="xlarge">
				<Left type="text" data="AUS $" />
				<Right type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup name="example-xlarge-select-button" label="Total amount" size="xlarge">
				<Left type="select" data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]} />
				<Right type="button" data="Go" />
			</InputGroup>
			<br />

			<InputGroup name="example-xlarge-select" label="Total amount" size="xlarge">
				<Right type="select" data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]} />
			</InputGroup>
		</GEL>
	);
}

export default Example;
