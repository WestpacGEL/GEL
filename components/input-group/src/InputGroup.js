/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId, devWarning } from '@westpac/core';
import { Children, cloneElement, useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { defaultInputGroup } from './overrides/inputGroup';
import { defaultLabel } from './overrides/label';
import { defaultTextInput } from './overrides/textInput';

import { Right } from './Right';
import { Left } from './Left';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const InputGroupContext = createContext();

export const useInputGroupContext = () => {
	const context = useContext(InputGroupContext);

	if (!context) {
		throw new Error('<Left/> and <Right/> components should be wrapped in <InputGroup>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const InputGroup = ({
	name,
	label,
	size,
	data,
	invalid,
	disabled,
	readOnly,
	look,
	instanceIdPrefix,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		InputGroup: defaultInputGroup,
		Label: defaultLabel,
		TextInput: defaultTextInput,
	};

	const [instanceId, setInstanceId] = useState(instanceIdPrefix);

	useEffect(() => {
		if (!instanceIdPrefix) {
			setInstanceId(`gel-input-group-${useInstanceId()}`);
		}
	}, [instanceIdPrefix]);

	const state = {
		name,
		label,
		size,
		data,
		invalid,
		disabled,
		readOnly,
		look,
		instanceId,
		overrides: componentOverrides,
		...rest,
	};

	const {
		InputGroup: {
			component: InputGroup,
			styles: inputGroupStyles,
			attributes: inputGroupAttributes,
		},
		Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
		TextInput: { component: TextInput, styles: textInputStyles, attributes: textInputAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	let textInputAdded = false;
	const childrenWithProps = [];
	const length = Children.count(children);

	if (data) {
		const { left, right } = data;

		if (left) {
			childrenWithProps.push(
				<Left
					key="left"
					look={look}
					disabled={disabled}
					size={size}
					overrides={componentOverrides}
					{...left}
				/>
			);
		}
		childrenWithProps.push(
			<Label key="label1" state={state} css={labelStyles(state)} {...labelAttributes(state)}>
				{label}
			</Label>,
			<TextInput
				key="textinput1"
				{...rest}
				state={state}
				css={{ '&&': textInputStyles({ ...state, left: !!left, right: !!right }) }}
				{...textInputAttributes({
					...state,
					id: `${instanceId}-textinput`,
					left: !!left,
					right: !!right,
				})}
			/>
		);
		if (right) {
			childrenWithProps.push(
				<Right
					key="right"
					look={look}
					disabled={disabled}
					size={size}
					overrides={componentOverrides}
					{...right}
				/>
			);
		}
	} else {
		Children.map(children, child => {
			if (child.type.displayName === 'Left' && !textInputAdded) {
				childrenWithProps.push(
					cloneElement(child, { look, size, disabled, overrides: componentOverrides, key: 'left' })
				);
				childrenWithProps.push(
					<Label
						key="label1"
						state={state}
						css={labelStyles(state)}
						{...labelAttributes({ ...state, htmlFor: `${instanceId}-textinput` })}
					>
						{label}
					</Label>,
					<TextInput
						key="textinput1"
						{...rest}
						state={state}
						css={{ '&&': textInputStyles({ ...state, left: true, right: length > 1 }) }}
						{...textInputAttributes({
							...state,
							id: `${instanceId}-textinput`,
							left: true,
							right: length > 1,
						})}
					/>
				);
				textInputAdded = true;
			} else if (child.type.displayName === 'Right' && !textInputAdded) {
				childrenWithProps.push(
					<Label
						key="label2"
						state={state}
						css={labelStyles(state)}
						{...labelAttributes({ ...state, htmlFor: `${instanceId}-textinput` })}
					>
						{label}
					</Label>,
					<TextInput
						key="textinput2"
						state={state}
						{...rest}
						css={{ '&&': textInputStyles({ ...state, left: false, right: true }) }}
						{...textInputAttributes({
							...state,
							id: `${instanceId}-textinput`,
							left: false,
							right: true,
						})}
					/>
				);
				childrenWithProps.push(
					cloneElement(child, { look, size, disabled, overrides: componentOverrides, key: 'right' })
				);
				textInputAdded = true;
			} else if (child.type.displayName === 'Right' || child.type.displayName === 'Left') {
				childrenWithProps.push(
					cloneElement(child, { look, size, disabled, overrides: componentOverrides, key: 'other' })
				);
			} else {
				devWarning(
					true,
					`<InputGroup /> only accepts <Left /> or <Right /> as children. But found "<${child.type
						.name || child.type}/>"`
				);
			}
		});
	}

	return (
		<InputGroupContext.Provider value={{ state }}>
			<InputGroup state={state} {...inputGroupAttributes(state)} css={inputGroupStyles(state)}>
				{childrenWithProps}
			</InputGroup>
		</InputGroupContext.Provider>
	);
};

// ==============================
// Types
// ==============================

InputGroup.propTypes = {
	/**
	 * The name of the input field
	 */
	name: PropTypes.string,

	/**
	 * The label text for the input field
	 */
	label: PropTypes.string.isRequired,

	/**
	 * InputGroup size
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,

	/**
	 * Data driven
	 */
	data: PropTypes.shape({
		left: PropTypes.shape({
			type: PropTypes.oneOf(['text', 'button', 'select']).isRequired,
			data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
			onClick: PropTypes.func,
		}),
		right: PropTypes.shape({
			type: PropTypes.oneOf(['text', 'button', 'select']).isRequired,
			data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
			onClick: PropTypes.func,
		}),
	}),

	/**
	 * Invalid input mode
	 */
	invalid: PropTypes.bool.isRequired,

	/**
	 * Disabled input mode
	 */
	disabled: PropTypes.bool.isRequired,

	/**
	 * Read only mode
	 */
	readOnly: PropTypes.bool,

	/**
	 * The look of the component
	 */
	look: PropTypes.oneOf(['primary', 'hero', 'faint']),

	/**
	 * InputGroup children
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		InputGroup: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Text: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Button: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Label: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Select: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

InputGroup.defaultProps = {
	size: 'medium',
	invalid: false,
	disabled: false,
};
