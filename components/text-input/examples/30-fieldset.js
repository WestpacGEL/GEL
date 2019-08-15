import React from 'react';

import { TextInput } from '../src';

const options = ['Select', '1', '2', '3'];

export default () => (
	<>
		<h2>Default</h2>
		<fieldset>
			<legend>Legend</legend>
			<TextInput />
			<br />
			<TextInput tag="select">
				{options.map((v, i) => (
					<option key={i}>{v}</option>
				))}
			</TextInput>
			<br />
			<TextInput tag="textarea" />
		</fieldset>

		<hr />

		<h2>Disabled</h2>
		<fieldset disabled>
			<legend>Legend</legend>
			<TextInput />
			<br />
			<TextInput tag="select">
				{options.map((v, i) => (
					<option key={i}>{v}</option>
				))}
			</TextInput>
			<br />
			<TextInput tag="textarea" />
		</fieldset>
	</>
);
