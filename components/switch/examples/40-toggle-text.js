/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

			<Switch
				name="example-toggletext"
				label="This example uses custom Yes/No toggle text"
				toggleText={['Yes', 'No']}
			/>
			<Switch name="no-toggletext" label="Pass an empty array for no toggle text" toggleText={[]} />
		</Playground>
	);
};
