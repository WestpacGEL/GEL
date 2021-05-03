/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Button look="primary" size="xlarge">
				Extra large: 48px
			</Button>{' '}
			<Button look="primary" size="large">
				Large: 42px
			</Button>{' '}
			<Button look="primary" size="medium">
				Medium: 36px
			</Button>{' '}
			<Button look="primary" size="small">
				Small: 30px
			</Button>
		</Playground>
	);
};
