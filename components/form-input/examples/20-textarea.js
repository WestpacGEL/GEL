import React from 'react';

import { FormInput } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormInput tag="textarea" />

		<hr />

		<h2>Size</h2>
		<FormInput tag="textarea" size="small" placeholder="Small" />
		<br />
		<FormInput tag="textarea" size="medium" placeholder="Medium" />
		<br />
		<FormInput tag="textarea" size="large" placeholder="Large" />
		<br />
		<FormInput tag="textarea" size="xlarge" placeholder="Xlarge" />
	</>
);
