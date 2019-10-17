/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';

import { useFormContext } from './Form';

// ==============================
// Component
// ==============================

export const FormLabel = ({ sublabel, tag: Tag, htmlFor, srOnly, ...props }) => {
	// Consume FormContext
	const formContext = useFormContext();
	const spacing = (formContext && formContext.spacing) || 'medium';

	if (srOnly) {
		Tag = VisuallyHidden;
	}

	const mapSpacing = {
		medium: {
			marginBottom: sublabel ? '0.375rem' : '0.75rem',
		},
		large: {
			marginBottom: sublabel ? '0.375rem' : '1.125rem',
		},
	};

	return (
		<Tag
			css={{
				display: 'inline-block',
				fontWeight: 500,
				fontSize: sublabel ? '0.875rem' : '1rem',
				marginBottom: mapSpacing[spacing].marginBottom,
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
	srOnly: PropTypes.bool,

	/**
	 * Label text
	 */
	children: PropTypes.string.isRequired,
};

FormLabel.defaultProps = {
	sublabel: false,
	tag: 'label',
};
