import React, { Fragment } from 'react';

import { FormInput } from '../src';
import { Form } from '../../form/src';
import { Button } from '../../button/src';
import { FormGroup } from '../../form/src';

const options = ['Select', '1', '2', '3'];
const sizes = ['small', 'medium', 'large', 'xlarge'];
const widths = [2, 3, 4, 5, 10, 20, 30];

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<FormInput tag="select">
			{options.map((v, i) => (
				<option key={i}>{v}</option>
			))}
		</FormInput>

		<hr />

		<h2>Size</h2>
		{sizes.map((s, i, arr) => (
			<Fragment key={i}>
				<FormInput tag="select" size={s}>
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</FormInput>
				{i < arr.length - 1 && <br />}
			</Fragment>
		))}

		<hr />

		<h2>Invalid</h2>
		<FormInput tag="select" invalid>
			{options.map((v, i) => (
				<option key={i}>{v}</option>
			))}
		</FormInput>

		<hr />

		<h2>Disabled</h2>
		<FormInput tag="select" disabled>
			{options.map((v, i) => (
				<option key={i}>{v}</option>
			))}
		</FormInput>

		<hr />

		<h2>Inline</h2>
		<Form inline noValidate>
			<FormInput tag="select">
				{options.map((v, i) => (
					<option key={i}>{v}</option>
				))}
			</FormInput>{' '}
			<FormInput tag="select">
				{options.map((v, i) => (
					<option key={i}>{v}</option>
				))}
			</FormInput>{' '}
			<Button type="submit">Submit</Button>
		</Form>

		<hr />

		<h2>Fixed width</h2>
		{widths.map((w, i, arr) => (
			<Fragment key={i}>
				<FormInput tag="select" width={w}>
					<option>{'W'.repeat(w)}</option>
				</FormInput>
				{i < arr.length - 1 && <br />}
			</Fragment>
		))}
	</>
);
