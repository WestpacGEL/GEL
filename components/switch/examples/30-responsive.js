import React from 'react';

import { Switch } from '../src';
import { Box } from './_utils';

export default () => (
	<>
		<h3>This breakpoint and wider</h3>

		<Switch name="ex1" size={['medium', 'xlarge']} values>
			Extra large for MD breakpoint and wider
		</Switch>
		<Switch name="ex2" size={['small', 'small', 'xlarge']} values>
			Small but Extra large for LG breakpoint
		</Switch>

		<hr />

		<h3>This breakpoint only</h3>

		<Switch name="ex3" size={['medium', 'medium', 'xlarge', 'medium']}>
			Extra large for LG breakpoint only
		</Switch>
		<Switch name="ex4" size={['medium', 'medium', 'small', 'medium']}>
			Small for LG breakpoint only
		</Switch>
		<Switch name="ex5" size={['xlarge', 'small', 'small', 'small']}>
			Small but Extra large for SM breakpoint only
		</Switch>

		<hr />
	</>
);
