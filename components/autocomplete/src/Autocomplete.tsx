import React from 'react';
import PropTypes from 'prop-types';
import { useBrand, overrideReconciler } from '@westpac/core';
import Select from 'react-select';

import { defaultIndicatorsContainer } from './overrides/indicatorsContainer';
import { defaultNoOptionsMessage } from './overrides/noOptionsMessage';
import { defaultClearIndicator } from './overrides/clearIndicator';
import { defaultValueContainer } from './overrides/valueContainer';
import { defaultControl } from './overrides/control';
import { defaultOption } from './overrides/option';
import { defaultFooter } from './overrides/footer';
import { defaultMenu } from './overrides/menu';
import pkg from '../package.json';

export interface AutocompleteProps {
	/**
	 * Autocomplete dropdown options
	 */
	options: unknown[];
	/**
	 * Component size
	 */
	size?: 'small' | 'medium' | 'large' | 'xlarge';
	/**
	 * Invalid input mode
	 */
	invalid?: boolean;
	/**
	 * Is the select value clearable
	 */
	isClearable?: boolean;
	/**
	 * Allows control of whether the menu is opened when the Select is clicked
	 */
	openMenuOnClick?: boolean;
	/**
	 * Footer content component
	 */
	footer?: (...args: unknown[]) => unknown;
	/**
	 * Placeholder for the select value
	 */
	placeholder?: React.ReactNode;
	/**
	 * react-select overridable components
	 */
	components?: object;
	/**
	 * react-select style modifier methods
	 */
	styles?: object;
	/**
	 * The override API
	 */
	overrides?: {
		Control?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		IndicatorsContainer?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ClearIndicator?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Menu?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Option?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Footer?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		NoOptionsMessage?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Autocomplete = ({
	options,
	invalid,
	footer: FooterContent,
	overrides: componentOverrides,
	size = 'medium',
	isClearable = true,
	openMenuOnClick = false,
	placeholder = '',
	components = {},
	styles = {},
	...rest
}: AutocompleteProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Control: defaultControl,
		IndicatorsContainer: defaultIndicatorsContainer,
		ClearIndicator: defaultClearIndicator,
		Menu: defaultMenu,
		Option: defaultOption,
		ValueContainer: defaultValueContainer,
		Footer: defaultFooter,
		NoOptionsMessage: defaultNoOptionsMessage,
	};

	const {
		Control: { component: Control, styles: controlStyles },
		IndicatorsContainer: { component: IndicatorsContainer, styles: indicatorsContainerStyles },
		ClearIndicator: { component: ClearIndicator, styles: clearIndicatorStyles },
		Menu: { component: Menu, styles: menuStyles },
		Option: { component: Option, styles: optionStyles },
		ValueContainer: { component: ValueContainer, styles: valueContainerStyles },
		Footer: { component: Footer, styles: footerStyles },
		NoOptionsMessage: { component: NoOptionsMessage, styles: noOptionsMessageStyles },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	// merging GEL component and styles overrides with react-select overrides
	const overrideComponents = {
		Control,
		IndicatorsContainer,
		ClearIndicator,
		Menu,
		Option,
		ValueContainer,
		NoOptionsMessage,
		DropdownIndicator: () => null,
		IndicatorSeparator: () => null,
		...components,
	};

	const overrideStyles = {
		control: (_: any, state: any) => controlStyles(state),
		valueContainer: (provided: any, state: any) => valueContainerStyles({ provided, ...state }),
		indicatorsContainer: (_: any, state: any) => indicatorsContainerStyles(state),
		clearIndicatorStyles: (_: any, state: any) => clearIndicatorStyles(state),
		menu: (_: any, state: any) => menuStyles(state),
		menuList: () => ({}),
		option: (_: any, state: any) => optionStyles(state),
		noOptionsMessage: (_: any, state: any) => noOptionsMessageStyles(state),
		...styles,
	};

	const footer = {
		component: Footer,
		styles: footerStyles,
		content: FooterContent,
	};

	// passing AutoComplete props to select so they become available via react-select overrides
	return (
		<Select
			isClearable={isClearable}
			openMenuOnClick={openMenuOnClick}
			size={size}
			options={options}
			invalid={invalid}
			footer={footer}
			styles={overrideStyles}
			components={overrideComponents}
			placeholder={placeholder}
			{...rest}
		/>
	);
};

Autocomplete.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * react-select overridable components
	 */
	components: PropTypes.object,
	/**
	 * Footer content component
	 */
	footer: PropTypes.func,
	/**
	 * Invalid input mode
	 */
	invalid: PropTypes.bool,
	/**
	 * Is the select value clearable
	 */
	isClearable: PropTypes.bool,
	/**
	 * Allows control of whether the menu is opened when the Select is clicked
	 */
	openMenuOnClick: PropTypes.bool,
	/**
	 * Autocomplete dropdown options
	 */
	options: PropTypes.array.isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ClearIndicator: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Control: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Footer: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		IndicatorsContainer: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Menu: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		NoOptionsMessage: PropTypes.shape({
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
	 * Placeholder for the select value
	 */
	placeholder: PropTypes.node,
	/**
	 * Component size
	 */
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
	/**
	 * react-select style modifier methods
	 */
	styles: PropTypes.object,
};

Autocomplete.defaultProps = {
	components: {},
	isClearable: true,
	openMenuOnClick: false,
	placeholder: '',
	size: 'medium',
	styles: {},
};
