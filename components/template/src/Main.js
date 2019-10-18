/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { useTemplateContext } from './Template';

// ==============================
// Component
// ==============================

export const Main = ({ padded, tag: Tag, ...props }) => {
	const templateContext = useTemplateContext();
	const sidebarPosition = (templateContext && templateContext.sidebarPosition) || false;

	return (
		<Tag
			css={{
				flex: '1 0 auto', //flex grow (fill height)
				position: 'relative',
				marginLeft: sidebarPosition === 'left' && '18.75rem',
				marginRight: sidebarPosition === 'right' && '18.75rem',
				paddingTop: padded && ['1.875rem', '3.75rem'],
				paddingBottom: padded && ['1.875rem', '3.75rem'],
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

Main.propTypes = {
	/**
	 * Enable vertical padding mode
	 */
	padded: PropTypes.bool,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
Main.defaultProps = {
	padded: false,
	tag: 'main',
};
