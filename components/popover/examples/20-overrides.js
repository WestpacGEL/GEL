/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Popover } from '@westpac/popover';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

const content =
	'Hello vivamus sagittis lacus vel augue laoreet rutrum faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
	'Nesciunt laboriosam, mollitia magnam ad magni consequuntur hic et quos optio corrupti praesentium veniam aspernatur minima aperiam ut quas, ' +
	'possimus non architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut animi velit in? Suscipit nostrum itaque voluptatibus ' +
	'dolorem qui soluta nobis modi officia incidunt eos dolores atque, unde error delectus officiis.';

export default ({ context, showCode, showDemo }) => {
	const overridesWithTokens = {};

	overridesWithTokens['@westpac/popover'] = {
		Panel: {
			styles: (styles, { position }) => ({
				...styles,
				borderColor: 'palevioletred',

				'::before': {
					borderLeftWidth: '8px',
					borderRightWidth: '8px',
					marginLeft: '-8px',
					[position.placement === 'top' ? 'borderTop' : 'borderBottom']: `12px solid palevioletred`,
				},
			}),
		},
		Heading: {
			styles: styles => ({
				...styles,
				backgroundColor: 'palevioletred',
			}),
		},
	};

	return (
		<Playground context={context} brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<Popover heading="Example heading" content={content}>
				Click Me
			</Popover>
			<div style={{ marginTop: '40rem' }} />
			<Popover heading="Example heading" content={content}>
				Click Me
			</Popover>
			<h2>With overrides and component overrides</h2>
			<Popover
				heading="Example heading"
				content={content}
				overrides={{
					Panel: { styles: styles => ({ ...styles, border: '2px dotted red' }) },
				}}
			>
				Click Me
			</Popover>
		</Playground>
	);
};
