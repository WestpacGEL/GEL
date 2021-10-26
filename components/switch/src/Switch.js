/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, wrapHandlers, useInstanceId } from '@westpac/core';
import { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { defaultSwitch } from './overrides/switch';
import { defaultToggle } from './overrides/toggle';
import { defaultLabel } from './overrides/label';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Switch = forwardRef(
	(
		{
			instanceId,
			name,
			label,
			checked: isChecked,
			onChange,
			size,
			block,
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
		const [id, setId] = useState(instanceId);

		// create the prefix for internal IDs
		useEffect(() => {
			if (!instanceId) {
				setId(`gel-switch-${useInstanceId()}`);
			}
		}, [instanceId]);

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
					onChange={handleChange(name)}
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

// ==============================
// Types
// ==============================

Switch.propTypes = {
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,

	/**
	 * Switch input element name
	 */
	name: PropTypes.string,

	/**
	 * Switch label text
	 */
	label: PropTypes.string.isRequired,

	/**
	 * Switch on/off state
	 */
	checked: PropTypes.bool,

	/**
	 * The onChange handler for this switch
	 */
	onChange: PropTypes.func,

	/**
	 * Switch size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])),
	]),

	/**
	 * Block mode
	 */
	block: PropTypes.bool,

	/**
	 * Disable the switch
	 */
	disabled: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Switch: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Label: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Toggle: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	size: 'medium',
	checked: false,
	block: false,
};

Switch.defaultProps = defaultProps;
