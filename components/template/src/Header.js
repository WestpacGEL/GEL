/** @jsx jsx */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';
import { HeaderLogo } from './HeaderLogo';
import { SrSkipLink } from '@westpac/accessibility-helpers';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const Header = ({
	isLogoCenter,
	isFixed,
	srSkipLinkText,
	srSkipLinkHref,
	tag: Tag,
	children,
	...props
}) => {
	const {
		breakpoints,
		template: { header },
	} = useTheme();
	const mq = paint(breakpoints);

	const style = {
		// Common styling
		common: {
			display: 'flex',
			position: 'relative',
			flex: 1,
			backgroundColor: '#fff',
			textAlign: 'left',
			marginLeft: 'auto',
			marginRight: 'auto',
			marginBottom: header.borderBottomWidth,
			height: header.height,

			// Bottom border
			'::before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				zIndex: 1,
				left: 0,
				right: 0,
				top: '100%',
				overflow: 'hidden',
				borderTop: `${header.borderBottomWidth} solid ${header.borderBottomColor}`,
				transition: 'opacity .2s',
				willChange: 'opacity',
			},
		},

		// Fixed position styling
		fixed: (() => {
			const fixedArr = asArray(isFixed);

			return {
				position: fixedArr.map(f => f !== null && (f ? 'fixed' : 'relative')),
				top: fixedArr.map(f => f !== null && (f ? 0 : 'auto')),
				left: fixedArr.map(f => f !== null && (f ? 0 : 'auto')),
				right: fixedArr.map(f => f !== null && (f ? 0 : 'auto')),
				zIndex: fixedArr.map(f => f !== null && (f ? 1030 : 'auto')),
			};
		})(),
	};

	// Pass the selected props on to children
	const childrenWithProps = Children.map(children, child => {
		// HeaderLogo child
		if (isValidElement(child) && child.type && child.type === HeaderLogo) {
			return cloneElement(child, { isLogoCenter });
		}
		return child;
	});

	return (
		<Tag css={{ display: 'flex' }} {...props}>
			{srSkipLinkText && <SrSkipLink href={srSkipLinkHref}>{srSkipLinkText}</SrSkipLink>}
			<div css={mq({ ...style.common, ...style.fixed })}>{childrenWithProps}</div>
		</Tag>
	);
};

// ==============================
// Types
// ==============================

Header.propTypes = {
	/**
	 * Center logo mode
	 */
	isLogoCenter: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

	/**
	 * Fixed positioning mode.
	 *
	 * When enabled the header will remain fixed to the top of the viewport during scrolling.
	 */
	isFixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

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
	isLogoCenter: false,
	isFixed: false,
	srSkipLinkText: 'Skip to main content',
	srSkipLinkHref: '#content',
	tag: 'header',
};
