/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { defaultPasswordInput } from './overrides/passwordInput';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const PasswordInput = ({
	children,
	overrides: componentOverrides,
	...rest
}: typeof PasswordInput.propTypes & typeof PasswordInput.defaultProps) => {
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

// ==============================
// Types
// ==============================

PasswordInput.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		PasswordInput: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {};

PasswordInput.defaultProps = defaultProps;
