/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';
import { FormPodHeader, FormPodHeaderIcon, FormPodPreheading, FormPodHeading } from './styled';

// ==============================
// Component
// ==============================

export const FormPod = ({ icon, preheading, heading, children, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	// Styling to provide the icon gap
	const styleHeaderTextWithIcon = {
		marginRight: [null, formPod.icon.width],
		paddingRight: [null, formPod.icon.gap],
	};

	return (
		<div {...props}>
			<FormPodHeader align={icon && ['center', 'left']}>
				{icon && <FormPodHeaderIcon icon={icon} />}
				{preheading && (
					<FormPodPreheading css={mq(icon && styleHeaderTextWithIcon)}>
						{preheading}
					</FormPodPreheading>
				)}
				{heading && (
					<FormPodHeading css={mq(icon && styleHeaderTextWithIcon)}>{heading}</FormPodHeading>
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
	 * Pre-heading text
	 */
	preheading: PropTypes.string,

	/**
	 * Heading text
	 */
	heading: PropTypes.string,

	/**
	 * Header icon
	 */
	icon: PropTypes.func,

	/**
	 * Component children
	 */
	children: PropTypes.node,
};

FormPod.defaultProps = {};
