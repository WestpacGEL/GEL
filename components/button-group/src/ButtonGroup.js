/** @jsx jsx */

import { jsx, useBrand, devWarning, wrapHandlers, overrideReconciler } from '@westpac/core';
import { Children, cloneElement, useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { defaultButtonGroup } from './overrides/buttonGroup';
import { ButtonGroupItem } from './ButtonGroupItem';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ButtonGroupContext = createContext();

export const useButtonGroupContext = () => {
	const context = useContext(ButtonGroupContext);

	if (!context) {
		throw new Error('<Item/> components should be wrapped in a <ButtonGroup>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const ButtonGroup = ({
	name,
	value: controlledValue,
	defaultValue,
	onChange = () => {},
	data,
	look,
	size,
	block,
	disabled,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [value, setValue] = useState(defaultValue);

	devWarning(children && data, 'ButtonGroup accepts either `children` or `data`, not both.');
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

	const handleChange = (event, val) => {
		wrapHandlers(
			() => onChange(event, val),
			() => setValue(val)
		)(event);
	};

	const actualValue = typeof controlledValue !== 'undefined' ? controlledValue : value;

	let allChildren = [];
	if (data) {
		data.map((props, index) => {
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
			const val = child.props.value || index;
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

ButtonGroup.propTypes = {
	/**
	 * Name to be used for radio inputs
	 */
	name: PropTypes.string.isRequired,

	/**
	 * Control the value, if numeric an index is assumed. Requires `onChange`
	 */
	value: ValueType,

	/**
	 * Default value of this component
	 */
	defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

	/**
	 * Change the value. Requires `value`
	 */
	onChange: PropTypes.func,

	/**
	 * Alternative to children
	 */
	data: PropTypes.arrayOf(PropTypes.object),

	/**
	 * Button look. Passed on to each child button
	 */
	look: PropTypes.oneOf(['primary', 'hero']).isRequired,

	/**
	 * Button size. Passed on to each child button
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])),
	]).isRequired,

	/**
	 * Block mode. Fill parent width
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]).isRequired,

	/**
	 * Button group disabled
	 */
	disabled: PropTypes.bool.isRequired,

	/**
	 * Button group children
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ButtonGroup: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Button: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Item: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	defaultValue: -1,
	look: 'hero',
	size: 'medium',
	block: false,
	disabled: false,
};

ButtonGroup.defaultProps = defaultProps;
