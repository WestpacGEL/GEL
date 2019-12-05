/** @jsx jsx */

import { forwardRef } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Popover } from '@westpac/popover';
import { Button } from '@westpac/button';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const content =
	'Hello vivamus sagittis lacus vel augue laoreet rutrum faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
	'Nesciunt laboriosam, mollitia magnam ad magni consequuntur hic et quos optio corrupti praesentium veniam aspernatur minima aperiam ut quas, ' +
	'possimus non architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut animi velit in? Suscipit nostrum itaque voluptatibus ' +
	'dolorem qui soluta nobis modi officia incidunt eos dolores atque, unde error delectus officiis.';

const Wrapper = forwardRef((props, ref) => <span ref={ref} {...props} />);

const Panel = forwardRef(({ position, ...props }, ref) => (
	<div
		ref={ref}
		tabIndex="-1"
		aria-label="Use the ESC key to close"
		css={{
			borderRadius: 5,
			boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
			width: '20rem',
			background: 'white',
			pointerEvents: 'all',
			textAlign: 'left',

			'::before': {
				content: '""',
				position: 'absolute',
				[position.placement === 'top' ? 'bottom' : 'top']: '-0.8125rem',
				left: '50%',
				marginLeft: '-0.5rem',
				width: 0,
				[position.placement === 'top' ? 'borderTop' : 'borderBottom']: `0.75rem solid white`,
				borderRight: '0.5rem solid transparent',
				borderLeft: '0.5rem solid transparent',
				fontSize: 0,
				lineHeight: 0,
			},
		}}
		{...props}
	>
		<p
			css={{
				margin: 0,
				padding: '0.625rem 0.75rem',
				fontSize: '1rem',
			}}
		>
			Custom Popover
		</p>
		<p css={{ margin: 0, padding: '0.625rem 0.75rem' }}>{content}</p>
	</div>
));

function Example({ brand }) {
	const overwritesWithTokens = { ...brand };

	overwritesWithTokens['@westpac/popover'] = {
		CSS: {},
		Panel,
		Wrapper,
	};

	return (
		<GEL brand={overwritesWithTokens}>
			<Intopia ignore />

			<Popover>
				<Button>Click Me</Button>
			</Popover>
			<div style={{ marginTop: '40rem' }} />
			<Popover>
				<Button>Click Me</Button>
			</Popover>
		</GEL>
	);
}

export default Example;
