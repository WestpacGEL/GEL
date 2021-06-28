/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Wrapper, Cell } from '../_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Wrapper>
				<Cell width={[12, 4]}>Column A</Cell>
				<Cell width={[12, 4]}>Column B</Cell>
				<Cell width={[12, 4]}>Column C</Cell>
			</Wrapper>
		</Playground>
	);
};

export default Demo;
