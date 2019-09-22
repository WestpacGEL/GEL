/** @jsx jsx */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const Footer = ({ isFancy, tag: Tag, children, ...props }) => {
	const {
		breakpoints,
		template: { footer },
	} = useTheme();
	const mq = paint(breakpoints);

	const style = {
		// Common styling
		common: {
			position: 'relative',
			overflow: 'hidden',
			backgroundColor: '#fff',

			// Divider (top line)
			'::before': {
				content: '""',
				display: 'block',
				backgroundColor: footer.divider.backgroundColor,
				height: footer.divider.height,

				// Fancy mode styling
				...(isFancy && footer.fancy),
			},
		},

		// Inner block styling
		inner: {
			...footer.inner,
		},
	};

	// Pass the selected props on to children
	const childrenWithProps = Children.map(children, child => {
		if (isValidElement(child)) {
			return cloneElement(child, {});
		}
		return child;
	});

	return (
		<Tag css={mq({ ...style.common })} {...props}>
			<div css={mq(style.inner)}>{children}</div>
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
	isFancy: PropTypes.bool,

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
	isFancy: false,
	tag: 'footer',
};
