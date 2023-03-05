import { jsx } from '@westpac/core';
import { Wrapper, Cell } from '../_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Wrapper>
				<Cell width={[12, null, null, 3, 12]}>Column A</Cell>
				<Cell width={[4, null, null, 3, 4]}>Column B</Cell>
				<Cell width={[4, null, null, 3, 4]}>Column C</Cell>
				<Cell width={[4, null, null, 3, 4]}>Column D</Cell>
			</Wrapper>
		</Playground>
	);
};

export default Demo;
