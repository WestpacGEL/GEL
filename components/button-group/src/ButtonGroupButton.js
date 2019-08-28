/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

import { Button } from '../../button/src';

// ==============================
// Component
// ==============================

export const ButtonGroupButton = ({
	appearance,
	size,
	name,
	id,
	iconAfter: IconAfter,
	iconBefore: IconBefore,
	srOnlyText,
	children,
	...props
}) => {
	const { button } = useTheme();

	return (
		<label css={{ flex: 1 }} {...props}>
			<input
				css={{
					position: 'absolute',
					zIndex: -1,
					opacity: 0,
				}}
				type="radio"
				name={name}
				id={id}
			/>
			<Button
				css={{
					// Style internal borders
					'label:not(:last-child) > &': {
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
						borderRight: 'none',
					},
					'label:not(:first-of-type) > &': {
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
					},

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
				iconAfter={IconAfter}
				iconBefore={IconBefore}
				srOnlyText={srOnlyText}
				soft
				block
			>
				{children}
			</Button>
		</label>
	);
};

// ==============================
// Types
// ==============================

ButtonGroupButton.propTypes = {
	/**
	 * Button group button input element’s id
	 */
	id: PropTypes.string,

	/**
	 * Places an icon within the button, after the button’s text
	 */
	iconAfter: PropTypes.func,

	/**
	 * Places an icon within the button, before the button’s text
	 */
	iconBefore: PropTypes.func,

	/**
	 * Button group button text
	 */
	children: PropTypes.node,
};

ButtonGroupButton.defaultProps = {};
