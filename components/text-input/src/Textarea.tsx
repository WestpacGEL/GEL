import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultTextarea } from './overrides/textarea';
import pkg from '../package.json';
import { ReactNode } from 'react';

export interface TextareaProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Component size
	 */
	size: 'small' | 'medium' | 'large' | 'xlarge';
	/**
	 * Component width (in chars).
	 *
	 * This prop sets a fixed width, measured in characters.
	 */
	width?: 2 | 3 | 4 | 5 | 10 | 20 | 30;
	/**
	 * Inline mode
	 */
	inline: boolean;
	/**
	 * Invalid input mode
	 */
	invalid: boolean;
	/**
	 * The override API
	 */
	overrides?: {
		Textarea?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{
			width,
			size = 'medium',
			inline = false,
			invalid = false,
			children,
			overrides: componentOverrides,
			...rest
		}: TextareaProps,
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const defaultOverrides = {
			Textarea: defaultTextarea,
		};

		const state = {
			size,
			width,
			inline,
			invalid,
			overrides: componentOverrides,
			...rest,
		};

		const {
			Textarea: { component: Textarea, styles: textareaStyles, attributes: textareaAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		return (
			<Textarea
				ref={ref}
				{...rest}
				state={state}
				{...textareaAttributes(state)}
				css={textareaStyles(state)}
			/>
		);
	}
);
Textarea.displayName = 'Textarea';

Textarea.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Inline mode
	 */
	inline: PropTypes.bool.isRequired,
	/**
	 * Invalid input mode
	 */
	invalid: PropTypes.bool.isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Textarea: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Component size
	 */
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']).isRequired,
	/**
	 * Component width (in chars).
	 *
	 * This prop sets a fixed width, measured in characters.
	 */
	width: PropTypes.oneOf([2, 3, 4, 5, 10, 20, 30]),
};

Textarea.defaultProps = { inline: false, invalid: false, size: 'medium' };
