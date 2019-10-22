/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Button appearance="primary" disabled>
				Primary
			</Button>{' '}
			<Button appearance="hero" disabled>
				Hero
			</Button>{' '}
			<Button appearance="faint" disabled>
				Faint
			</Button>{' '}
			<Button appearance="link" disabled>
				Link
			</Button>
			<hr />
			<Button appearance="primary" soft disabled>
				Primary soft
			</Button>{' '}
			<Button appearance="hero" soft disabled>
				Hero soft
			</Button>{' '}
			<Button appearance="faint" soft disabled>
				Faint soft
			</Button>
		</GEL>
	);
}

export default Example;
