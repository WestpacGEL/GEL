/** @jsx jsx */

import { jsx, useBrand, devWarning, wrapHandlers, overrideReconciler } from '@westpac/core';
import React, { Children, cloneElement, useState } from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup as BtnGroupWrapper, buttonGroupStyles } from './overrides/buttonGroup';
import { Button } from './Button';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const ButtonGroup = props => {
	const {
		block,
		children,
		data,
		defaultValue,
		look,
		name,
		disabled,
		onChange,
		value: controlledValue,
		size,
		className,
		overrides: componentOverrides,
		...rest
	} = props;
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
			component: BtnGroupWrapper,
			attributes: () => null,
		},
	};

	const state = {
		block,
		data,
		defaultValue,
		look,
		name,
		onChange,
		value: controlledValue,
		size,
		disabled,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	const handleClick = (val, onClick) =>
		wrapHandlers(onClick, () => {
			if (onChange) {
				onChange(val);
			} else {
				setValue(val);
			}
		});

	const actualValue = typeof controlledValue !== 'undefined' ? controlledValue : value;

	// Fork map behaviour when children VS data
	return (
		<overrides.ButtonGroup.component
			block={block}
			data={data}
			defaultValue={defaultValue}
			look={look}
			name={name}
			onChange={onChange}
			value={controlledValue}
			size={size}
			disabled={disabled}
			className={className}
			{...overrides.ButtonGroup.attributes(state)}
			css={overrides.ButtonGroup.styles(state)}
		>
			{data
				? data.map((button, index) => {
						const val = button.value || index;
						const soft = val !== actualValue; // NOTE: this is like the inverse of "selected"
						const onClick = handleClick(val, button.onClick);
						const btnProps = { ...button, disabled, look, onClick, size, soft };

						return <Button key={val} {...btnProps} overrides={componentOverrides} />;
				  })
				: Children.map(children, (child, index) => {
						const val = child.props.value || index;
						const soft = val !== actualValue; // NOTE: this is like the inverse of "selected"
						const onClick = handleClick(val, child.props.onClick);

						return cloneElement(child, {
							look,
							onClick,
							size,
							soft,
							disabled,
							overrides: componentOverrides,
						});
				  })}
			{name && <input type="hidden" value={actualValue} name={name} />}
		</overrides.ButtonGroup.component>
	);
};

// ==============================
// Types
// ==============================

ButtonGroup.propTypes = {
	/**
	 * Block mode. Fill parent width
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]).isRequired,

	/**
	 * Alternative to children
	 */
	data: PropTypes.arrayOf(PropTypes.object),

	/**
	 * Default value of this component
	 */
	defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

	/**
	 * Button look. Passed on to each child button
	 */
	look: PropTypes.oneOf(['primary', 'hero', 'faint']).isRequired,

	/**
	 * If used inside a form, provide a name property to capture the value in a hidden input
	 */
	name: PropTypes.string,

	/**
	 * Change the value. Requires `value`
	 */
	onChange: PropTypes.func,

	/**
	 * Control the value, if numeric an index is assumed. Requires `onChange`
	 */
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

	/**
	 * Button size. Passed on to each child button
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,

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
	look: 'hero',
	block: false,
	defaultValue: -1,
	size: 'medium',
	disabled: false,
};
