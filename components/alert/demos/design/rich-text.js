/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Alert look="info">
				<strong>Heads up!</strong> This alert needs your attention, but it’s not super important.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolor provident quasi nisi
				officia tempore fuga autem, animi iste molestiae, qui omnis doloribus aliquid ipsam rem
				fugiat veniam voluptatem accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Est, unde quis, molestias nisi quae voluptates nemo quaerat nihil. Find out more{' '}
				<a href="#">at this link</a>.
			</Alert>
		</Playground>
	);
};
