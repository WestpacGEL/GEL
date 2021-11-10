/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Body } from '@westpac/body';
import { Title } from '../../../../helpers/demos';

const StyledText = (props) => {
	const { PACKS } = useBrand();
	return <p css={{ ...PACKS.typeScale.bodyFont[4], overflowWrap: 'anywhere' }} {...props} />;
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Body>
				<Title>Sans serif system font</Title>
				<StyledText>
					abcdefghijklmnopqrstuvwxyz
					<br />
					ABCDEFGHIJKLMNOPQRSTUVWXYZ
					<br />
					1234567890
					<br />
					!@#$¢%&amp;*©®™£
				</StyledText>
			</Body>
		</Playground>
	);
};

export default Demo;
