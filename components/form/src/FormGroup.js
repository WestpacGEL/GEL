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
		display: inline && [null, 'inline-block'],
		verticalAlign: inline && [null, 'middle'],
		marginBottom: inline
			? [(mb => (Array.isArray(mb) ? mb[0] : mb))(group.spacing[spacing].marginBottom), 0]
			: group.spacing[spacing].marginBottom,
		textAlign: primary && 'center',

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
	 * Primary mode.
	 *
	 * Used exclusively to render the ‘Fork’ pattern.
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
