import React from 'react';

import { Button } from '../src';

export default () => (
	<>
		<h3>Default buttons</h3>
		<p>
			<Button appearance="primary" size="xlarge" block>
				Primary extra large block button
			</Button>
		</p>
		<p>
			<Button appearance="hero" size="large" block>
				Hero large block button
			</Button>
		</p>
		<p>
			<Button appearance="neutral" size="medium" block>
				Neutral medium block button
			</Button>
		</p>
		<p>
			<Button appearance="faint" size="small" block>
				Faint small block button
			</Button>
		</p>

		<hr />

		<h3>Soft buttons</h3>
		<p>
			<Button appearance="primary" size="xlarge" soft block>
				Primary extra large soft block button
			</Button>
		</p>
		<p>
			<Button appearance="hero" size="large" soft block>
				Hero large soft block button
			</Button>
		</p>
		<p>
			<Button appearance="neutral" size="medium" soft block>
				Neutral medium soft block button
			</Button>
		</p>
		<p>
			<Button appearance="faint" size="small" soft block>
				Faint small soft block button
			</Button>
		</p>
	</>
);
