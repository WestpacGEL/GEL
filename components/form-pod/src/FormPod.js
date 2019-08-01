/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

import { FormPodHeader, FormPodIcon, FormPodPreheading, FormPodHeading } from './styled';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormPod = ({ icon, preheading, heading, children, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	// Common styling
	const styleCommon = {};

	// Styling to provide the icon gap
	const styleHeaderText = {
		marginRight: [null, formPod.icon.width],
		paddingRight: [null, formPod.icon.gap],
	};

	return (
		<div css={mq(styleCommon)} {...props}>
			<FormPodHeader align={icon && ['center', 'left']}>
				{icon && <FormPodIcon icon={icon} />}
				{preheading && (
					<FormPodPreheading css={icon ? mq(styleHeaderText) : {}}>{preheading}</FormPodPreheading>
				)}
				{heading && (
					<FormPodHeading css={icon ? mq(styleHeaderText) : {}}>{heading}</FormPodHeading>
				)}
			</FormPodHeader>
			{children}
		</div>
	);
};

// ==============================
// Types
// ==============================

FormPod.propTypes = {
	/**
	 * Header icon.
	 */
	icon: PropTypes.func,

	/**
	 * Pre-heading text.
	 */
	preheading: PropTypes.string,

	/**
	 * Heading text.
	 */
	heading: PropTypes.string,
};

FormPod.defaultProps = {};
