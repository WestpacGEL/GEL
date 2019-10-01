/** @jsx jsx */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { FormContext } from './Form.context';
import { SrOnly } from '@westpac/accessibility-helpers';

// ==============================
// Component
// ==============================

export const FormLabel = ({ isSublabel, tag: Tag, htmlFor, isSrOnly, ...props }) => {
	const {
		form: { label },
	} = useTheme();
	const { spacing } = useContext(FormContext);

	if (isSrOnly) {
		Tag = SrOnly;
	}

	return (
		<Tag
			css={{
				display: 'inline-block',
				fontWeight: label.fontWeight,
				fontSize: label.fontSize,
				...label.spacing[spacing],
				...(isSublabel && label.sublabel), //overrides spacing (sublabel overrides marginBottom)
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
	isSublabel: PropTypes.bool,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOf(['label', 'legend']),

	/**
	 * Label `for` attribute.
	 *
	 * This prop is required and must match the input’s `id` value, unless the `tag` prop is configured.
	 */
	htmlFor: (props, propName, componentName) => {
		if (props.tag === 'label' && props[propName] == undefined) {
			return new Error(
				`The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is \`undefined\`.`
			);
		}
	},

	/**
	 * Enable ‘screen reader only’ mode
	 */
	isSrOnly: PropTypes.bool,

	/**
	 * Label text
	 */
	children: PropTypes.string.isRequired,
};

FormLabel.defaultProps = {
	isSublabel: false,
	tag: 'label',
};
