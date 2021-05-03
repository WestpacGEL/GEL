/** @jsx jsx */

import { jsx, useBrand, asArray, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultFieldset } from './overrides/fieldset';
import { defaultLegend } from './overrides/legend';
import { defaultHint } from './overrides/hint';
import { defaultErrorList } from './overrides/errorList';
import { defaultErrorListItem } from './overrides/errorListItem';

import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Fieldset = ({
	legend,
	hint,
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
		Legend: defaultLegend,
		Hint: defaultHint,
		ErrorList: defaultErrorList,
		ErrorListItem: defaultErrorListItem,
	};

	const state = {
		legend,
		hint,
		error,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Fieldset: { component: Fieldset, styles: fieldsetStyles, attributes: fieldsetAttributes },
		Legend: { component: Legend, styles: legendStyles, attributes: legendAttributes },
		Hint: { component: Hint, styles: hintStyles, attributes: hintAttributes },
		ErrorList: { component: ErrorList, styles: errorListStyles, attributes: errorListAttributes },
		ErrorListItem: {
			component: ErrorListItem,
			styles: errorListItemStyles,
			attributes: errorListItemAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Fieldset state={state} {...fieldsetAttributes(state)} css={fieldsetStyles(state)} {...rest}>
			<Legend state={state} {...legendAttributes(state)} css={legendStyles(state)}>
				{legend}
			</Legend>
			{hint && (
				<Hint state={state} {...hintAttributes(state)} css={hintStyles(state)}>
					{hint}
				</Hint>
			)}
			{error && (
				<ErrorList state={state} {...errorListAttributes(state)} css={errorListStyles(state)}>
					{asArray(error).map((err) => (
						<ErrorListItem
							message={err}
							state={state}
							{...errorListItemAttributes(state)}
							css={errorListItemStyles(state)}
						/>
					))}
				</ErrorList>
			)}
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
	hint: PropTypes.string,

	/**
	 * Error message text
	 */
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

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
