/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FormSectionImg = props => {
	const {
		breakpoints,
		form: { sectionImg },
	} = useTheme();
	const mq = paint(breakpoints);

	return (
		<img
			css={mq({
				display: 'block',
				margin: sectionImg.marginBottom.map(mb => `0 auto ${mb}`),
				maxWidth: '100%',
			})}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

FormSectionImg.propTypes = {
	/**
	 * Component img src
	 */
	src: PropTypes.string.isRequired,
};

FormSectionImg.defaultProps = {};
