/** @jsx jsx */

import React, { Children, cloneElement, useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, wrapHandlers } from '@westpac/core';

// ==============================
// Component
// ==============================

export const ButtonGroup = props => {
	const {
		block,
		children,
		defaultValue,
		look,
		name,
		onChange,
		value: controlledValue,
		size,
		...rest
	} = props;
	const [value, setValue] = useState(defaultValue);

	const handleClick = (val, onClick) =>
		wrapHandlers(onClick, () => {
			if (onChange) {
				onChange(val);
			} else {
				setValue(val);
			}
		});

	const actualValue = typeof controlledValue !== 'undefined' ? controlledValue : value;

	return (
		<GroupWrapper block={block} {...rest}>
			{Children.map(children, (child, index) => {
				const val = child.props.value || index;
				const soft = val !== actualValue; // NOTE: this is like the inverse of "selected"
				const onClick = handleClick(val, child.props.onClick);

				return cloneElement(child, { look, onClick, size, soft });
			})}
			{name && <input type="hidden" value={actualValue} name={name} />}
		</GroupWrapper>
	);
};

// ==============================
// Types
// ==============================

const ValueType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

ButtonGroup.propTypes = {
	/** Block mode. Fill parent width. */
	block: PropTypes.bool,
	/** Button group children. */
	children: PropTypes.node.isRequired,
	/** The value of the initially selected button, if numeric an index is assumed. */
	defaultValue: ValueType,
	/** Button look. Passed on to each child button. */
	look: PropTypes.oneOf(['primary', 'hero']),
	/** If used inside a form, provide a name property to capture the value in a hidden input. */
	name: PropTypes.string,
	/** Change the value. Requires `value`. */
	onChange: PropTypes.func,
	/** Control the value, if numeric an index is assumed. Requires `onChange`. */
	value: ValueType,
	/** Button size. Passed on to each child button. */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
};

ButtonGroup.defaultProps = {
	look: 'hero',
	block: false,
	defaultValue: -1,
	size: 'medium',
};

// ==============================
// Styled Components
// ==============================

const GroupWrapper = ({ block, ...props }) => (
	<div
		css={{
			alignItems: 'center',
			display: block ? 'flex' : 'inline-flex',
			verticalAlign: 'middle',

			'& > *': {
				flex: block ? 1 : null,
			},
			'& > *:not(:last-of-type)': {
				borderTopRightRadius: 0,
				borderBottomRightRadius: 0,
				borderRight: 0,
			},
			'& > *:not(:first-of-type)': {
				borderTopLeftRadius: 0,
				borderBottomLeftRadius: 0,
			},
		}}
		{...props}
	/>
);
