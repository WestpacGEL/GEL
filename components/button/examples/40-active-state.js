import React from 'react';

import { Button } from '../src';

export default () => (
	<>
		<p>
			Active styling is provided with a pseudo-class. The following examples have been
			programatically forced via use of an <code>active</code> class.
		</p>

		<h3>
			Active buttons with a <code>&lt;button&gt;</code> tag
		</h3>
		<h4>Standard appearance</h4>
		<p>
			<Button appearance="primary">Primary default</Button>{' '}
			<Button appearance="hero">Hero default</Button>{' '}
			<Button appearance="neutral">Neutral default</Button>{' '}
			<Button appearance="faint">Faint default</Button>
		</p>
		<p>
			<Button appearance="primary" className="active">
				Primary active
			</Button>{' '}
			<Button appearance="hero" className="active">
				Hero active
			</Button>{' '}
			<Button appearance="neutral" className="active">
				Neutral active
			</Button>{' '}
			<Button appearance="faint" className="active">
				Faint active
			</Button>
		</p>
		<h4>Soft appearance</h4>
		<p>
			<Button appearance="primary" soft>
				Primary soft default
			</Button>{' '}
			<Button appearance="hero" soft>
				Hero soft default
			</Button>{' '}
			<Button appearance="neutral" soft>
				Neutral soft default
			</Button>{' '}
			<Button appearance="faint" soft>
				Faint soft default
			</Button>
		</p>
		<p>
			<Button appearance="primary" className="active" soft>
				Primary soft active
			</Button>{' '}
			<Button appearance="hero" className="active" soft>
				Hero soft active
			</Button>{' '}
			<Button appearance="neutral" className="active" soft>
				Neutral soft active
			</Button>{' '}
			<Button appearance="faint" className="active" soft>
				Faint soft active
			</Button>
		</p>

		<hr />

		<h3>
			Active buttons with an <code>&lt;a&gt;</code> tag
		</h3>
		<h4>Standard appearance</h4>
		<p>
			<Button href="#0" appearance="primary">
				Primary default
			</Button>{' '}
			<Button href="#0" appearance="hero">
				Hero default
			</Button>{' '}
			<Button href="#0" appearance="neutral">
				Neutral default
			</Button>{' '}
			<Button href="#0" appearance="faint">
				Faint default
			</Button>
		</p>
		<p>
			<Button href="#0" appearance="primary" className="active">
				Primary active
			</Button>{' '}
			<Button href="#0" appearance="hero" className="active">
				Hero active
			</Button>{' '}
			<Button href="#0" appearance="neutral" className="active">
				Neutral active
			</Button>{' '}
			<Button href="#0" appearance="faint" className="active">
				Faint active
			</Button>
		</p>
		<h4>Soft appearance</h4>
		<p>
			<Button href="#0" appearance="primary" soft>
				Primary soft default
			</Button>{' '}
			<Button href="#0" appearance="hero" soft>
				Hero soft default
			</Button>{' '}
			<Button href="#0" appearance="neutral" soft>
				Neutral soft default
			</Button>{' '}
			<Button href="#0" appearance="faint" soft>
				Faint soft default
			</Button>
		</p>
		<p>
			<Button href="#0" appearance="primary" className="active" soft>
				Primary soft active
			</Button>{' '}
			<Button href="#0" appearance="hero" className="active" soft>
				Hero soft active
			</Button>{' '}
			<Button href="#0" appearance="neutral" className="active" soft>
				Neutral soft active
			</Button>{' '}
			<Button href="#0" appearance="faint" className="active" soft>
				Faint soft active
			</Button>
		</p>
	</>
);
