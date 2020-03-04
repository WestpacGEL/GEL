/** @jsx jsx */

import { jsx, asArray } from '@westpac/core';
import { Code } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	console.log(asArray([1, 2, 3]));
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia ignore />
			<Code>{`asArray([ 1, 2, 3])`}</Code>
			=>
			<Code>{JSON.stringify(asArray([1, 2, 3]))}</Code>
			<hr />
			<Code>{`asArray(1)`}</Code>
			=>
			<Code>{JSON.stringify(asArray(1))}</Code>
		</Playground>
	);
};
