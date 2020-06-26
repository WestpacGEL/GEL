/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

import { blenderFooter } from '../overrides/footer';

// ==============================
// Component
// ==============================
export const PanelFooter = ({ children, ...rest }) => {
	const { component: Footer, styles: footerStyles, attributes: footerAttributes } = blenderFooter;

	return (
		<Footer {...rest} {...footerAttributes()} css={footerStyles()}>
			{children}
		</Footer>
	);
};

// ==============================
// Types
// ==============================

PanelFooter.propTypes = {
	/**
	 * Panel body content
	 */
	children: PropTypes.node,
};
