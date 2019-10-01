/** @jsx jsx */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';
import { FormContext } from './Form.context';

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const FormGroup = ({ isPrimary, ...props }) => {
	const {
		breakpoints,
		form: { group },
	} = useTheme();
	const { spacing, isInline } = useContext(FormContext);
	const mq = paint(breakpoints);

	const common = {
		display: isInline && [null, 'inline-block'],
		verticalAlign: isInline && [null, 'middle'],
		marginBottom: isInline
			? [(mb => (Array.isArray(mb) ? mb[0] : mb))(group.spacing[spacing].marginBottom), 0]
			: group.spacing[spacing].marginBottom,
		textAlign: isPrimary && 'center',

		'& + &': {
			...(isInline && group.inline),
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
	isPrimary: PropTypes.bool,

	/**
	 * Component children
	 */
	children: PropTypes.node,
};

FormGroup.defaultProps = {
	isPrimary: false,
};
