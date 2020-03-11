/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useButtonGroupContext } from './ButtonGroup';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { defaultItem } from './overrides/item';
import { defaultButton } from './overrides/button';
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
	overrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [buttonGroupItemId] = useState(`button-group-item-${useInstanceId()}`);
	const context = useButtonGroupContext();

	const defaultOverrides = {
		ItemRoot: defaultItem,
		Button: defaultButton,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		name,
		value,
		onChange,
		checked,
		look,
		size,
		block,
		disabled,
		context: { ...context.state },
		overrides: componentOverrides,
		...rest,
	};

	const {
		ItemRoot: { component: ItemRoot, styles: itemRootStyles, attributes: itemRootAttributes },
		Button: { component: Button, styles: buttonStyles, attributes: buttonAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<ItemRoot
			// htmlFor={buttonGroupItemId} //a11y: use explicit association
			{...rest}
			state={state}
			{...itemRootAttributes({ ...state, buttonGroupItemId })}
			css={itemRootStyles(state)}
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
			<Button
				// checked={checked}
				// look={look}
				// size={size}
				// block={block}
				// disabled={disabled}
				state={state}
				{...buttonAttributes(state)}
				css={buttonStyles(state)}
			>
				{children}
			</Button>
		</ItemRoot>
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
