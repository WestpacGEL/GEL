/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId, devWarning } from '@westpac/core';
import { Children, cloneElement, useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { defaultInputGroup } from './overrides/inputGroup';

import { TextInputField } from './TextInputField';
import { After } from './After';
import { Before } from './Before';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const InputGroupContext = createContext();

export const useInputGroupContext = () => {
	const context = useContext(InputGroupContext);

	if (!context) {
		throw new Error('<Before/> and <After/> components should be wrapped in <InputGroup>.');
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
		const { before, after } = data;

		if (before) {
			childrenWithProps.push(
				<Before
					key="before"
					instanceId={`${instanceId}-before`}
					size={size}
					look={look}
					disabled={disabled}
					overrides={componentOverrides}
					{...before}
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
				before={!!before}
				after={!!after}
				{...rest}
			/>
		);
		if (after) {
			childrenWithProps.push(
				<After
					key="after"
					instanceId={`${instanceId}-after`}
					size={size}
					look={look}
					disabled={disabled}
					overrides={componentOverrides}
					{...after}
				/>
			);
		}
	} else {
		Children.map(children, (child) => {
			if (child.type.displayName === 'Before' && !textInputFieldAdded) {
				childrenWithProps.push(
					cloneElement(child, {
						instanceId: `${instanceId}-before`,
						size,
						look,
						disabled,
						overrides: componentOverrides,
						key: 'before',
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
						before={true}
						after={length > 1}
						{...rest}
					/>
				);
				textInputFieldAdded = true;
			} else if (child.type.displayName === 'After' && !textInputFieldAdded) {
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
						before={false}
						after={true}
						{...rest}
					/>
				);
				childrenWithProps.push(
					cloneElement(child, {
						instanceId: `${instanceId}-after`,
						size,
						look,
						disabled,
						overrides: componentOverrides,
						key: 'after',
					})
				);
				textInputFieldAdded = true;
			} else if (child.type.displayName === 'After' || child.type.displayName === 'Before') {
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
					`<InputGroup /> only accepts <Before /> or <After /> as children. But found "<${
						child.type.name || child.type
					}/>"`
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
	label: PropTypes.string,

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
		before: PropTypes.shape({
			type: PropTypes.oneOf(['text', 'button', 'select']).isRequired,
			data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
			onClick: PropTypes.func,
		}),
		after: PropTypes.shape({
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
