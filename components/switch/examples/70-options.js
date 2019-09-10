import React from 'react';
import { Switch } from '../src';

export default () => (
	<>
		<h2>Screenreader only text mode</h2>
		<Switch name="example-sronlytext-1" toggleText={[]} isSrOnlyText>
			Screen reader only text
		</Switch>
		<Switch name="example-sronlytext-2" isSrOnlyText>
			Screen reader only text
		</Switch>
		<Switch name="example-sronlytext-3" toggleText={['Yes', 'No']} isSrOnlyText>
			Screen reader only text
		</Switch>
	</>
);
