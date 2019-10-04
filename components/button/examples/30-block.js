import React from 'react';
import { Button } from '../src';

export default () => (
	<>
		<h2>Default</h2>
		<p>
			<Button appearance="primary" size="xlarge" isBlock>
				Primary extra large block button
			</Button>
		</p>
		<p>
			<Button appearance="hero" size="large" isBlock>
				Hero large block button
			</Button>
		</p>
		<p>
			<Button appearance="neutral" size="medium" isBlock>
				Neutral medium block button
			</Button>
		</p>
		<p>
			<Button appearance="faint" size="small" isBlock>
				Faint small block button
			</Button>
		</p>

		<hr />

		<h2>Soft</h2>
		<p>
			<Button appearance="primary" size="xlarge" isSoft isBlock>
				Primary extra large soft block button
			</Button>
		</p>
		<p>
			<Button appearance="hero" size="large" isSoft isBlock>
				Hero large soft block button
			</Button>
		</p>
		<p>
			<Button appearance="neutral" size="medium" isSoft isBlock>
				Neutral medium soft block button
			</Button>
		</p>
		<p>
			<Button appearance="faint" size="small" isSoft isBlock>
				Faint small soft block button
			</Button>
		</p>
	</>
);
