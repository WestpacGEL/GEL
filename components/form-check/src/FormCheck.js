/** @jsx jsx */

import {
	jsx,
	useBrand,
	overrideReconciler,
	wrapHandlers,
	useInstanceId,
	devWarning,
	asArray,
} from '@westpac/core';
import { cloneElement, Children, useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { defaultFormCheck } from './overrides/formCheck';

import { Option } from './Option';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const FormCheckContext = createContext();

export const useFormCheckContext = () => {
	const context = useContext(FormCheckContext);

	if (!context) {
		throw new Error('<Option/> components should be wrapped in a <FormCheck>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const FormCheck = ({
	type,
	name,
	size,
	inline,
	disabled,
	defaultValue,
	instanceIdPrefix,
	data,
	children,
	onChange = () => {},
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultValueAsArray = defaultValue ? asArray(defaultValue) : [];

	devWarning(
		type === 'radio' && defaultValueAsArray.length > 1,
		'The form-check as radio may only have one "current" item set.'
	);

	const [checked, setChecked] = useState(defaultValueAsArray);
	const [instanceId, setInstanceId] = useState(instanceIdPrefix);

	// create the prefix for internal IDs
	useEffect(() => {
		if (!instanceIdPrefix) {
			setInstanceId(`gel-form-check-${useInstanceId()}`);
		}
	}, [instanceIdPrefix]);

	const defaultOverrides = {
		FormCheck: defaultFormCheck,
	};

	const state = {
		instanceId,
		type,
		name,
		size,
		inline,
		disabled,
		defaultValue,
		data,
		overrides: componentOverrides,
		...rest,
	};

	const {
		FormCheck: { component: FormCheck, styles: formCheckStyles, attributes: formCheckAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const handleChange = (event, value, wasChecked) => {
		wrapHandlers(
			() => onChange(event, value, wasChecked),
			() => {
				if (type === 'radio') {
					setChecked(asArray(value));
				} else {
					if (wasChecked) {
						setChecked(checked.filter(item => item !== value));
					} else {
						setChecked([...checked, value]);
					}
				}
			}
		)(event);
	};

	let allChildren = [];
	if (data) {
		data.map((props, index) => {
			allChildren.push(
				<Option
					key={index}
					index={index}
					value={props.value}
					checked={props.checked || checked.includes(props.value)}
					handleChange={handleChange}
					type={type}
					name={name}
					name={name}
					size={size}
					inline={inline}
					disabled={props.disabled || disabled}
					instanceIdPrefix={instanceId}
				>
					{props.text}
				</Option>
			);
		});
	} else {
		allChildren = Children.map(children, (child, index) =>
			cloneElement(child, {
				index,
				checked: child.props.checked || checked.includes(child.props.value),
				handleChange,
				type,
				name,
				size,
				inline,
				disabled: child.props.disabled || disabled,
				instanceIdPrefix: instanceId,
			})
		);
	}

	return (
		<FormCheckContext.Provider value={{ state }}>
			<FormCheck
				{...rest}
				state={state}
				{...formCheckAttributes(state)}
				css={formCheckStyles(state)}
			>
				{allChildren}
			</FormCheck>
		</FormCheckContext.Provider>
	);
};

// ==============================
// Types
// ==============================

FormCheck.propTypes = {
	/**
	 * Form check type.
	 */
	type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,

	/**
	 * The form check input element’s name.
	 */
	name: PropTypes.string,

	/**
	 * Form check size.
	 */
	size: PropTypes.oneOf(['medium', 'large']).isRequired,

	/**
	 * To inline the element
	 */
	inline: PropTypes.bool.isRequired,

	/**
	 * Disable all Form check options
	 */
	disabled: PropTypes.bool,

	/**
	 * A function called on change
	 */
	onChange: PropTypes.func,

	/**
	 * The data prop shape
	 */
	data: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.node,
			text: PropTypes.string,
		})
	),

	/**
	 * The options already checked
	 */
	defaultValue: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),

	/**
	 * A function called on change
	 */
	onChange: PropTypes.func,

	/**
	 * Form check item(s)
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		FormCheck: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Option: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Label: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

FormCheck.defaultProps = {
	type: 'checkbox',
	inline: false,
	size: 'medium',
};
