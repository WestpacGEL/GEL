import React from 'react';

import { Switch } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Switch name="example-default">Turn notifications</Switch>

		<hr />

		<h2>toggleText</h2>
		<Switch name="example-toggletext" toggleText={['Yes', 'No']}>
			This example uses custom toggle text
		</Switch>

		<hr />

		<h2>srOnlyText (Screenreader only text)</h2>
		<Switch name="example-sronlytext-1" toggleText={[]} srOnlyText>
			Screen reader only text
		</Switch>
		<Switch name="example-sronlytext-2" srOnlyText>
			Screen reader only text
		</Switch>
		<Switch name="example-sronlytext-3" toggleText={['Yes', 'No']} srOnlyText>
			Screen reader only text
		</Switch>

		<hr />

		<h2>Checked</h2>
		<Switch name="example-checked-1" toggleText={['Yes', 'No']} checked>
			Enable notifications
		</Switch>
		<Switch name="example-checked-2" checked>
			Turn notifications
		</Switch>

		<hr />

		<h2>Disabled</h2>
		<Switch name="example-disabled-1" toggleText={['Yes', 'No']} disabled>
			Enable notifications
		</Switch>
		<Switch name="example-disabled-2" disabled>
			Turn notifications
		</Switch>
	</>
);
