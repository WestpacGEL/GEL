import React from 'react';

import { Button } from '../src';

export default () => (
	<>
		<h3>
			Disabled buttons with a <code>&lt;button&gt;</code> tag
		</h3>
		<p>
			<Button appearance="primary" disabled>
				Primary
			</Button>{' '}
			<Button appearance="hero" disabled>
				Hero
			</Button>{' '}
			<Button appearance="neutral" disabled>
				Neutral
			</Button>{' '}
			<Button appearance="faint" disabled>
				Faint
			</Button>{' '}
			<Button appearance="link" disabled>
				Link
			</Button>
		</p>
		<p>
			<Button appearance="primary" soft disabled>
				Primary soft
			</Button>{' '}
			<Button appearance="hero" soft disabled>
				Hero soft
			</Button>{' '}
			<Button appearance="neutral" soft disabled>
				Neutral soft
			</Button>{' '}
			<Button appearance="faint" soft disabled>
				Faint soft
			</Button>
		</p>

		<hr />

		<h3>
			Disabled buttons with an <code>&lt;a&gt;</code> tag
		</h3>
		<p>
			<Button href="#0" appearance="primary" className="disabled">
				Primary
			</Button>{' '}
			<Button href="#0" appearance="hero" className="disabled">
				Hero
			</Button>{' '}
			<Button href="#0" appearance="neutral" className="disabled">
				Neutral
			</Button>{' '}
			<Button href="#0" appearance="faint" className="disabled">
				Faint
			</Button>{' '}
			<Button href="#0" appearance="link" className="disabled">
				Link
			</Button>
		</p>
		<p>
			<Button href="#0" appearance="primary" className="disabled" soft>
				Primary soft
			</Button>{' '}
			<Button href="#0" appearance="hero" className="disabled" soft>
				Hero soft
			</Button>{' '}
			<Button href="#0" appearance="neutral" className="disabled" soft>
				Neutral soft
			</Button>{' '}
			<Button href="#0" appearance="faint" className="disabled" soft>
				Faint soft
			</Button>
		</p>
	</>
);
