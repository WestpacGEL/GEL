/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

import { AlertIcon } from '../../icon/src';

// ==============================
// Utility
// ==============================

export const ErrorMessageContent = ({ icon: Icon, children }) => {
	const {
		form: { errorMessage },
	} = useTheme();

	return (
		<>
			{Icon && (
				<Icon css={{ verticalAlign: 'top', ...errorMessage.icon }} size="small" color="inherit" />
			)}
			{children}
		</>
	);
};

// ==============================
// Component
// ==============================

export const ErrorMessage = ({ message, icon, tag: Tag, ...props }) => {
	const {
		form: { errorMessage },
	} = useTheme();

	// Check for an array of messages
	const isMessages = Array.isArray(message);

	if (isMessages) {
		Tag = 'ul';
	}

	const common = {
		fontSize: errorMessage.fontSize,
		margin: errorMessage.margin,
		color: errorMessage.color,
		...(isMessages && { listStyle: 'none', paddingLeft: 0 }),
	};

	return (
		<Tag css={common} {...props}>
			{isMessages ? (
				message.map((msg, i) => (
					<li css={{ ...errorMessage.li }} key={i}>
						<ErrorMessageContent icon={icon}>{msg}</ErrorMessageContent>
					</li>
				))
			) : (
				<ErrorMessageContent icon={icon}>{message}</ErrorMessageContent>
			)}
		</Tag>
	);
};

// ==============================
// Types
// ==============================

ErrorMessage.propTypes = {
	/**
	 * Error message item(s) text
	 */
	message: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

	/**
	 * Error message item(s) icon
	 */
	icon: PropTypes.func,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ErrorMessage.defaultProps = {
	message: 'Invalid input',
	icon: AlertIcon,
	tag: 'div',
};
