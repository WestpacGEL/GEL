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
		<Button appearance="neutral">Neutral standard</Button>{' '}
		<Button appearance="faint">Faint standard</Button> <Button appearance="link">Link</Button>
		<hr />
		<h2>Soft</h2>
		<Button appearance="primary" isSoft>
			Primary soft
		</Button>{' '}
		<Button appearance="hero" isSoft>
			Hero soft
		</Button>{' '}
		<Button appearance="neutral" isSoft>
			Neutral soft
		</Button>{' '}
		<Button appearance="faint" isSoft>
			Faint soft
		</Button>
	</>
);
