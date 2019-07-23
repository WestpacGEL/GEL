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

export const FormGroup = ({ primary, spacing, inline, size, children, ...props }) => {
	const { breakpoints } = useTheme();
	const mq = paint(breakpoints);

	// Common styling
	const styleCommon = {
		display: ['block', inline ? 'inline-block' : null],
		verticalAlign: [null, inline ? 'middle' : null],
		textAlign: primary ? 'center' : null,
	};

	// Size styling
	const styleSize = {
		marginBottom: spacing === 'large' ? ['24px', '30px'] : ['18px', inline ? 0 : null], //TODO token
	};

	// Pass the selected styling props on to children
	// TODO allow any children props to take precedence if provided
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child) ? cloneElement(child, { spacing, size, inline }) : child;
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
	size: ['small', 'medium', 'large', 'xlarge'],
};

FormGroup.propTypes = {
	/**
	 * Primary (fork) mode.
	 *
	 * Defaults to "false"
	 */
	primary: PropTypes.bool,

	/**
	 * The component vertical spacing.
	 *
	 * This prop is passed to child elements.
	 *
	 * Defaults to "medium"
	 */
	spacing: PropTypes.oneOf(options.spacing),

	/**
	 * Sets child component size.
	 *
	 * This prop is passed to child elements.
	 */
	size: PropTypes.string,

	/**
	 * Inline layout mode.
	 *
	 * This prop is passed to child elements.
	 *
	 * Defaults to "false"
	 */
	inline: PropTypes.bool,
};

FormGroup.defaultProps = {
	primary: false,
	spacing: 'medium',
	inline: false,
};
