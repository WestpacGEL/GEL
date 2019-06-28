/* @jsx jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css, jsx, useTheme } from '@westpac/core';
import Color from 'color';

import { CloseIcon } from '../../icon/src'; //until icon package is published

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

		'& > .icon': {
			marginRight: '6px',
			marginTop: '1px',
			float: 'left',
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

	return (
		<>
			{open && (
				<div
					css={[styleAppearance(appearance), styleBox(appearance), styleOverrides]}
					className={appearance === 'system' ? 'system' : ''}
				>
					{Icon && <Icon size="small" className="icon" />}
					<div className="alert-body">{children}</div>
					{Icon && (
						<button onClick={() => setOpen(false)}>
							<CloseIcon size="small" />
						</button>
					)}
				</div>
			)}
		</>
	);
};

const AlertText = ({ appearance, icon: Icon, iconSize, children }) => {
	return (
		<p css={styleAppearance(appearance)}>
			{Icon && <Icon size={iconSize} />} {children}
		</p>
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
};

// test
