/** @jsx jsx */

import { GEL, jsx, devWarning } from '@westpac/core';
import { Code } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	devWarning(true, 'Warn consumer about a thing but ignore the wanring in production!');

	return (
		<GEL brand={brand}>
			<Intopia ignore />

			<Code>
				devWarning( true, 'Warn consumer about a thing but ignore the wanring in production!' );
			</Code>
			=>
			<Code>> Warning: Warn consumer about a thing but ignore the wanring in production!</Code>
		</GEL>
	);
}

export default Example;
