import PropTypes from 'prop-types';
import {
	jsx,
	useBrand,
	overrideReconciler,
	devWarning,
	asArray,
	useManagedState,
} from '@westpac/core';
import React, {
	Children,
	useContext,
	createContext,
	cloneElement,
	useId,
	useMemo,
	useCallback,
} from 'react';

import { defaultFormCheck } from './overrides/formCheck';

import { Option } from './Option';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const FormCheckContext = createContext<any>(null);

export const useFormCheckContext = () => {
	const context = useContext(FormCheckContext) || {};
	return context;
};

export interface FormCheckProps {
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * Form check type
	 */
	type: 'checkbox' | 'radio';
	/**
	 * The form check input element’s name
	 */
	name: string;
	/**
	 * Form check size.
	 */
	size: 'medium' | 'large';
	/**
	 * To inline the element
	 */
	inline: boolean;
	/**
	 * Disable all Form check options
	 */
	disabled?: boolean;
	/**
	 * The data prop shape
	 */
	data?: {
		value?: React.ReactNode;
		text?: string;
		hint?: React.ReactNode;
	}[];
	/**
	 * value checked
	 */
	value?: React.ReactNode | unknown[];
	/**
	 * The options already checked
	 */
	defaultValue?: React.ReactNode | unknown[];
	/**
	 * A function called on change
	 */
	onChange?: (...args: unknown[]) => unknown;
	/**
	 * Form check item(s)
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		FormCheck?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Option?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Label?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const FormCheck = ({
	instanceId,
	type = 'checkbox',
	name,
	size = 'medium',
	value,
	inline = false,
	disabled,
	defaultValue,
	data,
	children,
	onChange = () => {},
	overrides: componentOverrides,
	...rest
}: FormCheckProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const valueAsArray = value ? asArray(value) : undefined;
	const defaultValueAsArray = defaultValue ? asArray(defaultValue) : [];

	devWarning(
		type === 'radio' && defaultValueAsArray.length > 1,
		'The form-check as radio may only have one "current" item set.'
	);

	const [checked, setChecked] = useManagedState(valueAsArray, defaultValueAsArray, onChange);
	const _id = useId();
	const id = useMemo(() => instanceId || `gel-form-check-${_id}`, [_id, instanceId]);

	const defaultOverrides = {
		FormCheck: defaultFormCheck,
	};

	const handleChange = useCallback(
		(_: any, value: any, wasChecked: boolean) => {
			if (type === 'radio') {
				setChecked(asArray(value));
			} else {
				if (wasChecked) {
					setChecked(checked.filter((item: any) => item !== value));
				} else {
					setChecked([...checked, value]);
				}
			}
		},
		[checked, setChecked, type]
	);

	const state = {
		id,
		type,
		name,
		size,
		inline,
		disabled,
		defaultValue,
		data,
		checked,
		onChange: handleChange,
		overrides: componentOverrides,
		...rest,
	};

	const {
		FormCheck: { component: FormCheck, styles: formCheckStyles, attributes: formCheckAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	let allChildren = [];
	if (data) {
		data.map(({ text, ...rest }, index) => {
			allChildren.push(
				<Option key={index} index={index} {...rest}>
					{text}
				</Option>
			);
		});
	} else {
		allChildren = Children.map(children, (child, index) => {
			return cloneElement(child, {
				index,
			});
		});
	}

	return (
		<FormCheckContext.Provider value={state}>
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

FormCheck.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Form check item(s)
	 */
	children: PropTypes.node,
	/**
	 * The data prop shape
	 */
	data: PropTypes.arrayOf(
		PropTypes.shape({
			hint: PropTypes.node,
			text: PropTypes.string,
			value: PropTypes.node,
		})
	),
	/**
	 * The options already checked
	 */
	defaultValue: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.element,
		PropTypes.number,
		PropTypes.shape({
			'__@iterator': PropTypes.func.isRequired,
		}),
		PropTypes.string,
		PropTypes.bool,
	]),
	/**
	 * Disable all Form check options
	 */
	disabled: PropTypes.bool,
	/**
	 * To inline the element
	 */
	inline: PropTypes.bool.isRequired,
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * The form check input element’s name
	 */
	name: PropTypes.string.isRequired,
	/**
	 * A function called on change
	 */
	onChange: PropTypes.func,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		FormCheck: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Label: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Option: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Form check size.
	 */
	size: PropTypes.oneOf(['large', 'medium']).isRequired,
	/**
	 * Form check type
	 */
	type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
	/**
	 * value checked
	 */
	value: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.element,
		PropTypes.number,
		PropTypes.shape({
			'__@iterator': PropTypes.func.isRequired,
		}),
		PropTypes.string,
		PropTypes.bool,
	]),
};

FormCheck.defaultProps = { inline: false, onChange: () => {}, size: 'medium', type: 'checkbox' };
