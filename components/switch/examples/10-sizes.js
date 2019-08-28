import React from 'react';

import { Switch } from '../src';

export default () => (
	<>
		<h2>Small</h2>
		<Switch name="example-small-1" size="small" toggleText={['Yes', 'No']}>
			Enable notifications
		</Switch>
		<Switch name="example-small-2" size="small">
			Turn notifications
		</Switch>

		<hr />

		<h2>Medium</h2>
		<Switch name="example-medium-1" toggleText={['Yes', 'No']}>
			Enable notifications
		</Switch>
		<Switch name="example-medium-2">Turn notifications</Switch>

		<hr />

		<h2>Large</h2>
		<Switch name="example-large-1" size="large" toggleText={['Yes', 'No']}>
			Enable notifications
		</Switch>
		<Switch name="example-large-2" size="large">
			Turn notifications
		</Switch>

		<hr />

		<h2>Extra large</h2>
		<Switch name="example-xlarge-1" size="xlarge" toggleText={['Yes', 'No']}>
			Enable notifications
		</Switch>
		<Switch name="example-xlarge-2" size="xlarge">
			Turn notifications
		</Switch>
	</>
);
