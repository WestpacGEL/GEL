import React from 'react';
import { Alert } from '../src';

import { InfoIcon } from '../../icon/src'; //until icon package is published

export default () => (
	<>
		<Alert appearance="success" icon={InfoIcon} iconSize="small">
			I’m text-success. I’m accessible. <a href="#">Link</a>
		</Alert>
		<Alert appearance="information" icon={InfoIcon} iconSize="medium">
			I’m text-information. I’m accessible. Please don't use me for anything else.{' '}
			<a href="#">Link</a>
		</Alert>
		<Alert appearance="warning" icon={InfoIcon} iconSize="large">
			I’m text-warning. I’m accessible. Don't use me for anything else either. <a href="#">Link</a>
		</Alert>
		<Alert appearance="danger" icon={InfoIcon} iconSize="xlarge">
			I’m text-danger. I’m accessible too. <a href="#">Link</a>
		</Alert>
		<h3>
			Alert in <code>p</code> tag
		</h3>
		<Alert appearance="success" icon={InfoIcon} iconSize="small" as="p">
			I’m text-success. I’m accessible. <a href="#">Link</a>
		</Alert>
		<Alert appearance="information" icon={InfoIcon} iconSize="medium" as="p">
			I’m text-information. I’m accessible. Please don't use me for anything else.{' '}
			<a href="#">Link</a>
		</Alert>
		<Alert appearance="warning" icon={InfoIcon} iconSize="large" as="p">
			I’m text-warning. I’m accessible. Don't use me for anything else either. <a href="#">Link</a>
		</Alert>
		<Alert appearance="danger" icon={InfoIcon} iconSize="xlarge" as="p">
			I’m text-danger. I’m accessible too. <a href="#">Link</a>
		</Alert>
	</>
);
