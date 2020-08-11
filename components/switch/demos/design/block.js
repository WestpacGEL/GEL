/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Switch name="example-block" label="Enable notifications" block />
			<Switch name="example-block" label="Turn notifications" block />
		</Playground>
	);
};
