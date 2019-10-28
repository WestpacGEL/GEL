/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Well } from '@westpac/well';

function Example({ brand }) {
	const brandWithTokens = { ...brand };
	brandWithTokens['@westpac/well'] = {
		css: {
			outline: '1px solid red',
		},
	};

	return (
		<GEL brand={brandWithTokens}>
			<h2>With local tokens applied</h2>
			<Well>Look, I'm in a well.</Well>

			<hr />

			<Well>
				I am outside
				<Well>I am inside</Well>
			</Well>
		</GEL>
	);
}

export default Example;
