/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { AlertIcon, InfoIcon, TickIcon } from '@westpac/icon';

const Icon = ({ state: { look, icon }, ...rest }) => {
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

	return (
		<Tag
			size={['small', 'medium']}
			color="inherit"
			assistiveText={null}
			aria-hidden="true"
			{...rest}
		/>
	);
};

const iconStyles = () => {
	const mq = useMediaQuery();

	return mq({
		float: ['left', 'none'],
		marginRight: ['0.375rem', '0.75rem'],
		flex: 'none',
	})[0];
};

const iconAttributes = () => ({
	'aria-hidden': 'true',
});

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};
