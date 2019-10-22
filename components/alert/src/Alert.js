/** @jsx jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon, AlertIcon, InfoIcon, TickIcon } from '@westpac/icon';
import { CSSTransition } from 'react-transition-group';

// ==============================
// Component
// ==============================

export const Alert = ({ appearance, closable, icon: Icon, children }) => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();
	const [open, setOpen] = useState(true);

	const iconMap = {
		success: TickIcon,
		info: InfoIcon,
		warning: AlertIcon,
		danger: AlertIcon,
		system: AlertIcon,
	};

	// Set a default icon
	if (Icon === undefined) {
		Icon = iconMap[appearance];
	}

	// Common styling
	const styleCommon = {
		marginBottom: '1.3125rem',
		padding: ['1.125rem', closable ? `1.125rem 1.875rem 1.125rem 1.125rem` : '1.125rem'],
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
	};

	// Appearance styling
	const styleAppearance = {
		color: appearance === 'system' ? 'black' : COLORS[appearance],
		backgroundColor: appearance === 'system' ? COLORS.system : COLORS.tints[`${appearance}5`],
		borderTop: '1px solid',
		borderBottom: '1px solid',
		borderColor: appearance === 'system' ? COLORS.system : COLORS.tints[`${appearance}50`],
	};

	return (
		<CSSTransition in={open} unmountOnExit classNames="anim" timeout={400}>
			<div css={mq({ ...styleCommon, ...styleAppearance })}>
				{closable && (
					<Button
						onClick={() => {
							setOpen(false);
						}}
						iconAfter={CloseIcon}
						appearance="link"
						css={mq({
							color: 'inherit',
							position: ['relative', 'absolute'],
							zIndex: 1,
							float: ['right', 'none'],
							top: '0.1875rem',
							right: 0,
							marginTop: ['-1.125rem', 0],
							marginRight: ['-1.125rem', 0],
							opacity: 1,

							':hover': {
								opacity: 0.5,
							},
						})}
					/>
				)}
				{Icon && (
					<Icon
						css={mq({
							float: ['left', 'none'],
							marginRight: ['0.375rem', '0.75rem'],
							flex: 'none',
						})}
						size={['small', 'medium']}
						color="inherit"
					/>
				)}
				<div
					css={mq({
						position: 'relative',
						flex: 1,
						top: [null, Icon && '0.125rem'],
					})}
				>
					{children}
				</div>
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
	appearance: PropTypes.oneOf(['success', 'info', 'warning', 'danger', 'system']),

	/**
	 * Enable closable mode
	 */
	closable: PropTypes.bool,

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
	appearance: 'info',
	closable: false,
};
