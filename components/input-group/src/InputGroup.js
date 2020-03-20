/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, devWarning } from '@westpac/core';
import { Children, cloneElement, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { defaultInputGroup } from './overrides/inputGroup';
import { defaultText } from './overrides/text';

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
	size,
	data,
	invalid,
	disabled,
	readOnly,
	look,
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
		Text: defaultText,
	};

	const state = {
		name,
		size,
		data,
		invalid,
		disabled,
		readOnly,
		look,
		overrides: componentOverrides,
		...rest,
	};

	const {
		InputGroup: {
			component: InputGroup,
			styles: inputGroupStyles,
			attributes: inputGroupAttributes,
		},
		Text: { component: Text, styles: textStyles, attributes: textAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	let textFieldAdded = false;
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
			<Text
				key="textinput1"
				{...rest}
				state={state}
				css={textStyles({ ...state, left: !!left, right: !!right })}
				{...textAttributes({ ...state, left: !!left, right: !!right })}
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
			if (child.type.displayName === 'Left' && !textFieldAdded) {
				childrenWithProps.push(
					cloneElement(child, { look, size, disabled, overrides: componentOverrides, key: 'left' })
				);
				childrenWithProps.push(
					<Text
						key="textinput1"
						{...rest}
						state={state}
						css={textStyles({ ...state, left: true, right: length > 1 })}
						{...textAttributes({ ...state, left: true, right: length > 1 })}
					/>
				);
				textFieldAdded = true;
			} else if (child.type.displayName === 'Right' && !textFieldAdded) {
				childrenWithProps.push(
					<Text
						key="textinput2"
						state={state}
						{...rest}
						css={textStyles({ ...state, left: false, right: true })}
						{...textAttributes({ ...state, left: false, right: true })}
					/>
				);
				childrenWithProps.push(
					cloneElement(child, { look, size, disabled, overrides: componentOverrides, key: 'right' })
				);
				textFieldAdded = true;
			} else if (child.type.displayName === 'Right' || child.type.displayName === 'Left') {
				childrenWithProps.push(
					cloneElement(child, { look, size, disabled, overrides: componentOverrides, key: 'other' })
				);
			} else {
				devWarning(
					true,
					`The input-group only accepts a Left or Right component as children. But found "<${child
						.type.name || child.type}/>"`
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
	 * InputGroup size
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,

	/**
	 * Data driven
	 */
	data: PropTypes.shape({
		left: PropTypes.shape({
			type: PropTypes.oneOf(['label', 'button', 'select']).isRequired,
			data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
			onClick: PropTypes.func,
		}),
		right: PropTypes.shape({
			type: PropTypes.oneOf(['label', 'button', 'select']).isRequired,
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
