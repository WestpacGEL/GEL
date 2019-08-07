import React from 'react';

import { FormSwitch } from '../src';

export default () => (
	<>
		<h3>This breakpoint and wider</h3>
		<FormSwitch name="ex1" id="ex1" size={['medium', 'xlarge']} block>
			Extra large for MD breakpoint and wider
		</FormSwitch>
		<FormSwitch name="ex2" id="ex2" size={['small', 'small', 'xlarge']} block>
			Small but Extra large for LG breakpoint
		</FormSwitch>

		<hr />

		<h3>This breakpoint only</h3>
		<FormSwitch name="ex3" id="ex3" size={['medium', 'medium', 'xlarge', 'medium']} block>
			Extra large for LG breakpoint only
		</FormSwitch>
		<FormSwitch name="ex4" id="ex4" size={['medium', 'medium', 'small', 'medium']} block>
			Small for LG breakpoint only
		</FormSwitch>
		<FormSwitch name="ex5" id="ex5" size={['xlarge', 'small']} block>
			Small but Extra large for SM breakpoint only
		</FormSwitch>
	</>
);
