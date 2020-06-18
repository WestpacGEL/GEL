import { GEL } from '@westpac/core';
import React from 'react';

import { Popover } from '@westpac/popover';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Popover heading="Text" content="Text" open={false} placement="top">
				Text
			</Popover>
			<Popover heading="Text" content="Text" open={false} placement="bottom">
				Text
			</Popover>
			<Popover heading="Text" content="Text" open={true} placement="top">
				Text
			</Popover>
			<Popover heading="Text" content="Text" open={true} placement="bottom">
				Text
			</Popover>
			<Popover content="Text" open={false}>
				Text
			</Popover>
			<Popover content="Text" open={true} placement="top">
				Text
			</Popover>
			<Popover content="Text" open={true} placement="bottom">
				Text
			</Popover>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A popover popping up on top',
			component: () => (
				<GEL brand={brand}>
					<Popover heading="Your heading" content="The content of your popover" placement="top">
						The button text
					</Popover>
				</GEL>
			),
		},
		{
			heading: 'A popover popping up on bottom',
			component: () => (
				<GEL brand={brand}>
					<Popover heading="Your heading" content="The content of your popover" placement="bottom">
						The button text
					</Popover>
				</GEL>
			),
		},
		{
			heading: 'A popover without heading',
			component: () => (
				<GEL brand={brand}>
					<Popover content="The content of your popover" placement="top">
						The button text
					</Popover>
				</GEL>
			),
		},
		{
			heading: 'A popover opened top',
			component: () => (
				<GEL brand={brand}>
					<Popover
						heading="Your heading"
						content="The content of your popover"
						open={true}
						placement="top"
					>
						The button text
					</Popover>
				</GEL>
			),
		},
		{
			heading: 'A popover opened bottom',
			component: () => (
				<GEL brand={brand}>
					<Popover
						heading="Your heading"
						content="The content of your popover"
						open={true}
						placement="bottom"
					>
						The button text
					</Popover>
				</GEL>
			),
		},
	];
}
