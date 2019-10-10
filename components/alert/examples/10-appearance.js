import React from 'react';
import { Alert } from '../src';

export default () => (
	<>
		<h2>Success</h2>
		<Alert appearance="success">
			<strong>Well done!</strong> You successfully read this important alert message. Lorem ipsum
			dolor sit amet, consectetur adipisicing elit. Quo dolor provident quasi nisi officia tempore
			fuga autem, animi iste molestiae, qui omnis doloribus aliquid ipsam rem fugiat veniam
			voluptatem accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, unde
			quis, molestias nisi quae voluptates nemo quaerat nihil, consequuntur nobis ratione rerum
			asperiores eveniet dicta maiores quia nostrum. Pariatur, natus. Lorem ipsum dolor sit amet,
			consectetur adipisicing elit. Fuga, magnam illum harum consequatur, quo sunt impedit quam
			minus eaque saepe voluptas corrupti voluptatum, sapiente dolor sequi tempore maxime? Neque,
			obcaecati. <a href="#">Link</a>
		</Alert>

		<hr />

		<h2>Information</h2>
		<Alert appearance="info">
			<strong>Heads up!</strong> This alert needs your attention, but it’s not super important.{' '}
			<a href="#">Link</a>
		</Alert>

		<hr />

		<h2>Warning</h2>
		<Alert appearance="warning">
			<strong>Warning!</strong> Better check yourself, you’re not looking too good.{' '}
			<a href="#">Link</a>
		</Alert>

		<hr />

		<h2>Danger</h2>
		<Alert appearance="danger">
			<strong>Oh snap!</strong> Change a few things up and try submitting again.{' '}
			<a href="#">Link</a>
		</Alert>

		<hr />

		<h2>System</h2>
		<Alert appearance="system">
			<strong>System Error 8942:</strong> The server is no responding. Please try again later. Sorry
			for the inconvenience. <a href="#">Link</a>
		</Alert>
	</>
);
