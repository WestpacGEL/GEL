/** @jsx jsx */

import React, { Children, cloneElement, createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

import { Button } from './Button';

// ==============================
// Component
// ==============================

export const ButtonGroup = props => {
	const { block, children, defaultSelected, look, onChange, selected, size, ...rest } = props;
	const [selectedIndex, setSelectedIndex] = useState(defaultSelected);

	const handleClick = (index, onClick) =>
		wrapHandlers(onClick, () => {
			if (onChange) {
				onChange(index);
			} else {
				setSelectedIndex(index);
			}
		});

	const value = selected !== undefined ? selected : selectedIndex;

	return (
		<GroupWrapper block={block} {...rest}>
			{Children.map(children, (child, index) => {
				const soft = index !== value; // NOTE: this is like the inverse of "selected"
				const onClick = handleClick(index, child.props.onClick);

				return cloneElement(child, { look, onClick, size, soft });
			})}
		</GroupWrapper>
	);
};

// ==============================
// Types
// ==============================

ButtonGroup.propTypes = {
	/** Block mode. Fill parent width. */
	block: PropTypes.bool,
	/** Button group children. */
	children: PropTypes.oneOfType([Button, PropTypes.arrayOf(Button)]).isRequired,
	/** The index of the button you wish to be initially selected. */
	defaultSelected: PropTypes.number,
	/** Button look. Passed on to each child button. */
	look: PropTypes.oneOf(['primary', 'hero']),
	/** Change the curently selected index. Requires `selected`. */
	onChange: PropTypes.func,
	/** Button size. Passed on to each child button. */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
	/** Control the curently selected index. Requires `onChange`. */
	selected: PropTypes.number,
};

ButtonGroup.defaultProps = {
	look: 'hero',
	block: false,
	defaultSelected: -1,
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

// ==============================
// Utils
// ==============================

// TODO: move to lib?

const wrapHandlers = (consumerHandler, ourHandler) => event => {
	if (consumerHandler) {
		consumerHandler(event);
	}

	if (!event.defaultPrevented) {
		ourHandler(event);
	}
};
