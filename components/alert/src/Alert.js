/* @jsx jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

import { Button } from '../../button/src';
import { CloseIcon } from '../../icon/src';

import { CSSTransition } from 'react-transition-group';

// ==============================
// Component
// ==============================

export const Alert = ({ appearance, closable, icon: Icon, children }) => {
	const [open, setOpen] = useState(true);
	const { breakpoints, alert } = useTheme();
	const mq = paint(breakpoints);

	const styleCommon = {
		marginBottom: alert.marginBottom,
		padding: alert.padding,
		paddingRight: [18, 30],
		position: 'relative',
		display: ['block', 'flex'],
		zIndex: 1,
		transition: 'opacity 0.3s ease-in-out',

		a: {
			color: 'inherit',
		},

		'&.anim-exit-active': {
			opacity: 0,
		},
	};

	const styleAppearance = {
		...alert.appearance[appearance],
	};

	const styleClose = {
		color: alert.appearance[appearance].color,
		position: ['relative', 'absolute'],
		zIndex: 1,
		float: ['right', 'none'],
		top: 3,
		right: 0,
		marginTop: [-18, 0],
		marginRight: [-18, 0],
		opacity: 1,

		':hover': {
			opacity: 0.5,
		},
	};

	const styleIcon = {
		float: ['left', 'none'],
		marginRight: [6, 12],
		flex: 'none',
		fontSize: [18, 24],
		width: [18, 24],
		height: [18, 24],
	};

	const styleBox = {
		position: 'relative',
		flex: 1,
		top: ['auto', 2],
	};

	return (
		<CSSTransition in={open} unmountOnExit classNames="anim" timeout={400}>
			<div css={mq({ ...styleCommon, ...styleAppearance })}>
				{closable && (
					<Button
						onClick={() => {
							setOpen(false);
						}}
						icon={CloseIcon}
						size="small"
						appearance="link"
						css={styleClose}
					/>
				)}
				{Icon && <Icon className="icon icon-alert" css={mq({ ...styleIcon })} />}
				<div css={mq({ ...styleBox })}>{children}</div>
			</div>
		</CSSTransition>
	);
};

// ==============================
// Types
// ==============================

Alert.propTypes = {
	/**
	 * The alert appearance.
	 *
	 * Defaults to "information"
	 */
	appearance: PropTypes.oneOf(['success', 'information', 'warning', 'danger', 'system']),

	/**
	 * Closing option.
	 *
	 * Defaults to "false"
	 */
	closable: PropTypes.bool,

	/**
	 * Alert icon.
	 */
	icon: PropTypes.func,

	/**
	 * The content for this alert.
	 */
	children: PropTypes.node,
};

Alert.defaultProps = {
	appearance: 'information',
	closable: false,
};
