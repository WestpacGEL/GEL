/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, Left, Right } from '@westpac/input-group';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Invalid</h2>

			<InputGroup
				name="example-invalid-label"
				label="Total amount"
				invalid
				defaultValue="Text that can be edited"
			>
				<Left type="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup
				name="example-invalid-label-datadriven"
				label="Total amount"
				invalid
				defaultValue="Text that can be edited"
				data={{
					left: { type: 'text', data: 'AUS $' },
				}}
			/>
			<br />

			<hr />

			<h2>Disabled</h2>

			<InputGroup
				name="example-disabled-label"
				label="Total amount"
				disabled
				defaultValue="This input is disabled and contains a value"
			>
				<Left type="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup
				name="example-disabled-label-datadriven"
				label="Total amount"
				disabled
				defaultValue="This input is disabled and contains a value"
				data={{
					left: { type: 'text', data: 'AUS $' },
				}}
			/>
			<br />

			<hr />

			<h2>Read only</h2>

			<InputGroup
				name="example-readonly-label"
				label="Total amount"
				readOnly
				defaultValue="This input is read only and contains a value"
			>
				<Left type="text" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup
				name="example-readonly-label-datadriven"
				label="Total amount"
				readOnly
				defaultValue="This input is read only and contains a value"
				data={{
					left: { type: 'text', data: 'AUS $' },
				}}
			/>
		</GEL>
	);
}

export default Example;
