/** @jsx jsx */

import { jsx, useBrand, devWarning, wrapHandlers, overrideReconciler } from '@westpac/core';
import { Children, cloneElement, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup as ButtonGroupWrapper, buttonGroupStyles } from './overrides/buttonGroup';
import { ButtonGroupItem } from './ButtonGroupItem';
import pkg from '../package.json';

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
		ButtonGroup: {
			styles: buttonGroupStyles,
			component: ButtonGroupWrapper,
			attributes: () => null,
		},
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
		children,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

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
					name={name}
					value={val}
					onChange={handleChange}
					data={data}
					checked={checked}
					look={look}
					size={size}
					block={block}
					disabled={disabled}
					overrides={componentOverrides}
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
				name,
				value: val,
				onChange: handleChange,
				data,
				checked,
				look,
				size,
				block,
				disabled,
				overrides: componentOverrides,
			});
		});
	}

	return (
		<overrides.ButtonGroup.component
			name={name}
			value={value}
			defaultValue={defaultValue}
			onChange={onChange}
			data={data}
			look={look}
			size={size}
			block={block}
			disabled={disabled}
			{...rest}
			{...overrides.ButtonGroup.attributes(state)}
			css={overrides.ButtonGroup.styles(state)}
		>
			{allChildren}
		</overrides.ButtonGroup.component>
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
	look: PropTypes.oneOf(['primary', 'hero', 'faint']).isRequired,

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
	}),
};

ButtonGroup.defaultProps = {
	defaultValue: -1,
	look: 'hero',
	size: 'medium',
	block: false,
	disabled: false,
};
