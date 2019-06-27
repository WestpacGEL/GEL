import React from 'react';
import { Alert } from '../src';

export default () => (
	<>
		<Alert appearance="success">
			I’m text-success. I’m accessible. <a href="#">Link</a>
		</Alert>
		<Alert appearance="information">
			I’m text-information. I’m accessible. Please don't use me for anything else.{' '}
			<a href="#">Link</a>
		</Alert>
		<Alert appearance="warning">
			I’m text-warning. I’m accessible. Don't use me for anything else either. <a href="#">Link</a>
		</Alert>
		<Alert appearance="danger">
			I’m text-danger. I’m accessible too. <a href="#">Link</a>
		</Alert>
	</>
);
