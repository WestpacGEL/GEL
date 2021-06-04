/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId, wrapHandlers } from '@westpac/core';
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useOutsideClick } from '@westpac/hooks';
import { Button } from '@westpac/button';
import PropTypes from 'prop-types';

import { defaultButtonDropdown } from './overrides/buttonDropdown';
import { defaultPanel } from './overrides/panel';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ButtonDropdownContext = createContext();

export const useButtonDropdownContext = () => {
	const context = useContext(ButtonDropdownContext);

	if (!context) {
		throw new Error('<Heading/> components should be wrapped in a <ButtonDropdown>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const ButtonDropdown = ({
	open: isOpen,
	instanceIdPrefix,
	text,
	dropdownSize,
	block,
	onClick = () => {},
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [open, setOpen] = useState(isOpen);
	const [instanceId, setInstanceId] = useState(instanceIdPrefix);
	const panelRef = useRef();
	const buttonRef = useRef();

	// create the prefix for internal ID
	useEffect(() => {
		if (!instanceIdPrefix) {
			setInstanceId(`gel-button-dropdown-${useInstanceId()}`);
		}
	}, [instanceIdPrefix]);

	const defaultOverrides = {
		ButtonDropdown: defaultButtonDropdown,
		Panel: defaultPanel,
	};

	const state = {
		instanceId,
		open,
		text,
		dropdownSize,
		block,
		onClick,
		overrides: componentOverrides,
		...rest,
	};

	const {
		ButtonDropdown: {
			component: ButtonDropdown,
			styles: buttonDropdownStyles,
			attributes: buttonDropdownAttributes,
		},
		Panel: { component: Panel, styles: panelStyles, attributes: panelAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const handleOpen = (event) => {
		wrapHandlers(
			() => onClick(),
			() => {
				if (open) {
					setOpen(false);
					setTimeout(() => buttonRef.current.focus(), 1);
				} else {
					setOpen(true);
					setTimeout(() => panelRef.current.focus(), 1);
				}
			}
		)(event);
	};

	useOutsideClick({
		handler: () => {
			setOpen(false);
		},
		refs: [buttonRef, panelRef],
		listenWhen: open,
	});

	// on escape close
	const keyHandler = (event) => {
		if (open && event.keyCode === 27) handleOpen(event);
	};

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	return (
		<ButtonDropdownContext.Provider value={{ state }}>
			<ButtonDropdown
				state={state}
				{...buttonDropdownAttributes(state)}
				css={buttonDropdownStyles(state)}
			>
				<Button
					ref={buttonRef}
					aria-expanded={open}
					aria-controls={instanceId}
					onClick={handleOpen}
					dropdown={true}
					block={block}
					data-js="buttonDropdown-btn__version__"
					overrides={componentOverrides}
					{...rest}
				>
					{text}
				</Button>
				<Panel ref={panelRef} state={state} {...panelAttributes(state)} css={panelStyles(state)}>
					{children}
				</Panel>
			</ButtonDropdown>
		</ButtonDropdownContext.Provider>
	);
};

// ==============================
// Types
// ==============================

ButtonDropdown.propTypes = {
	/**
	 * State of whether the Popover is open
	 */
	open: PropTypes.bool,

	/**
	 * Define an id prefix for internal elements
	 */
	instanceIdPrefix: PropTypes.string,

	/**
	 * Button text
	 */
	text: PropTypes.string.isRequired,

	/**
	 * Dropdown size
	 */
	dropdownSize: PropTypes.oneOfType([
		PropTypes.oneOf(['small', 'medium', 'large']),
		PropTypes.arrayOf(PropTypes.oneOf(['small', 'medium', 'large'])),
	]),

	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),

	/**
	 * A function for the onClick event
	 */
	onClick: PropTypes.func,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ButtonDropdown: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Heading: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	open: false,
	dropdownSize: 'medium',
	block: false,
};

ButtonDropdown.defaultProps = defaultProps;
