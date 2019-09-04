import React from 'react';

import { Switch } from '../src';

export default () => (
	<>
		<Switch name="example-toggletext" toggleText={['Yes', 'No']}>
			This example uses custom Yes/No toggle text
		</Switch>
	</>
);
