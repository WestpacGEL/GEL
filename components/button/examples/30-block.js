import React from 'react';

import { Button } from '../src/index.js';

export default () => (
	<>
		<p>
			<Button appearance="primary" size="large" block>Block level button</Button>
		</p>
		<p>
			<Button appearance="hero" size="large" block>Block level button</Button>
		</p>
	</>
);