/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultLabel } from './overrides/label';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Label = ({
	look,
	value,
	overrides: componentOverrides,
	...rest
}: typeof Label.propTypes & typeof Label.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Label: defaultLabel,
	};

	const state = {
		look,
		value,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Label {...rest} state={state} {...labelAttributes(state)} css={labelStyles(state)}>
			{value}
		</Label>
	);
};

// ==============================
// Types
// ==============================

Label.propTypes = {
	/**
	 * Label look
	 */
	look: PropTypes.oneOf([
		'primary',
		'hero',
		'neutral',
		'faint',
		'success',
		'info',
		'warning',
		'danger',
	]).isRequired,

	/**
	 * Label text
	 */
	value: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Label: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	look: 'primary',
};

Label.defaultProps = defaultProps;
