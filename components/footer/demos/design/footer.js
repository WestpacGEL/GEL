/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Footer } from '@westpac/footer';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Content } from '../../examples/_utils';

const Wrapper = (props) => (
	<div css={{ backgroundColor: 'rgba(243,244,246,0.4)', padding: '12px' }} {...props} />
);

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Wrapper>
				<Footer>
					<Content />
				</Footer>
			</Wrapper>
		</Playground>
	);
};

export default Demo;
