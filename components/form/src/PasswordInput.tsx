import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React, { ReactNode, useState } from 'react';

import { defaultPasswordInput } from './overrides/passwordInput';
import pkg from '../package.json';

export interface PasswordInputProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		PasswordInput?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const PasswordInput = ({
	children,
	overrides: componentOverrides,
	...rest
}: PasswordInputProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [reveal, setReveal] = useState(false);

	const handleClick = () => {
		setReveal(!reveal);
	};

	const defaultOverrides = {
		PasswordInput: defaultPasswordInput,
	};

	const state = {
		reveal,
		handleClick,
		overrides: componentOverrides,
		...rest,
	};

	const {
		PasswordInput: {
			component: PasswordInput,
			styles: passwordInputStyles,
			attributes: passwordInputAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<PasswordInput
			{...rest}
			state={state}
			{...passwordInputAttributes(state)}
			css={passwordInputStyles(state)}
		/>
	);
};

PasswordInput.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		PasswordInput: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
