import React from 'react';
import { Alert } from '../src';
import { HelpIcon } from '@westpac/icon';

export default () => (
	<>
		<h2>Custom icon</h2>
		<Alert appearance="info" icon={HelpIcon}>
			<strong>Heads up!</strong> This alert needs your attention, but it’s not super important. Oh
			wow look, I have a custom icon. <a href="#">Link</a>
		</Alert>

		<hr />

		<h2>No icon</h2>
		<Alert appearance="info" icon={null}>
			<strong>Heads up!</strong> This alert needs your attention, but it’s not super important. Oh
			wow look, I have no icon. <a href="#">Link</a>
		</Alert>
	</>
);
