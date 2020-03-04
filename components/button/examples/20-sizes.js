/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />
			<h2>Small</h2>
			<Button look="primary" size="small">
				Primary
			</Button>{' '}
			<Button look="hero" size="small">
				Hero
			</Button>{' '}
			<Button look="faint" size="small">
				Faint
			</Button>{' '}
			<Button look="link" size="small">
				Link
			</Button>
			<hr />
			<h2>Medium</h2>
			<Button look="primary">Primary</Button> <Button look="hero">Hero</Button>{' '}
			<Button look="faint">Faint</Button> <Button look="link">Link</Button>
			<hr />
			<h2>Large</h2>
			<Button look="primary" size="large">
				Primary
			</Button>{' '}
			<Button look="hero" size="large">
				Hero
			</Button>{' '}
			<Button look="faint" size="large">
				Faint
			</Button>{' '}
			<Button look="link" size="large">
				Link
			</Button>
			<hr />
			<h2>Extra large</h2>
			<Button look="primary" size="xlarge">
				Primary
			</Button>{' '}
			<Button look="hero" size="xlarge">
				Hero
			</Button>{' '}
			<Button look="faint" size="xlarge">
				Faint
			</Button>{' '}
			<Button look="link" size="xlarge">
				Link
			</Button>
			<p></p>
		</Playground>
	);
};
