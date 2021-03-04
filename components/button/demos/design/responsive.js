/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';

import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Medium size button becomes Extra large from the MD breakpoint</Title>
			<Button size={['medium', null, null, 'xlarge']}>Medium → Extra large</Button>
			<Hr />

			<Title>Extra large size button becomes small from the SM breakpoint</Title>
			<Button size={['xlarge', null, 'small']}>Extra large → Small</Button>
			<Hr />

			<Title>
				Small size button becomes medium at the SM breakpoint, large at the MD breakpoint and Extra
				large at the LG breakpoint
			</Title>
			<Button size={['small', null, 'medium', 'large', 'xlarge']}>
				Small → Medium → Large → Extra large
			</Button>
			<Hr />

			<Title>Block button becomes non-block from the SM breakpoint</Title>
			<Button block={[true, null, false]}>Block → Non-block</Button>
		</Playground>
	);
};
