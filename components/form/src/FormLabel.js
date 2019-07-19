/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormLabel = ({ htmlFor, size, spacing, tag: Tag, inline, ...props }) => {
	// Common styling
	const styleCommon = {
		display: 'inline-block',
		fontSize: size === 'small'
			? '14px'
			: '16px', //TODO token
		marginBottom: size === 'small'
			? '6px'
			: spacing === 'large'
				? '18px'
				: '12px', //TODO token
		fontWeight: 500,  //TODO token //Medium
	};

	return (
		<Tag
			css={styleCommon}
			htmlFor={htmlFor}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium'],
	spacing: ['medium', 'large'],
	tag: ['label', 'legend'],
};

FormLabel.propTypes = {
	/**
	 * The label for attribute.
	 *
	 * This prop is required, if the tag is `label`.
	 */
	htmlFor: (props, propName, componentName, location, propFullName) => {
		if (props.tag === 'label' && props[propName] == undefined) {
			return new Error(
				`The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is \`undefined\`.`
			);
		}
	},

	/**
	 * The label text size (ie. 'label' or 'sublabel').
	 *
	 * Defaults to "medium"
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * The label spacing amount.
	 *
	 * Defaults to "medium"
	 */
	spacing: PropTypes.oneOf(options.spacing),

	/**
	 * The component tag.
	 *
	 * Defaults to "label"
	 */
	tag: PropTypes.oneOf(options.tag),
};

FormLabel.defaultProps = {
	size: 'medium',
	spacing: 'medium',
	tag: 'label'
};
