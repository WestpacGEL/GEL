import React from 'react';

import { FormSwitch } from '../src';

export default () => (
	<>
		<h3>Small</h3>
		<FormSwitch name="ex1" size="small">
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex2" values size="small">
			Turn notifications
		</FormSwitch>

		<hr />

		<h3>Medium (default)</h3>
		<FormSwitch name="ex3">Enable notifications</FormSwitch>
		<FormSwitch name="ex4" values>
			Turn notifications
		</FormSwitch>

		<hr />

		<h3>Large</h3>
		<FormSwitch name="ex4" size="large">
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex5" values size="large">
			Turn notifications
		</FormSwitch>

		<hr />

		<h3>Extra large</h3>
		<FormSwitch name="ex6" size="xlarge">
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex7" values size="xlarge">
			Turn notifications
		</FormSwitch>
	</>
);
