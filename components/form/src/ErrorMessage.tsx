import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultErrorMessageContent } from './overrides/errorMessageContent';
import { defaultErrorMessageItem } from './overrides/errorMessageItem';
import { defaultErrorMessage } from './overrides/errorMessage';
import pkg from '../package.json';

export interface ErrorMessageProps {
	/**
	 * Error message item(s) text
	 */
	id?: string;
	/**
	 * Error message item(s) text
	 */
	message?: string | string[];
	/**
	 * Error message item(s) icon
	 */
	icon?: (...args: unknown[]) => unknown;
	/**
	 * Component tag
	 */
	tag?: ((...args: unknown[]) => unknown) | string;
	/**
	 * The override API
	 */
	overrides?: {
		ErrorMessage?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ErrorMessageItem?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ErrorMessageContent?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Utility
// ==============================

// ==============================
// Component
// ==============================

export const ErrorMessage = ({
	icon,
	message = 'Invalid input',
	tag = 'div',
	overrides: componentOverrides,
	...rest
}: ErrorMessageProps) => {
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

ErrorMessage.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Error message item(s) icon
	 */
	icon: PropTypes.func,
	/**
	 * Error message item(s) text
	 */
	message: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ErrorMessage: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ErrorMessageContent: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ErrorMessageItem: PropTypes.shape({
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

ErrorMessage.defaultProps = { message: 'Invalid input', tag: 'div' };
