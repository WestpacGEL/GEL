/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Popover } from '@westpac/popover';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	const content = `Sudden and magnificent, the sun's broad golden disc showed itself over the horizon facing them; and the first rays, shooting across the level water-meadows, took the animals full in the eyes and dazzled them. When they were able to look once more, the Vision had vanished, and the air was full of the carol of birds that hailed the dawn.`;
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Popover heading="Sudden and magnificent" content={content} look="primary" soft>
				With heading
			</Popover>{' '}
			<Popover content={content} look="primary" soft>
				No heading
			</Popover>
		</Playground>
	);
};

export default Demo;
