/** @jsx jsx */

import { jsx } from '@westpac/core';
import {
	AddIcon,
	CalendarIcon,
	DeleteIcon,
	GridIcon,
	HelpIcon,
	MessageIcon,
	StarIcon,
	WriteIcon,
} from '@westpac/icon';
import { Fragment } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const Wrapper = ({ children, icon, color, size, assistiveText, ...rest }) => (
	<Fragment>
		<div {...rest}>{children}</div>
		<div css={{ marginBottom: '1rem' }}>
			name: <span css={{ fontWeight: 900 }}>{icon}</span>
		</div>
	</Fragment>
);

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/icon'] = {
		Icon: {
			styles: styles => ({
				...styles,
				outline: '1px solid red',
			}),
			component: Wrapper,
		},
	};

	return (
		<Playground context={context} brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<AddIcon />
			<CalendarIcon />
			<DeleteIcon />
			<GridIcon />
			<HelpIcon />
			<MessageIcon />
			<StarIcon />
			<WriteIcon />

			<h2>With overrides and component overrides</h2>
			<AddIcon
				overrides={{
					Svg: {
						styles: styles => ({
							...styles,
							outline: '3px dotted green',
						}),
					},
				}}
			/>
		</Playground>
	);
}

export default Example;
