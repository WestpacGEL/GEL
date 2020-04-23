/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Button } from '@westpac/button';
import { useState } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const [open, setOpen] = useState(false);

	return (
		<GEL brand={brand}>
			<Intopia />

			<Alert look="success" dismissible data-testing="alert0">
				<strong>Well done!</strong> You successfully read this important alert message. Hey neato, I
				can be closed. <a href="#">Link</a>
			</Alert>
			<Alert look="info" dismissible data-testing="alert1">
				<strong>Heads up!</strong> This alert needs your attention, but it’s not super important.
				Hey neato, I can be closed. <a href="#">Link</a>
			</Alert>
			<Alert look="warning" dismissible data-testing="alert2">
				<strong>Warning!</strong> Better check yourself, you’re not looking too good. Hey neato, I
				can be closed. <a href="#">Link</a>
			</Alert>
			<Alert look="danger" dismissible data-testing="alert3">
				<strong>Oh snap!</strong> Change a few things up and try submitting again. Hey neato, I can
				be closed. <a href="#">Link</a>
			</Alert>
			<Alert look="system" dismissible data-testing="alert4">
				<strong>System Error 8942:</strong> The server is no responding. Please try again later.
				Sorry for the inconvenience. Hey neato, I can be closed. <a href="#">Link</a>
			</Alert>

			<h2>Visibility Controlled via props and onClose</h2>
			<Button onClick={() => setOpen(!open)} data-testing="toggle">
				{open ? 'Hide' : 'Show'}
			</Button>
			<br />
			<br />
			<Alert
				open={open}
				look="success"
				dismissible
				onClose={() => setOpen(false)}
				data-testing="alert-state"
			>
				<strong>Well done!</strong> This alert is controlled by state and has a <a href="#">Link</a>
				.
			</Alert>
		</GEL>
	);
}

export default Example;
