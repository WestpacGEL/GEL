/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState, useEffect, useRef, cloneElement } from 'react';
import { CloseIcon } from '@westpac/icon';
import PropTypes from 'prop-types';

import { CloseBtn, closeBtnStyles } from './overrides/closeBtn';
import { Wrapper, wrapperStyles } from './overrides/wrapper';
import { PopoverBody, bodyStyles } from './overrides/body';
import { Panel, panelStyles } from './overrides/panel';
import { Title, titleStyles } from './overrides/title';
import pkg from '../package.json';

export const Popover = ({
	open: isOpen,
	title,
	content,
	dismissible,
	children,
	overrides: componentOverrides,
	...props
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const [popoverId] = useState(useInstanceId());
	const [open, setOpen] = useState(open);
	const [position, setPosition] = useState('top');
	const triggerRef = useRef();
	const popoverRef = useRef();

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,
		subComponent: {
			Panel: {
				styles: panelStyles,
				component: Panel,
				attributes: state => state,
			},
			Title: {
				styles: titleStyles,
				component: Title,
				attributes: state => state,
			},
			Body: {
				styles: bodyStyles,
				component: PopoverBody,
				attributes: state => state,
			},
			CloseBtn: {
				styles: closeBtnStyles,
				component: CloseBtn,
				attributes: state => state,
			},
		},
	};

	const state = {
		open,
		title,
		content,
		dismissible,
		position,
		overrides: componentOverrides,
		...props,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	useEffect(() => {
		if (open) {
			const trigger = triggerRef.current.getBoundingClientRect();
			const popover = popoverRef.current.getBoundingClientRect();

			if (popover.height > trigger.top) {
				setPosition('bottom');
			} else {
				setPosition('top');
			}
		}
	});

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const handleOpen = () => {
		if (open) {
			if (popoverRef.current.contains(document.activeElement)) {
				setTimeout(() => triggerRef.current.focus(), 100);
			}
			setOpen(false);
		} else {
			setOpen(true);
			setTimeout(() => popoverRef.current.focus(), 100);
		}
	};

	const handleOutsideClick = e => {
		if (dismissible && open && popoverRef.current && !popoverRef.current.contains(e.target)) {
			handleOpen();
		}
	};

	useEffect(() => {
		if (open) {
			document.addEventListener('click', handleOutsideClick);
		}
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [open]);

	// on escape close should also check if focused
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

	const childrenWithProps = cloneElement(children, {
		'aria-describedby': `gel-popover-${popoverId}`,
	});

	return (
		<overrides.component
			ref={triggerRef}
			onClick={handleOpen}
			css={overrides.styles}
			{...overrides.attributes(state)}
		>
			{childrenWithProps}
			{open && (
				<overrides.subComponent.Panel.component
					id={`gel-popover-${popoverId}`}
					aria-label="Use the ESC key to close"
					ref={popoverRef}
					css={overrides.subComponent.Panel.styles}
					tabIndex="-1"
					{...overrides.subComponent.Panel.attributes(state)}
				>
					<overrides.subComponent.Title.component
						css={overrides.subComponent.Title.styles}
						{...overrides.subComponent.Title.attributes(state)}
					>
						{title}
					</overrides.subComponent.Title.component>
					<overrides.subComponent.Body.component
						css={overrides.subComponent.Body.styles}
						{...overrides.subComponent.Body.attributes(state)}
					>
						{content}
					</overrides.subComponent.Body.component>
					<overrides.subComponent.CloseBtn.component
						onClick={() => handleOpen()}
						icon={CloseIcon}
						css={overrides.subComponent.CloseBtn.styles}
						{...overrides.subComponent.CloseBtn.attributes(state)}
					/>
				</overrides.subComponent.Panel.component>
			)}
		</overrides.component>
	);
};

// ==============================
// Types
// ==============================
Popover.propTypes = {
	/**
	 * State of whether the popover is open
	 */
	open: PropTypes.bool,

	/**
	 * Enable dismissible mode.
	 *
	 * Allows popover close via background click.
	 */
	dismissible: PropTypes.bool,

	/**
	 * Trigger element to open the popover
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		subComponent: PropTypes.shape({
			Panel: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Title: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Body: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			CloseBtn: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Popover.defaultProps = {
	open: false,
	dismissible: false,
};
