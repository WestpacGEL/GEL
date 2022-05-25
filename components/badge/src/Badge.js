/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useButtonContext, ButtonContext } from '@westpac/button';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { defaultBadge } from './overrides/badge';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Badge = ({ look, value, type, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Badge: defaultBadge,
	};

	const btnContext = useContext(ButtonContext);

	const state = {
		look,
		value,
		type,
		btnContext,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Badge: { component: Badge, styles: badgeStyles, attributes: badgeAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Badge {...rest} state={state} {...badgeAttributes(state)} css={badgeStyles(state)}>
			{value}
		</Badge>
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
	 * Badge type
	 */
	type: PropTypes.oneOf(['default', 'pill']),
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

export const defaultProps = {
	look: 'neutral',
	type: 'default',
};

Badge.defaultProps = defaultProps;
