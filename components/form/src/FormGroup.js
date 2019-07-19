/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormGroup = ({ spacing, primary, inline, children, ...props }) => {
	const { breakpoints } = useTheme();
	const mq = paint(breakpoints);

	// Common styling
	const styleCommon = {
		display: ['block', (inline ? 'inline-block' : null)],
		verticalAlign: [null, (inline ? 'middle' : null)],
		textAlign: primary ? 'center' : null,
	};

	// Size styling
	const styleSize = {
		marginBottom: spacing === 'large'
			? ['24px', '30px']
			: ['18px', (inline ? 0 : null)], //TODO token
	};

	// Pass these selected props on to children (that way our children’s styling can be set by the parent)
	// TODO allow any children props to take precedence if provided
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child)
			? cloneElement(child, { spacing })
			: child
	});

	return (
		<div css={mq({ ...styleCommon, ...styleSize })} {...props}>
			{giftedChildren}
		</div>
	);
};

// ==============================
// Types
// ==============================

const options = {
	spacing: ['medium', 'large'],
};

FormGroup.propTypes = {
	/**
	 * The form group spacing.
	 *
	 * Defaults to "medium"
	 */
	spacing: PropTypes.oneOf(options.spacing),

	/**
	 * Primary (fork) mode.
	 *
	 * Defaults to "false"
	 */
	primary: PropTypes.bool,

	/**
	 * Inline layout mode.
	 *
	 * Defaults to "false"
	 */
	inline: PropTypes.bool,
};

FormGroup.defaultProps = {
	spacing: 'medium',
	primary: false,
	inline: false,
};
