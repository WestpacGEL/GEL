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

import { defaultSelector } from './overrides/selector';

import { Option } from './Option';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const SelectorContext = createContext<any>({});

export const useSelectorContext = () => {
	const context = useContext(SelectorContext);
	return context;
};

interface SelectorProps {
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * Selector type
	 */
	type: 'radio' | 'checkbox' | 'button' | 'link';
	/**
	 * The Selector input element’s name
	 */
	name?: string;
	/**
	 * Pictogram graphic width
	 */
	pictogramWidth?: number | number[];
	/**
	 * Pictogram graphic height
	 */
	pictogramHeight?: number | number[];
	/**
	 * Icon graphic size
	 */
	iconSize?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | unknown;
	/**
	 * Disable all Selector options
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
	 * value
	 */
	value?: any;
	/**
	 * The options already checked
	 */
	defaultValue?: React.ReactNode | unknown[];
	/**
	 * A function called on change
	 */
	onChange?: (...args: unknown[]) => unknown;
	/**
	 * Selector item(s)
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Selector?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Option?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		OptionBtn?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Pictogram?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Icon?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Text?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Label?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		LabelSecondary?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Hint?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		IndicatorCheck?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		IndicatorNext?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Selector = ({
	instanceId,
	type = 'radio',
	iconSize = 'medium',
	name,
	value,
	pictogramWidth,
	pictogramHeight,
	disabled,
	defaultValue,
	data,
	children,
	onChange = () => {},
	overrides: componentOverrides,
	...rest
}: SelectorProps) => {
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

Selector.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Selector item(s)
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
	 * Disable all Selector options
	 */
	disabled: PropTypes.bool,
	/**
	 * Icon graphic size
	 */
	iconSize: PropTypes.any,
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * The Selector input element’s name
	 */
	name: PropTypes.string,
	/**
	 * A function called on change
	 */
	onChange: PropTypes.func,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Hint: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Icon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		IndicatorCheck: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		IndicatorNext: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Label: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		LabelSecondary: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Option: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		OptionBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Pictogram: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Selector: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Text: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Pictogram graphic height
	 */
	pictogramHeight: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
	/**
	 * Pictogram graphic width
	 */
	pictogramWidth: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
	/**
	 * Selector type
	 */
	type: PropTypes.oneOf(['button', 'checkbox', 'link', 'radio']).isRequired,
	/**
	 * value
	 */
	value: PropTypes.any,
};

Selector.defaultProps = { iconSize: 'medium', onChange: () => {}, type: 'radio' };
