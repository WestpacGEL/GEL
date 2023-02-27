import { jsx } from '@westpac/core';
import { BrandHeading } from '@westpac/heading';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<BrandHeading size={1}>BrandHeading</BrandHeading>
		</Playground>
	);
};

export default Demo;
