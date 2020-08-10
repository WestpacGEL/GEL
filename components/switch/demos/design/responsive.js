/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>This breakpoint and wider</Title>
			<Switch
				name="example-responsive-1"
				label="Extra large for MD breakpoint and wider"
				size={['medium', 'xlarge']}
				block
			/>
			<Switch
				name="example-responsive-2"
				label="Small but Extra large for LG breakpoint"
				size={['small', null, 'xlarge']}
				block
			/>
			<Hr />
			<Title>This breakpoint only</Title>
			<Switch
				name="example-responsive-3"
				label="Extra large for LG breakpoint only"
				size={['medium', null, 'xlarge', 'medium']}
				block
			/>
			<Switch
				name="example-responsive-4"
				label="Small for LG breakpoint only"
				size={['medium', null, 'small', 'medium']}
				block
			/>
			<Switch
				name="example-responsive-5"
				label="Small but Extra large for SM breakpoint only"
				size={['small', 'xlarge', 'small']}
				block
			/>
		</Playground>
	);
};
