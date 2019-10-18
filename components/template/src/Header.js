/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';
import { SrSkipLink } from '@westpac/accessibility-helpers';
import { useTemplateContext } from './Template';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const Header = ({ srSkipLinkText, srSkipLinkHref, tag: Tag, children, ...props }) => {
	const { COLORS, LAYOUT } = useTheme();
	const mq = useMediaQuery();
	const templateContext = useTemplateContext();
	const sidebarPosition = (templateContext && templateContext.sidebarPosition) || false;
	const isTemplate = !!templateContext;

	const headerHeight = ['3.375rem', '4.0625rem'];

	return (
		<Tag
			css={mq({
				display: 'flex',
				height: headerHeight, //wrapper (and inner) get height to stop scroll jump when `fixed`
				marginLeft: sidebarPosition === 'left' && '18.75rem',
				marginRight: sidebarPosition === 'right' && '18.75rem',
			})}
			{...props}
		>
			{srSkipLinkText && <SrSkipLink href={srSkipLinkHref}>{srSkipLinkText}</SrSkipLink>}
			<div
				css={mq({
					display: 'flex',
					position: 'relative',
					flex: 1,
					backgroundColor: '#fff',
					textAlign: 'left',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginBottom: 1,
					height: headerHeight,
					maxWidth: `${LAYOUT.wrapperMax - 2}px`, //wraperMax - borders
					width: '100%', //required if `fixed` (IE11)

					...(isTemplate && {
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						zIndex: 1030,
					}),

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
				})}
			>
				{children}
			</div>
		</Tag>
	);
};

// ==============================
// Types
// ==============================

Header.propTypes = {
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
	srSkipLinkText: 'Skip to main content',
	srSkipLinkHref: '#content',
	tag: 'header',
};
