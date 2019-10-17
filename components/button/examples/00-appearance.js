import React from 'react';
import { Button } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Button>Default</Button>
		<hr />
		<h2>Standard</h2>
		<Button appearance="primary">Primary standard</Button>{' '}
		<Button appearance="hero">Hero standard</Button>{' '}
		<Button appearance="faint">Faint standard</Button> <Button appearance="link">Link</Button>
		<hr />
		<h2>Soft</h2>
		<Button appearance="primary" soft>
			Primary soft
		</Button>{' '}
		<Button appearance="hero" soft>
			Hero soft
		</Button>{' '}
		<Button appearance="faint" soft>
			Faint soft
		</Button>
	</>
);
