/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

import {
	ButtonGroupItem as ButtonGroupItemWrapper,
	buttonGroupItemStyles,
} from './overrides/buttonGroupItem';
import { ButtonGroupButton, buttonGroupButtonStyles } from './overrides/buttonGroupButton';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const ButtonGroupItem = ({
	name,
	value,
	onChange,
	checked,
	look,
	size,
	block,
	disabled,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const [buttonGroupItemId] = useState(`button-group-item-${useInstanceId()}`);

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		ButtonGroupItem: {
			styles: buttonGroupItemStyles,
			component: ButtonGroupItemWrapper,
			attributes: () => null,
		},
		ButtonGroupButton: {
			styles: buttonGroupButtonStyles,
			component: ButtonGroupButton,
			attributes: () => null,
		},
	};

	const state = {
		name,
		value,
		onChange,
		checked,
		look,
		size,
		block,
		disabled,
		children,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.ButtonGroupItem.component
			htmlFor={buttonGroupItemId} //a11y: use explicit association
			name={name}
			value={value}
			onChange={onChange}
			checked={checked}
			look={look}
			size={size}
			block={block}
			disabled={disabled}
			{...rest}
			{...overrides.ButtonGroupItem.attributes(state)}
			css={overrides.ButtonGroupItem.styles(state)}
		>
			{/* a11y: input not exposed as an override, contains logic required to function */}
			<input
				type="radio"
				id={buttonGroupItemId}
				name={name}
				value={value}
				onChange={event => onChange(event, value)}
				checked={checked}
				disabled={disabled}
				css={{
					position: 'absolute',
					zIndex: '-1',
					opacity: 0,
				}}
			/>
			<overrides.ButtonGroupButton.component
				name={name}
				value={value}
				onChange={onChange}
				checked={checked}
				look={look}
				size={size}
				block={block}
				disabled={disabled}
				{...overrides.ButtonGroupButton.attributes(state)}
				css={overrides.ButtonGroupButton.styles(state)}
			>
				{children}
			</overrides.ButtonGroupButton.component>
		</overrides.ButtonGroupItem.component>
	);
};

// ==============================
// Types
// ==============================
ButtonGroupItem.propTypes = {
	overrides: PropTypes.shape({
		ButtonGroupItem: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ButtonGroupButton: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

ButtonGroupItem.defaultProps = {};
