import React from 'react';

import { FormSwitch } from '../src';

export default () => (
	<>
		<h3>Switches without visible text label (Screenreader only text)</h3>
		<FormSwitch srOnly name="ex1">
			Enable notifications
		</FormSwitch>
		<FormSwitch srOnly name="ex2" values />
		<FormSwitch srOnly name="ex3" values={['Yes', 'No']} />

		<hr />

		<h3>Switches with text label</h3>
		<FormSwitch name="ex4">Enable notifications</FormSwitch>
		<FormSwitch name="ex5" values>
			Enable notifications
		</FormSwitch>

		<hr />

		<h3>Checked by default</h3>
		<FormSwitch name="ex6" checked>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex7" values checked>
			Turn notifications
		</FormSwitch>

		<hr />

		<h3>Disabled switches</h3>
		<FormSwitch name="ex8" disabled>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex9" values disabled>
			Turn notifications
		</FormSwitch>
	</>
);
