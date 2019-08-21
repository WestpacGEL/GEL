import React from 'react';

import { Switch } from '../src';

export default () => (
	<>
		<h3>Default</h3>
		<Switch name="ex1" toggleText={['Yes', 'No']}>
			Enable notifications
		</Switch>
		<Switch name="ex2">Turn notifications</Switch>

		<hr />

		<h3>Visibily hidden text label (Screenreader only text)</h3>
		<Switch name="ex3" toggleText={[]} srOnlyText>
			Screen reader only text
		</Switch>
		<Switch name="ex4" srOnlyText>
			Screen reader only text
		</Switch>
		<Switch name="ex5" toggleText={['Yes', 'No']} srOnlyText>
			Screen reader only text
		</Switch>

		<hr />

		<h3>Checked by default</h3>
		<Switch name="ex6" toggleText={['Yes', 'No']} checked>
			Enable notifications
		</Switch>
		<Switch name="ex7" checked>
			Turn notifications
		</Switch>

		<hr />

		<h3>Disabled switches</h3>
		<Switch name="ex8" toggleText={['Yes', 'No']} disabled>
			Enable notifications
		</Switch>
		<Switch name="ex9" disabled>
			Turn notifications
		</Switch>
	</>
);
