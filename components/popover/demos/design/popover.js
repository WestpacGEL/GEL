/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Popover } from '@westpac/popover';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Popover heading="Popover heading" content={'Example content'}>
				Popover with heading
			</Popover>
		</Playground>
	);
};
