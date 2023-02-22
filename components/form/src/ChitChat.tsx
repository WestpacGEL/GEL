import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultChitChat } from './overrides/chitChat';
import pkg from '../package.json';

interface ChitChatProps {
	/**
	 * Component tag
	 */
	tag?: ((...args: unknown[]) => unknown) | string;
	/**
	 * Component text
	 */
	children: string;
	/**
	 * The override API
	 */
	overrides?: {
		ChitChat?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const ChitChat = ({ tag, overrides: componentOverrides, ...rest }: ChitChatProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		ChitChat: defaultChitChat,
	};

	const state = {
		tag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		ChitChat: { component: ChitChat, styles: chitChatStyles, attributes: chitChatAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<ChitChat {...rest} state={state} {...chitChatAttributes(state)} css={chitChatStyles(state)} />
	);
};

ChitChat.defaultProps = {
	tag: 'p',
};

ChitChat.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ChitChat: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
