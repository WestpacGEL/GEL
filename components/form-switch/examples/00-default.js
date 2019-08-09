import React from 'react';

import { FormSwitch } from '../src';

export default () => (
	<>
		<h3>Default</h3>
		<FormSwitch name="ex1" id="ex1" toggleText={['Yes', 'No']}>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex2" id="ex2">
			Turn notifications
		</FormSwitch>

		<hr />

		<h3>Visibily hidden text label (Screenreader only text)</h3>
		<FormSwitch name="ex3" id="ex3" toggleText={[]} srOnlyText>
			Screen reader only text
		</FormSwitch>
		<FormSwitch name="ex4" id="ex4" srOnlyText>
			Screen reader only text
		</FormSwitch>
		<FormSwitch name="ex5" id="ex5" toggleText={['Yes', 'No']} srOnlyText>
			Screen reader only text
		</FormSwitch>

		<hr />

		<h3>Checked by default</h3>
		<FormSwitch name="ex6" id="ex6" toggleText={['Yes', 'No']} defaultChecked>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex7" id="ex7" defaultChecked>
			Turn notifications
		</FormSwitch>

		<hr />

		<h3>Disabled switches</h3>
		<FormSwitch name="ex8" id="ex8" toggleText={['Yes', 'No']} disabled>
			Enable notifications
		</FormSwitch>
		<FormSwitch name="ex9" id="ex9" disabled>
			Turn notifications
		</FormSwitch>
	</>
);
