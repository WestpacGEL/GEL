/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Badge as BadgeWrapper, badgeStyles } from './overrides/badge';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Badge = ({ look, value, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Badge: {
			styles: badgeStyles,
			component: BadgeWrapper,
			attributes: () => null,
		},
	};

	const state = {
		look,
		value,
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
		<overrides.Badge.component
			look={look}
			value={value}
			{...rest}
			{...overrides.Badge.attributes(state)}
			css={overrides.Badge.styles(state)}
		>
			{value}
		</overrides.Badge.component>
	);
};

// ==============================
// Types
// ==============================

Badge.propTypes = {
	/**
	 * Badge look
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
	 * Badge text
	 */
	value: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Badge: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Badge.defaultProps = {
	look: 'neutral',
};
