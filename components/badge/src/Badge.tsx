import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { ButtonContext } from '@westpac/button';
import { useContext } from 'react';

import { defaultBadge } from './overrides/badge';
import pkg from '../package.json';

export interface BadgeProps {
	/**
	 * Badge look
	 */
	look: 'primary' | 'hero' | 'neutral' | 'faint' | 'success' | 'info' | 'warning' | 'danger';
	/**
	 * Badge text
	 */
	value: string;
	/**
	 * Badge type
	 */
	type?: 'default' | 'pill';
	/**
	 * The override API
	 */
	overrides?: {
		Badge?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Badge = ({
	value,
	look = 'neutral',
	type = 'default',
	overrides: componentOverrides,
	...rest
}: BadgeProps) => {
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

Badge.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Badge look
	 */
	look: PropTypes.oneOf([
		'danger',
		'faint',
		'hero',
		'info',
		'neutral',
		'primary',
		'success',
		'warning',
	]).isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Badge: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Badge type
	 */
	type: PropTypes.oneOf(['default', 'pill']),
	/**
	 * Badge text
	 */
	value: PropTypes.string.isRequired,
};

Badge.defaultProps = { look: 'neutral', type: 'default' };
