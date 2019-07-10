import React from 'react';

import { Button } from '../src';

export default () => (
	<>
		<h3>Default instance (no styling props)</h3>
		<Button>Default (primary)</Button>
		<hr />
		<h3>Default appearance types</h3>
		<Button appearance="primary">Primary</Button> <Button appearance="hero">Hero</Button>{' '}
		<Button appearance="neutral">Neutral</Button> <Button appearance="faint">Faint</Button>{' '}
		<Button appearance="link">Link</Button>
	</>
);
