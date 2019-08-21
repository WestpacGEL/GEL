/** @jsx jsx */

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
	const getPaddingSM = () =>
		closable ? `${alert.padding} 3rem ${alert.padding} ${alert.padding}` : alert.padding;

	const styleCommon = {
		marginBottom: alert.marginBottom,
		padding: [alert.padding, getPaddingSM()],
		position: 'relative',
		display: ['null', 'flex'],
		zIndex: 1,
		transition: 'opacity 0.3s ease-in-out',

		'a, h1, h2, h3, h4, h5, h6, ol, ul': {
			color: 'inherit',
		},

		'&.anim-exit-active': {
			opacity: 0,
		},
	};

	const styleAppearance = {
		color: alert.appearance[appearance].color,
		backgroundColor: alert.appearance[appearance].backgroundColor,
		borderTop: `${alert.borderWidth} solid`,
		borderBottom: `${alert.borderWidth} solid`,
		borderColor: alert.appearance[appearance].borderColor,
	};

	const styleClose = {
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
	};

	const styleIcon = {
		float: ['left', 'none'],
		marginRight: ['0.6rem', '1.2rem'],
		flex: 'none',
	};

	const styleBody = {
		position: 'relative',
		flex: 1,
		top: [null, Icon ? '0.2rem' : null],
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
						appearance="link"
						css={mq(styleClose)}
					/>
				)}
				{Icon && <Icon css={mq(styleIcon)} size={['small', 'medium']} color="inherit" />}
				<div css={mq(styleBody)}>{children}</div>
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
