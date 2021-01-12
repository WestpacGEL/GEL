/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel, titleCase } from '@westpac/core';
import { InfoIcon, SuccessIcon, WarningIcon, AlertIcon, LimitIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const Icon = ({ state: { look, icon }, ...rest }) => {
	const iconMap = {
		info: InfoIcon,
		success: SuccessIcon,
		warning: WarningIcon,
		danger: AlertIcon,
		system: LimitIcon,
	};
	// Only info look allows a custom icon (a11y)
	const Tag = look === 'info' && icon ? icon : iconMap[look];

	return (
		<Tag
			size={['small', 'medium']}
			color="inherit"
			assistiveText={titleCase(look)}
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
	const { SPACING } = useBrand();

	return mq({
		label: getLabel('alert-icon'),
		float: ['left', 'none'],
		marginRight: [SPACING(1), SPACING(2)],
		flex: 'none',
	})[0];
};

// ==============================
// Attributes
// ==============================

const iconAttributes = () => null;

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
