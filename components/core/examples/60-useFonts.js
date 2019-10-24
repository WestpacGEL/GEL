/** @jsx jsx */

import { GEL, jsx, useFonts } from '@westpac/core';
import { Code } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Code>
				useFonts({'{'} path: 'path/to/my/fonts/' {'}'})
			</Code>
			=>
			<Code>{JSON.stringify(useFonts({ path: 'path/to/my/fonts/' }), null, 2)}</Code>
		</GEL>
	);
}

export default Example;
