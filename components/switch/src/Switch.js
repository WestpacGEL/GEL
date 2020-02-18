/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, wrapHandlers, useInstanceId } from '@westpac/core';
import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Switch as SwitchWrapper, switchStyles } from './overrides/switch';
import { Toggle, toggleStyles } from './overrides/toggle';
import { Label, labelStyles } from './overrides/label';

import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Switch = ({
	name,
	label,
	checked: isChecked,
	onChange,
	size,
	block,
	disabled,
	overrides: componentOverrides,
	...rest
}) => {
	const [switchId] = useState(`switch-${useInstanceId()}`);

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const [checked, setChecked] = useState(isChecked);

	const defaultOverrides = {
		Switch: {
			styles: switchStyles,
			component: SwitchWrapper,
			attributes: () => null,
		},
		Label: {
			styles: labelStyles,
			component: Label,
			attributes: () => null,
		},
		Toggle: {
			styles: toggleStyles,
			component: Toggle,
			attributes: () => null,
		},
	};

	const state = {
		name,
		label,
		checked,
		onChange,
		size,
		block,
		disabled,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	useEffect(() => {
		setChecked(isChecked);
	}, [isChecked]);

	const handleChange = () => wrapHandlers(onChange, () => setChecked(!checked));

	return (
		<overrides.Switch.component
			htmlFor={switchId}
			name={name}
			label={label}
			checked={checked}
			size={size}
			block={block}
			disabled={disabled}
			{...rest}
			{...overrides.Switch.attributes(state)}
			css={overrides.Switch.styles(state)}
		>
			{/* a11y: input not exposed as an override, contains logic required to function */}
			<input
				type="checkbox"
				id={switchId}
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
			<overrides.Label.component
				name={name}
				label={label}
				checked={checked}
				size={size}
				block={block}
				disabled={disabled}
				{...overrides.Label.attributes(state)}
				css={overrides.Label.styles(state)}
			>
				{label}
			</overrides.Label.component>
			<overrides.Toggle.component
				name={name}
				label={label}
				checked={checked}
				size={size}
				block={block}
				disabled={disabled}
				{...overrides.Toggle.attributes(state)}
				css={overrides.Toggle.styles(state)}
			/>
		</overrides.Switch.component>
	);
};

// ==============================
// Types
// ==============================

Switch.propTypes = {
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
	 * Text to use as the `aria-label` for the switch input
	 */
	assistiveText: PropTypes.string,

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

Switch.defaultProps = {
	size: 'medium',
	checked: false,
};
