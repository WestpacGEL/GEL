import React, { Fragment } from 'react';
import { TextInput } from '../src';
import { Form } from '@westpac/form';
import { Button } from '@westpac/button';

const options = ['Select', '1', '2', '3'];
const sizes = ['small', 'medium', 'large', 'xlarge'];
const widths = [2, 3, 4, 5, 10, 20, 30];

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<TextInput tag="select">
			{options.map((v, i) => (
				<option key={i}>{v}</option>
			))}
		</TextInput>

		<hr />

		<h2>Size</h2>
		{sizes.map((s, i, arr) => (
			<Fragment key={i}>
				<TextInput tag="select" size={s}>
					{options.map((v, i) => (
						<option key={i}>{v}</option>
					))}
				</TextInput>
				{i < arr.length - 1 && <br />}
			</Fragment>
		))}

		<hr />

		<h2>Invalid</h2>
		<TextInput tag="select" invalid>
			{options.map((v, i) => (
				<option key={i}>{v}</option>
			))}
		</TextInput>

		<hr />

		<h2>Disabled</h2>
		<TextInput tag="select" disabled>
			{options.map((v, i) => (
				<option key={i}>{v}</option>
			))}
		</TextInput>

		<hr />

		<h2>Inline</h2>
		<Form isInline noValidate>
			<TextInput tag="select">
				{options.map((v, i) => (
					<option key={i}>{v}</option>
				))}
			</TextInput>{' '}
			<TextInput tag="select">
				{options.map((v, i) => (
					<option key={i}>{v}</option>
				))}
			</TextInput>{' '}
			<Button type="submit">Submit</Button>
		</Form>

		<hr />

		<h2>Fixed width</h2>
		{widths.map((w, i, arr) => (
			<Fragment key={i}>
				<TextInput tag="select" width={w}>
					<option>{'W'.repeat(w)}</option>
				</TextInput>
				{i < arr.length - 1 && <br />}
			</Fragment>
		))}
	</>
);
