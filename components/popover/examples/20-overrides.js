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

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/popover'] = {
		subComponent: {
			Panel: {
				styles: (styles, { position }) => ({
					...styles,
					borderColor: 'palevioletred',

					'::before': {
						content: '""',
						position: 'absolute',
						[position === 'top' ? 'bottom' : 'top']: '-0.8125rem',
						left: '50%',
						marginLeft: '-0.5rem',
						width: 0,
						[position === 'top' ? 'borderTop' : 'borderBottom']: `0.75rem solid palevioletred`,
						borderRight: '0.5rem solid transparent',
						borderLeft: '0.5rem solid transparent',
						fontSize: 0,
						lineHeight: 0,
					},
				}),
			},
			Title: {
				styles: styles => ({
					...styles,
					backgroundColor: 'palevioletred',
				}),
			},
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<Popover title="Example Title" content={content}>
				<Button>Click Me</Button>
			</Popover>
			<div style={{ marginTop: '40rem' }} />
			<Popover title="Example Title" content={content}>
				<Button>Click Me</Button>
			</Popover>
			<h2>With overrides and component overrides</h2>
			<Popover
				title="Example Title"
				content={content}
				overrides={{
					subComponent: { Panel: { styles: styles => ({ ...styles, border: '2px dotted red' }) } },
				}}
			>
				<Button>Click Me</Button>
			</Popover>
		</GEL>
	);
}

export default Example;
