/** @jsx jsx */

import { jsx } from '@westpac/core';
import { BrandHeading, Heading } from '@westpac/heading';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<BrandHeading size={5} uppercase>
				BrandHeading
			</BrandHeading>
			<br />
			<Heading size={5} uppercase>
				Heading
			</Heading>
		</Playground>
	);
};

export default Demo;
