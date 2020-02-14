/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
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
			tag="label"
			look={look}
			soft={!checked}
			size={size}
			disabled={disabled}
			{...rest}
			{...overrides.ButtonGroupItem.attributes(state)}
			css={overrides.ButtonGroupItem.styles(state)}
		>
			<input
				name={name}
				value={value}
				checked={checked}
				disabled={disabled}
				type="radio"
				css={{ position: 'absolute', zIndex: '-1', opacity: 0 }}
				onChange={event => onChange(event, value)}
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
