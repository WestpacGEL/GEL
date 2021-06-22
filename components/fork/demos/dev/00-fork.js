/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Fork, Content } from '@westpac/fork';
import { Playground } from '../../../../website/src/components/playground/macro';

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
