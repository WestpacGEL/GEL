import React from 'react';
import { Alert, AlertHeading } from '../src';

import { HelpIcon } from '../../icon/src'; //until icon package is published

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Alert>
			This is a default alert. <a href="#">Link</a>
		</Alert>

		<hr />

		<h2>Appearance</h2>

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
		<Alert appearance="information">
			<strong>Heads up!</strong> This alert needs your attention, but it’s not super important.{' '}
			<a href="#">Link</a>
		</Alert>
		<Alert appearance="warning">
			<strong>Warning!</strong> Better check yourself, you’re not looking too good.{' '}
			<a href="#">Link</a>
		</Alert>
		<Alert appearance="danger">
			<strong>Oh snap!</strong> Change a few things up and try submitting again.{' '}
			<a href="#">Link</a>
		</Alert>
		<Alert appearance="system">
			<strong>System Error 8942:</strong> The server is no responding. Please try again later. Sorry
			for the inconvenience. <a href="#">Link</a>
		</Alert>

		<hr />

		<h2>Icon</h2>

		<Alert appearance="information" icon={HelpIcon}>
			<strong>Heads up!</strong> This alert needs your attention, but it’s not super important. Oh
			wow look, I have a custom icon. <a href="#">Link</a>
		</Alert>
		<Alert appearance="information" icon={null}>
			<strong>Heads up!</strong> This alert needs your attention, but it’s not super important. Oh
			wow look, I have no icon. <a href="#">Link</a>
		</Alert>

		<hr />

		<h2>Closable</h2>
		<Alert appearance="success" closable>
			<strong>Well done!</strong> You successfully read this important alert message. Hey neato, I
			can be closed. <a href="#">Link</a>
		</Alert>
		<Alert appearance="information" closable>
			<strong>Heads up!</strong> This alert needs your attention, but it’s not super important. Hey
			neato, I can be closed. <a href="#">Link</a>
		</Alert>
		<Alert appearance="warning" closable>
			<strong>Warning!</strong> Better check yourself, you’re not looking too good. Hey neato, I can
			be closed. <a href="#">Link</a>
		</Alert>
		<Alert appearance="danger" closable>
			<strong>Oh snap!</strong> Change a few things up and try submitting again. Hey neato, I can be
			closed. <a href="#">Link</a>
		</Alert>
		<Alert appearance="system" closable>
			<strong>System Error 8942:</strong> The server is no responding. Please try again later. Sorry
			for the inconvenience. Hey neato, I can be closed. <a href="#">Link</a>
		</Alert>

		<hr />

		<h2>AlertHeading</h2>
		<Alert appearance="information">
			<AlertHeading>This is an AlertHeading</AlertHeading>
			This alert needs your attention, but it’s not super important. Lorem ipsum dolor sit amet,
			consectetur adipisicing elit. Quo dolor provident quasi nisi officia tempore fuga autem, animi
			iste molestiae, qui omnis doloribus aliquid ipsam rem fugiat veniam voluptatem accusamus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, unde quis, molestias nisi quae
			voluptates nemo quaerat nihil, consequuntur nobis ratione rerum asperiores eveniet dicta
			maiores quia nostrum. Pariatur, natus. Lorem ipsum dolor sit amet, consectetur adipisicing
			elit. Fuga, magnam illum harum consequatur, quo sunt impedit quam minus eaque saepe voluptas
			corrupti voluptatum, sapiente dolor sequi tempore maxime? Neque, obcaecati.{' '}
			<a href="#">Link</a>
		</Alert>
	</>
);
