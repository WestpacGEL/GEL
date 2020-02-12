/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ context }) {
	return (
		<Playground context={context} brand={brand}>
			<Intopia />

			<h2>Small</h2>
			<Switch name="example-small" label="Turn notifications" size="small" />
			<hr />

			<h2>Medium</h2>
			<Switch name="example-medium" size="medium" label="Turn notifications" />
			<hr />

			<h2>Large</h2>
			<Switch name="example-large" size="large" label="Turn notifications" />
			<hr />

			<h2>Extra large</h2>
			<Switch name="example-xlarge" size="xlarge" label="Turn notifications" />
		</Playground>
	);
}

export default Example;
