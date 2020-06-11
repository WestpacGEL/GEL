/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Playground } from '../../../../website/src/components/playground/macro';

const Wrapper = (props) => {
	const { PACKS } = useBrand();
	return <div css={{ ...PACKS.typeScale.bodyFont[4] }} {...props} />;
};

const StyledText = (props) => <p css={{ marginTop: 0 }} {...props} />;

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>Sans serif system font</p>
			<Wrapper>
				<StyledText>
					ABCDEFGHIJKLMNOPQRSTUVWXYZ
					<br />
					abcdefghijklmnopqrstuvwxyz
					<br />0 1 2 3 4 5 6 7 8 9
				</StyledText>
			</Wrapper>
		</Playground>
	);
};
