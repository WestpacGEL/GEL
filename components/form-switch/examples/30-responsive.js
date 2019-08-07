import React from 'react';

import { FormSwitch } from '../src';

export default () => (
	<>
		<h3>This breakpoint and wider</h3>
		<FormSwitch name="ex1" size={['medium', 'xlarge']} values>
			Extra large for MD breakpoint and wider
		</FormSwitch>
		<FormSwitch name="ex2" size={['small', 'small', 'xlarge']} values>
			Small but Extra large for LG breakpoint
		</FormSwitch>

		<hr />

		<h3>This breakpoint only</h3>
		<FormSwitch name="ex3" size={['medium', 'medium', 'xlarge', 'medium']}>
			Extra large for LG breakpoint only
		</FormSwitch>
		<FormSwitch name="ex4" size={['medium', 'medium', 'small', 'medium']}>
			Small for LG breakpoint only
		</FormSwitch>
		<FormSwitch name="ex5" size={['xlarge', 'small', 'small', 'small']}>
			Small but Extra large for SM breakpoint only
		</FormSwitch>
	</>
);
