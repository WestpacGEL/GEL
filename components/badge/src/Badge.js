/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultBadge } from './overrides/badge';
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
		BadgeRoot: defaultBadge,
	};

	const state = {
		look,
		value,
		overrides: componentOverrides,
		...rest,
	};

	const {
		BadgeRoot: { component: BadgeRoot, styles: badgeRootStyles, attributes: badgeRootAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<BadgeRoot {...rest} state={state} {...badgeRootAttributes(state)} css={badgeRootStyles(state)}>
			{value}
		</BadgeRoot>
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
