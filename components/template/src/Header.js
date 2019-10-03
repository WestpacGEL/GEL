/** @jsx jsx */

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';
import { SrSkipLink } from '@westpac/accessibility-helpers';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Context and consumer hook
// ==============================

const HeaderContext = createContext();

export const useHeaderContext = () => {
	const context = useContext(HeaderContext);
	if (!context) {
		throw new Error('Header children should be wrapped in a <Header>.');
	}
	return context;
};

// ==============================
// Component
// ==============================

export const Header = ({
	logoCenter,
	fixed,
	srSkipLinkText,
	srSkipLinkHref,
	tag: Tag,
	children,
	...props
}) => {
	const { COLORS } = useTheme();
	const mq = useMediaQuery();

	// Common styling
	const styleCommon = {
		display: 'flex',
		position: 'relative',
		flex: 1,
		backgroundColor: '#fff',
		textAlign: 'left',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: 1,
		height: ['3.375rem', '4.0625rem'],

		// Bottom border
		'::before': {
			flex: 'none', //no flex grow or shrink
			content: '""',
			display: 'block',
			position: 'absolute',
			zIndex: 1,
			left: 0,
			right: 0,
			top: '100%',
			overflow: 'hidden',
			borderTop: `1px solid ${COLORS.border}`,
			transition: 'opacity .2s',
			willChange: 'opacity',
		},
	};

	// Fixed position styling
	const fixedArr = asArray(fixed);
	const styleFixed = {
		position: fixedArr.map(f => f !== null && (f ? 'fixed' : 'relative')),
		top: fixedArr.map(f => f !== null && (f ? 0 : 'auto')),
		left: fixedArr.map(f => f !== null && (f ? 0 : 'auto')),
		right: fixedArr.map(f => f !== null && (f ? 0 : 'auto')),
		zIndex: fixedArr.map(f => f !== null && (f ? 1030 : 'auto')),
	};

	return (
		<HeaderContext.Provider value={{ logoCenter }}>
			<Tag css={{ display: 'flex' }} {...props}>
				{srSkipLinkText && <SrSkipLink href={srSkipLinkHref}>{srSkipLinkText}</SrSkipLink>}
				<div css={mq({ ...styleCommon, ...styleFixed })}>{children}</div>
			</Tag>
		</HeaderContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Header.propTypes = {
	/**
	 * Center logo mode
	 */
	logoCenter: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

	/**
	 * Fixed positioning mode.
	 *
	 * When enabled the header will remain fixed to the top of the viewport during scrolling.
	 */
	fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

	/**
	 * Screen reader skip link text
	 */
	srSkipLinkText: PropTypes.string,

	/**
	 * Screen reader skip link href attribute value
	 */
	srSkipLinkHref: PropTypes.string,

	/**
	 * Header tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Component children
	 */
	children: PropTypes.node.isRequired,
};

Header.defaultProps = {
	logoCenter: false,
	fixed: false,
	srSkipLinkText: 'Skip to main content',
	srSkipLinkHref: '#content',
	tag: 'header',
};
