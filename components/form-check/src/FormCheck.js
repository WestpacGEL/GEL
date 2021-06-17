/** @jsx jsx */

import {
	jsx,
	useBrand,
	overrideReconciler,
	useInstanceId,
	devWarning,
	asArray,
	useManagedState,
} from '@westpac/core';
import { Fragment, useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { defaultFormCheck } from './overrides/formCheck';
import { defaultTrigger } from './overrides/trigger';
import { defaultPanel } from './overrides/panel';

import { Option } from './Option';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const FormCheckContext = createContext();

export const useFormCheckContext = () => {
	const context = useContext(FormCheckContext) || {};
	return context;
};

// ==============================
// Component
// ==============================

export const FormCheck = ({
	type,
	name,
	size,
	value,
	inline,
	disabled,
	defaultValue,
	instanceIdPrefix,
	show,
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

	const valueAsArray = value ? asArray(value) : undefined;
	const defaultValueAsArray = defaultValue ? asArray(defaultValue) : [];

	devWarning(
		type === 'radio' && defaultValueAsArray.length > 1,
		'The form-check as radio may only have one "current" item set.'
	);

	const [checked, setChecked] = useManagedState(valueAsArray, defaultValueAsArray, onChange);
	const [instanceId, setInstanceId] = useState(instanceIdPrefix);
	const [isOpen, setIsOpen] = useState(false);

	// create the prefix for internal IDs
	useEffect(() => {
		if (!instanceIdPrefix) {
			setInstanceId(`gel-form-check-${useInstanceId()}`);
		}
	}, [instanceIdPrefix]);

	const defaultOverrides = {
		FormCheck: defaultFormCheck,
		Trigger: defaultTrigger,
		Panel: defaultPanel,
	};

	const handleChange = (event, value, wasChecked) => {
		if (type === 'radio') {
			setChecked(asArray(value));
		} else {
			if (wasChecked) {
				setChecked(checked.filter((item) => item !== value));
			} else {
				setChecked([...checked, value]);
			}
		}
	};

	const state = {
		instanceId,
		type,
		name,
		size,
		inline,
		disabled,
		defaultValue,
		show,
		isOpen,
		data,
		checked,
		onChange: handleChange,
		overrides: componentOverrides,
		...rest,
	};

	const {
		FormCheck: { component: FormCheck, styles: formCheckStyles, attributes: formCheckAttributes },
		Trigger: { component: Trigger, styles: triggerStyles, attributes: triggerAttributes },
		Panel: { component: Panel, styles: panelStyles, attributes: panelAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const handleOpen = (event) => {
		setIsOpen((currentState) => !currentState);
	};

	let allChildren = [];
	if (data) {
		data.map(({ text, ...rest }, index) => {
			allChildren.push(
				<Option key={index} {...rest}>
					{text}
				</Option>
			);
		});
	} else {
		allChildren = children;
	}

	const revealCount = allChildren.length - show;
	state.revealCount = revealCount;

	return (
		<FormCheckContext.Provider value={state}>
			<FormCheck
				{...rest}
				state={state}
				{...formCheckAttributes(state)}
				css={formCheckStyles(state)}
			>
				{show === -1 || revealCount === 0 ? (
					allChildren
				) : (
					<Fragment>
						{allChildren.slice(0, show)}
						<Trigger
							onClick={handleOpen}
							state={state}
							{...triggerAttributes(state)}
							css={triggerStyles(state)}
						/>
						<Panel state={state} {...panelAttributes(state)} css={panelStyles(state)}>
							{allChildren.slice(show)}
						</Panel>
					</Fragment>
				)}
			</FormCheck>
		</FormCheckContext.Provider>
	);
};

// ==============================
// Types
// ==============================

FormCheck.propTypes = {
	/**
	 * Form check type
	 */
	type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,

	/**
	 * The form check input element’s name
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
	 * Show only the given number of Form check options, hide/show toggle the remainder
	 */
	show: PropTypes.number.isRequired,

	/**
	 * The data prop shape
	 */
	data: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.node,
			text: PropTypes.string,
			hint: PropTypes.node,
		})
	),

	/**
	 * The options already checked
	 */
	defaultValue: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),

	/**
	 * Define an id prefix for internal elements
	 */
	instanceIdPrefix: PropTypes.string,

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

export const defaultProps = {
	type: 'checkbox',
	inline: false,
	size: 'medium',
	show: -1,
};

FormCheck.defaultProps = defaultProps;
