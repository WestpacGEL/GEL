import React from 'react';

import { Label } from '../src';

export default () => (
	<>
		<p>
			<Label href="#0">Default</Label>
		</p>
		<p>
			<Label href="#0" appearance="primary">
				Primary
			</Label>{' '}
			<Label href="#0" appearance="hero">
				Hero
			</Label>{' '}
			<Label href="#0" appearance="neutral">
				Neutral
			</Label>{' '}
			<Label href="#0" appearance="faint">
				Faint
			</Label>
		</p>
		<p>
			<Label href="#0" appearance="success">
				Success
			</Label>{' '}
			<Label href="#0" appearance="information">
				Information
			</Label>{' '}
			<Label href="#0" appearance="warning">
				Warning
			</Label>{' '}
			<Label href="#0" appearance="danger">
				Danger
			</Label>
		</p>
	</>
);
