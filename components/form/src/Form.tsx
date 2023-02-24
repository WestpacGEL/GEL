import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext } from 'react';

import { defaultForm } from './overrides/form';
import pkg from '../package.json';

// ==============================
// Context and consumer hook
// ==============================

const FormContext = createContext<any>(null);

export const useFormContext = () => useContext(FormContext);

export interface FormProps {
	/**
	 * Size of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	size?: unknown[] | string;
	/**
	 * Vertical spacing of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	spacing?: unknown[] | string;
	/**
	 * Inline children mode (SM+).
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	inline?: boolean;
	/**
	 * Component tag
	 */
	tag?: ((...args: unknown[]) => unknown) | string;
	/**
	 * The override API
	 */
	overrides?: {
		Form?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Form = ({
	size = 'medium',
	spacing = 'medium',
	inline = false,
	tag = 'form',
	overrides: componentOverrides,
	...rest
}: FormProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Form: defaultForm,
	};

	const state = {
		size,
		spacing,
		inline,
		tag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Form: { component: Form, styles: formStyles, attributes: formAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<FormContext.Provider value={{ state }}>
			<Form {...rest} state={state} {...formAttributes(state)} css={formStyles(state)} />
		</FormContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Form.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Inline children mode (SM+).
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	inline: PropTypes.bool,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Form: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Size of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	size: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	/**
	 * Vertical spacing of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	spacing: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Form.defaultProps = { inline: false, size: 'medium', spacing: 'medium', tag: 'form' };
