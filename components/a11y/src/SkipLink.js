/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { SkipLinkWrapper, skipLinkStyles } from './overrides/skipLink';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const SkipLink = ({ overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			SkipLink: {
				styles: skipLinkStyles,
				component: SkipLinkWrapper,
				attributes: state => state,
			},
		},
	};

	const state = {
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
		<overrides.subComponent.SkipLink.component
			css={overrides.subComponent.SkipLink.styles}
			{...overrides.subComponent.SkipLink.attributes(state)}
		/>
	);
};

// ==============================
// Types
// ==============================

SkipLink.propTypes = {
	/**
	 * `href` attribute
	 */
	href: PropTypes.string.isRequired,

	/**
	 * Link content
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The override API
	 */
	override: PropTypes.shape({
		subComponent: PropTypes.shape({
			SkipLink: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

SkipLink.defaultProps = {};
