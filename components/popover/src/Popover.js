/** @jsx jsx */

import { useState, useEffect, useRef, forwardRef, Fragment } from 'react';
import { jsx, useBrand, merge } from '@westpac/core';
import { PopoverPanel } from './PopoverPanel';
import PropTypes from 'prop-types';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Popover = ({ open: isOpen, title, content, dismissible, children, ...props }) => {
	const { [pkg.name]: overridesWithTokens } = useBrand();
	const [open, setOpen] = useState(open);
	const [position, setPosition] = useState({ placement: 'top', top: 0, left: 0 });
	const triggerRef = useRef();
	const popoverRef = useRef();

	const overrides = {
		css: {},
		Wrapper: forwardRef((props, ref) => <div ref={ref} {...props} />),
	};

	merge(overrides, overridesWithTokens);

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		if (open) {
			const trigger = triggerRef.current.getBoundingClientRect();
			const popover = popoverRef.current.getBoundingClientRect();
			const remSize = parseInt(
				window.getComputedStyle(document.getElementsByTagName('html')[0]).fontSize
			);
			const left = (trigger.left - popover.width / 2 + trigger.width / 2) / remSize;

			if (popover.height > trigger.top) {
				const top = (trigger.top + window.scrollY + trigger.height + remSize) / remSize;
				setPosition({ placement: 'bottom', top, left });
			} else {
				const top = (trigger.top + window.scrollY - popover.height - remSize) / remSize;
				setPosition({ placement: 'top', top, left });
			}
		}
	}, [open]);

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

	// on escape close modal
	const keyHandler = event => {
		if (event.keyCode === 27) handleClose();
	};

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<Fragment>
			<PopoverPanel
				title={title}
				content={content}
				open={open}
				position={position}
				handleOpen={handleOpen}
				ref={popoverRef}
			/>
			<overrides.Wrapper
				css={{ display: 'inline-block', ...overrides.CSS }}
				ref={triggerRef}
				onClick={handleOpen}
				{...props}
			>
				{children}
			</overrides.Wrapper>
		</Fragment>
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
};

Popover.defaultProps = {
	open: false,
	dismissible: false,
};
