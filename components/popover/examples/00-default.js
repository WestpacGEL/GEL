/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Popover } from '@westpac/popover';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

const content =
	'Hello vivamus sagittis lacus vel augue laoreet rutrum faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
	'Nesciunt laboriosam, mollitia magnam ad magni consequuntur hic et quos optio corrupti praesentium veniam aspernatur minima aperiam ut quas, ' +
	'possimus non architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut animi velit in? Suscipit nostrum itaque voluptatibus ' +
	'dolorem qui soluta nobis modi officia incidunt eos dolores atque, unde error delectus officiis.';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />
			<Popover heading="Popover heading" content={content}>
				Popover with heading
			</Popover>{' '}
			<Popover content={content}>Popover without heading</Popover>
			<div style={{ marginTop: '50rem' }} />
			<Popover heading="Popover heading" content={content}>
				Popover with heading
			</Popover>
		</Playground>
	);
};
