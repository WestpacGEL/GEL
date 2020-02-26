/** @jsx jsx */

import { jsx, devWarning } from '@westpac/core';
import { Code } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

function Example({ context }) {
	devWarning(true, 'Warn consumer about a thing but ignore the wanring in production!');

	return (
		<Playground context={context}>
			<Intopia ignore />
			<Code>
				devWarning( true, 'Warn consumer about a thing but ignore the wanring in production!' );
			</Code>
			=>
			<Code>> Warning: Warn consumer about a thing but ignore the wanring in production!</Code>
		</Playground>
	);
}

export default Example;
