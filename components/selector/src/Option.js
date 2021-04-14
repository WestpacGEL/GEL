/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId, getLabel } from '@westpac/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { defaultButton } from './overrides/button';
import { defaultOption } from './overrides/option';
import { defaultContent } from './overrides/content';
import { defaultPictogram } from './overrides/pictogram';
import { defaultIcon } from './overrides/icon';
import { defaultText } from './overrides/text';
import { defaultLabel } from './overrides/label';
import { defaultHint } from './overrides/hint';
import { defaultNextIndicator } from './overrides/nextIndicator';

import { useSelectorContext } from './Selector';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Option = ({
	name,
	value,
	pictogram,
	icon,
	nextIndicator,
	onChange,
	checked,
	disabled,
	hint,
	children,
	overrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useSelectorContext();
	const [optionId] = useState(`selector-option-${useInstanceId()}`);
	const [hintId] = useState(`selector-hint-${useInstanceId()}`);

	const defaultOverrides = {
		Option: defaultOption,
		Button: defaultButton,
		Content: defaultContent,
		Pictogram: defaultPictogram,
		Icon: defaultIcon,
		Text: defaultText,
		Label: defaultLabel,
		Hint: defaultHint,
		NextIndicator: defaultNextIndicator,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		name,
		value,
		pictogram,
		icon,
		nextIndicator,
		onChange,
		checked,
		disabled,
		hint,
		hintId,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Option: { component: Option, styles: optionStyles, attributes: optionAttributes },
		Button: { component: Button, styles: buttonStyles, attributes: buttonAttributes },
		Content: { component: Content, styles: contentStyles, attributes: contentAttributes },
		Pictogram: { component: Pictogram, styles: pictogramStyles, attributes: pictogramAttributes },
		Icon: { component: Icon, styles: iconStyles, attributes: iconAttributes },
		Text: { component: Text, styles: textStyles, attributes: textAttributes },
		Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
		Hint: { component: Hint, styles: hintStyles, attributes: hintAttributes },
		NextIndicator: {
			component: NextIndicator,
			styles: nextIndicatorStyles,
			attributes: nextIndicatorAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Option
			{...rest}
			state={state}
			{...optionAttributes({ ...state, optionId })}
			css={optionStyles(state)}
		>
			{/* a11y: input not exposed as an override, contains logic required to function */}
			<input
				type="radio"
				id={optionId}
				name={name}
				value={value}
				onChange={(event) => onChange(event, value)}
				checked={checked}
				disabled={disabled}
				css={{
					label: getLabel('selector-input'),
					position: 'absolute',
					zIndex: '-1',
					opacity: 0,
				}}
			/>
			<Button state={state} {...buttonAttributes(state)} css={buttonStyles(state)}>
				<Content state={state} {...contentAttributes(state)} css={contentStyles(state)}>
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
						</Label>
						{hint && (
							<Hint state={state} {...hintAttributes(state)} css={hintStyles(state)}>
								{hint}
							</Hint>
						)}
					</Text>
				</Content>
				{nextIndicator && (
					<NextIndicator
						state={state}
						{...nextIndicatorAttributes(state)}
						css={nextIndicatorStyles(state)}
					/>
				)}
			</Button>
		</Option>
	);
};

// ==============================
// Types
// ==============================

Option.propTypes = {
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
		Label: PropTypes.shape({
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

export const defaultProps = {
	checked: false,
};

Option.defaultProps = defaultProps;
