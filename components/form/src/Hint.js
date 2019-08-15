/** @jsx jsx */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { FormContext } from './Form.context';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Hint = ({ tag: Tag, ...props }) => {
	const { form } = useTheme();
	const { spacing } = useContext(FormContext);

	const common = {
		color: form.hint.color,
		fontSize: form.hint.fontSize,
		...form.hint.spacing[spacing],
	};

	return <Tag css={common} {...props} />;
};

// ==============================
// Types
// ==============================

Hint.propTypes = {
	/**
	 * The component tag.
	 *
	 * Defaults to "p"
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Component text.
	 *
	 * This prop is required.
	 */
	children: PropTypes.string.isRequired,
};

Hint.defaultProps = {
	tag: 'p',
};
