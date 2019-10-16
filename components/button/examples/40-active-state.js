import React from 'react';
import { Button } from '../src';

export default () => (
	<>
		<p>
			Active state styling is provided with a <code>:active</code> pseudo-class. The following
			examples have been programatically forced via use of an <code>active</code> class.
		</p>
		<h2>
			Active buttons with a <code>&lt;button&gt;</code> tag
		</h2>
		<h3>Standard</h3>
		<Button appearance="primary">Primary default</Button>{' '}
		<Button appearance="hero">Hero default</Button>{' '}
		<Button appearance="faint">Faint default</Button>
		<br />
		<br />
		<Button appearance="primary" className="active">
			Primary active
		</Button>{' '}
		<Button appearance="hero" className="active">
			Hero active
		</Button>{' '}
		<Button appearance="faint" className="active">
			Faint active
		</Button>
		<h3>Soft</h3>
		<Button appearance="primary" soft>
			Primary soft default
		</Button>{' '}
		<Button appearance="hero" soft>
			Hero soft default
		</Button>{' '}
		<Button appearance="faint" soft>
			Faint soft default
		</Button>
		<br />
		<br />
		<Button appearance="primary" className="active" soft>
			Primary soft active
		</Button>{' '}
		<Button appearance="hero" className="active" soft>
			Hero soft active
		</Button>{' '}
		<Button appearance="faint" className="active" soft>
			Faint soft active
		</Button>
		<hr />
		<h2>
			Active buttons with an <code>&lt;a&gt;</code> tag
		</h2>
		<h3>Standard</h3>
		<Button href="#0" appearance="primary">
			Primary default
		</Button>{' '}
		<Button href="#0" appearance="hero">
			Hero default
		</Button>{' '}
		<Button href="#0" appearance="faint">
			Faint default
		</Button>
		<br />
		<br />
		<Button href="#0" appearance="primary" className="active">
			Primary active
		</Button>{' '}
		<Button href="#0" appearance="hero" className="active">
			Hero active
		</Button>{' '}
		<Button href="#0" appearance="faint" className="active">
			Faint active
		</Button>
		<h3>Soft</h3>
		<Button href="#0" appearance="primary" soft>
			Primary soft default
		</Button>{' '}
		<Button href="#0" appearance="hero" soft>
			Hero soft default
		</Button>{' '}
		<Button href="#0" appearance="faint" soft>
			Faint soft default
		</Button>
		<br />
		<br />
		<Button href="#0" appearance="primary" className="active" soft>
			Primary soft active
		</Button>{' '}
		<Button href="#0" appearance="hero" className="active" soft>
			Hero soft active
		</Button>{' '}
		<Button href="#0" appearance="faint" className="active" soft>
			Faint soft active
		</Button>
	</>
);
