/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Medium size switch becomes Extra large from the MD breakpoint</Title>
			<Switch
				name="example-responsive-1"
				label="Medium → Extra large"
				size={['medium', null, null, 'xlarge']}
				block
			/>
			<Hr />

			<Title>Extra large size switch becomes small from the SM breakpoint</Title>
			<Switch
				name="example-responsive-2"
				label="Extra large → Small"
				size={['xlarge', null, 'small']}
				block
			/>
			<Hr />

			<Title>
				Small size switch becomes medium at the SM breakpoint, large at the MD breakpoint and Extra
				large at the LG breakpoint
			</Title>
			<Switch
				name="example-responsive-3"
				label="Small → Medium → Large → Extra large"
				size={['small', null, 'medium', 'large', 'xlarge']}
				block
			/>
		</Playground>
	);
};

export default Demo;
