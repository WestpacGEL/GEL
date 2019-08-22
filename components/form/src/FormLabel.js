/** @jsx jsx */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { FormContext } from './Form.context';

// ==============================
// Component
// ==============================

export const FormLabel = ({ sublabel, tag: Tag, htmlFor, ...props }) => {
	const {
		form: { label },
	} = useTheme();
	const { spacing } = useContext(FormContext);

	return (
		<Tag
			css={{
				display: 'inline-block',
				fontWeight: label.fontWeight,
				...label.spacing[spacing],
				...(sublabel && label.sublabel), //overrides spacing (sublabel overrides marginBottom)
			}}
			htmlFor={htmlFor}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

FormLabel.propTypes = {
	/**
	 * Sub-label mode (smaller label text size)
	 */
	sublabel: PropTypes.bool,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOf(['label', 'legend']),

	/**
	 * Label `for` attribute.
	 *
	 * This prop is required and must match the input’s `id` value, unless the `tag` prop is configured.
	 */
	htmlFor: (props, propName, componentName, location, propFullName) => {
		if (props.tag === 'label' && props[propName] == undefined) {
			return new Error(
				`The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is \`undefined\`.`
			);
		}
	},

	/**
	 * Label text
	 */
	children: PropTypes.string.isRequired,
};

FormLabel.defaultProps = {
	sublabel: false,
	tag: 'label',
};
