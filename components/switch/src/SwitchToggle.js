/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { useSwitchContext } from './Switch';

// ==============================
// utils
// ==============================
const calcKnob = height => height.map(h => h && `${parseFloat(h) - 0.25}rem`);

const calcKnob2 = height => height.map(h => h && `calc(100% - ${h} - 0.25rem`);
// ==============================
// Component
// ==============================

/**
 * Switch: Switch component for the Westpac GEL
 */
export const SwitchToggle = ({ toggleText, checked, ...props }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();
	const { sizeArr } = useSwitchContext();

	return (
		<span
			css={mq({
				borderRadius: sizeArr.borderRadius,
				height: sizeArr.height,
				width: sizeArr.width,
				display: 'block',
				position: 'relative',
				right: 0,
				top: 0,
				zIndex: 1,
				border: checked ? `2px solid ${COLORS.hero}` : `2px solid ${COLORS.border}`,
				backgroundColor: checked ? COLORS.hero : '#fff',
				overflow: 'hidden',
				lineHeight: 1.5,
				transition: 'border .3s ease,background .3s ease',

				'::after': {
					height: calcKnob(sizeArr.height),
					width: calcKnob(sizeArr.height),
					content: '""',
					display: 'block',
					position: 'absolute',
					left: checked ? '100%' : 0,
					transform: checked ? 'translateX(-100%)' : null,
					top: 0,
					borderRadius: '50%',
					backgroundColor: '#fff',
					boxShadow: '3px 0 6px 0 rgba(0,0,0,0.3)',
					transition: 'all .3s ease',
				},

				// Disabled state
				'input:disabled ~ &': {
					cursor: 'default',
					opacity: 0.5,
				},
			})}
		>
			{toggleText && (
				<>
					<span
						css={mq({
							lineHeight: calcKnob(sizeArr.height),
							fontSize: sizeMap[size].fontSize,
							width: calcKnob2(sizeArr.height),
							right: 0,
							color: COLORS.neutral,
							position: 'absolute',
							textAlign: 'center',
							transition: 'opacity .3s ease',
							paddingLeft: '0.25rem',
							paddingRight: '0.25rem',
						})}
						value={toggleText[0]}
					>
						{toggleText[0]}
					</span>
					<span
						css={mq({
							lineHeight: calcKnob(sizeArr.height),
							fontSize: sizeMap[size].fontSize,
							width: calcKnob2(sizeArr.height),
							opacity: checked ? null : 0,
							left: 0,
							color: '#fff',
							position: 'absolute',
							textAlign: 'center',
							transition: 'opacity .3s ease',
							paddingLeft: '0.25rem',
							paddingRight: '0.25rem',
						})}
						value={toggleText[1]}
					>
						{toggleText[1]}
					</span>
				</>
			)}
		</span>
	);
};

// ==============================
// Types
// ==============================

SwitchToggle.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

SwitchToggle.defaultProps = {
	checked: false,
};
