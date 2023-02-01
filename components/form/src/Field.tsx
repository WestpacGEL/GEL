/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useState, useEffect, Children, cloneElement, useId, useMemo } from 'react';
import PropTypes from 'prop-types';

import { defaultField } from './overrides/field';
import { ErrorMessage } from './ErrorMessage';
import { FormLabel } from './FormLabel';
import { Hint } from './Hint';

import pkg from '../package.json';

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
}: typeof Field.propTypes & typeof Field.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const _id = useId();
	const id = useMemo(() => instanceId || `gel-field-${_id}`, [_id, instanceId]);
	const [ariaDescribedByValue, setAriaDescribedByValue] = useState<string>();

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

// ==============================
// Types
// ==============================

Field.propTypes = {
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,

	/**
	 * Label text
	 */
	label: PropTypes.string,

	/**
	 * Visually hide label
	 */
	hideLabel: PropTypes.bool,

	/**
	 * Sub-label mode (smaller label text size)
	 */
	subLabel: PropTypes.bool,

	/**
	 * Hint text
	 */
	hint: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Error message text
	 */
	error: PropTypes.string,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Field: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		FormLabel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Hint: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ErrorMessage: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Field.defaultProps = {};
