/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import shortid from 'shortid';
import { SwitchText, SwitchToggle } from './styled';

// ==============================
// Component
// ==============================

export const Switch = ({
	name,
	value,
	toggleText,
	size,
	isBlock,
	isFlipped,
	isSrOnlyText,
	isChecked,
	disabled,
	onChange,
	children,
	...props
}) => {
	const { switch: formSwitch } = useTheme();
	const [checked, setChecked] = useState(isChecked);
	const [switchId] = useState(`switch-${shortid.generate()}`);

	useEffect(() => {
		setChecked(checked);
	}, [checked]);

	const toggle = () => {
		if (onChange) {
			onChange();
		} else {
			setChecked(!checked);
		}
	};

	// Common styling
	const common = {
		position: 'relative',
		display: isBlock ? 'flex' : 'inline-flex',
		flexWrap: 'wrap',
		verticalAlign: 'middle',
		marginRight: !isBlock && formSwitch.marginRight,
		marginBottom: formSwitch.marginBottom,
		alignItems: 'center',
		width: isBlock && '100%',
		flexDirection: isFlipped && 'row-reverse',

		':hover': {
			cursor: 'pointer',
		},
	};

	return (
		<label htmlFor={switchId} css={common} {...props}>
			<input
				type="checkbox"
				css={{
					position: 'absolute',
					zIndex: -1,
					opacity: 0,
				}}
				name={name}
				id={switchId}
				value={value}
				checked={checked}
				disabled={disabled}
				onChange={toggle}
			/>
			{children && (
				<SwitchText isBlock={isBlock} isFlipped={isFlipped} size={size} isSrOnlyText={isSrOnlyText}>
					{children}
				</SwitchText>
			)}
			<SwitchToggle toggleText={toggleText} size={size} />
		</label>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
};

Switch.propTypes = {
	/**
	 * Switch input element name
	 */
	name: PropTypes.string,

	/**
	 * Switch input element value
	 */
	value: PropTypes.string,

	/**
	 * On/off text.
	 *
	 * This prop takes an array where the first index is the "on" text and second index is the "off" text e.g. "['Yes', 'No']"
	 */
	toggleText: PropTypes.arrayOf(PropTypes.string),

	/**
	 * Switch size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(options.size),
		PropTypes.arrayOf(PropTypes.oneOf(options.size)),
	]),

	/**
	 * Block mode
	 */
	isBlock: PropTypes.bool,

	/**
	 * Reverse the horizontal orientation. Renders the toggle on the left of the label text.
	 */
	isFlipped: PropTypes.bool,

	/**
	 * Enable ‘screen reader only’ label text mode.
	 */
	isSrOnlyText: PropTypes.bool,

	/**
	 * Switch on
	 */
	isChecked: PropTypes.bool,

	/**
	 * Disable the switch
	 */
	disabled: PropTypes.bool,

	/**
	 * The onChange handler for this switch
	 */
	onChange: PropTypes.func,

	/**
	 * Label text.
	 *
	 * This prop is required, but can be visually hidden by enabling "srOnlyText" mode.
	 */
	children: PropTypes.string.isRequired,
};

Switch.defaultProps = {
	size: 'medium',
	toggleText: ['On', 'Off'],
	isBlock: false,
	isFlipped: false,
	isSrOnlyText: false,
	isChecked: false,
	disabled: false,
};
