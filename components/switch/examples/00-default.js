import React from 'react';

import { Switch } from '../src';
import { Box } from './_utils';

export default () => (
	<>
		<h3>Switches without visible text label (Screenreader only text)</h3>

		<Switch srOnly name="ex1">
			Enable notifications
		</Switch>
		<Switch srOnly name="ex2" values />
		<Switch srOnly name="ex3" values={['Yes', 'No']} />

		<hr />

		<h3>Switches with text label</h3>

		<Switch name="ex4">Enable notifications</Switch>
		<Switch name="ex5" values>
			Enable notifications
		</Switch>

		<hr />

		<h3>Checked by default</h3>

		<Switch name="ex6" checked>
			Enable notifications
		</Switch>
		<Switch name="ex7" values checked>
			Turn notifications
		</Switch>

		<hr />

		<h3>Disabled switches</h3>

		<Switch name="ex8" disabled>
			Enable notifications
		</Switch>
		<Switch name="ex9" values disabled>
			Turn notifications
		</Switch>

		<hr />
	</>
);
