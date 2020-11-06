/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Wrapper, Cell } from '../_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Wrapper>
				<Cell width={[4, null, null, 12, 4]}>Col 12 at MD</Cell>
				<Cell top={2} width={4}>
					Col 4
				</Cell>
			</Wrapper>
		</Playground>
	);
};
