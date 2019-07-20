import React from 'react';
import { Box } from './_utils';

import { FormGroup, FormInput } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormInput />

		<hr />

		<h2>Text input</h2>

		<h3>Size</h3>
		<FormInput size="small" placeholder="Small" />
		<br />
		<FormInput size="medium" placeholder="Medium" />
		<br />
		<FormInput size="large" placeholder="Large" />
		<br />
		<FormInput size="xlarge" placeholder="Xlarge" />

		<h3>Invalid</h3>
		<FormInput size="small" invalid />
		<br />
		<FormInput size="medium" invalid />
		<br />
		<FormInput size="large" invalid />
		<br />
		<FormInput size="xlarge" invalid />

		<h3>Disabled</h3>
		<FormInput disabled />
		<br />
		<FormInput disabled value="This input is disabled and contains a value" />

		<h3>Readonly</h3>
		<FormInput readOnly value="This value is readonly" />

		<h3>Inline</h3>
		<FormGroup inline>
			<FormInput />
			<FormInput />
		</FormGroup>

		<hr />

		<h2>Select</h2>
		<FormInput tag="select">
			<option>Select</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
		</FormInput>

		<hr />

		<h2>Textarea</h2>
		<FormInput tag="textarea" />
	</>
);
