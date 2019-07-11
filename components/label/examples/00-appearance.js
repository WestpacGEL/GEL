import React from 'react';

import { Label } from '../src';

export default () => (
	<>
		<p>
			<Label>Default</Label>
		</p>
		<p>
			<Label appearance="primary">Primary</Label> <Label appearance="hero">Hero</Label>{' '}
			<Label appearance="neutral">Neutral</Label> <Label appearance="faint">Faint</Label>
		</p>
		<p>
			<Label appearance="success">Success</Label>{' '}
			<Label appearance="information">Information</Label>{' '}
			<Label appearance="warning">Warning</Label> <Label appearance="danger">Danger</Label>
		</p>
	</>
);
