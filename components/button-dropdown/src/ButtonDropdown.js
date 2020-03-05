/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState, useEffect, useRef } from 'react';
import { useOutsideClick } from '@westpac/hooks';
import { Button } from '@westpac/button';
import PropTypes from 'prop-types';

import {
	ButtonDropdown as BtnDropdownWrapper,
	buttonDropdownStyles,
} from './overrides/buttonDropdown';
import { Panel, panelStyles } from './overrides/panel';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const ButtonDropdown = ({
	instanceIdPrefix,
	text,
	dropdownSize,
	block,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [open, setOpen] = useState(false);
	const panelRef = useRef();
	const buttonRef = useRef();

	const defaultOverrides = {
		ButtonDropdown: {
			styles: buttonDropdownStyles,
			component: BtnDropdownWrapper,
			attributes: () => null,
		},
		Panel: {
			styles: panelStyles,
			component: Panel,
			attributes: () => null,
		},
	};

	const [instancePrefix, setInstancePrefix] = useState(instanceIdPrefix);

	// create the prefix for internal IDs
	useEffect(() => {
		if (!instancePrefix) {
			setInstancePrefix(`gel-button-dropdown`);
		}
	}, [instancePrefix]);

	const dropdownId = `${instancePrefix}-${useInstanceId()}`;

	const state = {
		open,
		text,
		dropdownSize,
		block,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	const handleOpen = () => {
		if (open) {
			setOpen(false);
			setTimeout(() => buttonRef.current.focus(), 1);
		} else {
			setOpen(true);
			setTimeout(() => panelRef.current.focus(), 1);
		}
	};

	useOutsideClick(panelRef, () => {
		if (open) {
			setOpen(false);
		}
	});

	// on escape close
	const keyHandler = event => {
		if (open && event.keyCode === 27) handleOpen();
	};

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	return (
		<overrides.ButtonDropdown.component
			open={open}
			text={text}
			dropdownSize={dropdownSize}
			block={block}
			{...overrides.ButtonDropdown.attributes(state)}
			css={overrides.ButtonDropdown.styles(state)}
		>
			<Button
				ref={buttonRef}
				aria-expanded={open}
				aria-controls={dropdownId}
				onClick={handleOpen}
				dropdown={true}
				block={block}
				overrides={componentOverrides}
				{...rest}
			>
				{text}
			</Button>
			<overrides.Panel.component
				ref={panelRef}
				id={dropdownId}
				open={open}
				text={text}
				dropdownSize={dropdownSize}
				block={block}
				{...overrides.Panel.attributes(state)}
				css={overrides.Panel.styles(state)}
			>
				{children}
			</overrides.Panel.component>
		</overrides.ButtonDropdown.component>
	);
};

// ==============================
// Types
// ==============================
ButtonDropdown.propTypes = {
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
	}),
};

ButtonDropdown.defaultProps = {
	dropdownSize: 'medium',
};
