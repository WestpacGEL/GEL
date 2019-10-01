/** @jsx jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon, AlertIcon, InfoIcon, TickIcon } from '@westpac/icon';
import { CSSTransition } from 'react-transition-group';

// ==============================
// Component
// ==============================

export const Alert = ({ appearance, isClosable, icon: Icon, children }) => {
	const [open, setOpen] = useState(true);
	const { breakpoints, alert } = useTheme();
	const mq = paint(breakpoints);

	const iconMap = {
		success: TickIcon,
		information: InfoIcon,
		warning: AlertIcon,
		danger: AlertIcon,
		system: AlertIcon,
	};

	// Set default icon
	if (Icon === undefined) {
		Icon = iconMap[appearance];
	}

	const style = {
		common: {
			marginBottom: alert.marginBottom,
			padding: [
				alert.padding,
				isClosable ? `${alert.padding} 3rem ${alert.padding} ${alert.padding}` : alert.padding,
			],
			position: 'relative',
			display: [null, 'flex'],
			zIndex: 1,
			transition: 'opacity 0.3s ease-in-out',

			'a, h1, h2, h3, h4, h5, h6, ol, ul': {
				color: 'inherit',
			},

			'&.anim-exit-active': {
				opacity: 0,
			},
		},
		appearance: {
			color: alert.appearance[appearance].color,
			backgroundColor: alert.appearance[appearance].backgroundColor,
			borderTop: `${alert.borderWidth} solid`,
			borderBottom: `${alert.borderWidth} solid`,
			borderColor: alert.appearance[appearance].borderColor,
		},
		close: {
			color: 'inherit',
			position: ['relative', 'absolute'],
			zIndex: 1,
			float: ['right', 'none'],
			top: '0.3rem',
			right: 0,
			marginTop: ['-1.8rem', 0],
			marginRight: ['-1.8rem', 0],
			opacity: 1,

			':hover': {
				opacity: 0.5,
			},
		},
		icon: {
			float: ['left', 'none'],
			marginRight: ['0.6rem', '1.2rem'],
			flex: 'none',
		},
		body: {
			position: 'relative',
			flex: 1,
			top: [null, Icon && '0.2rem'],
		},
	};

	return (
		<CSSTransition in={open} unmountOnExit classNames="anim" timeout={400}>
			<div css={mq({ ...style.common, ...style.appearance })}>
				{isClosable && (
					<Button
						onClick={() => {
							setOpen(false);
						}}
						iconAfter={CloseIcon}
						appearance="link"
						css={mq(style.close)}
					/>
				)}
				{Icon && <Icon css={mq(style.icon)} size={['small', 'medium']} color="inherit" />}
				<div css={mq(style.body)}>{children}</div>
			</div>
		</CSSTransition>
	);
};

// ==============================
// Types
// ==============================

Alert.propTypes = {
	/**
	 * Alert appearance
	 */
	appearance: PropTypes.oneOf(['success', 'information', 'warning', 'danger', 'system']),

	/**
	 * Enable closable mode
	 */
	isClosable: PropTypes.bool,

	/**
	 * Alert icon.
	 *
	 * The alert icon is automatically rendered based on appearance, but can be overriden via this prop. Pass a `null` value to remove completely.
	 */
	icon: PropTypes.func,

	/**
	 * Alert children
	 */
	children: PropTypes.node,
};

Alert.defaultProps = {
	appearance: 'information',
	isClosable: false,
};
