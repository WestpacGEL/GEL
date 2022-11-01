/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Fork, Content } from '@westpac/fork';
import { Playground } from '../../../../website/src/components/playground/macro';

const Wrapper = (props) => (
	<div css={{ backgroundColor: 'rgba(243,244,246,0.4)', padding: '12px' }} {...props} />
);

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Fork>
				<Content text="Fork A">
					<Wrapper>Fork A content</Wrapper>
				</Content>
				<Content text="Fork B">
					<Wrapper>Fork B content</Wrapper>
				</Content>
			</Fork>
		</Playground>
	);
};

export default Demo;
