/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormErrorMessage = ({ tag: Tag, ...props }) => {
	const { form } = useTheme();

	return (
		<Tag
			css={{
				...form.errorMessage,

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

FormErrorMessage.propTypes = {
	/**
	 * The component tag.
	 *
	 * Defaults to "p"
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Component children.
	 */
	children: PropTypes.node,
};

FormErrorMessage.defaultProps = {
	tag: 'p',
};
