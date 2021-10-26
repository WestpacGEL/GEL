/** @jsx jsx */

import { jsx, useBrand, getLabel, overrideReconciler, useInstanceId } from '@westpac/core';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { defaultOptionBtn } from './overrides/optionBtn';
import { defaultOption } from './overrides/option';
import { defaultPictogram } from './overrides/pictogram';
import { defaultIcon } from './overrides/icon';
import { defaultText } from './overrides/text';
import { defaultLabel } from './overrides/label';
import { defaultLabelSecondary } from './overrides/labelSecondary';
import { defaultHint } from './overrides/hint';
import { defaultIndicatorNext } from './overrides/indicatorNext';
import { defaultIndicatorCheck } from './overrides/indicatorCheck';

import { useSelectorContext } from './Selector';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Option = forwardRef(
	(
		{
			value,
			href,
			pictogram,
			icon,
			secondaryLabel,
			checked: checkedProp,
			hint,
			className,
			children,
			overrides,
			...rest
		},
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const {
			id,
			type = href ? 'link' : 'radio',
			name,
			iconSize,
			pictogramWidth,
			pictogramHeight,
			disabled,
			defaultValue: _,
			data,
			checked: ctxChecked,
			onChange,
			overrides: ctxOverrides,
			...restCtx
		} = useSelectorContext();
		const selectorId = id || `gel-selector-${useInstanceId()}`;
		const optionId = `${selectorId}-option-${useInstanceId()}`;
		const hintId = `${optionId}-hint`;

		const defaultOverrides = {
			Option: defaultOption,
			OptionBtn: defaultOptionBtn,
			Pictogram: defaultPictogram,
			Icon: defaultIcon,
			Text: defaultText,
			Label: defaultLabel,
			LabelSecondary: defaultLabelSecondary,
			Hint: defaultHint,
			IndicatorCheck: defaultIndicatorCheck,
			IndicatorNext: defaultIndicatorNext,
		};

		const componentOverrides = overrides || ctxOverrides;
		const checked = ctxChecked ? ctxChecked.includes(value) : checkedProp;

		const state = {
			optionId,
			value,
			href,
			pictogram,
			icon,
			secondaryLabel,
			iconSize,
			pictogramWidth,
			pictogramHeight,
			ctxChecked,
			checked,
			onChange,
			type,
			name,
			disabled,
			hint,
			hintId,
			overrides: componentOverrides,
			...rest,
		};

		const {
			Option: { component: Option, styles: optionStyles, attributes: optionAttributes },
			OptionBtn: { component: OptionBtn, styles: optionBtnStyles, attributes: optionBtnAttributes },
			Pictogram: { component: Pictogram, styles: pictogramStyles, attributes: pictogramAttributes },
			Icon: { component: Icon, styles: iconStyles, attributes: iconAttributes },
			Text: { component: Text, styles: textStyles, attributes: textAttributes },
			Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
			LabelSecondary: {
				component: LabelSecondary,
				styles: labelSecondaryStyles,
				attributes: labelSecondaryAttributes,
			},
			Hint: { component: Hint, styles: hintStyles, attributes: hintAttributes },
			IndicatorCheck: {
				component: IndicatorCheck,
				styles: indicatorCheckStyles,
				attributes: indicatorCheckAttributes,
			},
			IndicatorNext: {
				component: IndicatorNext,
				styles: indicatorNextStyles,
				attributes: indicatorNextAttributes,
			},
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		return (
			<Option
				className={className}
				state={state}
				{...optionAttributes(state)}
				css={optionStyles(state)}
			>
				{/* a11y: input not exposed as an override, contains logic required to function */}
				{type === 'radio' || type === 'checkbox' ? (
					<input
						ref={ref}
						id={optionId}
						aria-describedby={hint && hintId}
						onChange={
							disabled
								? null
								: typeof onChange === 'undefined'
								? null
								: (event) => onChange(event, value, checked)
						}
						value={value}
						checked={checked}
						disabled={disabled}
						type={type}
						name={name}
						{...restCtx}
						{...rest}
						css={{
							// Normalize
							// =========

							// Remove the margin in Firefox and Safari.
							// input:
							margin: 0,

							// 1. Add the correct box sizing in IE 10.
							// 2. Remove the padding in IE 10.
							// [type='checkbox'], [type='radio']:
							boxSizing: 'border-box', // 1
							padding: 0, // 2
							// =========

							label: getLabel('selector-option-input'),
							position: 'absolute',
							top: 0,
							left: 0,
							zIndex: 1,
							opacity: 0,
							width: '100%',
							height: '100%',
							cursor: 'pointer',
							appearance: 'none',
							':disabled, fieldset:disabled &': {
								cursor: 'default',
								pointerEvents: 'none',
							},
						}}
					/>
				) : undefined}
				<OptionBtn
					onClick={
						type === 'button' && !disabled ? (event) => onChange(event, value, checked) : undefined
					}
					state={state}
					{...optionBtnAttributes(state)}
					css={optionBtnStyles(state)}
				>
					{pictogram ? (
						<Pictogram
							pictogram={pictogram}
							state={state}
							{...pictogramAttributes(state)}
							css={pictogramStyles(state)}
						/>
					) : icon ? (
						<Icon icon={icon} state={state} {...iconAttributes(state)} css={iconStyles(state)} />
					) : null}
					<Text state={state} {...textAttributes(state)} css={textStyles(state)}>
						<Label state={state} {...labelAttributes(state)} css={labelStyles(state)}>
							{children}
							{secondaryLabel && (
								<LabelSecondary
									state={state}
									{...labelSecondaryAttributes(state)}
									css={labelSecondaryStyles(state)}
								>
									{secondaryLabel}
								</LabelSecondary>
							)}
						</Label>
						{hint && (
							<Hint state={state} {...hintAttributes(state)} css={hintStyles(state)}>
								{hint}
							</Hint>
						)}
					</Text>
					{type === 'button' || type === 'link' ? (
						<IndicatorNext
							state={state}
							{...indicatorNextAttributes(state)}
							css={indicatorNextStyles(state)}
						/>
					) : (
						<IndicatorCheck
							state={state}
							{...indicatorCheckAttributes(state)}
							css={indicatorCheckStyles(state)}
						/>
					)}
				</OptionBtn>
			</Option>
		);
	}
);

// ==============================
// Types
// ==============================

Option.propTypes = {
	/**
	 * Seletor option id
	 */
	id: PropTypes.string,

	/**
	 * Selector option value
	 */
	value: PropTypes.string,

	/**
	 * Selector href value
	 */
	href: PropTypes.string,

	/**
	 * Pictogram graphic
	 */
	pictogram: PropTypes.func,

	/**
	 * Icon graphic
	 */
	icon: PropTypes.func,

	/**
	 * Secondary label text
	 */
	secondaryLabel: PropTypes.node,

	/**
	 * Check the Selector option
	 */
	checked: PropTypes.bool,

	/**
	 * Disable the Selector option
	 */
	disabled: PropTypes.bool,

	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,

	/**
	 * Selector type
	 */
	type: PropTypes.oneOf(['radio', 'checkbox']),

	/**
	 * The Selector input element’s name
	 */
	name: PropTypes.string,

	/**
	 * Hint text
	 */
	hint: PropTypes.node,

	/**
	 * A function called on change
	 */
	onChange: PropTypes.func,

	/**
	 * Selector option label text
	 */
	children: PropTypes.node.isRequired,

	overrides: PropTypes.shape({
		Option: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		OptionBtn: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Pictogram: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Icon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Text: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Label: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		LabelSecondary: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Hint: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		IndicatorCheck: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		IndicatorNext: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Option.defaultProps = {};
