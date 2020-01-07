/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, wrapHandlers } from '@westpac/core';
import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { ToggleTextWrapper, toggleTextWrapperStyles } from './overrides/toggleTextWrapper';
import { ToggleText, toggleTextStyles } from './overrides/toggleText';
import { Wrapper, wrapperStyles } from './overrides/wrapper';
import { Toggle, toggleStyles } from './overrides/toggle';
import { Input, inputStyles } from './overrides/input';
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
	flipped,
	toggleText,
	disabled,
	assistiveText,
	overrides: componentOverrides,
	...props
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const [checked, setChecked] = useState(isChecked);

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,

		subComponent: {
			Input: {
				styles: inputStyles,
				component: Input,
				attributes: state => state,
			},
			Label: {
				styles: labelStyles,
				component: Label,
				attributes: state => state,
			},
			Toggle: {
				styles: toggleStyles,
				component: Toggle,
				attributes: state => state,
			},
			ToggleText: {
				styles: toggleTextStyles,
				component: ToggleText,
				attributes: state => state,
			},
			ToggleTextWrapper: {
				styles: toggleTextWrapperStyles,
				component: ToggleTextWrapper,
				attributes: state => state,
			},
		},
	};

	const state = {
		name,
		label,
		onChange,
		size,
		block,
		flipped,
		toggleText,
		disabled,
		assistiveText,
		overrides: componentOverrides,
		checked,
		...props,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	useEffect(() => {
		setChecked(isChecked);
	}, [isChecked]);

	const handleChange = () => wrapHandlers(onChange, () => setChecked(!checked));

	return (
		<overrides.component css={overrides.styles} {...overrides.attributes(state)}>
			<overrides.subComponent.Input.component
				type="checkbox"
				name={name}
				checked={checked}
				aria-label={assistiveText}
				onChange={handleChange(name)}
				disabled={disabled}
				css={overrides.subComponent.Input.styles}
				{...overrides.subComponent.Input.attributes(state)}
			/>
			{label && (
				<overrides.subComponent.Label.component
					css={overrides.subComponent.Label.styles}
					{...overrides.subComponent.Label.attributes(state)}
				>
					{label}
				</overrides.subComponent.Label.component>
			)}
			<overrides.subComponent.Toggle.component
				css={overrides.subComponent.Toggle.styles}
				{...overrides.subComponent.Toggle.attributes(state)}
			>
				{!!toggleText && (
					<Fragment>
						<overrides.subComponent.ToggleText.component
							position={'left'}
							checked={checked}
							css={overrides.toggleTextCSS}
						>
							{toggleText[0]}
						</overrides.subComponent.ToggleText.component>
						<overrides.subComponent.ToggleText.component
							position={'right'}
							checked={!checked}
							css={overrides.toggleTextCSS}
						>
							{toggleText[1]}
						</overrides.subComponent.ToggleText.component>
					</Fragment>
				)}
			</overrides.subComponent.Toggle.component>
		</overrides.component>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
};

Switch.propTypes = {
	/**
	 * Switch input element name
	 */
	name: PropTypes.string,

	/**
	 * Switch label text
	 */
	label: PropTypes.string,

	/**
	 * On/off text.
	 *
	 * This prop takes an array where the first index is the "on" text and second index is the "off" text e.g. "['Yes', 'No']"
	 */
	toggleText: PropTypes.arrayOf(PropTypes.string),

	/**
	 * Switch size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(options.size),
		PropTypes.arrayOf(PropTypes.oneOf(options.size)),
	]),

	/**
	 * Block mode
	 */
	block: PropTypes.bool,

	/**
	 * Reverse the horizontal orientation. Renders the toggle on the left of the label text.
	 */
	flipped: PropTypes.bool,

	/**
	 * Text to use as the `aria-label` for the switch input
	 */
	assistiveText: PropTypes.string,

	/**
	 * Switch on/off state
	 */
	checked: PropTypes.bool,

	/**
	 * Disable the switch
	 */
	disabled: PropTypes.bool,

	/**
	 * The onChange handler for this switch
	 */
	onChange: PropTypes.func,
};

Switch.defaultProps = {
	size: 'medium',
	checked: false,
	toggleText: ['On', 'Off'],
};
