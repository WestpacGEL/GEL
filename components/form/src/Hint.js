/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultHint } from './overrides/hint';
import { useFormContext } from './Form';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Hint = ({ tag, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useFormContext();

	const defaultOverrides = {
		Hint: defaultHint,
	};

	const componentOverrides = overrides || context?.state?.overrides;
	const spacing = context?.state?.spacing || 'medium';

	const state = {
		tag,
		spacing,
		context: context?.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Hint: { component: Hint, styles: hintStyles, attributes: hintAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return <Hint {...rest} state={state} {...hintAttributes(state)} css={hintStyles(state)} />;
};

// ==============================
// Types
// ==============================

Hint.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Hint: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Hint.defaultProps = {
	tag: 'p',
};
