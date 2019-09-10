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
	block,
	flipped,
	srOnlyText,
	checked,
	disabled,
	onChange,
	children,
	...props
}) => {
	const { switch: formSwitch } = useTheme();
	const [isChecked, setIsChecked] = useState(checked);
	const [switchId] = useState(`switch-${shortid.generate()}`);

	useEffect(
		() => {
			setIsChecked(checked);
		},
		[checked]
	);

	const toggle = () => {
		if (onChange) {
			onChange();
		} else {
			setIsChecked(!isChecked);
		}
	};

	// Common styling
	const common = {
		position: 'relative',
		display: block ? 'flex' : 'inline-flex',
		flexWrap: 'wrap',
		verticalAlign: 'middle',
		marginRight: !block && formSwitch.marginRight,
		marginBottom: formSwitch.marginBottom,
		alignItems: 'center',
		width: block && '100%',
		flexDirection: flipped && 'row-reverse',

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
				checked={isChecked}
				disabled={disabled}
				onChange={toggle}
			/>
			{children && (
				<SwitchText block={block} flipped={flipped} size={size} srOnlyText={srOnlyText}>
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
	block: PropTypes.bool,

	/**
	 * Reverse the horizontal orientation. Renders the toggle on the left of the label text.
	 */
	flipped: PropTypes.bool,

	/**
	 * Enable ‘screen reader only’ label text mode.
	 */
	srOnlyText: PropTypes.bool,

	/**
	 * Switch on
	 */
	checked: PropTypes.bool,

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
	block: false,
	flipped: false,
	srOnlyText: false,
	checked: false,
	disabled: false,
};
