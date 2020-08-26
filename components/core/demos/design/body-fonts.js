/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Body } from '@westpac/body';

const StyledText = (props) => {
	const { PACKS } = useBrand();
	return <p css={{ ...PACKS.typeScale.bodyFont[4] }} {...props} />;
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Body>
				<p>Sans serif system font</p>
				<StyledText>
					ABCDEFGHIJKLMNOPQRSTUVWXYZ
					<br />
					abcdefghijklmnopqrstuvwxyz
					<br />0 1 2 3 4 5 6 7 8 9
				</StyledText>
			</Body>
		</Playground>
	);
};

export default Demo;
