/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

			<h2>This breakpoint and wider</h2>
			<Switch
				name="example-responsive-1"
				label="Extra large for MD breakpoint and wider"
				size={['medium', 'xlarge']}
				block
			/>
			<Switch
				name="example-responsive-2"
				label="Small but Extra large for LG breakpoint"
				size={['small', null, 'xlarge']}
				block
			/>
			<hr />
			<h2>This breakpoint only</h2>
			<Switch
				name="example-responsive-3"
				label="Extra large for LG breakpoint only"
				size={['medium', null, 'xlarge', 'medium']}
				block
			/>
			<Switch
				name="example-responsive-4"
				label="Small for LG breakpoint only"
				size={['medium', null, 'small', 'medium']}
				block
			/>
			<Switch
				name="example-responsive-5"
				label="Small but Extra large for SM breakpoint only"
				size={['small', 'xlarge', 'small']}
				block
			/>
		</Playground>
	);
};
