/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

// Only display content to screen readers
//
// See: https://a11yproject.com/posts/how-to-hide-content/
// See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/

export const SrOnly = ({ tag: Tag, ...props }) => (
	<Tag
		css={{
			position: 'absolute',
			width: 1,
			height: 1,
			padding: 0,
			overflow: 'hidden',
			clip: 'rect(0, 0, 0, 0)',
			whiteSpace: 'nowrap',
			border: 0,
		}}
		{...props}
	/>
);

// ==============================
// Types
// ==============================

SrOnly.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

SrOnly.defaultProps = {
	tag: 'span',
};
