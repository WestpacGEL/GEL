import React, { Fragment } from 'react';

import { FormInput } from '../src';

const sizes = ['small', 'medium', 'large', 'xlarge'];
const widths = [2, 3, 4, 5, 10, 20, 30];

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormInput tag="textarea" />

		<hr />

		<h2>Size</h2>
		{sizes.map((s, i, arr) => (
			<Fragment key={i}>
				<FormInput tag="textarea" size={s} placeholder={s.replace(s[0], s[0].toUpperCase())} />
				{i < arr.length - 1 && <br />}
			</Fragment>
		))}

		<hr />

		<h2>Invalid</h2>
		<FormInput tag="textarea" invalid />

		<hr />

		<h2>Disabled</h2>
		<FormInput tag="textarea" disabled />
		<br />
		<FormInput
			tag="textarea"
			disabled
			defaultValue="This textarea is disabled and contains a value"
		/>

		<hr />

		<h2>Fixed width</h2>
		{widths.map((w, i, arr) => (
			<Fragment key={i}>
				<FormInput tag="textarea" width={w} placeholder={'W'.repeat(w)} />
				{i < arr.length - 1 && <br />}
			</Fragment>
		))}
	</>
);
