import React from 'react';
import { Switch } from '../src';

export default () => (
	<>
		<h2>This breakpoint and wider</h2>
		<Switch name="example-responsive-1" size={['medium', 'xlarge']} isBlock>
			Extra large for MD breakpoint and wider
		</Switch>
		<Switch name="example-responsive-2" size={['small', null, 'xlarge']} isBlock>
			Small but Extra large for LG breakpoint
		</Switch>

		<hr />

		<h2>This breakpoint only</h2>
		<Switch name="example-responsive-3" size={['medium', null, 'xlarge', 'medium']} isBlock>
			Extra large for LG breakpoint only
		</Switch>
		<Switch name="example-responsive-4" size={['medium', null, 'small', 'medium']} isBlock>
			Small for LG breakpoint only
		</Switch>
		<Switch name="example-responsive-5" size={['small', 'xlarge', 'small']} isBlock>
			Small but Extra large for SM breakpoint only
		</Switch>
	</>
);
