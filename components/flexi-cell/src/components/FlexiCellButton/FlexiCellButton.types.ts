import type { ReactNode } from 'react';

export type FlexiCellButtonProps = {
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
};
