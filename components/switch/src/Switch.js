/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';
import shortid from 'shortid';

import { SwitchText, SwitchToggle } from './styled';

// ==============================
// Component
// ==============================

export const Switch = ({
	name,
	toggleText,
	size,
	block,
	flip,
	srOnlyText,
	checked,
	disabled,
	children,
	onChange,
	...props
}) => {
	const { switch: formSwitch } = useTheme();
	const [isChecked, setIsChecked] = useState(checked);

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

	const switchId = `switch-${shortid.generate()}`;

	// Common styling
	const common = {
		position: 'relative',
		display: block ? 'flex' : 'inline-flex',
		flexWrap: 'wrap',
		verticalAlign: 'middle',
		marginRight: block ? null : formSwitch.marginRight,
		marginBottom: formSwitch.marginBottom,
		alignItems: 'center',
		width: block ? '100%' : null,
		flexDirection: flip ? 'row-reverse' : null,

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
				checked={isChecked}
				disabled={disabled}
				onChange={toggle}
			/>
			{children && (
				<SwitchText block={block} flip={flip} size={size} srOnlyText={srOnlyText}>
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
	 * Input element name attribute
	 */
	name: PropTypes.string,

	/**
	 * On/off text.
	 *
	 * This prop takes an array where the first index is the "on" text and second index is the "off" text e.g. "['Yes', 'No']"
	 */
	toggleText: PropTypes.arrayOf(PropTypes.string),

	/**
	 * Form switch size
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
	flip: PropTypes.bool,

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
	 * Label text.
	 *
	 * This prop is required, but can be visually hidden by enabling "srOnlyText" mode.
	 */
	children: PropTypes.string.isRequired,

	/**
	 * The onChange handler for this switch
	 */
	onChange: PropTypes.func,
};

Switch.defaultProps = {
	size: 'medium',
	toggleText: ['On', 'Off'],
	block: false,
	flip: false,
	srOnlyText: false,
	checked: false,
	disabled: false,
};
