/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState, useEffect, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { defaultField } from './overrides/field';
import { defaultLabel } from './overrides/label';
import { defaultHint } from './overrides/hint';
import { defaultError } from './overrides/error';

import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Field = ({
	instanceIdPrefix,
	label,
	hideLabel,
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
		Label: defaultLabel,
		Hint: defaultHint,
		Error: defaultError,
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
		Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
		Hint: { component: Hint, styles: hintStyles, attributes: hintAttributes },
		Error: { component: Error, styles: errorStyles, attributes: errorAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const inputProps = {
		id: instanceId,
		'aria-describedby': hintId,
		'aria-invalid': !!error,
	};

	return (
		<Field state={state} {...fieldAttributes(state)} css={fieldStyles(state)} {...rest}>
			<Label
				htmlFor={instanceId}
				state={state}
				{...labelAttributes(state)}
				css={labelStyles(state)}
			>
				{label}
			</Label>
			{hint && (
				<Hint state={state} {...hintAttributes(state)} css={hintStyles(state)}>
					{hint}
				</Hint>
			)}
			{error && (
				<Error message={error} state={state} {...errorAttributes(state)} css={errorStyles(state)} />
			)}
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
	 * hint text
	 */
	hint: PropTypes.string,

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
		Label: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Hint: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Error: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Field.defaultProps = {};
