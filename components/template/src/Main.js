/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Main = ({ tag: Tag, ...props }) => (
	<Tag
		css={{
			flex: '1 0 auto', //flex grow (fill height)
			position: 'relative',
		}}
		{...props}
	/>
);

// ==============================
// Types
// ==============================

Main.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
Main.defaultProps = {
	tag: 'main',
};
