/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';
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
export const SwitchToggle = ({ toggleText, checked, ...props }) => {
	const { COLORS } = useBrand();
	const { size } = useSwitchContext();

	return (
		<span
			css={{
				borderRadius: sizeMap[size].borderRadius,
				height: sizeMap[size].height,
				width: sizeMap[size].width,
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
					height: `calc(${sizeMap[size].height} - 0.25rem)`,
					width: `calc(${sizeMap[size].height} - 0.25rem)`,
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
			}}
		>
			{toggleText && (
				<>
					<span
						css={{
							lineHeight: `calc(${sizeMap[size].height} - 0.25rem)`,
							fontSize: sizeMap[size].fontSize,
							width: `calc(100% - (${sizeMap[size].height} - 0.25rem))`,
							right: 0,
							color: COLORS.neutral,
							position: 'absolute',
							textAlign: 'center',
							transition: 'opacity .3s ease',
							paddingLeft: '0.25rem',
							paddingRight: '0.25rem',
						}}
						value={toggleText[0]}
					>
						{toggleText[0]}
					</span>
					<span
						css={{
							lineHeight: `calc(${sizeMap[size].height} - 0.25rem)`,
							fontSize: sizeMap[size].fontSize,
							width: `calc(100% - (${sizeMap[size].height} - 0.25rem))`,
							opacity: checked ? null : 0,
							left: 0,
							color: '#fff',
							position: 'absolute',
							textAlign: 'center',
							transition: 'opacity .3s ease',
							paddingLeft: '0.25rem',
							paddingRight: '0.25rem',
						}}
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
