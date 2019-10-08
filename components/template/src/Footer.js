/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Footer = ({ fancy, tag: Tag, children, ...props }) => {
	const { COLORS, SYMBOLS } = useTheme();
	const mq = useMediaQuery();

	return (
		<Tag
			css={mq({
				flex: 'none', //no flex grow or shrink
				position: 'relative',
				overflow: 'hidden',
				backgroundColor: '#fff',

				// Divider (top line)
				'::before': {
					content: '""',
					display: 'block',
					backgroundColor: COLORS.primary,
					height: 1,

					// Fancy mode styling (WBC only)
					...(fancy && SYMBOLS.footer && SYMBOLS.footer.fancy),
				},
			})}
			{...props}
		>
			<div
				css={mq({
					padding: ['1.125rem 0.75rem', '1.125rem 1.5rem 1.5rem'],
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

Footer.propTypes = {
	/**
	 * Enable fancy mode.
	 *
	 * Renders a more decorative divider line.
	 */
	fancy: PropTypes.bool,

	/**
	 * Footer tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Component children
	 */
	children: PropTypes.node.isRequired,
};

Footer.defaultProps = {
	fancy: false,
	tag: 'footer',
};
