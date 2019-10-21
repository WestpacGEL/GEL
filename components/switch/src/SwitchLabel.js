/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { jsx } from '@westpac/core';
import { SwitchText } from './SwitchText';
import { SwitchToggle } from './SwitchToggle';
import { useSwitchContext, sizeMap } from './Switch';

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
				marginRight: '1.125rem',
				height: sizeMap[size].height,
				paddingRight: sizeMap[size].width,
				marginBottom: '0.375rem',
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
