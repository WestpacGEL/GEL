/** @jsx jsx */

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Context and consumer hook
// ==============================

const TemplateContext = createContext();

export const useTemplateContext = () => useContext(TemplateContext);

// ==============================
// Component
// ==============================

export const Template = ({ sidebarPosition, ...props }) => {
	const { LAYOUT, COLORS } = useTheme();

	return (
		<TemplateContext.Provider value={{ sidebarPosition }}>
			<div
				css={{
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					minHeight: '100vh', //fill to (at least) the viewport height (`vh` to incl. IE11 support)
					width: '100%', //fill to viewport width
					marginLeft: 'auto',
					marginRight: 'auto',
					maxWidth: LAYOUT.wrapperMax,
					backgroundColor: COLORS.background,

					[`@media (min-width: ${LAYOUT.wrapperMax})`]: {
						borderLeft: `1px solid ${COLORS.border}`,
						borderRight: `1px solid ${COLORS.border}`,
					},
				}}
				{...props}
			/>
		</TemplateContext.Provider>
	);
};

// ==============================
// Types
// ==============================

/**
 * Sidebar header
 */
Template.propTypes = {
	/**
	 * Sidebar position
	 */
	sidebarPosition: PropTypes.oneOf(['left', 'right']),
};

Template.defaultProps = {
	sidebarPosition: 'right',
};
