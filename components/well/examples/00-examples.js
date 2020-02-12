/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Well } from '@westpac/well';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ context }) {
	return (
		<Playground context={context} brand={brand}>
			<Intopia />

			<h3>Default</h3>
			<Well>Look, I'm in a well.</Well>

			<hr />

			<h3>Nested</h3>
			<Well>
				I am outside
				<Well>I am inside</Well>
			</Well>
		</Playground>
	);
}

export default Example;
