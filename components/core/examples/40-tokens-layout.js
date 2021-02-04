/** @jsx jsx */

import { GEL, jsx, useBrand } from '@westpac/core';
import { Code } from './_utils';

function Example({ brand }) {
	const { LAYOUT } = useBrand();

	return (
		<GEL brand={brand}>
			<h2>Layout</h2>
			<Code>{JSON.stringify(LAYOUT, null, 2)}</Code>
		</GEL>
	);
}

export default Example;
