/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { defaultIndicatorsContainer } from './overrides/indicatorsContainer';
import { defaultNoOptionsMessage } from './overrides/noOptionsMessage';
import { defaultClearIndicator } from './overrides/clearIndicator';
import { defaultValueContainer } from './overrides/valueContainer';
import { defaultControl } from './overrides/control';
import { defaultOption } from './overrides/option';
import { defaultFooter } from './overrides/footer';
import { defaultMenu } from './overrides/menu';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Autocomplete = ({
	options,
	size,
	invalid,
	isClearable,
	openMenuOnClick,
	footer: FooterContent,
	placeholder,
	components,
	styles,
	overrides: componentOverrides,
	...rest
}) => {
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
		control: (_, state) => controlStyles(state),
		valueContainer: (provided, state) => valueContainerStyles({ provided, ...state }),
		indicatorsContainer: (_, state) => indicatorsContainerStyles(state),
		clearIndicatorStyles: (_, state) => clearIndicatorStyles(state),
		menu: (_, state) => menuStyles(state),
		menuList: () => ({}),
		option: (_, state) => optionStyles(state),
		noOptionsMessage: (_, state) => noOptionsMessageStyles(state),
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

// ==============================
// Types
// ==============================

Autocomplete.propTypes = {
	/**
	 * Autocomplete dropdown options
	 */
	options: PropTypes.array.isRequired,
	/**
	 * Component size
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,

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
	 * Footer content component
	 */
	footer: PropTypes.func,

	/**
	 * Placeholder for the select value
	 */
	placeholder: PropTypes.node,

	/**
	 * react-select overridable components
	 */
	components: PropTypes.object,

	/**
	 * react-select style modifier methods
	 */
	styles: PropTypes.object,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Control: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		IndicatorsContainer: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ClearIndicator: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Menu: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Option: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Footer: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		NoOptionsMessage: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Autocomplete.defaultProps = {
	size: 'medium',
	isClearable: true,
	openMenuOnClick: false,
	placeholder: '',
	components: {},
	styles: {},
};
