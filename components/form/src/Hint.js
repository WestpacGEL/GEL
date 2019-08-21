/** @jsx jsx */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { FormContext } from './Form.context';

// ==============================
// Component
// ==============================

export const Hint = ({ tag: Tag, ...props }) => {
	const {
		form: { hint },
	} = useTheme();
	const { spacing } = useContext(FormContext);

	const common = {
		color: hint.color,
		fontSize: hint.fontSize,
		...hint.spacing[spacing],
	};

	return <Tag css={common} {...props} />;
};

// ==============================
// Types
// ==============================

Hint.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Component text
	 */
	children: PropTypes.string.isRequired,
};

Hint.defaultProps = {
	tag: 'p',
};
