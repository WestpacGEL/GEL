import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { forwardRef, createContext, useContext, ReactNode, ButtonHTMLAttributes } from 'react';

import { defaultButton } from './overrides/button';

import { Content } from './Content';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

export const ButtonContext = createContext<any>(null);

export const useButtonContext = () => {
	const context = useContext(ButtonContext);

	if (!context) {
		throw new Error('<Content/> and <TextWrapper/> components should be wrapped in a <Button>.');
	}

	return context;
};

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
	/**
	 * Button look
	 */
	look?: 'primary' | 'hero' | 'faint' | 'link' | 'unstyled';

	/**
	 * Button size
	 */
	size?: 'small' | 'medium' | 'large' | 'xlarge' | ('small' | 'medium' | 'large' | 'xlarge')[];

	/**
	 * Button tag
	 */
	tag?: ((...args: unknown[]) => unknown) | string;

	/**
	 * Button type.
	 *
	 * Default type of 'button' if tag is 'button'.
	 */
	type?: string;

	/**
	 * Soft mode.
	 *
	 * Removes background colour and adjusts text colour.
	 */
	soft?: boolean;

	/**
	 * Button disabled
	 */
	disabled?: boolean;

	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block?: boolean | boolean[];

	/**
	 * Places an icon within the button, after the button’s text
	 */
	iconAfter?: (...args: unknown[]) => unknown;

	/**
	 * Places an icon within the button, before the button’s text
	 */
	iconBefore?: (...args: unknown[]) => unknown;

	/**
	 * The color for the icon.
	 *
	 * Defaults to the current text color.
	 */
	iconColor?: string;

	/**
	 * Justify align button children
	 */
	justify?: boolean;

	/**
	 * Text to use as the `aria-label` for the button
	 */
	assistiveText?: string;

	/**
	 * Enable dropdown mode
	 */
	dropdown?: boolean;

	/**
	 * Handler to be called on click
	 */
	onClick?: (...args: unknown[]) => unknown;

	/**
	 * Button text
	 */
	children?: ReactNode;

	/**
	 * Href
	 */
	href?: string;

	/**
	 * horizontalPadding for link style
	 */
	horizontalPadding?: boolean;
	/**

	/**
	 * min-width
	 */
	minWidth?: string;
	/**

	 * The override API
	 */
	overrides?: {
		Button?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Content?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Text?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Icon?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Button = forwardRef(
	(
		{
			iconAfter,
			iconBefore,
			iconColor,
			assistiveText,
			type,
			dropdown,
			onClick,
			children,
			overrides: componentOverrides,
			look = 'hero',
			size = 'medium',
			tag = 'button',
			soft = false,
			block = false,
			justify = false,
			disabled = false,
			horizontalPadding = true,
			minWidth = 'auto',
			...rest
		}: ButtonProps,
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		// We don't support soft links, so don't want them to cause styling issues
		if (soft && look === 'link') soft = false;

		if (rest.href) {
			tag = 'a';
		}

		const defaultOverrides = {
			Button: defaultButton,
		};

		const state = {
			look,
			size,
			soft,
			block,
			iconAfter,
			iconBefore,
			iconColor,
			justify,
			disabled,
			assistiveText,
			tag,
			type,
			dropdown,
			onClick,
			horizontalPadding,
			minWidth,
			overrides: componentOverrides,
			...rest,
		};

		const {
			Button: { component: Button, styles: buttonStyles, attributes: buttonAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);
		return (
			<ButtonContext.Provider value={{ state }}>
				<Button
					ref={ref}
					disabled={tag === 'button' ? disabled : undefined}
					type={tag === 'button' || tag === 'input' ? type || 'button' : undefined}
					onClick={onClick}
					{...rest}
					state={state}
					{...buttonAttributes(state)}
					css={buttonStyles(state)}
				>
					{/* `<input>` elements cannot have children; they would use a `value` prop) */}
					{tag !== 'input' ? (
						<Content
							size={size}
							block={block}
							iconAfter={iconAfter}
							iconBefore={iconBefore}
							dropdown={dropdown}
							iconColor={iconColor}
						>
							{children}
						</Content>
					) : null}
				</Button>
			</ButtonContext.Provider>
		);
	}
);

Button.displayName = 'Button';

// ==============================
// Types
// ==============================

Button.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Text to use as the `aria-label` for the button
	 */
	assistiveText: PropTypes.string,
	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.bool), PropTypes.bool]),
	/**
	 * Button text
	 */
	children: PropTypes.node,
	/**
	 * Button disabled
	 */
	disabled: PropTypes.bool,
	/**
	 * Enable dropdown mode
	 */
	dropdown: PropTypes.bool,
	/**
	 * Href
	 */
	href: PropTypes.string,
	/**
	 * Places an icon within the button, after the button’s text
	 */
	iconAfter: PropTypes.func,
	/**
	 * Places an icon within the button, before the button’s text
	 */
	iconBefore: PropTypes.func,
	/**
	 * The color for the icon.
	 *
	 * Defaults to the current text color.
	 */
	iconColor: PropTypes.string,
	/**
	 * Justify align button children
	 */
	justify: PropTypes.bool,
	/**
	 * Button look
	 */
	look: PropTypes.oneOf(['faint', 'hero', 'link', 'primary', 'unstyled']),
	/**
	 * Handler to be called on click
	 */
	onClick: PropTypes.func,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Button: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Content: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Icon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Text: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Button size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['large', 'medium', 'small', 'xlarge'])),
	]),
	/**
	 * Soft mode.
	 *
	 * Removes background colour and adjusts text colour.
	 */
	soft: PropTypes.bool,
	/**
	 * Button tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	/**
	 * Button type.
	 *
	 * Default type of 'button' if tag is 'button'.
	 */
	type: PropTypes.string,
};
