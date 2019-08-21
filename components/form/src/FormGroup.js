/** @jsx jsx */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';
import { FormContext } from './Form.context';

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const FormGroup = ({ primary, ...props }) => {
	const {
		breakpoints,
		form: { group },
	} = useTheme();
	const { spacing, inline } = useContext(FormContext);
	const mq = paint(breakpoints);

	const common = {
		display: inline ? [null, 'inline-block'] : null,
		verticalAlign: inline ? [null, 'middle'] : null,
		marginBottom: inline
			? [(mb => (Array.isArray(mb) ? mb[0] : mb))(group.spacing[spacing].marginBottom), 0]
			: group.spacing[spacing].marginBottom,
		textAlign: primary ? 'center' : null,

		'& + &': {
			...(inline && group.inline),
		},
	};

	return <div css={mq(common)} {...props} />;
};

// ==============================
// Types
// ==============================

FormGroup.propTypes = {
	/**
	 * Primary (fork) mode
	 */
	primary: PropTypes.bool,

	/**
	 * Component children
	 */
	children: PropTypes.node,
};

FormGroup.defaultProps = {
	primary: false,
};
