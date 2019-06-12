import React from 'react';

import { Button } from '../src/index.js';

export default () => (
	<>
		<p>Focus styling is provided with a pseudo-class. The following have been programatically forced via an <code>active</code> class.</p>

		<h3>Active buttons with a <code>&lt;button&gt;</code> tag</h3>
		<p>
			<Button appearance="primary" className="active">Primary</Button>{' '}
			<Button appearance="hero" className="active">Hero</Button>{' '}
			<Button appearance="neutral" className="active">Neutral</Button>{' '}
			<Button appearance="faint" className="active">Faint</Button>
		</p>
		<p>
			<Button appearance="primary" className="active" soft>Primary soft</Button>{' '}
			<Button appearance="hero" className="active" soft>Hero soft</Button>{' '}
			<Button appearance="neutral" className="active" soft>Neutral soft</Button>{' '}
			<Button appearance="faint" className="active" soft>Faint soft</Button>
		</p>

		<hr />

		<h3>Active buttons with an <code>&lt;a&gt;</code> tag</h3>
		<p>
			<Button href="#0" appearance="primary" className="active">Primary</Button>{' '}
			<Button href="#0" appearance="hero" className="active">Hero</Button>{' '}
			<Button href="#0" appearance="neutral" className="active">Neutral</Button>{' '}
			<Button href="#0" appearance="faint" className="active">Faint</Button>
		</p>
		<p>
			<Button href="#0" appearance="primary" className="active" soft>Primary soft</Button>{' '}
			<Button href="#0" appearance="hero" className="active" soft>Hero soft</Button>{' '}
			<Button href="#0" appearance="neutral" className="active" soft>Neutral soft</Button>{' '}
			<Button href="#0" appearance="faint" className="active" soft>Faint soft</Button>
		</p>
	</>
);