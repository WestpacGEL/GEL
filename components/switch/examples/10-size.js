import React from 'react';
import { Switch } from '../src';

export default () => (
	<>
		<h3>Small</h3>
		<Switch name="ex1" size="small" toggleText={['Off', 'On']}>
			Enable notifications?
		</Switch>
		<hr />
		<h3>Medium (default)</h3>
		<Switch name="ex2" size="medium" toggleText={['Off', 'On']}>
			Enable notifications?
		</Switch>
		<hr />
		<h3>Large</h3>
		<Switch name="ex3" size="large" toggleText={['Off', 'On']}>
			Enable notifications?
		</Switch>
		<hr />
		<h3>Extra-large</h3>
		<Switch name="ex4" size="xlarge" toggleText={['Off', 'On']}>
			Enable notifications?
		</Switch>
	</>
);
