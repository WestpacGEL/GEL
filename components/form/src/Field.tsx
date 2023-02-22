import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useState, useEffect, Children, cloneElement, useId, useMemo, ReactNode } from 'react';

import { defaultField } from './overrides/field';
import { ErrorMessage } from './ErrorMessage';
import { FormLabel } from './FormLabel';
import { Hint } from './Hint';

import pkg from '../package.json';

export interface FieldProps {
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * Label text
	 */
	label?: string;
	/**
	 * Visually hide label
	 */
	hideLabel?: boolean;
	/**
	 * Sub-label mode (smaller label text size)
	 */
	subLabel?: boolean;
	/**
	 * Hint text
	 */
	hint?: ((...args: unknown[]) => unknown) | string;
	/**
	 * Error message text
	 */
	error?: string;
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Field?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		FormLabel?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Hint?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ErrorMessage?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Field = ({
	instanceId,
	label,
	hideLabel,
	subLabel,
	hint,
	error,
	children,
	overrides: componentOverrides,
	...rest
}: FieldProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const _id = useId();
	const id = useMemo(() => instanceId || `gel-field-${_id}`, [_id, instanceId]);
	const [ariaDescribedByValue, setAriaDescribedByValue] = useState<string>('');

	useEffect(() => {
		const arr = [...(error ? [`${id}-error`] : []), ...(hint ? [`${id}-hint`] : [])];
		setAriaDescribedByValue(arr.join(' '));
	}, [id, hint, error]);

	const defaultOverrides = {
		Field: defaultField,
	};

	const state = {
		id,
		label,
		hideLabel,
		hint,
		error,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Field: { component: Field, styles: fieldStyles, attributes: fieldAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const inputProps = {
		id,
		'aria-describedby': ariaDescribedByValue ? ariaDescribedByValue : undefined,
	};

	return (
		<Field state={state} {...fieldAttributes(state)} css={fieldStyles(state)} {...rest}>
			<FormLabel htmlFor={id} srOnly={hideLabel} subLabel={subLabel} overrides={componentOverrides}>
				{label}
			</FormLabel>
			{hint && (
				<Hint id={`${id}-hint`} overrides={componentOverrides}>
					{typeof hint === 'function' ? hint() : hint}
				</Hint>
			)}
			{error && <ErrorMessage id={`${id}-error`} message={error} overrides={componentOverrides} />}
			{Children.map(children, (child) => cloneElement(child, { ...inputProps, id }))}
		</Field>
	);
};

Field.defaultProps = {};

Field.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Error message text
	 */
	error: PropTypes.string,
	/**
	 * Visually hide label
	 */
	hideLabel: PropTypes.bool,
	/**
	 * Hint text
	 */
	hint: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * Label text
	 */
	label: PropTypes.string,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ErrorMessage: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Field: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		FormLabel: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Hint: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Sub-label mode (smaller label text size)
	 */
	subLabel: PropTypes.bool,
};
