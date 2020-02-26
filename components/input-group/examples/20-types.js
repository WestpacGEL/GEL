/** @jsx jsx */

import { jsx } from '@westpac/core';
import { InputGroup, Left, Right } from '@westpac/input-group';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

function Example({ context }) {
	return (
		<Playground context={context}>
			<Intopia />

			<h2>Invalid</h2>

			<InputGroup invalid defaultValue="Text that can be edited">
				<Left type="label" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup
				invalid
				defaultValue="Text that can be edited"
				data={{
					left: { type: 'label', data: 'AUS $' },
				}}
			/>
			<br />

			<hr />

			<h2>Disabled</h2>

			<InputGroup disabled value="This input is disabled and contains a value">
				<Left type="label" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup
				disabled
				value="This input is disabled and contains a value"
				data={{
					left: { type: 'label', data: 'AUS $' },
				}}
			/>
			<br />

			<hr />

			<h2>Read only</h2>

			<InputGroup readOnly value="This input is read only and contains a value">
				<Left type="label" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup
				readOnly
				value="This input is read only and contains a value"
				data={{
					left: { type: 'label', data: 'AUS $' },
				}}
			/>
		</Playground>
	);
}

export default Example;
