/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Text, textStyles } from './overrides/text';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const TextWrapper = ({
	block,
	children,
	className,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		TextWrapper: {
			styles: textStyles,
			component: Text,
			attributes: (_, a) => a,
		},
	};

	const state = {
		block,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.TextWrapper.component
			className={className}
			{...overrides.TextWrapper.attributes(state)}
			css={overrides.TextWrapper.styles(state)}
		>
			{children}
		</overrides.TextWrapper.component>
	);
};

TextWrapper.propTypes = {
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
		TextWrapper: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

TextWrapper.defaultProps = {
	block: false,
};
