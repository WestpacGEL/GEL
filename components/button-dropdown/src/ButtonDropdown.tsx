import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler, wrapHandlers } from '@westpac/core';
import {
	createContext,
	useContext,
	useState,
	useEffect,
	useRef,
	useId,
	useCallback,
	KeyboardEvent,
	useMemo,
	ReactNode,
} from 'react';
import { useOutsideClick, useIsomorphicLayoutEffect } from '@westpac/hooks';
import { Button } from '@westpac/button';

import { defaultButtonDropdown } from './overrides/buttonDropdown';
import { defaultPanel } from './overrides/panel';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ButtonDropdownContext = createContext<any>(null);

export const useButtonDropdownContext = () => {
	const context = useContext(ButtonDropdownContext);

	if (!context) {
		throw new Error('<Heading/> components should be wrapped in a <ButtonDropdown>.');
	}

	return context;
};

interface ButtonDropdownProps {
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * State of whether the Popover is open
	 */
	open?: boolean;
	/**
	 * Button text
	 */
	text: string;
	/**
	 * Dropdown size
	 */
	dropdownSize?: 'small' | 'medium' | 'large' | 'small' | 'medium' | 'large'[];
	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block?: boolean | boolean[];
	/**
	 * A function for the onClick event
	 */
	onClick?: (...args: unknown[]) => unknown;
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		ButtonDropdown?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Panel?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Heading?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const ButtonDropdown = ({
	instanceId,
	text,
	onClick = () => {},
	children,
	overrides: componentOverrides,
	open = false,
	dropdownSize = 'medium',
	block = false,
	...rest
}: ButtonDropdownProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [isOpen, setIsOpen] = useState<boolean>(open);
	const _id = useId();
	const id = useMemo(() => instanceId || `gel-button-dropdown-${_id}`, [_id, instanceId]);

	const panelRef = useRef<HTMLDivElement>();
	const buttonRef = useRef<HTMLDivElement>();

	const defaultOverrides = {
		ButtonDropdown: defaultButtonDropdown,
		Panel: defaultPanel,
	};

	const state = {
		id,
		isOpen,
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
		setIsOpen(open);
	}, [open]);

	useIsomorphicLayoutEffect(() => {
		if (!isOpen) {
			buttonRef.current?.focus();
		}
	}, [isOpen]);

	const handleOpen = useCallback(
		(event: any) => {
			wrapHandlers(
				() => onClick(),
				() => {
					setIsOpen((currentState) => !currentState);
				}
			)(event);
		},
		[onClick]
	);

	useOutsideClick({
		handler: () => {
			setIsOpen(false);
		},
		refs: [buttonRef, panelRef],
		listenWhen: isOpen,
	});

	// on escape close
	const keyHandler = useCallback(
		(event: globalThis.KeyboardEvent) => {
			if (isOpen && event.keyCode === 27) handleOpen(event);
		},
		[handleOpen, isOpen]
	);

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', (event) => {});
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ButtonDropdownContext.Provider value={{ state }}>
			<ButtonDropdown
				state={state}
				{...buttonDropdownAttributes(state)}
				css={buttonDropdownStyles(state)}
			>
				<Button
					ref={buttonRef}
					aria-expanded={isOpen}
					aria-controls={id}
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

ButtonDropdown.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Block mode.
	 *
	 * Fit button width to its parent width.
	 */
	block: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.bool), PropTypes.bool]),
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Dropdown size
	 */
	dropdownSize: PropTypes.oneOfType([
		PropTypes.oneOf(['large', 'medium', 'small']),
		PropTypes.arrayOf(PropTypes.oneOf(['large'])),
	]),
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * A function for the onClick event
	 */
	onClick: PropTypes.func,
	/**
	 * State of whether the Popover is open
	 */
	open: PropTypes.bool,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ButtonDropdown: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Heading: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Button text
	 */
	text: PropTypes.string.isRequired,
};

ButtonDropdown.defaultProps = {
	block: false,
	dropdownSize: 'medium',
	onClick: () => {},
	open: false,
};
