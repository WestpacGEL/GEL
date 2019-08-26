import React from 'react';

import { Switch } from '../src';

export default () => (
	<>
		<h3>Small</h3>
		<Switch name="ex1" size="small" toggleText={['Yes', 'No']}>
			Enable notifications
		</Switch>
		<Switch name="ex2" size="small">
			Turn notifications
		</Switch>

		<hr />

		<h3>Medium (default)</h3>
		<Switch name="ex3" toggleText={['Yes', 'No']}>
			Enable notifications
		</Switch>
		<Switch name="ex4">Turn notifications</Switch>

		<hr />

		<h3>Large</h3>
		<Switch name="ex5" size="large" toggleText={['Yes', 'No']}>
			Enable notifications
		</Switch>
		<Switch name="ex6" size="large">
			Turn notifications
		</Switch>

		<hr />

		<h3>Extra large</h3>
		<Switch name="ex7" size="xlarge" toggleText={['Yes', 'No']}>
			Enable notifications
		</Switch>
		<Switch name="ex8" size="xlarge">
			Turn notifications
		</Switch>
	</>
);
