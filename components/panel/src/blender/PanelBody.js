/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

import { blenderBody } from '../overrides/body';

// ==============================
// Component
// ==============================
export const PanelBody = ({ children, ...rest }) => {
	const { component: Body, styles: bodyStyles, attributes: bodyAttributes } = blenderBody;

	return (
		<Body {...rest} {...bodyAttributes()} css={bodyStyles()}>
			{children}
		</Body>
	);
};

// ==============================
// Types
// ==============================

PanelBody.propTypes = {
	/**
	 * Panel body content
	 */
	children: PropTypes.node,
};
