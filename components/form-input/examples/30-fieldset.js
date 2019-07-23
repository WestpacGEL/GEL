import React from 'react';

import { FormInput } from '../src';

export default () => (
	<>
		<h2>Default</h2>
		<fieldset>
			<legend>Legend</legend>
			<FormInput />
			<br />
			<FormInput tag="select">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</FormInput>
			<br />
			<FormInput tag="textarea" />
		</fieldset>

		<hr />

		<h2>Disabled</h2>
		<fieldset disabled>
			<legend>Legend</legend>
			<FormInput />
			<br />
			<FormInput tag="select">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</FormInput>
			<br />
			<FormInput tag="textarea" />
		</fieldset>
	</>
);
