/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, wrapHandlers, useInstanceId } from '@westpac/core';
import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { defaultSwitchRoot } from './overrides/root';
import { defaultToggle } from './overrides/toggle';
import { defaultLabel } from './overrides/label';

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
		SwitchRoot: defaultSwitchRoot, // First sub-component will always be called the <component-name>Root component
		Label: defaultLabel,
		Toggle: defaultToggle,
	};

	/* 
	The state object contains everything that is needed for the component. It contains in this order:
		1. Internal component state variables e.g. useState
		2. Passed props
		3. Component overrides
		4. Rest props
	- This will be spread onto components as a state prop
	- Any props that we know that are explicitly being used in a sub-component or that we want to force on a component (e.g. a11y) we manually add to pass it
	- Issues with passing all props to children is if the child component is using a variable with the same name 
	*/
	const state = {
		// internal state
		checked,

		// props
		name,
		label,
		onChange,
		size,
		block,
		disabled,

		// component overrides
		overrides: componentOverrides,

		// rest props
		...rest,
	};

	// destructure reconciled component items, makes for cleaner and easier to read code in return
	const {
		SwitchRoot: {
			component: SwitchRoot,
			styles: switchRootStyles,
			attributes: switchRootAttributes,
		},
		Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
		Toggle: { component: Toggle, styles: toggleStyles, attributes: toggleAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	useEffect(() => {
		setChecked(isChecked);
	}, [isChecked]);

	const handleChange = () => wrapHandlers(onChange, () => setChecked(!checked));

	/* 
	Component props structure
	1. Known needed props
	2. a11y props
	3. state prop
	4. rest if applicable
	*/
	return (
		<SwitchRoot
			htmlFor={switchId} //a11y: use explicit association
			state={state}
			{...rest}
			{...switchRootAttributes(state)}
			css={switchRootStyles(state)}
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
			<Label state={state} {...labelAttributes(state)} css={labelStyles(state)}>
				{label}
			</Label>
			<Toggle state={state} {...toggleAttributes(state)} css={toggleStyles(state)} />
		</SwitchRoot>
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
