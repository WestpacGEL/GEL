import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler, getLabel } from '@westpac/core';
import { useState, forwardRef, ReactNode } from 'react';

import { defaultButton } from './overrides/button';
import { defaultItem } from './overrides/item';

import { useButtonGroupContext } from './ButtonGroup';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

interface ButtonGroupItemProps {
	/**
	 * Index
	 */
	index?: number;

	/**
	 * name
	 */
	name?: string;

	/**
	 * name
	 */
	value?: any;

	/**
	 * name
	 */
	onChange?: (...args: unknown[]) => unknown;

	/**
	 * cchecked
	 */
	checked?: boolean;
	/**
	 * input
	 */
	inputProps: any;
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

	overrides?: {
		Button?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Item?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

export const ButtonGroupItem = forwardRef(
	(
		{
			index,
			name,
			value,
			onChange,
			checked = false,
			look,
			size,
			block,
			disabled,
			inputProps,
			children,
			overrides,
			...rest
		}: ButtonGroupItemProps,
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const context = useButtonGroupContext();
		const [buttonGroupItemId] = useState(`gel-button-group-item-${index}`);

		const defaultOverrides = {
			Item: defaultItem,
			Button: defaultButton,
		};

		const componentOverrides = overrides || context.state.overrides;

		const state = {
			name,
			value,
			onChange,
			checked,
			look,
			size,
			block,
			disabled,
			inputProps,
			context: context.state,
			overrides: componentOverrides,
			...rest,
		};

		const {
			Item: { component: Item, styles: itemStyles, attributes: itemAttributes },
			Button: { component: Button, styles: buttonStyles, attributes: buttonAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		return (
			<Item
				{...rest}
				state={state}
				{...itemAttributes({ ...state, buttonGroupItemId })}
				css={itemStyles(state)}
			>
				{/* a11y: input not exposed as an override, contains logic required to function */}
				<input
					ref={ref}
					type="radio"
					id={buttonGroupItemId}
					name={name}
					value={value}
					onChange={(event) => onChange?.(event, value)}
					checked={checked}
					disabled={disabled}
					data-js="buttonGroup-input__version__"
					{...inputProps}
					css={{
						label: getLabel('buttonGroup-input'),
						position: 'absolute',
						zIndex: '-1',
						opacity: 0,
					}}
				/>
				<Button state={state} {...buttonAttributes(state)} css={buttonStyles(state)}>
					{children}
				</Button>
			</Item>
		);
	}
);
ButtonGroupItem.displayName = 'ButtonGroupItem';
// ==============================
// Types
// ==============================

export const defaultProps = {
	checked: false,
};

ButtonGroupItem.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.bool), PropTypes.bool]),
	/**
	 * cchecked
	 */
	checked: PropTypes.bool,
	/**
	 * Button text
	 */
	children: PropTypes.node,
	/**
	 * Button disabled
	 */
	disabled: PropTypes.bool,
	/**
	 * Index
	 */
	index: PropTypes.number,
	/**
	 * input
	 */
	inputProps: PropTypes.any.isRequired,
	/**
	 * Button look
	 */
	look: PropTypes.oneOf(['faint', 'hero', 'link', 'primary', 'unstyled']),
	/**
	 * name
	 */
	name: PropTypes.string,
	/**
	 * name
	 */
	onChange: PropTypes.func,
	overrides: PropTypes.shape({
		Button: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Item: PropTypes.shape({
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
	 * name
	 */
	value: PropTypes.any,
};
