/** @jsx jsx */

import { GEL, jsx, asArray } from '@westpac/core';
import { Code } from './_utils';

function Example({ brand }) {
	console.log(asArray([1, 2, 3]));
	return (
		<GEL brand={brand}>
			<Code>{`asArray([ 1, 2, 3])`}</Code>
			=&gt;
			<Code>{JSON.stringify(asArray([1, 2, 3]))}</Code>
			<hr />
			<Code>{`asArray(1)`}</Code>
			=&gt;
			<Code>{JSON.stringify(asArray(1))}</Code>
		</GEL>
	);
}

export default Example;
