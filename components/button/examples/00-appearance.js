import React from 'react';

import { Button } from '../src';

export default () => (
	<>
		<h3>Default instance (no styling props)</h3>
		<Button>Default (Primary standard)</Button>
		<hr />
		<h3>Standard appearance</h3>
		<Button appearance="primary">Primary standard</Button>{' '}
		<Button appearance="hero">Hero standard</Button>{' '}
		<Button appearance="neutral">Neutral standard</Button>{' '}
		<Button appearance="faint">Faint standard</Button> <Button appearance="link">Link</Button>
		<hr />
		<h3>Soft appearance</h3>
		<Button appearance="primary" soft>
			Primary soft
		</Button>{' '}
		<Button appearance="hero" soft>
			Hero soft
		</Button>{' '}
		<Button appearance="neutral" soft>
			Neutral soft
		</Button>{' '}
		<Button appearance="faint" soft>
			Faint soft
		</Button>
	</>
);
