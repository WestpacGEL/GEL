/** @jsx jsx */

import { AlertIcon, InfoIcon, TickIcon } from '@westpac/icon';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import React from 'react';

export const Wrapper = ({
	look,
	dismissible,
	icon,
	heading,
	headingTag,
	open,
	overrides,
	...rest
}) => <div {...rest} />;

export const wrapperStyles = (_, { dismissible, look }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	const styleMap = {
		success: {
			icon: TickIcon,
			css: {
				backgroundColor: COLORS.tints[`${look}5`],
				color: COLORS[look],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		info: {
			icon: InfoIcon,
			css: {
				backgroundColor: COLORS.tints[`${look}5`],
				color: COLORS[look],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		warning: {
			icon: AlertIcon,
			css: {
				backgroundColor: COLORS.tints[`${look}5`],
				color: COLORS[look],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		danger: {
			icon: AlertIcon,
			css: {
				backgroundColor: COLORS.tints[`${look}5`],
				color: COLORS[look],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		system: {
			icon: AlertIcon,
			css: {
				backgroundColor: COLORS.system,
				color: 'black',
				borderColor: COLORS.system,
			},
		},
	};

	return mq({
		marginBottom: '1.3125rem',
		padding: ['1.125rem', dismissible ? `1.125rem 1.875rem 1.125rem 1.125rem` : '1.125rem'],
		position: 'relative',
		display: [null, 'flex'],
		zIndex: 1,
		transition: `opacity 300ms ease-in-out`,
		opacity: 1,
		'&.anim-exit-active': {
			opacity: 0,
		},
		borderTop: '1px solid',
		borderBottom: '1px solid',
		...styleMap[look].css,
	})[0];
};
