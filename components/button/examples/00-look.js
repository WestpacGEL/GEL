/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<Playground brand={brand}>
			<Intopia />
			<h2>Default instance (no styling props)</h2>
			<Button>Default</Button>
			<hr />
			<h2>Standard</h2>
			<Button look="primary">Primary standard</Button> <Button look="hero">Hero standard</Button>{' '}
			<Button look="faint">Faint standard</Button> <Button look="link">Link</Button>
			<hr />
			<h2>Soft</h2>
			<Button look="primary" soft>
				Primary soft
			</Button>{' '}
			<Button look="hero" soft>
				Hero soft
			</Button>{' '}
			<Button look="faint" soft>
				Faint soft
			</Button>
		</Playground>
	);
}

export default Example;
