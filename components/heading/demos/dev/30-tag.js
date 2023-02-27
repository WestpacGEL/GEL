import { jsx } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Heading tag="h1" size={3}>
				Heading tag h1 size 3
			</Heading>
			<br />
			<Heading tag="h2" size={5}>
				Heading tag h2 size 5
			</Heading>
		</Playground>
	);
};

export default Demo;
