/** @jsx jsx */

import { jsx, useBrand, devWarning, wrapHandlers, overrideReconciler } from '@westpac/core';
import { Children, cloneElement, useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { defaultSelector } from './overrides/selector';
import { Option } from './Option';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const SelectorContext = createContext();

export const useSelectorContext = () => {
	const context = useContext(SelectorContext);

	if (!context) {
		throw new Error('<Option/> components should be wrapped in a <Selector>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const Selector = ({
	name,
	value: controlledValue,
	nextIndicator,
	defaultValue,
	onChange = () => {},
	data,
	disabled,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [value, setValue] = useState(defaultValue);

	devWarning(children && data, 'Selector accepts either `children` or `data`, not both.');
	devWarning(!children && !data, 'Selector requires either `children` or `data`.');

	const defaultOverrides = {
		Selector: defaultSelector,
	};

	const state = {
		name,
		value: controlledValue,
		nextIndicator,
		defaultValue,
		onChange,
		data,
		disabled,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Selector: { component: Selector, styles: selectorStyles, attributes: selectorAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const handleChange = (event, val) => {
		wrapHandlers(
			() => onChange(event, val),
			() => setValue(val)
		)(event);
	};

	const actualValue = typeof controlledValue !== 'undefined' ? controlledValue : value;

	let allChildren = [];
	if (data) {
		data.map((props, index) => {
			const val = props.value || index;
			const checked = val === actualValue;
			allChildren.push(
				<Option
					key={val}
					name={name}
					value={val}
					nextIndicator={nextIndicator}
					onChange={handleChange}
					checked={checked}
					disabled={disabled}
				>
					{props.text}
				</Option>
			);
		});
	} else {
		allChildren = Children.map(children, (child, index) => {
			const val = child.props.value || index;
			const checked = val === actualValue;
			return cloneElement(child, {
				name,
				value: val,
				nextIndicator,
				onChange: handleChange,
				checked,
				disabled,
			});
		});
	}

	return (
		<SelectorContext.Provider value={{ state }}>
			<Selector {...rest} state={state} {...selectorAttributes(state)} css={selectorStyles(state)}>
				{allChildren}
			</Selector>
		</SelectorContext.Provider>
	);
};

// ==============================
// Types
// ==============================

const ValueType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

Selector.propTypes = {
	/**
	 * Name to be used for radio inputs
	 */
	name: PropTypes.string.isRequired,

	/**
	 * Control the value, if numeric an index is assumed. Requires `onChange`
	 */
	value: ValueType,

	/**
	 * Default value of this component
	 */
	defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

	/**
	 * Use automatic next chevron styling, renders 'ArrowRightIcon' icon
	 */
	nextIndicator: PropTypes.bool,

	/**
	 * Change the value. Requires `value`
	 */
	onChange: PropTypes.func,

	/**
	 * Alternative to children
	 */
	data: PropTypes.arrayOf(PropTypes.object),

	/**
	 * Button group disabled
	 */
	disabled: PropTypes.bool.isRequired,

	/**
	 * Button group children
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Selector: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
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
		Content: PropTypes.shape({
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
	nextIndicator: true,
	defaultValue: -1,
	disabled: false,
};

Selector.defaultProps = defaultProps;
