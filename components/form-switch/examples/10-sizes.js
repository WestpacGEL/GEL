import React from 'react';

import { FormSwitch } from '../src';

export default () => (
	<>
		<h3>Small</h3>
		<FormSwitch name="ex1" id="ex1" size="small" toggleText={['Yes', 'No']}>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex2" id="ex2" size="small">
			Turn notifications
		</FormSwitch>

		<hr />

		<h3>Medium (default)</h3>
		<FormSwitch name="ex3" id="ex3" toggleText={['Yes', 'No']}>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex4" id="ex4">
			Turn notifications
		</FormSwitch>

		<hr />

		<h3>Large</h3>
		<FormSwitch name="ex4" id="ex4" size="large" toggleText={['Yes', 'No']}>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex5" id="ex5" size="large">
			Turn notifications
		</FormSwitch>

		<hr />

		<h3>Extra large</h3>
		<FormSwitch name="ex6" id="ex6" size="xlarge" toggleText={['Yes', 'No']}>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex7" id="ex7" size="xlarge">
			Turn notifications
		</FormSwitch>
	</>
);
