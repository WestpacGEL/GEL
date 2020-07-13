/** @jsx jsx */

import { AlertIcon, InfoIcon, TickIcon } from '@westpac/icon';
import { jsx, useBrand, useMediaQuery, classNames } from '@westpac/core';

const Alert = ({ state, ...rest }) => <div {...rest} />;

const alertStyles = (_, { dismissible, look, plainCSSProp }) => {
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

	let label = 'alert';
	switch (plainCSSProp) {
		case 'look':
			label = `alert-${look}`;
			break;
		case 'dismissible':
			label = `alert-dismissible`;
			break;
		default:
			break;
	}

	return mq({
		label,
		marginBottom: '1.3125rem',
		padding: dismissible ? '1.125rem 1.875rem 1.125rem 1.125rem' : '1.125rem',
		position: 'relative',
		display: [null, 'flex'],
		zIndex: 1,
		transition: 'opacity 300ms ease-in-out',
		opacity: 1,
		borderTop: '1px solid',
		borderBottom: '1px solid',
		...(look && styleMap[look].css),
	})[0];
};

const alertAttributes = () => null;

const blenderAttributes = (_, { look, dismissible }) => ({
	className: classNames({
		[`GEL-alert-${look}`]: look,
		'GEL-alert-dismissible': dismissible,
	}),
});

export const defaultAlert = {
	component: Alert,
	styles: alertStyles,
	attributes: alertAttributes,
};

export const blenderAlert = {
	component: Alert,
	styles: alertStyles,
	attributes: blenderAttributes,
};
