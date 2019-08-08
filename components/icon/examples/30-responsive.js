/** @jsx jsx */

import React, { Fragment, useState } from 'react';
import { jsx } from '@westpac/core';

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
} from '../src';
import { Row } from './_util';

const sizes = [['small', 'medium', 'large', 'xlarge'], ['large', 'medium']];
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

export default () => {
	return (
		<>
			<h2>Size</h2>
			{sizes.map((s, i) => (
				<Fragment key={i}>
					<h3>[{s.join(', ')}]</h3>
					<Row style={{ gridGap: (i + 1) * 4, marginBottom: '2em' }}>
						{icons.map((I, x) => (
							<I key={x} size={s} />
						))}
					</Row>
				</Fragment>
			))}
		</>
	);
};
