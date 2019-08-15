import React from 'react';

import { Switch } from '../src';

export default () => (
	<>
		<h3>Default</h3>
		<Switch name="ex1" id="ex1" toggleText={['Yes', 'No']}>
			Enable notifications
		</Switch>
		<Switch name="ex2" id="ex2">
			Turn notifications
		</Switch>

		<hr />

		<h3>Visibily hidden text label (Screenreader only text)</h3>
		<Switch name="ex3" id="ex3" toggleText={[]} srOnlyText>
			Screen reader only text
		</Switch>
		<Switch name="ex4" id="ex4" srOnlyText>
			Screen reader only text
		</Switch>
		<Switch name="ex5" id="ex5" toggleText={['Yes', 'No']} srOnlyText>
			Screen reader only text
		</Switch>

		<hr />

		<h3>Checked by default</h3>
		<Switch name="ex6" id="ex6" toggleText={['Yes', 'No']} defaultChecked>
			Enable notifications
		</Switch>
		<Switch name="ex7" id="ex7" defaultChecked>
			Turn notifications
		</Switch>

		<hr />

		<h3>Disabled switches</h3>
		<Switch name="ex8" id="ex8" toggleText={['Yes', 'No']} disabled>
			Enable notifications
		</Switch>
		<Switch name="ex9" id="ex9" disabled>
			Turn notifications
		</Switch>
	</>
);
