/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	return (
		<Playground context={context}>
			<Intopia />
			<Button look="primary" disabled>
				Primary
			</Button>{' '}
			<Button look="hero" disabled>
				Hero
			</Button>{' '}
			<Button look="faint" disabled>
				Faint
			</Button>{' '}
			<Button look="link" disabled>
				Link
			</Button>
			<hr />
			<Button look="primary" soft disabled>
				Primary soft
			</Button>{' '}
			<Button look="hero" soft disabled>
				Hero soft
			</Button>{' '}
			<Button look="faint" soft disabled>
				Faint soft
			</Button>
		</Playground>
	);
}

export default Example;
