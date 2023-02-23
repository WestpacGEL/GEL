import PropTypes from 'prop-types';
import { jsx, useBrand, getLabel, overrideReconciler } from '@westpac/core';
import React, { forwardRef, ReactNode, useId, useMemo } from 'react';

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

export interface OptionProps {
	/**
	 * index
	 */
	index?: number;
	/**
	 * className
	 */
	className?: string;
	/**
	 * Seletor option id
	 */
	id?: string;

	/**
	 * Selector option value
	 */
	value?: string;

	/**
	 * Selector href value
	 */
	href?: string;

	/**
	 * Pictogram graphic
	 */
	pictogram?: (...args: unknown[]) => unknown;

	/**
	 * Icon graphic
	 */
	icon?: (...args: unknown[]) => unknown;

	/**
	 * Secondary label text
	 */
	secondaryLabel?: ReactNode;

	/**
	 * Check the Selector option
	 */
	checked?: boolean;

	/**
	 * Disable the Selector option
	 */
	disabled?: boolean;

	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;

	/**
	 * Selector type
	 */
	type?: 'radio' | 'checkbox';

	/**
	 * The Selector input element’s name
	 */
	name?: string;

	/**
	 * Hint text
	 */
	hint?: ReactNode;

	/**
	 * A function called on change
	 */
	onChange?: (...args: unknown[]) => unknown;

	/**
	 * Selector option label text
	 */
	children: ReactNode;

	overrides?: {
		Option?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		OptionBtn?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Pictogram?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Icon?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Text?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Label?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		LabelSecondary?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Hint?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		IndicatorCheck?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		IndicatorNext?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Option = forwardRef(
	(
		{
			index,
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
		}: OptionProps,
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

		const _id = useId();
		const selectorId = useMemo(() => id || `gel-selector-${_id}`, [_id, id]);
		const optionId = useMemo(() => `${selectorId}-option-${index}`, [index, selectorId]);
		const hintId = useMemo(() => `${optionId}-hint`, [optionId]);

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
Option.displayName = 'Option';
// ==============================
// Types
// ==============================

Option.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Check the Selector option
	 */
	checked: PropTypes.bool,
	/**
	 * Selector option label text
	 */
	children: PropTypes.node,
	/**
	 * className
	 */
	className: PropTypes.string,
	/**
	 * Hint text
	 */
	hint: PropTypes.node,
	/**
	 * Selector href value
	 */
	href: PropTypes.string,
	/**
	 * Icon graphic
	 */
	icon: PropTypes.func,
	/**
	 * index
	 */
	index: PropTypes.number,
	overrides: PropTypes.shape({
		Hint: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Icon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		IndicatorCheck: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		IndicatorNext: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Label: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		LabelSecondary: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Option: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		OptionBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Pictogram: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Text: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Pictogram graphic
	 */
	pictogram: PropTypes.func,
	/**
	 * Secondary label text
	 */
	secondaryLabel: PropTypes.node,
	/**
	 * Selector option value
	 */
	value: PropTypes.string,
};
