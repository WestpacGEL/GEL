/** @jsx jsx */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { FormContext } from './Form';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormHint = ({ tag: Tag, ...props }) => {
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

FormHint.propTypes = {
	/**
	 * The component tag.
	 *
	 * Defaults to "p"
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

FormHint.defaultProps = {
	tag: 'p',
};
