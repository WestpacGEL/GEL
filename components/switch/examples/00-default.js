import React from 'react';

import { Switch } from '../src';
import { Box } from './_utils';

export default () => (
	<>
		<Box>
			<Switch srOnly name="ex1">
				Enable notifications
			</Switch>
			<Switch srOnly name="ex2" values>
				Enable notifications
			</Switch>
			<Switch srOnly name="ex3" values={['Yes', 'No']}>
				Enable notifications
			</Switch>
		</Box>

		<Box>
			<Switch name="ex4" values={['Yes', 'No']}>
				Enable notifications
			</Switch>
			<Switch name="ex5" values>
				Turn notifications
			</Switch>
		</Box>
		<Box>
			<Switch name="ex4" values={['Yes', 'No']} checked>
				Enable notifications
			</Switch>
			<Switch name="ex6" values checked>
				Turn notifications
			</Switch>
		</Box>
		<Box>
			<Switch name="ex4" values={['Yes', 'No']} disabled>
				Enable notifications
			</Switch>
			<Switch name="ex6" values disabled>
				Turn notifications
			</Switch>
		</Box>
	</>
);
