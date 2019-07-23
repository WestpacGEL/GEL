import React from 'react';

import { FormInput } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormInput tag="select">
			<option>Select</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
		</FormInput>

		<hr />

		<h2>Size</h2>
		<FormInput tag="select" size="small">
			<option>Select</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
		</FormInput>
		<br />
		<FormInput tag="select" size="medium">
			<option>Select</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
		</FormInput>
		<br />
		<FormInput tag="select" size="large">
			<option>Select</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
		</FormInput>
		<br />
		<FormInput tag="select" size="xlarge">
			<option>Select</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
		</FormInput>

		<hr />

		<h2>Disabled</h2>
		<FormInput tag="select" disabled>
			<option>Select</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
		</FormInput>
	</>
);
