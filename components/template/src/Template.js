/** @jsx jsx */

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, Global, useTheme, useMediaQuery } from '@westpac/core';

// ==============================
// Context and consumer hook
// ==============================

const TemplateContext = createContext();

export const useTemplateContext = () => useContext(TemplateContext);

// ==============================
// Component
// ==============================

export const Template = ({ headerFixed, sidebarPosition, ...props }) => {
	const { LAYOUT, COLORS } = useTheme();
	const mq = useMediaQuery();

	const minWidth = width => `@media (min-width: ${width}px)`;

	return (
		<TemplateContext.Provider value={{ headerFixed, sidebarPosition }}>
			<Global
				styles={{
					body: { backgroundColor: COLORS.background },
				}}
			/>

			<div
				css={mq({
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					minHeight: '100vh', //fill to (at least) the viewport height (`vh` to incl. IE11 support)
					width: '100%', //fill to viewport width
					marginLeft: 'auto',
					marginRight: 'auto',
					maxWidth: LAYOUT.wrapperMax,
					backgroundColor: COLORS.background,

					[minWidth(LAYOUT.wrapperMax)]: {
						borderLeft: `1px solid ${COLORS.border}`,
						borderRight: `1px solid ${COLORS.border}`,
					},
				})}
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
	 * Fixed header positioning mode.
	 *
	 * When enabled the header will remain fixed to the top of the viewport during scrolling.
	 */
	headerFixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

	/**
	 * Sidebar position
	 */
	sidebarPosition: PropTypes.oneOf(['left', 'right', false]),
};

Template.defaultProps = {
	headerFixed: false,
	sidebarPosition: false,
};
