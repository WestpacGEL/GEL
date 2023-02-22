import React from 'react';
import { jsx, useBrand, devWarning, wrapHandlers, overrideReconciler } from '@westpac/core';
import { Children, cloneElement, useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { defaultButtonGroup } from './overrides/buttonGroup';
import { ButtonGroupItem } from './ButtonGroupItem';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ButtonGroupContext = createContext<any>(null);

export const useButtonGroupContext = () => {
	const context = useContext(ButtonGroupContext);

	if (!context) {
		throw new Error('<Item/> components should be wrapped in a <ButtonGroup>.');
	}

	return context;
};

interface ButtonGroupProps {
	/**
	 * Name to be used for radio inputs
	 */
	name: string;
	/**
	 * Control the value, if numeric an index is assumed. Requires `onChange`
	 */
	value?: unknown;
	/**
	 * Default value of this component
	 */
	defaultValue?: number | string;
	/**
	 * Change the value. Requires `value`
	 */
	onChange?: (...args: unknown[]) => unknown;
	/**
	 * Alternative to children
	 */
	data?: object[];
	/**
	 * Button look. Passed on to each child button
	 */
	look?: 'primary' | 'hero';
	/**
	 * Button size. Passed on to each child button
	 */
	size?: 'small' | 'medium' | 'large' | 'xlarge' | 'small' | 'medium' | 'large' | 'xlarge'[];
	/**
	 * Block mode. Fill parent width
	 */
	block?: boolean | boolean[];
	/**
	 * Button group disabled
	 */
	disabled?: boolean;
	/**
	 * Button group children
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		ButtonGroup?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
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

// ==============================
// Component
// ==============================

export const ButtonGroup = ({
	name,
	value: controlledValue,
	onChange = () => {},
	data,
	defaultValue = -1,
	look = 'hero',
	size = 'medium',
	block = false,
	disabled = false,
	children,
	overrides: componentOverrides,
	...rest
}: ButtonGroupProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [value, setValue] = useState(defaultValue);

	devWarning(!!(children && data), 'ButtonGroup accepts either `children` or `data`, not both.');
	devWarning(!children && !data, 'ButtonGroup requires either `children` or `data`.');

	const defaultOverrides = {
		ButtonGroup: defaultButtonGroup,
	};

	const state = {
		name,
		value: controlledValue,
		defaultValue,
		onChange,
		data,
		look,
		size,
		block,
		disabled,
		overrides: componentOverrides,
		...rest,
	};

	const {
		ButtonGroup: {
			component: ButtonGroup,
			styles: buttonGroupStyles,
			attributes: buttonGroupAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const handleChange = (event: any, val: any) => {
		wrapHandlers(
			() => onChange(event, val),
			() => setValue(val)
		)(event);
	};

	const actualValue = typeof controlledValue !== 'undefined' ? controlledValue : value;

	let allChildren: any = [];
	if (data) {
		data.map((props: any, index) => {
			const val = props.value || index;
			const checked = val === actualValue;
			allChildren.push(
				<ButtonGroupItem
					key={val}
					index={index}
					name={name}
					value={val}
					onChange={handleChange}
					checked={checked}
					look={look}
					size={size}
					block={block}
					disabled={disabled}
				>
					{props.text}
				</ButtonGroupItem>
			);
		});
	} else {
		allChildren = Children.map(children, (child, index) => {
			const val = child?.props.value || index;
			const checked = val === actualValue;
			return cloneElement(child, {
				index,
				name,
				value: val,
				onChange: handleChange,
				checked,
				look,
				size,
				block,
				disabled,
			});
		});
	}

	return (
		<ButtonGroupContext.Provider value={{ state }}>
			<ButtonGroup
				{...rest}
				state={state}
				{...buttonGroupAttributes(state)}
				css={buttonGroupStyles(state)}
			>
				{allChildren}
			</ButtonGroup>
		</ButtonGroupContext.Provider>
	);
};

// ==============================
// Types
// ==============================

const ValueType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

export const defaultProps = {
	defaultValue: -1,
	look: 'hero',
	size: 'medium',
	block: false,
	disabled: false,
};

ButtonGroup.defaultProps = defaultProps;

ButtonGroup.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Block mode. Fill parent width
	 */
	block: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.bool), PropTypes.bool]),
	/**
	 * Button group children
	 */
	children: PropTypes.node,
	/**
	 * Alternative to children
	 */
	data: PropTypes.arrayOf(PropTypes.object),
	/**
	 * Default value of this component
	 */
	defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/**
	 * Button group disabled
	 */
	disabled: PropTypes.bool,
	/**
	 * Button look. Passed on to each child button
	 */
	look: PropTypes.oneOf(['hero', 'primary']),
	/**
	 * Name to be used for radio inputs
	 */
	name: PropTypes.string.isRequired,
	/**
	 * Change the value. Requires `value`
	 */
	onChange: PropTypes.func,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Button: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ButtonGroup: PropTypes.shape({
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
	 * Button size. Passed on to each child button
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['xlarge'])),
	]),
	/**
	 * Control the value, if numeric an index is assumed. Requires `onChange`
	 */
	value: PropTypes.any,
};
