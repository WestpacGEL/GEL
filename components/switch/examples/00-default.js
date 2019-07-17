import React from 'react';

import { Switch } from '../src';
import { Box } from './_utils';

export default () => (
	<>
		<Box>
			<Switch srOnly name="ex1">
				Enable notifications
			</Switch>
			<Switch srOnly name="ex2">
				Enable notifications
			</Switch>
			<Switch srOnly name="ex3" text={['Yes', 'No']}>
				Enable notifications
			</Switch>
		</Box>

		<Box>
			<Switch name="ex4">Enable notifications</Switch>
			<Switch name="ex5">Turn notifications</Switch>
		</Box>
	</>
);
