/* @jsx jsx */

import React, { useState } from 'react';
import { css, jsx, useTheme } from '@westpac/core';
import Color from 'color';

import { CloseIcon } from '../../icon/src'; //until icon package is published
import { CSSTransition } from 'react-transition-group';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================
const styleAppearance = appearance => {
	const theme = useTheme();
	return css({
		color: theme.colors[appearance],
		display: 'flex',
		alignItems: 'center',

		'& > .icon': {
			marginRight: '6px',
			marginTop: '1px',
			float: 'left',
		},

		'& > .icon-alert': {
			marginRight: '4px',
		},

		a: {
			color: 'inherit',
		},
	});
};

const styleBox = appearance => {
	const theme = useTheme();
	return css({
		backgroundColor: Color('white')
			.mix(Color(theme.colors[appearance]), 0.1)
			.hex(),
		display: 'block',
		position: 'relative',
		marginBottom: '21px',
		zIndex: '1',
		padding: '18px 34px 18px 18px',
		borderTop: `1px solid ${Color('white')
			.mix(Color(theme.colors[appearance]), 0.5)
			.hex()}`,
		borderBottom: `1px solid ${Color('white')
			.mix(Color(theme.colors[appearance]), 0.5)
			.hex()}`,
		opacity: '1',
		transition: 'opacity 0.3s ease-in-out',

		button: {
			color: theme.colors[appearance],
			background: 'none',
			border: 'none',
			position: 'absolute',
			right: '0',
			top: '15px',
			padding: '5px 12px',

			'&:hover': {
				cursor: 'pointer',
				opacity: '0.5',
			},
		},
		'.alert-box': {
			position: 'relative',
			flex: 1,
		},

		'&.anim-exit-active': {
			opacity: 0,
		},
	});
};

const styleOverrides = css({
	'&.system': {
		backgroundColor: 'yellow',
		borderColor: 'yellow',
		color: 'black',
	},
});

const AlertBox = ({ appearance, icon: Icon, children }) => {
	const [open, setOpen] = useState(true);
	const [animAlert, setAnim] = useState(true);

	return (
		<>
			{open && (
				<CSSTransition
					in={animAlert}
					classNames="anim"
					timeout={400}
					onExited={() => setOpen(false)}
				>
					<div
						css={[styleAppearance(appearance), styleBox(appearance), styleOverrides]}
						className={appearance === 'system' ? 'system' : ''}
					>
						{Icon && <Icon size="small" className="icon icon-alert" />}
						<div className="alert-body">{children}</div>
						{Icon && (
							<button
								onClick={() => {
									setAnim(false);
								}}
							>
								<CloseIcon size="small" />
							</button>
						)}
					</div>
				</CSSTransition>
			)}
		</>
	);
};

const AlertText = ({ appearance, icon: Icon, iconSize, children, as: As }) => {
	return (
		<As css={styleAppearance(appearance)}>
			{Icon && <Icon size={iconSize} className="icon-alert" />} {children}
		</As>
	);
};

export const Alert = ({ type, ...props }) => {
	return type === 'AlertText' ? <AlertText {...props} /> : <AlertBox {...props} />;
};

// ==============================
// Types
// ==============================
Alert.defaultProps = {
	type: 'AlertText',
	as: 'div',
};
