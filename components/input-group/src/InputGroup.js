/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId, devWarning } from '@westpac/core';
import { Children, cloneElement, useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { defaultInputGroup } from './overrides/inputGroup';

import { TextInputField } from './TextInputField';
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
	instanceIdPrefix,
	name,
	label,
	size,
	look,
	invalid,
	disabled,
	readOnly,
	data,
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
	};

	const [instanceId, setInstanceId] = useState(instanceIdPrefix);

	useEffect(() => {
		if (!instanceIdPrefix) {
			setInstanceId(`gel-input-group-${useInstanceId()}`);
		}
	}, [instanceIdPrefix]);

	const state = {
		instanceId,
		name,
		label,
		size,
		look,
		invalid,
		disabled,
		readOnly,
		data,
		overrides: componentOverrides,
		...rest,
	};

	const {
		InputGroup: {
			component: InputGroup,
			styles: inputGroupStyles,
			attributes: inputGroupAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	let textInputFieldAdded = false;
	const childrenWithProps = [];
	const length = Children.count(children);

	if (data) {
		const { left, right } = data;

		if (left) {
			childrenWithProps.push(
				<Left
					key="left"
					instanceId={`${instanceId}-left`}
					size={size}
					look={look}
					disabled={disabled}
					overrides={componentOverrides}
					{...left}
				/>
			);
		}
		childrenWithProps.push(
			<TextInputField
				key="textinput1"
				instanceId={`${instanceId}-textinput`}
				name={name}
				label={label}
				size={size}
				invalid={invalid}
				disabled={disabled}
				readOnly={readOnly}
				left={!!left}
				right={!!right}
				{...rest}
			/>
		);
		if (right) {
			childrenWithProps.push(
				<Right
					key="right"
					instanceId={`${instanceId}-right`}
					size={size}
					look={look}
					disabled={disabled}
					overrides={componentOverrides}
					{...right}
				/>
			);
		}
	} else {
		Children.map(children, child => {
			if (child.type.displayName === 'Left' && !textInputFieldAdded) {
				childrenWithProps.push(
					cloneElement(child, {
						instanceId: `${instanceId}-left`,
						size,
						look,
						disabled,
						overrides: componentOverrides,
						key: 'left',
					})
				);
				childrenWithProps.push(
					<TextInputField
						key="textinput1"
						instanceId={`${instanceId}-textinput`}
						name={name}
						label={label}
						size={size}
						invalid={invalid}
						disabled={disabled}
						readOnly={readOnly}
						left={true}
						right={length > 1}
						{...rest}
					/>
				);
				textInputFieldAdded = true;
			} else if (child.type.displayName === 'Right' && !textInputFieldAdded) {
				childrenWithProps.push(
					<TextInputField
						key="textinput2"
						instanceId={`${instanceId}-textinput`}
						name={name}
						label={label}
						size={size}
						invalid={invalid}
						disabled={disabled}
						readOnly={readOnly}
						left={false}
						right={true}
						{...rest}
					/>
				);
				childrenWithProps.push(
					cloneElement(child, {
						instanceId: `${instanceId}-right`,
						size,
						look,
						disabled,
						overrides: componentOverrides,
						key: 'right',
					})
				);
				textInputFieldAdded = true;
			} else if (child.type.displayName === 'Right' || child.type.displayName === 'Left') {
				childrenWithProps.push(
					cloneElement(child, {
						instanceId: `${instanceId}-other`,
						size,
						look,
						disabled,
						overrides: componentOverrides,
						key: 'other',
					})
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
	 * The look of the component
	 */
	look: PropTypes.oneOf(['primary', 'hero', 'faint']),

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
		TextInput: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Select: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Button: PropTypes.shape({
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
