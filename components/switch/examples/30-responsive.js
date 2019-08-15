import React from 'react';

import { Switch } from '../src';

export default () => (
	<>
		<h3>This breakpoint and wider</h3>
		<Switch name="ex1" id="ex1" size={['medium', 'xlarge']} block>
			Extra large for MD breakpoint and wider
		</Switch>
		<Switch name="ex2" id="ex2" size={['small', null, 'xlarge']} block>
			Small but Extra large for LG breakpoint
		</Switch>

		<hr />

		<h3>This breakpoint only</h3>
		<Switch name="ex3" id="ex3" size={['medium', null, 'xlarge', 'medium']} block>
			Extra large for LG breakpoint only
		</Switch>
		<Switch name="ex4" id="ex4" size={['medium', null, 'small', 'medium']} block>
			Small for LG breakpoint only
		</Switch>
		<Switch name="ex5" id="ex5" size={['small', 'xlarge', 'small']} block>
			Small but Extra large for SM breakpoint only
		</Switch>
	</>
);
