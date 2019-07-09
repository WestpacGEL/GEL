import React from 'react';

import { Badge } from '../src';

export default () => (
	<>
		<p>
			<Badge>Default</Badge>
		</p>
		<p>
			<Badge appearance="primary">Primary</Badge> <Badge appearance="hero">Hero</Badge>{' '}
			<Badge appearance="neutral">Neutral</Badge> <Badge appearance="faint">Faint</Badge>
		</p>
		<p>
			<Badge appearance="success">Success</Badge> <Badge appearance="info">Info</Badge>{' '}
			<Badge appearance="warning">Warning</Badge> <Badge appearance="danger">Danger</Badge>
		</p>
	</>
);
