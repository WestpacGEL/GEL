/** @jsx jsx */

import { jsx } from '@westpac/core';
import { BrandHeading, Heading } from '@westpac/heading';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Heading size={5} uppercase>
				Heading
			</Heading>
			<BrandHeading size={5} uppercase>
				BrandHeading
			</BrandHeading>
		</Playground>
	);
};

export default Demo;
