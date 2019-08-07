import React from 'react';

import { FormSwitch } from '../src';

export default () => (
	<>
		<h3>Switches without visible text label (Screenreader only text)</h3>
		<FormSwitch name="ex1" id="ex1" toggleText={[]} srOnly>
			Screen reader only text
		</FormSwitch>
		<FormSwitch name="ex2" id="ex2" srOnly />
		<FormSwitch name="ex3" id="ex3" toggleText={['Yes', 'No']} srOnly />

		<hr />

		<h3>Switches with text label</h3>
		<FormSwitch name="ex4" id="ex4">
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex5" id="ex5">
			Enable notifications
		</FormSwitch>

		<hr />

		<h3>Checked by default</h3>
		<FormSwitch name="ex6" id="ex6" defaultChecked>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex7" id="ex7" defaultChecked>
			Turn notifications
		</FormSwitch>

		<hr />

		<h3>Disabled switches</h3>
		<FormSwitch name="ex8" id="ex8" disabled>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex9" id="ex9" disabled>
			Turn notifications
		</FormSwitch>
	</>
);
