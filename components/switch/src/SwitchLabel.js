/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { jsx } from '@westpac/core';
import { SwitchText } from './SwitchText';
import { SwitchToggle } from './SwitchToggle';
import { useSwitchContext } from './Switch';

// ==============================
// Context and consumer hook
// ==============================

// ==============================
// Component
// ==============================

/**
 * Switch: Switch component for the Westpac GEL
 */
export const SwitchLabel = ({ toggleText, checked, srOnlyText, children, ...props }) => {
	const [isChecked, setChecked] = useState(checked);
	const [switchId] = useState(`switch-${shortid.generate()}`);
	const { size } = useSwitchContext();

	const sizeMap = {
		small: {
			width: '4.375rem',
			height: '1.875rem',
		},
		medium: {
			width: '5rem',
			height: '2.25rem',
		},
		large: {
			width: '5.5625rem',
			height: '2.625rem',
		},
		xlarge: {
			width: '6rem',
			height: '3rem',
		},
	};

	const toggle = () => {
		setChecked(!isChecked);
	};

	useEffect(() => {
		setChecked(checked);
	}, [checked]);

	return (
		<label
			css={{
				display: 'inline-flex',
				flexWrap: 'wrap',
				alignItems: 'center',
				position: 'relative',
				marginRight: '18px',
				height: sizeMap[size].height,
				paddingRight: sizeMap[size].width,
				marginBottom: '6px',
			}}
			htmlFor={switchId}
			checked={checked}
			{...props}
		>
			<input
				css={{
					position: 'absolute',
					zIndex: '-1',
					opacity: 0,
				}}
				type="checkbox"
				name={name}
				id={switchId}
				onChange={toggle}
			/>
			<SwitchToggle toggleText={toggleText} checked={isChecked} />
			<SwitchText srOnlyText={srOnlyText}>{children}</SwitchText>
		</label>
	);
};

// ==============================
// Types
// ==============================

SwitchLabel.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

SwitchLabel.defaultProps = {
	checked: false,
};
