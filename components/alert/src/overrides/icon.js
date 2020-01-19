/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { AlertIcon, InfoIcon, TickIcon } from '@westpac/icon';
import React from 'react';

export const Icon = ({
	size,
	color,
	look,
	dismissible,
	icon,
	heading,
	headingTag,
	open,
	overrides,
	...rest
}) => {
	const iconMap = {
		success: TickIcon,
		info: InfoIcon,
		warning: AlertIcon,
		danger: AlertIcon,
		system: AlertIcon,
	};
	const Tag = icon ? icon : iconMap[look];

	if (icon === null) {
		return null;
	}

	return <Tag size={size} color={color} assistiveText={null} aria-hidden={true} {...rest} />;
};

export const iconStyles = () => {
	const mq = useMediaQuery();

	return mq({
		float: ['left', 'none'],
		marginRight: ['0.375rem', '0.75rem'],
		flex: 'none',
	})[0];
};
