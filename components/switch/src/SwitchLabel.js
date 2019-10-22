/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { SwitchText } from './SwitchText';
import { SwitchToggle } from './SwitchToggle';
import { useSwitchContext } from './Switch';

// ==============================
// Context and consumer hook
// ==============================

// ==============================
// Context and consumer hook
// ==============================

// ==============================
// Component
// ==============================

/**
 * Switch: Switch component for the Westpac GEL
 */
export const SwitchLabel = ({
	toggleText,
	checked,
	srOnlyText,
	flipped,
	block,
	disabled,
	children,
	...props
}) => {
	const [isChecked, setChecked] = useState(checked);

	const [switchId] = useState(`switch-${shortid.generate()}`);
	const { sizeArr } = useSwitchContext();
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	const toggle = () => {
		setChecked(!isChecked);
	};

	useEffect(() => {
		setChecked(checked);
	}, [checked]);

	return (
		<label
			css={mq({
				display: block ? 'flex' : 'inline-flex',
				width: block && '100%',
				flexWrap: 'wrap',
				alignItems: 'center',
				position: 'relative',
				marginRight: !block && '1.125rem',
				height: !block && sizeArr.height,
				paddingRight: sizeArr.width,
				marginBottom: '0.375rem',
				flexDirection: flipped && 'row-reverse',

				'input:disabled ~ &': {
					cursor: 'default',
					color: COLORS.muted,
				},
			})}
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
				disabled={disabled}
			/>
			<SwitchText srOnlyText={srOnlyText} flipped={flipped} block="block">
				{children}
			</SwitchText>
			<SwitchToggle toggleText={toggleText} checked={isChecked} />
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
