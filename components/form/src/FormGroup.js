/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const FormGroup = ({ primary, size, spacing, inline, children, ...props }) => {
	const { breakpoints, form } = useTheme();
	const mq = paint(breakpoints);

	// Common styling
	const styleCommon = {
		display: inline ? [null, 'inline-block'] : null,
		verticalAlign: inline ? [null, 'middle'] : null,
		marginBottom: inline
			? [
					form.group.spacing[spacing].marginBottom[0] || form.group.spacing[spacing].marginBottom,
					null,
			  ]
			: form.group.spacing[spacing].marginBottom,
		textAlign: primary ? 'center' : null,
	};

	// Pass the selected styling props on to children
	// TODO allow any children props to take precedence if provided
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child) ? cloneElement(child, { size, spacing, inline }) : child;
	});

	return (
		<div css={mq(styleCommon)} {...props}>
			{giftedChildren}
		</div>
	);
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
};

FormGroup.defaultProps = {
	primary: false,
};
