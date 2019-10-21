import React from 'react';
import { Switch } from '../src';

export default () => (
	<>
		<h3>Switches without visible text label (Screenreader only text)</h3>
		<Switch name="ex1" srOnlyText>
			Enable notifications?
		</Switch>
		<Switch name="ex2" srOnlyText toggleText={['Off', 'On']}>
			Enable notifications?
		</Switch>
		<hr />
		<h3>Switches with text label</h3>
		<Switch name="ex3">Enable notifications?</Switch>
		<Switch name="ex4" toggleText={['Off', 'On']}>
			Turn notifications
		</Switch>
		<hr />
		<h3>Checked by default</h3>
		<Switch name="ex5" checked>
			Enable notifications?
		</Switch>
		<Switch name="ex6" toggleText={['Off', 'On']} checked>
			Turn notifications
		</Switch>
	</>
);
