/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';
import { AlertIcon, InfoIcon, TickIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

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

const BlenderIcon = (props) => (
	<Icon
		overrides={{
			Icon: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
			},
		}}
		{...props}
	/>
);

// ==============================
// Styles
// ==============================

const iconStyles = () => {
	const mq = useMediaQuery();

	return mq({
		label: 'alert-icon',
		float: ['left', 'none'],
		marginRight: ['0.375rem', '0.75rem'],
		flex: 'none',
	})[0];
};

// ==============================
// Attributes
// ==============================

const iconAttributes = () => ({
	'aria-hidden': 'true',
});

// ==============================
// Exports
// ==============================

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};

export const blenderIcon = {
	component: BlenderIcon,
	styles: iconStyles,
	attributes: iconAttributes,
};
