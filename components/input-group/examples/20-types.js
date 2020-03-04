/** @jsx jsx */

import { jsx } from '@westpac/core';
import { InputGroup, Left, Right } from '@westpac/input-group';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
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

			<InputGroup disabled defaultValue="This input is disabled and contains a value">
				<Left type="label" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup
				disabled
				defaultValue="This input is disabled and contains a value"
				data={{
					left: { type: 'label', data: 'AUS $' },
				}}
			/>
			<br />

			<hr />

			<h2>Read only</h2>

			<InputGroup readOnly defaultValue="This input is read only and contains a value">
				<Left type="label" data="AUS $" />
			</InputGroup>
			<br />

			<InputGroup
				readOnly
				defaultValue="This input is read only and contains a value"
				data={{
					left: { type: 'label', data: 'AUS $' },
				}}
			/>
		</Playground>
	);
};
