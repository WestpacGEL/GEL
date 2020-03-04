/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@westpac/core';
import { Tooltip } from '@westpac/tooltip';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

const Wrapper = forwardRef(({ visible, position, ...props }, ref) => <abbr ref={ref} {...props} />);

export default ({ context, showCode, showDemo }) => {
	const overridesWithTokens = {};

	overridesWithTokens['@westpac/tooltip'] = {
		Tooltip: {
			styles: styles => ({
				...styles,
				outline: `2px dotted red`,
			}),
			component: Wrapper,
		},
		Bubble: {
			styles: (styles, { position }) => ({
				...styles,
				backgroundColor: 'palevioletred',
				'::after': {
					...styles['::after'],
					[position.placement === 'top' ? 'borderTopColor' : 'borderBottomColor']: 'palevioletred',
				},
			}),
		},
	};

	return (
		<Playground context={context} brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<h3>In text</h3>
			<p>
				This is a <Tooltip text="This is a tooltip">random</Tooltip> sentence.
			</p>

			<h2>With overrides and component overrides</h2>
			<h3>In text</h3>
			<p>
				This is a{' '}
				<Tooltip
					text="This is a tooltip"
					overrides={{
						Bubble: {
							styles: styles => ({ ...styles, backgroundColor: 'tomato' }),
						},
					}}
				>
					random
				</Tooltip>{' '}
				sentence.
			</p>
		</Playground>
	);
};
