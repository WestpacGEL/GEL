import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultHint } from './overrides/hint';
import { useFormContext } from './Form';
import pkg from '../package.json';

export interface HintProps {
	/**
	 * Component tag
	 */
	tag?: ((...args: unknown[]) => unknown) | string;
	/**
	 * The override API
	 */
	overrides?: {
		Hint?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Hint = ({ tag = 'p', overrides, ...rest }: HintProps) => {
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

Hint.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Hint: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Hint.defaultProps = { tag: 'p' };
