import React from 'react';

import { Switch } from '../src';

export default () => (
	<>
		<h2>Small</h2>
		<Switch name="example-small" size="small">
			Turn notifications
		</Switch>

		<hr />

		<h2>Medium</h2>
		<Switch name="example-medium" size="medium">
			Turn notifications
		</Switch>

		<hr />

		<h2>Large</h2>
		<Switch name="example-large" size="large">
			Turn notifications
		</Switch>

		<hr />

		<h2>Extra large</h2>
		<Switch name="example-xlarge" size="xlarge">
			Turn notifications
		</Switch>
	</>
);
