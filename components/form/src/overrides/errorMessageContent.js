/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Fragment } from 'react';
import { AlertIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const ErrorMessageContent = ({ state: { icon }, children }) => {
	const Icon = icon ? icon : AlertIcon;

	return (
		<Fragment>
			<Icon css={{ verticalAlign: 'top', marginRight: '0.25em' }} size="small" color="inherit" />
			{children}
		</Fragment>
	);
};

// ==============================
// Styles
// ==============================

const errorMessageContentStyles = () => ({});

// ==============================
// Attributes
// ==============================

const errorMessageContentAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultErrorMessageContent = {
	component: ErrorMessageContent,
	styles: errorMessageContentStyles,
	attributes: errorMessageContentAttributes,
};
