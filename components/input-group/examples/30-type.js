/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, Left, Right } from '@westpac/input-group';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Label</h2>

			<InputGroup name="example-text-1" label="Total amount">
				<Left type="text" data="$" />
			</InputGroup>
			<br />
			<InputGroup name="example-text-2" label="Total amount">
				<Right type="text" data=".00" />
			</InputGroup>
			<br />
			<InputGroup name="example-text-3" label="Total amount">
				<Left type="text" data="$" />
				<Right type="text" data=".00" />
			</InputGroup>
			<br />

			<hr />

			<h2>Button</h2>

			<h3>Default</h3>
			<InputGroup name="example-default-button" label="Search">
				<Right type="button" data="Submit" />
			</InputGroup>
			<br />

			<h3>Primary</h3>
			<InputGroup name="example-primary-button" label="Search" look="primary">
				<Right type="button" data="Submit" />
			</InputGroup>
			<br />

			<h3>Hero</h3>
			<InputGroup name="example-hero-button" label="Search" look="hero">
				<Right type="button" data="Submit" />
			</InputGroup>
			<br />

			<h3>Faint</h3>
			<InputGroup name="example-faint-button" label="Search" look="faint">
				<Right type="button" data="Submit" />
			</InputGroup>
			<br />

			<hr />

			<h2>Select</h2>

			<InputGroup name="example-select" label="Total amount">
				<Right
					type="select"
					label="Frequency"
					data={[
						{ text: 'Select', value: '' },
						{ text: 'Yearly', value: 'Yearly' },
						{ text: 'Monthly', value: 'Monthly' },
						{ text: 'Weekly', value: 'Daily' },
					]}
				/>
			</InputGroup>
		</GEL>
	);
}

export default Example;
