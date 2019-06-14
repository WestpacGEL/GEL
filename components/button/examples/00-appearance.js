import React from 'react';

import { Button } from '../src';

export default () => (
	<>
		<h3>Default instance (no props)</h3>
		<Button>Default (primary)</Button>

		<hr />

		<h3>Default appearance</h3>
		<Button appearance="primary">Primary</Button>{' '}
		<Button appearance="hero">Hero</Button>{' '}
		<Button appearance="neutral">Neutral</Button>{' '}
		<Button appearance="faint">Faint</Button>{' '}
		<Button appearance="link">Link</Button>

		<hr />

		<h3>Soft appearance</h3>
		<Button appearance="primary" soft>Primary</Button>{' '}
		<Button appearance="hero" soft>Hero</Button>{' '}
		<Button appearance="neutral" soft>Neutral</Button>{' '}
		<Button appearance="faint" soft>Faint</Button>{' '}

		<hr />
	</>
);
