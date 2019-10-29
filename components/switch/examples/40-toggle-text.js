/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Switch name="example-toggletext" toggleText={['Yes', 'No']}>
				This example uses custom Yes/No toggle text
			</Switch>
		</GEL>
	);
}

export default Example;
