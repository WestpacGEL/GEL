import React from 'react';

import { FormInput } from '../src';

const options = ['Select', '1', '2', '3'];

export default () => (
	<>
		<h2>Default</h2>
		<fieldset>
			<legend>Legend</legend>
			<FormInput />
			<br />
			<FormInput tag="select">
				{options.map((v, i) => <option key={i}>{v}</option>)}
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
				{options.map((v, i) => <option key={i}>{v}</option>)}
			</FormInput>
			<br />
			<FormInput tag="textarea" />
		</fieldset>
	</>
);
