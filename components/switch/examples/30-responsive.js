import React from 'react';

import { Switch } from '../src';
import { Box } from './_utils';

export default () => (
	<>
		<h3>This breakpoint and wider</h3>
		<Box>
			<Switch name="ex1" size="medium">
				Extra large for MD breakpoint and wider
			</Switch>
			<Switch name="ex2" size="small">
				Small but Extra large for LG breakpoint
			</Switch>
		</Box>
		<hr />

		<h3>This breakpoint only</h3>
		<Box>
			<Switch name="ex3" size="small">
				Extra large for LG breakpoint only
			</Switch>
			<Switch name="ex4" size="small">
				Small for LG breakpoint only
			</Switch>
			<Switch name="ex5" size="large">
				Small but Extra large for SM breakpoint only
			</Switch>
		</Box>
		<hr />
	</>
);
