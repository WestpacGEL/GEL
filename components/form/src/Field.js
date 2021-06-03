/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState, useEffect, Children, cloneElement } from 'react';
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
	instanceIdPrefix,
	label,
	hideLabel,
	subLabel,
	hint,
	error,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Field: defaultField,
	};

	const [fieldInstance] = useState(useInstanceId());
	const [instanceId, setInstanceId] = useState(instanceIdPrefix);
	const hintId = `gel-field-hint-${fieldInstance};`;

	useEffect(() => {
		if (!instanceIdPrefix) {
			setInstanceId(`gel-field-${fieldInstance}`);
		}
	}, [instanceIdPrefix]);

	const state = {
		fieldInstance,
		instanceId,
		hintId,
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
		id: instanceId,
		'aria-describedby': hintId,
		'aria-invalid': !!error,
	};

	return (
		<Field state={state} {...fieldAttributes(state)} css={fieldStyles(state)} {...rest}>
			<FormLabel
				htmlFor={instanceId}
				srOnly={hideLabel}
				subLabel={subLabel}
				overrides={componentOverrides}
			>
				{label}
			</FormLabel>
			{hint && (
				<Hint overrides={componentOverrides}>{typeof hint === 'function' ? hint() : hint}</Hint>
			)}
			{error && <ErrorMessage message={error} overrides={componentOverrides} />}
			{Children.map(children, (child) => cloneElement(child, { ...inputProps }))}
		</Field>
	);
};

// ==============================
// Types
// ==============================

Field.propTypes = {
	/**
	 * input id
	 */
	instanceIdPrefix: PropTypes.string,

	/**
	 * label text
	 */
	label: PropTypes.string,

	/**
	 * Sr-only label
	 */
	hideLabel: PropTypes.bool,

	/**
	 * Sub-label mode (smaller label text size)
	 */
	subLabel: PropTypes.bool,

	/**
	 * hint text
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
