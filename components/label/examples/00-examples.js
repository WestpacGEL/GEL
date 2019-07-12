import React from 'react';

import { Label } from '../src';

export default () => (
	<>
		<h3>
			Label with a <code>&lt;span&gt;</code> tag
		</h3>
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

		<hr />

		<h3>
			Label with an <code>&lt;a&gt;</code> tag
		</h3>
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
