/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultErrorMessageContent } from './overrides/errorMessageContent';
import { defaultErrorMessageItem } from './overrides/errorMessageItem';
import { defaultErrorMessage } from './overrides/errorMessage';
import pkg from '../package.json';

// ==============================
// Utility
// ==============================

// ==============================
// Component
// ==============================

export const ErrorMessage = ({ message, icon, tag, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		ErrorMessage: defaultErrorMessage,
		ErrorMessageItem: defaultErrorMessageItem,
		ErrorMessageContent: defaultErrorMessageContent,
	};

	const isMessages = Array.isArray(message);

	const state = {
		message,
		isMessages,
		icon,
		tag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		ErrorMessage: {
			component: ErrorMessage,
			styles: errorMessageStyles,
			attributes: errorMessageAttributes,
		},
		ErrorMessageItem: {
			component: ErrorMessageItem,
			styles: errorMessageItemStyles,
			attributes: errorMessageItemAttributes,
		},
		ErrorMessageContent: {
			component: ErrorMessageContent,
			styles: errorMessageContentStyles,
			attributes: errorMessageContentAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<ErrorMessage
			{...rest}
			state={state}
			{...errorMessageAttributes(state)}
			css={errorMessageStyles(state)}
		>
			{isMessages ? (
				message.map((msg) => (
					<ErrorMessageItem
						key={msg}
						state={state}
						{...errorMessageItemAttributes(state)}
						css={errorMessageItemStyles(state)}
					>
						<ErrorMessageContent
							state={state}
							{...errorMessageContentAttributes(state)}
							css={errorMessageContentStyles(state)}
						>
							{msg}
						</ErrorMessageContent>
					</ErrorMessageItem>
				))
			) : (
				<ErrorMessageContent
					state={state}
					{...errorMessageContentAttributes(state)}
					css={errorMessageContentStyles(state)}
				>
					{message}
				</ErrorMessageContent>
			)}
		</ErrorMessage>
	);
};

// ==============================
// Types
// ==============================

ErrorMessage.propTypes = {
	/**
	 * Error message item(s) text
	 */
	message: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

	/**
	 * Error message item(s) icon
	 */
	icon: PropTypes.func,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ErrorMessage: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ErrorMessageItem: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ErrorMessageContent: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

ErrorMessage.defaultProps = {
	message: 'Invalid input',
	tag: 'div',
};
