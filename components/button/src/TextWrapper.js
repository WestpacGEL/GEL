/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Text, textStyles } from './overrides/text';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const TextWrapper = ({ block, children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			TextWrapper: {
				styles: textStyles,
				component: Text,
				attributes: state => state,
			},
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
		componentOverrides,
		state
	);

	return (
		<overrides.subComponent.TextWrapper.component
			css={overrides.subComponent.TextWrapper.styles}
			{...overrides.subComponent.TextWrapper.attributes(state)}
		>
			{children}
		</overrides.subComponent.TextWrapper.component>
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
		subComponent: PropTypes.shape({
			TextWrapper: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

TextWrapper.defaultProps = {
	block: false,
};
