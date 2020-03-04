/** @jsx jsx */

import { jsx, devWarning } from '@westpac/core';
import { Code } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	devWarning(true, 'Warn consumer about a thing but ignore the wanring in production!');

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia ignore />
			<Code>
				devWarning( true, 'Warn consumer about a thing but ignore the wanring in production!' );
			</Code>
			=>
			<Code>> Warning: Warn consumer about a thing but ignore the wanring in production!</Code>
		</Playground>
	);
};
