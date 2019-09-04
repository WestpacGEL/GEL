import React from 'react';

import { Button } from '../src';

export default () => (
	<>
		<h2>
			Button with an <code>&lt;a&gt;</code> tag
		</h2>
		<p>
			<Button href="#0">Link</Button>{' '}
			<Button href="#0" appearance="link">
				Link
			</Button>
		</p>

		<hr />

		<h2>
			Button with a <code>&lt;button&gt;</code> tag
		</h2>
		<p>
			<Button type="button">Button</Button> <Button type="reset">Reset</Button>{' '}
			<Button type="submit">Submit</Button>
		</p>

		<hr />

		<h2>
			Button with an <code>&lt;input&gt;</code> tag
		</h2>
		<p>
			<Button tag="input" type="button" value="Button" />{' '}
			<Button tag="input" type="reset" value="Reset" />{' '}
			<Button tag="input" type="submit" value="Submit" />
		</p>
	</>
);
