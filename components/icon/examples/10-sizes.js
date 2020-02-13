/** @jsx jsx */

import { jsx } from '@westpac/core';
import { useState } from 'react';
import {
	AddIcon,
	CalendarIcon,
	DeleteIcon,
	FavouriteIcon,
	GridIcon,
	HelpIcon,
	MessageIcon,
	NotificationOffIcon,
	PersonIcon,
	ProgressIcon,
	StarIcon,
	WriteIcon,
} from '@westpac/icon';
import { Row } from './_util';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
const icons = [
	AddIcon,
	CalendarIcon,
	DeleteIcon,
	FavouriteIcon,
	GridIcon,
	HelpIcon,
	MessageIcon,
	NotificationOffIcon,
	PersonIcon,
	ProgressIcon,
	StarIcon,
	WriteIcon,
];

const Button = ({ children, isActive, ...props }) => (
	<label
		css={{
			backgroundColor: isActive ? '#344563' : '#EBECF0',
			borderRadius: 4,
			border: 0,
			color: isActive ? 'white' : '#344563',
			cursor: 'pointer',
			display: 'inline-block',
			fontSize: 12,
			padding: '0.4rem 0.8rem',
		}}
		{...props}
	>
		<input
			autoFocus={isActive}
			type="radio"
			defaultChecked={isActive}
			name="size"
			css={{ position: 'absolute', height: 1, width: 1, opacity: 0.001 }}
		/>
		{children}
	</label>
);

function Example({ context }) {
	const [activeSize, setSize] = useState(2);

	return (
		<Playground context={context} brand={brand}>
			<Intopia />

			<Row>
				{sizes.map((s, i) => (
					<Button key={s} onClick={() => setSize(i)} isActive={i === activeSize}>
						{s}
					</Button>
				))}
			</Row>
			<Row style={{ gridGap: (activeSize + 1) * 4, marginTop: '2em' }}>
				{icons.map((I, i) => (
					<I key={i} size={sizes[activeSize]} />
				))}
			</Row>
		</Playground>
	);
}

export default Example;
