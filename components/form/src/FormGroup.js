/** @jsx jsx */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';
import { FormContext } from './Form';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const FormGroup = ({ primary, ...props }) => {
	const { breakpoints, form } = useTheme();
	const { spacing, inline } = useContext(FormContext);
	const mq = paint(breakpoints);

	const common = {
		display: inline ? [null, 'inline-block'] : null,
		verticalAlign: inline ? [null, 'middle'] : null,
		marginBottom: inline
			? [(mb => mb[0] || mb)(form.group.spacing[spacing].marginBottom), 0]
			: form.group.spacing[spacing].marginBottom,
		textAlign: primary ? 'center' : null,

		'& + &': {
			...(inline && form.group.inline),
		},
	};

	return <div css={mq(common)} {...props} />;
};

// ==============================
// Types
// ==============================

FormGroup.propTypes = {
	/**
	 * Primary (fork) mode.
	 *
	 * Defaults to "false"
	 */
	primary: PropTypes.bool,

	/**
	 * Component children.
	 */
	children: PropTypes.node,
};

FormGroup.defaultProps = {
	primary: false,
};
