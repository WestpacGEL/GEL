import React from 'react';

import { Switch } from '../src';
import { Box } from './_utils';

export default () => (
	<>
		<h3>Switches without visible text label (Screenreader only text)</h3>
		<Box>
			<Switch srOnly name="ex1" />
			<Switch srOnly name="ex2" values />
			<Switch srOnly name="ex3" values={['Yes', 'No']} />
		</Box>
		<hr />

		<h3>Switches with text label</h3>
		<Box>
			<Switch name="ex4">Enable notifications</Switch>
			<Switch name="ex5" values>
				Enable notifications
			</Switch>
		</Box>
		<hr />

		<h3>Checked by default</h3>
		<Box>
			<Switch name="ex6" checked>
				Enable notifications
			</Switch>
			<Switch name="ex7" values checked>
				Turn notifications
			</Switch>
		</Box>
		<hr />

		<h3>Disabled switches</h3>
		<Box>
			<Switch name="ex8" disabled>
				Enable notifications
			</Switch>
			<Switch name="ex9" values disabled>
				Turn notifications
			</Switch>
		</Box>
		<hr />
	</>
);
