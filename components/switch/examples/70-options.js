import React from 'react';

import { Switch } from '../src';

export default () => (
	<>
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
	</>
);
