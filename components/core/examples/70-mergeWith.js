/** @jsx jsx */

import { jsx, mergeWith } from '@westpac/core';
import { Code } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

function Example({ context }) {
	let object = { a: [{ b: 2 }, { d: 4 }] };
	let other = (other = { a: [{ c: 3 }, { e: 5 }] });

	return (
		<Playground context={context}>
			<Intopia ignore />
			<Code>
				const object = {JSON.stringify(object, null, 2)};{<br css={{ margin: '1rem' }} />}
				const other = {JSON.stringify(other, null, 2)};{<br css={{ margin: '1rem' }} />}
				mergeWith(object, other);
			</Code>
			=>
			<Code>{JSON.stringify(mergeWith(object, other), null, 2)}</Code>
		</Playground>
	);
}

export default Example;
