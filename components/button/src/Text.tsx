/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultText } from './overrides/text';

import { useButtonContext } from './Button';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Text = ({
	block,
	children,
	...rest
}: typeof Text.propTypes & typeof Text.defaultProps) => {
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

// ==============================
// Types
// ==============================

Text.propTypes = {
	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]).isRequired,

	/**
	 * Button text
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Text: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Text.defaultProps = {
	block: false,
};
