/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Button } from '@westpac/button';
import { useState } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	const [open, setOpen] = useState(false);

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

			<Alert look="success" dismissible>
				<strong>Well done!</strong> You successfully read this important alert message. Hey neato, I
				can be closed. <a href="#">Link</a>
			</Alert>
			<Alert look="info" dismissible>
				<strong>Heads up!</strong> This alert needs your attention, but it’s not super important.
				Hey neato, I can be closed. <a href="#">Link</a>
			</Alert>
			<Alert look="warning" dismissible>
				<strong>Warning!</strong> Better check yourself, you’re not looking too good. Hey neato, I
				can be closed. <a href="#">Link</a>
			</Alert>
			<Alert look="danger" dismissible>
				<strong>Oh snap!</strong> Change a few things up and try submitting again. Hey neato, I can
				be closed. <a href="#">Link</a>
			</Alert>
			<Alert look="system" dismissible>
				<strong>System Error 8942:</strong> The server is no responding. Please try again later.
				Sorry for the inconvenience. Hey neato, I can be closed. <a href="#">Link</a>
			</Alert>

			<h2>Visibility Controlled via props and onClose</h2>
			<Button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'}</Button>
			<br />
			<br />
			<Alert open={open} look="success" dismissible onClose={() => setOpen(false)}>
				<strong>Well done!</strong> You successfully read this important alert message. Hey neato, I
				can be closed. <a href="#">Link</a>
			</Alert>
		</Playground>
	);
};
