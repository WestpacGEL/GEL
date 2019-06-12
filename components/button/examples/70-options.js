import React from 'react';

import { Button } from '../src/index.js';

export default () => (
	<>
		<h3>Trim (no horizontal padding)</h3>
		<p>
			<Button appearance="link" size="large" trim>Trimmed link button</Button>
		</p>
	</>
);