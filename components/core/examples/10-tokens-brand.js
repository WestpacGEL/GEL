/** @jsx jsx */

import { GEL, jsx, useBrand } from '@westpac/core';
import { Code } from './_utils';

function Example({ brand }) {
	const { BRAND } = useBrand();

	return (
		<GEL brand={brand}>
			<h2>Brand</h2>
			<Code>{JSON.stringify(BRAND, null, 2)}</Code>
		</GEL>
	);
}

export default Example;
