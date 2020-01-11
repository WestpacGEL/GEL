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
	className,
	overrides: componentOverrides,
	...rest
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
		size,
		block,
		flipped,
		toggleText,
		disabled,
		assistiveText,
		overrides: componentOverrides,
		checked,
		...rest,
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
		<overrides.component
			className={className}
			{...overrides.attributes(state)}
			css={overrides.styles}
		>
			<overrides.subComponent.Input.component
				type="checkbox"
				name={name}
				checked={checked}
				aria-label={assistiveText}
				onChange={handleChange(name)}
				disabled={disabled}
				{...overrides.subComponent.Input.attributes(state)}
				css={overrides.subComponent.Input.styles}
			/>
			{label && (
				<overrides.subComponent.Label.component
					{...overrides.subComponent.Label.attributes(state)}
					css={overrides.subComponent.Label.styles}
				>
					{label}
				</overrides.subComponent.Label.component>
			)}
			<overrides.subComponent.Toggle.component
				{...overrides.subComponent.Toggle.attributes(state)}
				css={overrides.subComponent.Toggle.styles}
			>
				{!!toggleText && (
					<Fragment>
						<overrides.subComponent.ToggleText.component
							position={'left'}
							{...overrides.subComponent.ToggleText.attributes({ ...state, checked })}
							css={overrides.subComponent.ToggleText.styles}
						>
							{toggleText[0]}
						</overrides.subComponent.ToggleText.component>
						<overrides.subComponent.ToggleText.component
							position={'right'}
							{...overrides.subComponent.ToggleText.attributes({ ...state, checked: !checked })}
							css={overrides.subComponent.ToggleText.styles}
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

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		subComponent: PropTypes.shape({
			Input: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Label: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Toggle: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			ToggleText: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			ToggleTextWrapper: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Switch.defaultProps = {
	size: 'medium',
	checked: false,
	toggleText: ['On', 'Off'],
};
