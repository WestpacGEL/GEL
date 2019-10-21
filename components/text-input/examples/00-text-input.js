import React, { Fragment } from 'react';
import { TextInput } from '../src';
import { Form } from '@westpac/form';
import { Button } from '@westpac/button';

const sizes = ['small', 'medium', 'large', 'xlarge'];
const widths = [2, 3, 4, 5, 10, 20, 30];

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<TextInput />
		<hr />
		<h2>Size</h2>
		{sizes.map((s, i, arr) => (
			<Fragment key={i}>
				<TextInput size={s} placeholder={s.replace(s[0], s[0].toUpperCase())} />
				{i < arr.length - 1 && <br />}
			</Fragment>
		))}
		<hr />
		<h2>Invalid</h2>
		<TextInput invalid />
		<hr />
		<h2>Disabled</h2>
		<TextInput disabled />
		<br />
		<TextInput disabled value="This input is disabled and contains a value" />
		<hr />
		<h2>Readonly</h2>
		<TextInput readOnly value="This value is readonly" />
		<hr />
		<h2>Inline</h2>
		<Form inline>
			<TextInput /> <TextInput /> <Button type="submit">Submit</Button>
		</Form>
		<hr />
		<h2>Fixed width</h2>
		{widths.map((w, i, arr) => (
			<Fragment key={i}>
				<TextInput width={w} placeholder={w} />
				{i < arr.length - 1 && <br />}
			</Fragment>
		))}
	</>
);
