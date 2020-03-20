/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Alert heading="This is a Heading">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolor provident quasi nisi
				officia tempore fuga autem, animi iste molestiae, qui omnis doloribus aliquid ipsam rem
				fugiat veniam voluptatem accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Molestias nisi quae voluptates nemo quaerat nihil, consequuntur nobis ratione rerum
				asperiores eveniet dicta maiores quia nostrum. Pariatur, natus. Lorem ipsum dolor sit amet,
				consectetur adipisicing elit.
			</Alert>
		</Playground>
	);
};
