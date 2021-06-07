/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { defaultFieldset } from './overrides/fieldset';
import { ErrorMessage } from './ErrorMessage';
import { FormLabel } from './FormLabel';
import { Hint } from './Hint';

import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Fieldset = ({
	legend,
	hint,
	hintIdPrefix,
	error,
	ariadescribedby,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Fieldset: defaultFieldset,
	};

	const [hintId] = useState(hintIdPrefix ? hintIdPrefix : `gel-hint-${useInstanceId()}`);

	const state = {
		legend,
		hint,
		hintId,
		error,
		ariadescribedby,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Fieldset: { component: Fieldset, styles: fieldsetStyles, attributes: fieldsetAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Fieldset state={state} {...fieldsetAttributes(state)} css={fieldsetStyles(state)} {...rest}>
			<FormLabel tag="legend" overrides={componentOverrides}>
				{legend}
			</FormLabel>
			{hint && (
				<Hint id={hintId} overrides={componentOverrides}>
					{typeof hint === 'function' ? hint() : hint}
				</Hint>
			)}
			{error && <ErrorMessage message={error} overrides={componentOverrides} />}
			{children}
		</Fieldset>
	);
};

// ==============================
// Types
// ==============================

Fieldset.propTypes = {
	/**
	 * label text
	 */
	legend: PropTypes.string,

	/**
	 * hint text
	 */
	hint: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * hint id
	 */
	hintIdPrefix: PropTypes.string,

	/**
	 * Error message text
	 */
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

	/**
	 * aria-describedby
	 */
	ariadescribedby: PropTypes.string,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Fieldset: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Legend: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Hint: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ErrorList: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ErrorListItem: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Fieldset.defaultProps = {};
