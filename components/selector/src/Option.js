/** @jsx jsx */

import { jsx, useBrand, getLabel, overrideReconciler, useInstanceId } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultOptionBtn } from './overrides/optionBtn';
import { defaultOption } from './overrides/option';
import { defaultPictogram } from './overrides/pictogram';
import { defaultIcon } from './overrides/icon';
import { defaultText } from './overrides/text';
import { defaultLabelWrapper } from './overrides/labelWrapper';
import { defaultLabel } from './overrides/label';
import { defaultPrimaryLabel } from './overrides/primaryLabel';
import { defaultSecondaryLabel } from './overrides/secondaryLabel';
import { defaultHint } from './overrides/hint';
import { defaultIndicator } from './overrides/indicator';

import { useSelectorContext } from './Selector';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Option = ({
	value,
	pictogram,
	icon,
	secondaryLabel,
	checked: checkedProp,
	hint,
	className,
	children,
	overrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const {
		instanceId,
		data,
		checked: ctxChecked,
		overrides: ctxOverrides,
		defaultValue: _,
		type = 'radio',
		name,
		nextIndicator,
		iconSize,
		pictogramWidth,
		pictogramHeight,
		disabled,
		onChange,
		toggleCheck,
		...restCtx
	} = useSelectorContext();

	const optionId = `${instanceId}-option-${useInstanceId()}`;
	const hintId = `${optionId}-hint`;

	const defaultOverrides = {
		Option: defaultOption,
		OptionBtn: defaultOptionBtn,
		Pictogram: defaultPictogram,
		Icon: defaultIcon,
		Text: defaultText,
		LabelWrapper: defaultLabelWrapper,
		Label: defaultLabel,
		PrimaryLabel: defaultPrimaryLabel,
		SecondaryLabel: defaultSecondaryLabel,
		Hint: defaultHint,
		Indicator: defaultIndicator,
	};

	const componentOverrides = overrides || ctxOverrides;
	const checked = ctxChecked ? ctxChecked.includes(value) : checkedProp;

	const state = {
		optionId,
		value,
		pictogram,
		icon,
		secondaryLabel,
		nextIndicator,
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
		LabelWrapper: {
			component: LabelWrapper,
			styles: labelWrapperStyles,
			attributes: labelWrapperAttributes,
		},
		Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
		PrimaryLabel: {
			component: PrimaryLabel,
			styles: primaryLabelStyles,
			attributes: primaryLabelAttributes,
		},
		SecondaryLabel: {
			component: SecondaryLabel,
			styles: secondaryLabelStyles,
			attributes: secondaryLabelAttributes,
		},
		Hint: { component: Hint, styles: hintStyles, attributes: hintAttributes },
		Indicator: { component: Indicator, styles: indicatorStyles, attributes: indicatorAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Option
			className={className}
			state={state}
			{...optionAttributes(state)}
			css={optionStyles(state)}
		>
			{/* a11y: input not exposed as an override, contains logic required to function */}
			<input
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
					zIndex: 0,
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
			<OptionBtn state={state} {...optionBtnAttributes(state)} css={optionBtnStyles(state)}>
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
					<LabelWrapper state={state} {...labelWrapperAttributes} css={labelWrapperStyles(state)}>
						<Label state={state} {...labelAttributes(state)} css={labelStyles(state)}>
							<PrimaryLabel
								state={state}
								{...primaryLabelAttributes(state)}
								css={primaryLabelStyles(state)}
							>
								{children}
							</PrimaryLabel>
							{secondaryLabel && (
								<SecondaryLabel
									state={state}
									{...secondaryLabelAttributes(state)}
									css={secondaryLabelStyles(state)}
								>
									{secondaryLabel}
								</SecondaryLabel>
							)}
						</Label>
						<Indicator state={state} {...indicatorAttributes(state)} css={indicatorStyles(state)} />
					</LabelWrapper>
					{hint && (
						<Hint state={state} {...hintAttributes(state)} css={hintStyles(state)}>
							{hint}
						</Hint>
					)}
				</Text>
			</OptionBtn>
		</Option>
	);
};

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
	secondaryLabel: PropTypes.string,

	/**
	 * Check the Selector option
	 */
	checked: PropTypes.bool,

	/**
	 * Disable the Selector option
	 */
	disabled: PropTypes.bool,

	/**
	 * Define an id prefix for internal elements
	 */
	instanceIdPrefix: PropTypes.string,

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
		Button: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Option: PropTypes.shape({
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
		LabelWrapper: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Label: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		PrimaryLabel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		SecondaryLabel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Hint: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		NextIndicator: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Option.defaultProps = {};
