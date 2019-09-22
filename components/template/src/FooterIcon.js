/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FooterIcon = ({ icon: Icon, ...props }) => {
	const {
		breakpoints,
		template: { footer },
	} = useTheme();
	const mq = paint(breakpoints);

	const style = {
		float: 'left',
		marginRight: footer.icon.marginRight,
	};

	return <Icon css={mq(style)} color={footer.icon.color} {...props} />;
};

// ==============================
// Types
// ==============================

FooterIcon.propTypes = {
	/**
	 * Component icon
	 */
	icon: PropTypes.func,
};

FooterIcon.defaultProps = {};
