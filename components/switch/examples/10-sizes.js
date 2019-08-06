import React from 'react';

import { Switch } from '../src';
import { Box } from './_utils';

export default () => (
	<>
		<h3>Small</h3>
		<Switch name="ex1" size="small">
			Enable notifications
		</Switch>
		<Switch name="ex2" values size="small">
			Turn notifications
		</Switch>

		<hr />

		<h3>Medium (default)</h3>

		<Switch name="ex3">Enable notifications</Switch>
		<Switch name="ex4" values>
			Turn notifications
		</Switch>

		<hr />

		<h3>Large</h3>

		<Switch name="ex4" size="large">
			Enable notifications
		</Switch>
		<Switch name="ex5" values size="large">
			Turn notifications
		</Switch>

		<hr />

		<h3>Extra large</h3>

		<Switch name="ex6" size="xlarge">
			Enable notifications
		</Switch>
		<Switch name="ex7" values size="xlarge">
			Turn notifications
		</Switch>

		<hr />
	</>
);
