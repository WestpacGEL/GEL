/** @jsx jsx */

import {
	jsx,
	useBrand,
	overrideReconciler,
	devWarning,
	asArray,
	useManagedState,
} from '@westpac/core';
import {
	Children,
	useContext,
	createContext,
	cloneElement,
	useId,
	useMemo,
	useCallback,
} from 'react';
import PropTypes from 'prop-types';

import { defaultSelector } from './overrides/selector';

import { Option } from './Option';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const SelectorContext = createContext(null);

export const useSelectorContext = () => {
	const context = useContext(SelectorContext) || {};
	return context;
};

// ==============================
// Component
// ==============================

export const Selector = ({
	instanceId,
	type,
	name,
	value,
	iconSize,
	pictogramWidth,
	pictogramHeight,
	disabled,
	defaultValue,
	data,
	children,
	onChange = () => {},
	overrides: componentOverrides,
	...rest
}: typeof Selector.propTypes & typeof Selector.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const valueAsArray = value ? asArray(value) : undefined;
	const defaultValueAsArray = defaultValue ? asArray(defaultValue) : [];

	devWarning(
		type === 'radio' && defaultValueAsArray.length > 1,
		'The Selector as radio may only have one "current" item set.'
	);

	const _id = useId();
	const id = useMemo(() => instanceId || `gel-selector-${_id}`, [_id, instanceId]);
	const [checked, setChecked] = useManagedState(valueAsArray, defaultValueAsArray, onChange);

	const defaultOverrides = {
		Selector: defaultSelector,
	};

	const handleChange = useCallback(
		(event: any, value: any, wasChecked: boolean) => {
			if (type === 'radio' || type === 'button') {
				setChecked(asArray(value));
			} else {
				if (wasChecked) {
					setChecked(checked.filter((item) => item !== value));
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
		iconSize,
		pictogramWidth,
		pictogramHeight,
		disabled,
		defaultValue,
		data,
		checked,
		onChange: handleChange,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Selector: { component: Selector, styles: selectorStyles, attributes: selectorAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

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
		allChildren = Children.map(children, (child, index) => {
			return cloneElement(child, {
				index,
			});
		});
	}

	return (
		<SelectorContext.Provider value={state}>
			<Selector {...rest} state={state} {...selectorAttributes(state)} css={selectorStyles(state)}>
				{allChildren}
			</Selector>
		</SelectorContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Selector.propTypes = {
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,

	/**
	 * Selector type
	 */
	type: PropTypes.oneOf(['radio', 'checkbox', 'button', 'link']).isRequired,

	/**
	 * The Selector input element’s name
	 */
	name: PropTypes.string,

	/**
	 * Pictogram graphic width
	 */
	pictogramWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

	/**
	 * Pictogram graphic height
	 */
	pictogramHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

	/**
	 * Icon graphic size
	 */
	iconSize: PropTypes.oneOfType([
		PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
		PropTypes.arrayOf(PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])).isRequired,
	]),

	/**
	 * Disable all Selector options
	 */
	disabled: PropTypes.bool,

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
	 * A function called on change
	 */
	onChange: PropTypes.func,

	/**
	 * Selector item(s)
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
		Option: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		OptionBtn: PropTypes.shape({
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
		LabelSecondary: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Hint: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		IndicatorCheck: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		IndicatorNext: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	type: 'radio',
	iconSize: 'medium',
};

Selector.defaultProps = defaultProps;
