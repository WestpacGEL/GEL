import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useState, useEffect, useId, useMemo, ReactNode } from 'react';

import { defaultFieldset } from './overrides/fieldset';
import { ErrorMessage } from './ErrorMessage';
import { FormLabel } from './FormLabel';
import { Hint } from './Hint';

import pkg from '../package.json';

export interface FieldsetProps {
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * Legend text
	 */
	legend?: string;
	/**
	 * Hint text
	 */
	hint?: ((...args: unknown[]) => unknown) | string;
	/**
	 * Error message text
	 */
	error?: string | string[];
	/**
	 * Tabindex of the legend element
	 */
	legendTabIndex?: string;
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * legendRef
	 */
	legendRef?: any;
	/**
	 * The override API
	 */
	overrides?: {
		Fieldset?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Legend?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Hint?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ErrorList?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ErrorListItem?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Fieldset = ({
	instanceId,
	legend,
	hint,
	error,
	legendTabIndex,
	legendRef,
	children,
	overrides: componentOverrides,
	...rest
}: FieldsetProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const _id = useId();
	const id = useMemo(() => instanceId || `gel-fieldset-${_id}`, [_id, instanceId]);
	const [ariaDescribedByValue, setAriaDescribedByValue] = useState<string>('');

	useEffect(() => {
		const arr = [...(error ? [`${id}-error`] : []), ...(hint ? [`${id}-hint`] : [])];
		setAriaDescribedByValue(arr.join(' '));
	}, [id, hint, error]);

	const defaultOverrides = {
		Fieldset: defaultFieldset,
	};

	const state = {
		id,
		legend,
		hint,
		error,
		legendTabIndex,
		legendRef,
		ariaDescribedByValue,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Fieldset: { component: Fieldset, styles: fieldsetStyles, attributes: fieldsetAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Fieldset state={state} {...fieldsetAttributes(state)} css={fieldsetStyles(state)} {...rest}>
			<FormLabel
				ref={legendRef}
				tag="legend"
				tabIndex={legendTabIndex}
				overrides={componentOverrides}
			>
				{legend}
			</FormLabel>
			{hint && (
				<Hint id={`${id}-hint`} overrides={componentOverrides}>
					{typeof hint === 'function' ? hint() : hint}
				</Hint>
			)}
			{error && <ErrorMessage id={`${id}-error`} message={error} overrides={componentOverrides} />}
			{children}
		</Fieldset>
	);
};

Fieldset.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Error message text
	 */
	error: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
	/**
	 * Hint text
	 */
	hint: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * Legend text
	 */
	legend: PropTypes.string,
	/**
	 * legendRef
	 */
	legendRef: PropTypes.any,
	/**
	 * Tabindex of the legend element
	 */
	legendTabIndex: PropTypes.string,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ErrorList: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ErrorListItem: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Fieldset: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Hint: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Legend: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
