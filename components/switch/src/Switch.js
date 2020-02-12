/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, wrapHandlers } from '@westpac/core';
import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Switch as SwitchWrapper, switchStyles } from './overrides/switch';
import { ToggleText, toggleTextStyles } from './overrides/toggleText';
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
	...rest
}) => {
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
		Input: {
			styles: inputStyles,
			component: Input,
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
		ToggleText: {
			styles: toggleTextStyles,
			component: ToggleText,
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
		flipped,
		toggleText,
		disabled,
		assistiveText,
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
			name={name}
			label={label}
			checked={checked}
			size={size}
			block={block}
			flipped={flipped}
			toggleText={toggleText}
			disabled={disabled}
			assistiveText={assistiveText}
			{...rest}
			{...overrides.Switch.attributes(state)}
			css={overrides.Switch.styles(state)}
		>
			<overrides.Input.component
				type="checkbox"
				aria-label={assistiveText}
				onChange={handleChange(name)}
				name={name}
				label={label}
				checked={checked}
				size={size}
				block={block}
				flipped={flipped}
				toggleText={toggleText}
				disabled={disabled}
				assistiveText={assistiveText}
				{...overrides.Input.attributes(state)}
				css={overrides.Input.styles(state)}
			/>
			{label && (
				<overrides.Label.component
					name={name}
					label={label}
					checked={checked}
					size={size}
					block={block}
					flipped={flipped}
					toggleText={toggleText}
					disabled={disabled}
					assistiveText={assistiveText}
					{...overrides.Label.attributes(state)}
					css={overrides.Label.styles(state)}
				>
					{label}
				</overrides.Label.component>
			)}
			<overrides.Toggle.component
				name={name}
				label={label}
				checked={checked}
				size={size}
				block={block}
				flipped={flipped}
				toggleText={toggleText}
				disabled={disabled}
				assistiveText={assistiveText}
				{...overrides.Toggle.attributes(state)}
				css={overrides.Toggle.styles(state)}
			>
				{!!toggleText && (
					<Fragment>
						<overrides.ToggleText.component
							position="left"
							name={name}
							label={label}
							checked={checked}
							size={size}
							block={block}
							flipped={flipped}
							toggleText={toggleText}
							disabled={disabled}
							assistiveText={assistiveText}
							{...overrides.ToggleText.attributes({ ...state, checked, position: 'left' })}
							css={overrides.ToggleText.styles({ ...state, checked, position: 'left' })}
						>
							{toggleText[0]}
						</overrides.ToggleText.component>
						<overrides.ToggleText.component
							position="right"
							name={name}
							label={label}
							checked={!checked}
							size={size}
							block={block}
							flipped={flipped}
							toggleText={toggleText}
							disabled={disabled}
							assistiveText={assistiveText}
							{...overrides.ToggleText.attributes({
								...state,
								checked: !checked,
								position: 'right',
							})}
							css={overrides.ToggleText.styles({ ...state, checked: !checked, position: 'right' })}
						>
							{toggleText[1]}
						</overrides.ToggleText.component>
					</Fragment>
				)}
			</overrides.Toggle.component>
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
	label: PropTypes.string,

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
	 * Reverse the horizontal orientation. Renders the toggle on the left of the label text.
	 */
	flipped: PropTypes.bool,

	/**
	 * On/off text.
	 *
	 * This prop takes an array where the first index is the "on" text and second index is the "off" text e.g. "['Yes', 'No']"
	 */
	toggleText: PropTypes.arrayOf(PropTypes.string),

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
		Input: PropTypes.shape({
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
		ToggleText: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Switch.defaultProps = {
	size: 'medium',
	checked: false,
	toggleText: ['On', 'Off'],
};
