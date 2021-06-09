/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultChitChat } from './overrides/chitChat';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const ChitChat = ({ tag, overrides: componentOverrides, ...rest }) => {
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

// ==============================
// Types
// ==============================

ChitChat.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Component text
	 */
	children: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ChitChat: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

ChitChat.defaultProps = {
	tag: 'p',
};
