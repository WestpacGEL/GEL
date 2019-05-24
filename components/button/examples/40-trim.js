import React from 'react';

import { Button } from '../src/index.js';

export default () => (
	<>
		<p>
			<Button appearance="primary" size="large" trim>Trimmed button</Button>
		</p>
		<p>
			<Button appearance="link" size="large" trim>Trimmed button</Button>
		</p>
	</>
);