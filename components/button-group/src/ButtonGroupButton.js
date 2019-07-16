/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

import { Button } from '../../button/src';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const ButtonGroupButton = ({
	appearance,
	size,
	icon,
	iconPosition,
	name,
	children,
	...props
}) => {
	const theme = useTheme();
	const button = theme.button;

	return (
		<label
			css={{
				flex: 1,

				// Style internal borders
				'&:not(:last-child) > .btn-group-btn': {
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0,
					borderRight: 'none',
				},
				'&:not(:first-of-type) > .btn-group-btn': {
					borderTopLeftRadius: 0,
					borderBottomLeftRadius: 0,
				},
			}}
		>
			<input
				css={{
					position: 'absolute',
					zIndex: -1,
					opacity: 0,
				}}
				type="radio"
				name={name}
			/>
			<Button
				className="btn-group-btn"
				css={{
					// Checked state styling (look like a standard button)
					'input:checked + &': {
						color: button.appearance[appearance].standard.default.color,
						backgroundColor: button.appearance[appearance].standard.default.backgroundColor,
						borderColor: button.appearance[appearance].standard.default.borderColor,
					},
				}}
				tag="span"
				appearance={appearance}
				size={size}
				soft
				block
				icon={icon}
				iconPosition={iconPosition}
				{...props}
			>
				{children}
			</Button>
		</label>
	);
};
