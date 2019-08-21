/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const ErrorMessage = ({ tag: Tag, ...props }) => {
	const {
		form: { errorMessage },
	} = useTheme();

	return (
		<Tag
			css={{
				...errorMessage,

				// Multiple error messages styled in a list
				'ul&, ol&': {
					listStyle: 'none',
					paddingLeft: 0,
				},
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

ErrorMessage.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Component children
	 */
	children: PropTypes.node,
};

ErrorMessage.defaultProps = {
	tag: 'p',
};
