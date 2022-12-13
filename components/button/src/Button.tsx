/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { forwardRef, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { defaultButton } from './overrides/button';

import { Content } from './Content';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

export const ButtonContext = createContext(null);

export const useButtonContext = () => {
	const context = useContext(ButtonContext);

	if (!context) {
		throw new Error('<Content/> and <TextWrapper/> components should be wrapped in a <Button>.');
	}

	return context;
};

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
			iconColor,
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
		}: typeof Button.propTypes & typeof Button.defaultProps,
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

// ==============================
// Types
// ==============================

Button.propTypes = {
	/**
	 * Button look
	 */
	look: PropTypes.oneOf(['primary', 'hero', 'faint', 'link', 'unstyled']).isRequired,

	/**
	 * Button size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])),
	]).isRequired,

	/**
	 * Button tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,

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
		Text: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Icon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	look: 'hero',
	size: 'medium',
	tag: 'button',
	soft: false,
	block: false,
	justify: false,
	disabled: false,
};

Button.defaultProps = defaultProps;
