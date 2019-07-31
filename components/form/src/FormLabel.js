/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormLabel = ({ sublabel, tag: Tag, htmlFor, size, spacing, inline, ...props }) => {
	const { form } = useTheme();

	// Common styling
	const styleCommon = {
		display: 'inline-block',
		fontWeight: form.label.fontWeight,
		...form.label.spacing[spacing],
		...(sublabel && form.label.sublabel), //overrides spacing (sublabel overrides marginBottom)
	};

	return <Tag css={styleCommon} htmlFor={htmlFor} {...props} />;
};

// ==============================
// Types
// ==============================

FormLabel.propTypes = {
	/**
	 * Sublabel mode (smaller label size).
	 *
	 * Defaults to "false"
	 */
	sublabel: PropTypes.bool,

	/**
	 * The component tag.
	 *
	 * Defaults to "label"
	 */
	tag: PropTypes.oneOf(['label', 'legend']),

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
};

FormLabel.defaultProps = {
	sublabel: false,
	tag: 'label',
};
