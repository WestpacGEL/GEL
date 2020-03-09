/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultButton } from './overrides/button';
import { ButtonContent as Content } from './Content';
import pkg from '../package.json';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

export const Button = forwardRef(
	(
		{
			look,
			size,
			soft,
			block,
			iconAfter,
			iconBefore,
			justify,
			disabled,
			assistiveText,
			tag,
			type,
			dropdown,
			onClick,
			children,
			overrides: componentOverrides,
			...rest
		},
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
			ButtonRoot: defaultButton,
		};

		const state = {
			look,
			size,
			soft,
			block,
			iconAfter,
			iconBefore,
			justify,
			disabled,
			assistiveText,
			tag,
			type,
			dropdown,
			onClick,
			overrides: componentOverrides,
			...rest,
		};

		const {
			ButtonRoot: {
				component: ButtonRoot,
				styles: buttonRootStyles,
				attributes: buttonRootAttributes,
			},
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		return (
			<ButtonRoot
				ref={ref}
				disabled={tag === 'button' ? disabled : undefined}
				type={tag === 'button' ? type || 'button' : undefined}
				onClick={onClick}
				{...rest}
				state={state}
				{...buttonRootAttributes(state)}
				css={buttonRootStyles(state)}
			>
				{/* `<input>` elements cannot have children; they would use a `value` prop) */}
				{tag !== 'input' ? <Content state={state}>{children}</Content> : null}
			</ButtonRoot>
		);
	}
);

// ==============================
// Types
// ==============================

Button.propTypes = {
	/**
	 * Button look
	 */
	look: PropTypes.oneOf(['primary', 'hero', 'faint', 'link']),

	/**
	 * Button size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])),
	]),

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

	/**
	 * Soft mode.
	 *
	 * Removes background colour and adjusts text colour.
	 */
	soft: PropTypes.bool,

	/**
	 * Button disabled
	 */
	disabled: PropTypes.bool.isRequired,

	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

	/**
	 * Places an icon within the button, after the button’s text
	 */
	iconAfter: PropTypes.func,

	/**
	 * Places an icon within the button, before the button’s text
	 */
	iconBefore: PropTypes.func,

	/**
	 * Justify align button children
	 */
	justify: PropTypes.bool,

	/**
	 * Text to use as the `aria-label` for the button
	 */
	assistiveText: PropTypes.string,

	/**
	 * Enable dropdown mode
	 */
	dropdown: PropTypes.bool,

	/**
	 * Handler to be called on click
	 */
	onClick: PropTypes.func,

	/**
	 * Button text
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Button: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Content: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		TextWrapper: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Button.defaultProps = {
	look: 'primary',
	size: 'medium',
	tag: 'button',
	soft: false,
	block: false,
	justify: false,
	disabled: false,
};
