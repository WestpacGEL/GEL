/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

import {
	ButtonGroupItem as BtnGroupItemWrapper,
	buttonGroupItemStyles,
} from './overrides/buttonGroupItem';
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
			component: BtnGroupItemWrapper,
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
			tag="label"
			type={null} //reset Button's default `button` type
			soft={!checked}
			name={name}
			value={value}
			onChange={onChange}
			checked={checked}
			look={look}
			size={size}
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
			{children}
		</overrides.ButtonGroupItem.component>
	);
};

// ==============================
// Types
// ==============================
ButtonGroupItem.propTypes = {
	overrides: PropTypes.shape({
		ButtonGroup: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

ButtonGroupItem.defaultProps = {};
