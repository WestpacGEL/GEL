/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { defaultForm } from './overrides/form';
import pkg from '../package.json';

// ==============================
// Context and consumer hook
// ==============================

const FormContext = createContext(null);

export const useFormContext = () => useContext(FormContext);

// ==============================
// Component
// ==============================

export const Form = ({
	size,
	spacing,
	inline,
	tag,
	overrides: componentOverrides,
	...rest
}: typeof Form.propTypes & typeof Form.defaultProps) => {
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

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
	spacing: ['medium', 'large'],
};

Form.propTypes = {
	/**
	 * Size of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Vertical spacing of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	spacing: PropTypes.oneOf(options.spacing),

	/**
	 * Inline children mode (SM+).
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	inline: PropTypes.bool,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Form: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	size: 'medium',
	spacing: 'medium',
	inline: false,
	tag: 'form',
};

Form.defaultProps = defaultProps;
