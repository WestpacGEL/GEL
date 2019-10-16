/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { useTemplateContext } from './Template';

// ==============================
// Component
// ==============================

export const Main = ({ tag: Tag, ...props }) => {
	const templateContext = useTemplateContext();

	const sidebarPosition = (templateContext && templateContext.sidebarPosition) || 'right';

	return (
		<Tag
			css={{
				flex: '1 0 auto', //flex grow (fill height)
				position: 'relative',
				marginLeft: sidebarPosition === 'left' && '18.75rem',
				marginRight: sidebarPosition === 'right' && '18.75rem',
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
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
Main.defaultProps = {
	tag: 'main',
};
