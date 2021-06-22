/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId, getLabel } from '@westpac/core';
import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';

import { defaultButton } from './overrides/button';
import { defaultItem } from './overrides/item';

import { useButtonGroupContext } from './ButtonGroup';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const ButtonGroupItem = forwardRef(
	(
		{ name, value, onChange, checked, look, size, block, disabled, children, overrides, ...rest },
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const context = useButtonGroupContext();
		const [buttonGroupItemId] = useState(`button-group-item-${useInstanceId()}`);

		const defaultOverrides = {
			Item: defaultItem,
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
			context: context.state,
			overrides: componentOverrides,
			...rest,
		};

		const {
			Item: { component: Item, styles: itemStyles, attributes: itemAttributes },
			Button: { component: Button, styles: buttonStyles, attributes: buttonAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		return (
			<Item
				{...rest}
				state={state}
				{...itemAttributes({ ...state, buttonGroupItemId })}
				css={itemStyles(state)}
			>
				{/* a11y: input not exposed as an override, contains logic required to function */}
				<input
					ref={ref}
					type="radio"
					id={buttonGroupItemId}
					name={name}
					value={value}
					onChange={(event) => onChange(event, value)}
					checked={checked}
					disabled={disabled}
					data-js="buttonGroup-input__version__"
					css={{
						label: getLabel('buttonGroup-input'),
						position: 'absolute',
						zIndex: '-1',
						opacity: 0,
					}}
				/>
				<Button state={state} {...buttonAttributes(state)} css={buttonStyles(state)}>
					{children}
				</Button>
			</Item>
		);
	}
);

// ==============================
// Types
// ==============================

ButtonGroupItem.propTypes = {
	overrides: PropTypes.shape({
		Button: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Item: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	checked: false,
};

ButtonGroupItem.defaultProps = defaultProps;
