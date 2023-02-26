import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler, wrapHandlers } from '@westpac/core';
import React, { useState, useEffect, forwardRef, useId, useMemo } from 'react';

import { defaultSwitch } from './overrides/switch';
import { defaultToggle } from './overrides/toggle';
import { defaultLabel } from './overrides/label';
import pkg from '../package.json';

export interface SwitchProps {
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * Switch input element name
	 */
	name?: string;
	/**
	 * Switch label text
	 */
	label: string;
	/**
	 * Switch on/off state
	 */
	checked?: boolean;
	/**
	 * The onChange handler for this switch
	 */
	onChange?(...args: unknown[]): unknown;
	/**
	 * Switch size
	 */
	size?: 'small' | 'medium' | 'large' | 'xlarge' | 'small' | 'medium' | 'large' | 'xlarge'[];
	/**
	 * Block mode
	 */
	block?: boolean;
	/**
	 * Disable the switch
	 */
	disabled?: boolean;
	/**
	 * The override API
	 */
	overrides?: {
		Switch?: {
			styles?(...args: unknown[]): unknown;
			component?: React.ElementType;
			attributes?(...args: unknown[]): unknown;
		};
		Label?: {
			styles?(...args: unknown[]): unknown;
			component?: React.ElementType;
			attributes?(...args: unknown[]): unknown;
		};
		Toggle?: {
			styles?(...args: unknown[]): unknown;
			component?: React.ElementType;
			attributes?(...args: unknown[]): unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
	(
		{
			size = 'medium',
			block = false,
			instanceId,
			name,
			label,
			checked: isChecked = false,
			onChange = () => {},
			disabled,
			overrides: componentOverrides,
			...rest
		},
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const [checked, setChecked] = useState(isChecked);
		const _id = useId();
		const id = useMemo(() => instanceId || `gel-switch-${_id}`, [_id, instanceId]);

		const defaultOverrides = {
			Switch: defaultSwitch,
			Label: defaultLabel,
			Toggle: defaultToggle,
		};

		const state = {
			id,
			checked,
			name,
			label,
			onChange,
			size,
			block,
			disabled,
			overrides: componentOverrides,
			...rest,
		};

		const {
			Switch: { component: Switch, styles: switchStyles, attributes: switchAttributes },
			Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
			Toggle: { component: Toggle, styles: toggleStyles, attributes: toggleAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		useEffect(() => {
			setChecked(isChecked);
		}, [isChecked]);

		const handleChange = () => wrapHandlers(onChange, () => setChecked(!checked));

		return (
			<Switch {...rest} state={state} {...switchAttributes(state)} css={switchStyles(state)}>
				{/* a11y: input not exposed as an override, contains logic required to function */}
				<input
					ref={ref}
					type="checkbox"
					id={id}
					onChange={handleChange}
					name={name}
					checked={checked}
					disabled={disabled}
					css={{
						position: 'absolute',
						zIndex: '-1',
						opacity: 0,
					}}
				/>
				<Label state={state} {...labelAttributes(state)} css={labelStyles(state)}>
					{label}
				</Label>
				<Toggle state={state} {...toggleAttributes(state)} css={toggleStyles(state)} />
			</Switch>
		);
	}
);

Switch.displayName = 'Switch';

// ==============================
// Types
// ==============================

Switch.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Block mode
	 */
	block: PropTypes.bool,
	/**
	 * Switch on/off state
	 */
	checked: PropTypes.bool,
	/**
	 * Disable the switch
	 */
	disabled: PropTypes.bool,
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * Switch label text
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Switch input element name
	 */
	name: PropTypes.string,
	/**
	 * The onChange handler for this switch
	 */
	onChange: PropTypes.func,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Label: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Switch: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Toggle: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Switch size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['xlarge'])),
	]),
};
