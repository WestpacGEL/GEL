import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultText } from './overrides/text';

import { useButtonContext } from './Button';
import pkg from '../package.json';

interface TextProps {
	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: boolean | boolean[];
	/**
	 * Button text
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Text?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Text = ({ block = false, children, ...rest }: TextProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useButtonContext();

	const defaultOverrides = {
		Text: defaultText,
	};

	const componentOverrides = context.state.overrides;

	const state = {
		block,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Text: { component: Text, styles: textStyles, attributes: textAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Text {...rest} state={state} {...textAttributes(state)} css={textStyles(state)}>
			{children}
		</Text>
	);
};

Text.defaultProps = {
	block: false,
};

Text.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.bool), PropTypes.bool]).isRequired,
	/**
	 * Button text
	 */
	children: PropTypes.node,
};
